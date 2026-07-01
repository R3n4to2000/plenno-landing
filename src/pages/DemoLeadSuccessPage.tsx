import { useState } from 'react';
import {
  DEMO_LEAD_STORAGE_KEY,
  buildWhatsAppMessage,
  buildWhatsAppUrl,
  type DemoLeadValues,
} from '../lib/demoLead';
import { getSalesWhatsAppNumber } from '../lib/whatsapp';

function readStoredLead(): Partial<DemoLeadValues> {
  try {
    const rawLead = window.sessionStorage.getItem(DEMO_LEAD_STORAGE_KEY);
    return rawLead ? (JSON.parse(rawLead) as Partial<DemoLeadValues>) : {};
  } catch {
    // Session storage can be unavailable or manually edited by the browser user.
    return {};
  }
}

export default function DemoLeadSuccessPage() {
  const [lead] = useState<Partial<DemoLeadValues>>(readStoredLead);
  const whatsappUrl = buildWhatsAppUrl(getSalesWhatsAppNumber(), lead);
  const whatsappMessage = buildWhatsAppMessage(lead);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-950">
      <header className="border-b border-slate-200 bg-white/90 backdrop-blur-sm">
        <div className="mx-auto flex h-16 max-w-5xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a href="/" className="flex items-center gap-2.5" aria-label="Plenno - Página inicial">
            <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-gradient-to-br from-blue-600 to-cyan-500 text-lg font-extrabold leading-none text-white shadow-lg shadow-cyan-500/20">
              P
            </span>
            <span className="text-xl font-bold tracking-tight text-slate-950">Plenno</span>
          </a>
          <a href="/" className="text-sm font-semibold text-slate-600 transition-colors hover:text-slate-950">
            Voltar ao site
          </a>
        </div>
      </header>

      <main className="mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-12 sm:px-6 lg:px-8">
        <section className="grid w-full gap-8 lg:grid-cols-[1fr_0.9fr]">
          <div className="rounded-lg border border-slate-200 bg-white p-6 shadow-xl shadow-slate-200/70 sm:p-8">
            <p className="mb-4 inline-flex rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-xs font-bold uppercase tracking-[0.16em] text-emerald-700">
              Solicitação enviada
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-slate-950 sm:text-5xl">
              Recebemos sua solicitação!
            </h1>
            <p className="mt-5 max-w-xl text-base leading-7 text-slate-600 sm:text-lg">
              Agora continue pelo WhatsApp para agilizar o atendimento.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              {whatsappUrl ? (
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-500"
                >
                  <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  Continuar no WhatsApp
                </a>
              ) : (
                <button
                  type="button"
                  disabled
                  className="inline-flex cursor-not-allowed items-center justify-center rounded-lg bg-slate-300 px-6 py-3.5 text-sm font-bold text-slate-600"
                >
                  WhatsApp indisponível no momento
                </button>
              )}
              <a
                href="/"
                className="inline-flex items-center justify-center rounded-lg border border-slate-200 px-6 py-3.5 text-sm font-bold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
              >
                Voltar ao início
              </a>
            </div>

            {!whatsappUrl ? (
              <p className="mt-4 text-sm leading-6 text-slate-600">
                Sua solicitação foi salva. A equipe Plenno entrará em contato pelo WhatsApp informado.
              </p>
            ) : null}
          </div>

          <div className="rounded-lg border border-slate-200 bg-slate-50 p-4 shadow-lg shadow-slate-200/60 sm:p-5">
            <h2 className="text-sm font-bold uppercase tracking-[0.12em] text-slate-500">
              Mensagem preparada
            </h2>
            <pre className="mt-4 whitespace-pre-wrap break-words text-sm leading-6 text-slate-700">
              {whatsappMessage}
            </pre>
          </div>
        </section>
      </main>
    </div>
  );
}
