/// <reference types="node" />

import { existsSync, readFileSync } from 'node:fs';
import type { IncomingHttpHeaders } from 'node:http';
import { resolve } from 'node:path';
import { validateDemoLeadPayload, type DemoLeadValues } from '../_demoLead.js';

const maxBodyBytes = 12_000;
let localEnvCache: Record<string, string> | null = null;

type JsonBody = Record<string, unknown>;
type ApiRequest = {
  method?: string;
  headers: IncomingHttpHeaders;
  body?: unknown;
};
type ApiResponse = {
  status(statusCode: number): ApiResponse;
  setHeader(name: string, value: string | string[]): void;
  end(body?: string): void;
};

export default async function handler(request: ApiRequest, response: ApiResponse) {
  if (request.method === 'OPTIONS') {
    sendNoContent(response);
    return;
  }

  if (request.method === 'GET') {
    methodNotAllowed(response);
    return;
  }

  if (request.method !== 'POST') {
    methodNotAllowed(response);
    return;
  }

  await POST(request, response);
}

async function POST(request: ApiRequest, response: ApiResponse) {
  if (isBodyTooLarge(request)) {
    sendJson(response, 413, { error: 'Payload muito grande.' });
    return;
  }

  let payload: unknown;

  try {
    payload = await readJsonPayload(request);
  } catch {
    sendJson(response, 400, { error: 'Envie os dados em formato JSON válido.' });
    return;
  }

  const validation = validateDemoLeadPayload(payload);

  if (!validation.isValid) {
    sendJson(
      response,
      422,
      {
        error: 'Revise os campos destacados e tente novamente.',
        errors: validation.errors,
      }
    );
    return;
  }

  const supabase = getSupabaseConfig();

  if (!supabase) {
    console.error('Demo lead submission failed: missing Supabase server configuration.');
    sendJson(response, 500, {
      error: 'Não foi possível salvar sua solicitação agora. Tente novamente em instantes.',
    });
    return;
  }

  let insertResponse;

  try {
    insertResponse = await fetch(`${supabase.url}/rest/v1/demo_leads`, {
      method: 'POST',
      headers: {
        apikey: supabase.serviceRoleKey,
        Authorization: `Bearer ${supabase.serviceRoleKey}`,
        'Content-Type': 'application/json',
        Prefer: 'return=minimal',
      },
      body: JSON.stringify(toDemoLeadRow(validation.data)),
    });
  } catch {
    console.error('Demo lead submission failed: Supabase request error.');
    sendJson(response, 502, {
      error: 'Não foi possível salvar sua solicitação agora. Tente novamente em instantes.',
    });
    return;
  }

  if (!insertResponse.ok) {
    const errorDetails = await safeReadErrorText(insertResponse);
    console.error('Demo lead submission failed: Supabase insert error.', {
      status: insertResponse.status,
      statusText: insertResponse.statusText,
      details: errorDetails,
    });

    sendJson(response, 502, {
      error: 'Não foi possível salvar sua solicitação agora. Tente novamente em instantes.',
    });
    return;
  }

  sendJson(response, 201, { success: true, lead: validation.data });
}

function sendNoContent(response: ApiResponse) {
  response.setHeader('Allow', 'POST, OPTIONS');
  response.setHeader('Cache-Control', 'no-store');
  response.status(204).end();
}

function methodNotAllowed(response: ApiResponse) {
  response.setHeader('Allow', 'POST, OPTIONS');
  sendJson(response, 405, { error: 'Método não permitido.' });
}

function sendJson(response: ApiResponse, statusCode: number, body: JsonBody) {
  response.setHeader('Content-Type', 'application/json; charset=utf-8');
  response.setHeader('Cache-Control', 'no-store');
  response.status(statusCode).end(JSON.stringify(body));
}

async function readJsonPayload(request: ApiRequest): Promise<unknown> {
  if (typeof request.body === 'string') {
    return JSON.parse(request.body);
  }

  if (request.body && typeof request.body === 'object') {
    return request.body;
  }

  throw new Error('Missing JSON payload.');
}

function isBodyTooLarge(request: ApiRequest): boolean {
  const contentLength = Number(getHeader(request.headers, 'content-length') ?? 0);
  return Number.isFinite(contentLength) && contentLength > maxBodyBytes;
}

function getHeader(
  headers: IncomingHttpHeaders,
  headerName: string
): string | string[] | undefined | null {
  return headers[headerName] ?? headers[headerName.toLowerCase()];
}

function getSupabaseConfig(): { url: string; serviceRoleKey: string } | null {
  const rawUrl = readEnv('SUPABASE_URL') ?? readEnv('VITE_SUPABASE_URL');
  const serviceRoleKey = readEnv('SUPABASE_SERVICE_ROLE_KEY') ?? readEnv('SUPABASE_SERVICE_ROLE');
  const url = rawUrl?.replace(/\/$/, '');

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey };
}

function readEnv(name: string): string | undefined {
  return process.env[name] ?? readLocalEnvFile()[name];
}

function readLocalEnvFile(): Record<string, string> {
  if (localEnvCache) {
    return localEnvCache;
  }

  if (process.env.VERCEL_ENV === 'production') {
    localEnvCache = {};
    return localEnvCache;
  }

  localEnvCache = {};

  for (const fileName of ['.env.local', '.env']) {
    const envPath = resolve(process.cwd(), fileName);

    if (!existsSync(envPath)) {
      continue;
    }

    const lines = readFileSync(envPath, 'utf8').split(/\r?\n/);

    for (const line of lines) {
      const match = line.match(/^\s*([A-Za-z_][A-Za-z0-9_]*)\s*=\s*(.*)\s*$/);

      if (!match || line.trimStart().startsWith('#')) {
        continue;
      }

      const [, key, rawValue] = match;
      localEnvCache[key] = stripEnvQuotes(rawValue);
    }
  }

  return localEnvCache;
}

function stripEnvQuotes(value: string): string {
  const trimmed = value.trim();

  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }

  return trimmed;
}

async function safeReadErrorText(response: Response): Promise<string> {
  try {
    return (await response.text()).slice(0, 600);
  } catch {
    return 'Unable to read Supabase error body.';
  }
}

function toDemoLeadRow(lead: DemoLeadValues) {
  return {
    name: lead.name,
    whatsapp: lead.whatsapp,
    email: lead.email,
    church_name: lead.church_name,
    role: lead.role,
    city: lead.city,
    state: lead.state,
    members_range: lead.members_range,
    main_need: lead.main_need,
    current_system: lead.current_system,
    best_contact_time: lead.best_contact_time,
    accepts_whatsapp_contact: lead.accepts_whatsapp_contact,
    source: lead.source,
    utm_source: lead.utm_source,
    utm_medium: lead.utm_medium,
    utm_campaign: lead.utm_campaign,
    utm_content: lead.utm_content,
    utm_term: lead.utm_term,
    status: 'new',
  };
}
