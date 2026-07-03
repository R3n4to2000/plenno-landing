import { buildWhatsAppUrl as buildGenericWhatsAppUrl } from './whatsapp';

export const DEMO_REQUEST_PATH = '/solicitar-demonstracao';
export const DEMO_SUCCESS_PATH = '/solicitar-demonstracao/obrigado';
export const DEMO_LEAD_STORAGE_KEY = 'demoLeadData';
export const DEMO_LEAD_ID_STORAGE_KEY = 'demoLeadId';
export const DEMO_LEAD_TRACKING_TOKEN_STORAGE_KEY = 'demoLeadTrackingToken';

export const roleOptions = [
  'Pastor',
  'Secretário(a)',
  'Tesoureiro(a)',
  'Líder',
  'Membro da equipe',
  'Outro',
] as const;

export const membersRangeOptions = [
  'Até 50',
  '51 a 100',
  '101 a 300',
  '301 a 700',
  '701 a 1500',
  'Mais de 1500',
] as const;

export const mainNeedOptions = [
  'Organizar dízimos e ofertas',
  'Link Pix e QR Code para doações',
  'Gestão de membros',
  'Presença em cultos/eventos',
  'Comunicação pelo WhatsApp',
  'Alertas e IA de engajamento',
  'Tudo em um só lugar',
] as const;

export const currentSystemOptions = [
  'Não usamos sistema',
  'Planilhas',
  'Sistema financeiro',
  'Sistema de gestão de igreja',
  'Outro',
] as const;

export const bestContactTimeOptions = [
  'Manhã',
  'Tarde',
  'Noite',
  'Qualquer horário',
] as const;

export const trackingParamNames = [
  'utm_source',
  'utm_medium',
  'utm_campaign',
  'utm_content',
  'utm_term',
  'source',
] as const;

export type TrackingParamName = (typeof trackingParamNames)[number];

export type DemoLeadFormValues = {
  name: string;
  whatsapp: string;
  email: string;
  church_name: string;
  role: string;
  city: string;
  state: string;
  members_range: string;
  main_need: string;
  current_system: string;
  best_contact_time: string;
  accepts_whatsapp_contact: boolean;
} & Record<TrackingParamName, string>;

export type DemoLeadValues = {
  name: string;
  whatsapp: string;
  email: string;
  church_name: string;
  role: string;
  city: string;
  state: string;
  members_range: string;
  main_need: string;
  current_system: string | null;
  best_contact_time: string | null;
  accepts_whatsapp_contact: boolean;
} & Record<TrackingParamName, string | null>;

export type DemoLeadErrors = Partial<Record<keyof DemoLeadFormValues | 'form', string>>;
type DemoLeadStringField = Exclude<keyof DemoLeadFormValues, 'accepts_whatsapp_contact'>;

export type DemoLeadCreateResponse = {
  success?: boolean;
  leadId?: string;
  trackingToken?: string;
  error?: string;
  errors?: DemoLeadErrors;
};

type ValidationResult =
  | { isValid: true; data: DemoLeadValues; errors: DemoLeadErrors }
  | { isValid: false; data: null; errors: DemoLeadErrors };

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const statePattern = /^[A-Z]{2}$/;

const textLimits: Record<keyof DemoLeadFormValues, number> = {
  name: 120,
  whatsapp: 32,
  email: 160,
  church_name: 160,
  role: 80,
  city: 120,
  state: 2,
  members_range: 40,
  main_need: 120,
  current_system: 120,
  best_contact_time: 40,
  accepts_whatsapp_contact: 0,
  utm_source: 180,
  utm_medium: 180,
  utm_campaign: 180,
  utm_content: 180,
  utm_term: 180,
  source: 180,
};

export function createEmptyDemoLeadFormValues(): DemoLeadFormValues {
  return {
    name: '',
    whatsapp: '',
    email: '',
    church_name: '',
    role: '',
    city: '',
    state: '',
    members_range: '',
    main_need: '',
    current_system: '',
    best_contact_time: '',
    accepts_whatsapp_contact: false,
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    source: 'landing',
  };
}

export function getTrackingParamsFromSearch(search: string): Record<TrackingParamName, string> {
  const query = new URLSearchParams(search);
  const tracking = {
    utm_source: '',
    utm_medium: '',
    utm_campaign: '',
    utm_content: '',
    utm_term: '',
    source: 'landing',
  };

  for (const paramName of trackingParamNames) {
    tracking[paramName] = sanitizeText(
      query.get(paramName) ?? (paramName === 'source' ? 'landing' : ''),
      textLimits[paramName]
    );
  }

  return tracking;
}

export function normalizePhoneDigits(value: string): string {
  return value.replace(/\D/g, '');
}

export function validateDemoLeadPayload(payload: unknown): ValidationResult {
  const values = coerceDemoLeadPayload(payload);
  const errors: DemoLeadErrors = {};

  const normalized: DemoLeadValues = {
    name: sanitizeText(values.name, textLimits.name),
    whatsapp: normalizePhoneDigits(values.whatsapp).slice(0, textLimits.whatsapp),
    email: sanitizeText(values.email, textLimits.email).toLowerCase(),
    church_name: sanitizeText(values.church_name, textLimits.church_name),
    role: sanitizeText(values.role, textLimits.role),
    city: sanitizeText(values.city, textLimits.city),
    state: normalizeState(values.state),
    members_range: sanitizeText(values.members_range, textLimits.members_range),
    main_need: sanitizeText(values.main_need, textLimits.main_need),
    current_system: nullableText(values.current_system, textLimits.current_system),
    best_contact_time: nullableText(values.best_contact_time, textLimits.best_contact_time),
    accepts_whatsapp_contact: values.accepts_whatsapp_contact === true,
    utm_source: nullableText(values.utm_source, textLimits.utm_source),
    utm_medium: nullableText(values.utm_medium, textLimits.utm_medium),
    utm_campaign: nullableText(values.utm_campaign, textLimits.utm_campaign),
    utm_content: nullableText(values.utm_content, textLimits.utm_content),
    utm_term: nullableText(values.utm_term, textLimits.utm_term),
    source: nullableText(values.source, textLimits.source),
  };

  if (!normalized.name) errors.name = 'Informe seu nome completo.';
  if (normalized.whatsapp.length < 10 || normalized.whatsapp.length > 13) {
    errors.whatsapp = 'Informe um WhatsApp válido com DDD.';
  }
  if (!normalized.email || !emailPattern.test(normalized.email)) {
    errors.email = 'Informe um e-mail válido.';
  }
  if (!normalized.church_name) errors.church_name = 'Informe o nome da igreja.';
  if (!isValidOption(normalized.role, roleOptions)) errors.role = 'Selecione seu cargo ou função.';
  if (!normalized.city) errors.city = 'Informe a cidade.';
  if (!statePattern.test(normalized.state)) errors.state = 'Informe a UF com 2 letras.';
  if (!isValidOption(normalized.members_range, membersRangeOptions)) {
    errors.members_range = 'Selecione a quantidade aproximada de fiéis.';
  }
  if (!isValidOption(normalized.main_need, mainNeedOptions)) {
    errors.main_need = 'Selecione a principal necessidade.';
  }
  if (normalized.current_system && !isValidOption(normalized.current_system, currentSystemOptions)) {
    errors.current_system = 'Selecione uma opção válida.';
  }
  if (normalized.best_contact_time && !isValidOption(normalized.best_contact_time, bestContactTimeOptions)) {
    errors.best_contact_time = 'Selecione uma opção válida.';
  }
  if (!normalized.accepts_whatsapp_contact) {
    errors.accepts_whatsapp_contact = 'O aceite para contato pelo WhatsApp é obrigatório.';
  }

  if (Object.keys(errors).length > 0) {
    return { isValid: false, data: null, errors };
  }

  return { isValid: true, data: normalized, errors };
}

export function getDemoLeadsEndpoint(): string {
  return (import.meta.env.VITE_DEMO_LEADS_ENDPOINT ?? '').trim();
}

export function getDemoLeadsWhatsAppClickedEndpoint(): string {
  return (import.meta.env.VITE_DEMO_LEADS_WHATSAPP_CLICKED_ENDPOINT ?? '').trim();
}

export async function markDemoLeadWhatsAppClicked(
  leadId: string,
  trackingToken: string,
  signal?: AbortSignal
): Promise<void> {
  const endpoint = getDemoLeadsWhatsAppClickedEndpoint();

  if (!endpoint || !leadId || !trackingToken) {
    return;
  }

  const response = await fetch(endpoint, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ leadId, trackingToken }),
    keepalive: true,
    signal,
  });

  if (!response.ok) {
    throw new Error(`WhatsApp tracking failed with status ${response.status}`);
  }

  const result = (await response.json().catch(() => null)) as unknown;

  if (isRecord(result) && result.success === false) {
    throw new Error(readString(result.error) || 'WhatsApp tracking was rejected.');
  }
}

export function logDemoLeadClientError(message: string, error: unknown): void {
  if (import.meta.env.DEV) {
    console.error(message, error);
  }
}

export function buildWhatsAppMessage(lead: Partial<DemoLeadValues>): string {
  const valueOrFallback = (value: string | null | undefined) => sanitizeText(value ?? '', 180) || 'Não informado';

  return [
    'Olá, vim da landing page do Plenno e gostaria de solicitar uma demonstração.',
    '',
    `Nome: ${valueOrFallback(lead.name)}`,
    `Igreja: ${valueOrFallback(lead.church_name)}`,
    `Função: ${valueOrFallback(lead.role)}`,
    `Cidade/UF: ${valueOrFallback(lead.city)}/${valueOrFallback(lead.state)}`,
    `Fiéis: ${valueOrFallback(lead.members_range)}`,
    `Principal necessidade: ${valueOrFallback(lead.main_need)}`,
    `Sistema atual: ${valueOrFallback(lead.current_system)}`,
    `Melhor horário: ${valueOrFallback(lead.best_contact_time)}`,
  ].join('\n');
}

export function buildDemoLeadWhatsAppUrl(
  phoneNumber: string,
  lead: Partial<DemoLeadValues>
): string | null {
  const digits = normalizePhoneDigits(phoneNumber);

  if (!digits) {
    return null;
  }

  return buildGenericWhatsAppUrl(digits, buildWhatsAppMessage(lead));
}

function coerceDemoLeadPayload(payload: unknown): DemoLeadFormValues {
  const record = isRecord(payload) ? payload : {};
  const values = createEmptyDemoLeadFormValues();

  for (const key of Object.keys(values) as Array<keyof DemoLeadFormValues>) {
    if (key === 'accepts_whatsapp_contact') {
      values[key] = record[key] === true;
    } else {
      values[key as DemoLeadStringField] = sanitizeText(readString(record[key]), textLimits[key]);
    }
  }

  return values;
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

function readString(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

function sanitizeText(value: string, maxLength: number): string {
  return value.replace(/\s+/g, ' ').trim().slice(0, maxLength);
}

function nullableText(value: string, maxLength: number): string | null {
  const sanitized = sanitizeText(value, maxLength);
  return sanitized || null;
}

function normalizeState(value: string): string {
  return value.replace(/[^a-z]/gi, '').slice(0, 2).toUpperCase();
}

function isValidOption(value: string | null, options: readonly string[]): boolean {
  return typeof value === 'string' && options.includes(value);
}
