const roleOptions = [
  'Pastor',
  'Secretário(a)',
  'Tesoureiro(a)',
  'Líder',
  'Membro da equipe',
  'Outro',
] as const;

const membersRangeOptions = [
  'Até 50',
  '51 a 100',
  '101 a 300',
  '301 a 700',
  '701 a 1500',
  'Mais de 1500',
] as const;

const mainNeedOptions = [
  'Organizar dízimos e ofertas',
  'Link Pix e QR Code para doações',
  'Gestão de membros',
  'Presença em cultos/eventos',
  'Comunicação pelo WhatsApp',
  'Alertas e IA de engajamento',
  'Tudo em um só lugar',
] as const;

const currentSystemOptions = [
  'Não usamos sistema',
  'Planilhas',
  'Sistema financeiro',
  'Sistema de gestão de igreja',
  'Outro',
] as const;

const bestContactTimeOptions = ['Manhã', 'Tarde', 'Noite', 'Qualquer horário'] as const;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const statePattern = /^[A-Z]{2}$/;

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
  source: string | null;
  utm_source: string | null;
  utm_medium: string | null;
  utm_campaign: string | null;
  utm_content: string | null;
  utm_term: string | null;
};

type DemoLeadErrors = Partial<Record<keyof DemoLeadValues | 'form', string>>;

type ValidationResult =
  | { isValid: true; data: DemoLeadValues; errors: DemoLeadErrors }
  | { isValid: false; data: null; errors: DemoLeadErrors };

export function validateDemoLeadPayload(payload: unknown): ValidationResult {
  const record = isRecord(payload) ? payload : {};
  const normalized: DemoLeadValues = {
    name: sanitizeText(readString(record.name), 120),
    whatsapp: readString(record.whatsapp).replace(/\D/g, '').slice(0, 32),
    email: sanitizeText(readString(record.email), 160).toLowerCase(),
    church_name: sanitizeText(readString(record.church_name), 160),
    role: sanitizeText(readString(record.role), 80),
    city: sanitizeText(readString(record.city), 120),
    state: readString(record.state).replace(/[^a-z]/gi, '').slice(0, 2).toUpperCase(),
    members_range: sanitizeText(readString(record.members_range), 40),
    main_need: sanitizeText(readString(record.main_need), 120),
    current_system: nullableText(readString(record.current_system), 120),
    best_contact_time: nullableText(readString(record.best_contact_time), 40),
    accepts_whatsapp_contact: record.accepts_whatsapp_contact === true,
    source: nullableText(readString(record.source), 180),
    utm_source: nullableText(readString(record.utm_source), 180),
    utm_medium: nullableText(readString(record.utm_medium), 180),
    utm_campaign: nullableText(readString(record.utm_campaign), 180),
    utm_content: nullableText(readString(record.utm_content), 180),
    utm_term: nullableText(readString(record.utm_term), 180),
  };
  const errors: DemoLeadErrors = {};

  if (!normalized.name) errors.name = 'Informe seu nome completo.';
  if (normalized.whatsapp.length < 10 || normalized.whatsapp.length > 13) {
    errors.whatsapp = 'Informe um WhatsApp válido com DDD.';
  }
  if (!normalized.email || !emailPattern.test(normalized.email)) {
    errors.email = 'Informe um e-mail válido.';
  }
  if (!normalized.church_name) errors.church_name = 'Informe o nome da igreja.';
  if (!roleOptions.includes(normalized.role as (typeof roleOptions)[number])) {
    errors.role = 'Selecione seu cargo ou função.';
  }
  if (!normalized.city) errors.city = 'Informe a cidade.';
  if (!statePattern.test(normalized.state)) errors.state = 'Informe a UF com 2 letras.';
  if (!membersRangeOptions.includes(normalized.members_range as (typeof membersRangeOptions)[number])) {
    errors.members_range = 'Selecione a quantidade aproximada de fiéis.';
  }
  if (!mainNeedOptions.includes(normalized.main_need as (typeof mainNeedOptions)[number])) {
    errors.main_need = 'Selecione a principal necessidade.';
  }
  if (
    normalized.current_system &&
    !currentSystemOptions.includes(normalized.current_system as (typeof currentSystemOptions)[number])
  ) {
    errors.current_system = 'Selecione uma opção válida.';
  }
  if (
    normalized.best_contact_time &&
    !bestContactTimeOptions.includes(
      normalized.best_contact_time as (typeof bestContactTimeOptions)[number]
    )
  ) {
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
