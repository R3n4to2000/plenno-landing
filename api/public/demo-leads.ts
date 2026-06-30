import { validateDemoLeadPayload, type DemoLeadValues } from '../../src/lib/demoLead.ts';

const maxBodyBytes = 12_000;

type JsonBody = Record<string, unknown>;

export function OPTIONS() {
  return new Response(null, {
    status: 204,
    headers: {
      Allow: 'POST, OPTIONS',
      'Cache-Control': 'no-store',
    },
  });
}

export function GET() {
  return jsonResponse(
    { error: 'Método não permitido.' },
    {
      status: 405,
      headers: { Allow: 'POST' },
    }
  );
}

export async function POST(request: Request) {
  if (isBodyTooLarge(request)) {
    return jsonResponse({ error: 'Payload muito grande.' }, { status: 413 });
  }

  let payload: unknown;

  try {
    payload = await request.json();
  } catch {
    return jsonResponse({ error: 'Envie os dados em formato JSON válido.' }, { status: 400 });
  }

  const validation = validateDemoLeadPayload(payload);

  if (!validation.isValid) {
    return jsonResponse(
      {
        error: 'Revise os campos destacados e tente novamente.',
        errors: validation.errors,
      },
      { status: 422 }
    );
  }

  const supabase = getSupabaseConfig();

  if (!supabase) {
    console.error('Demo lead submission failed: missing Supabase server configuration.');
    return jsonResponse(
      { error: 'Não foi possível salvar sua solicitação agora. Tente novamente em instantes.' },
      { status: 500 }
    );
  }

  let insertResponse: Response;

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
    return jsonResponse(
      { error: 'Não foi possível salvar sua solicitação agora. Tente novamente em instantes.' },
      { status: 502 }
    );
  }

  if (!insertResponse.ok) {
    console.error('Demo lead submission failed: Supabase insert error.', {
      status: insertResponse.status,
      statusText: insertResponse.statusText,
    });

    return jsonResponse(
      { error: 'Não foi possível salvar sua solicitação agora. Tente novamente em instantes.' },
      { status: 502 }
    );
  }

  return jsonResponse({ success: true, lead: validation.data }, { status: 201 });
}

function jsonResponse(body: JsonBody, init: ResponseInit = {}) {
  const headers = new Headers(init.headers);
  headers.set('Content-Type', 'application/json; charset=utf-8');
  headers.set('Cache-Control', 'no-store');

  return new Response(JSON.stringify(body), {
    ...init,
    headers,
  });
}

function isBodyTooLarge(request: Request): boolean {
  const contentLength = Number(request.headers.get('content-length') ?? 0);
  return Number.isFinite(contentLength) && contentLength > maxBodyBytes;
}

function getSupabaseConfig(): { url: string; serviceRoleKey: string } | null {
  const rawUrl = process.env.SUPABASE_URL ?? process.env.VITE_SUPABASE_URL;
  const serviceRoleKey = process.env.SUPABASE_SERVICE_ROLE_KEY ?? process.env.SUPABASE_SERVICE_ROLE;
  const url = rawUrl?.replace(/\/$/, '');

  if (!url || !serviceRoleKey) {
    return null;
  }

  return { url, serviceRoleKey };
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
