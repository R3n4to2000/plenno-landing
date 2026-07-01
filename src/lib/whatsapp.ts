export const SALES_WHATSAPP_MESSAGE = 'Olá, estou com dúvida sobre o Plenno.';

export function normalizePhoneDigits(phone: string | undefined): string {
  return (phone ?? '').replace(/\D/g, '');
}

export function buildWhatsAppUrl(phone: string | undefined, message: string): string | null {
  const normalizedPhone = normalizePhoneDigits(phone);
  const trimmedMessage = message.trim();

  if (!normalizedPhone || !trimmedMessage) {
    return null;
  }

  return `https://wa.me/${normalizedPhone}?text=${encodeURIComponent(trimmedMessage)}`;
}

export function getSalesWhatsAppNumber(): string | undefined {
  return import.meta.env.VITE_SALES_WHATSAPP_NUMBER || import.meta.env.NEXT_PUBLIC_SALES_WHATSAPP_NUMBER;
}

export function buildSalesWhatsAppUrl(message = SALES_WHATSAPP_MESSAGE): string | null {
  return buildWhatsAppUrl(getSalesWhatsAppNumber(), message);
}
