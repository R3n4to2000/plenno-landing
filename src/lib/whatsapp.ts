export const SALES_WHATSAPP_MESSAGE = 'Olá, estou com dúvida sobre o Plenno.';

export function normalizePhoneDigits(phone: string): string {
  return phone.replace(/\D/g, '');
}

export function buildWhatsAppUrl(phone: string, message: string): string {
  const normalizedPhone = normalizePhoneDigits(phone);
  const encodedMessage = encodeURIComponent(message.trim());

  return `https://wa.me/${normalizedPhone}?text=${encodedMessage}`;
}

export function getSalesWhatsAppNumber(): string {
  return (import.meta.env.VITE_SALES_WHATSAPP_NUMBER ?? '').trim();
}

export function buildSalesWhatsAppUrl(message = SALES_WHATSAPP_MESSAGE): string | null {
  const phone = getSalesWhatsAppNumber();
  const trimmedMessage = message.trim();

  if (!phone || !trimmedMessage) {
    return null;
  }

  return buildWhatsAppUrl(phone, trimmedMessage);
}
