import { buildSalesWhatsAppUrl } from '../lib/whatsapp';

export default function HowItWorksPendingPage() {
  const salesWhatsAppUrl = buildSalesWhatsAppUrl();

  return (
    <div className="min-h-screen bg-navy-950 text-slate-100 font-sans selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      <div className="relative min-h-screen overflow-hidden">
        <div className="bg-orb w-96 h-96 bg-blue-600/15 top-0 -right-20" />
        <div className="bg-orb w-80 h-80 bg-cyan-500/10 bottom-10 -left-24" />
        <div className="bg-orb w-72 h-72 bg-purple-600/10 top-1/3 left-1/3" />

        <header className="relative z-10 border-b border-white/[0.06] bg-navy-900/70 backdrop-blur-xl">
          <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <a href="/" className="flex items-center gap-2.5" aria-label="Plenno - Página inicial">
              <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 text-lg font-extrabold leading-none text-white shadow-lg shadow-blue-500/20">
                P
              </span>
              <span className="text-xl font-bold tracking-tight text-white">Plenno</span>
            </a>
            <a href="/" className="text-sm font-semibold text-slate-300 transition-colors hover:text-white">
              Voltar para início
            </a>
          </div>
        </header>

        <main className="relative z-10 mx-auto flex min-h-[calc(100vh-4rem)] max-w-5xl items-center px-4 py-14 sm:px-6 lg:px-8">
          <section className="grid w-full items-center gap-10 lg:grid-cols-[1.05fr_0.95fr]">
            <div>
              <span className="mb-5 inline-flex rounded-full border border-cyan-400/30 bg-cyan-400/10 px-3 py-1 text-xs font-bold uppercase tracking-[0.18em] text-cyan-300">
                Em breve
              </span>
              <h1 className="max-w-3xl text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl lg:text-6xl">
                O vídeo de demonstração está em produção
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-7 text-slate-300 sm:text-lg">
                Estamos preparando um vídeo mostrando o Plenno na prática, com uma visão simples
                de como a plataforma ajuda igrejas a organizar membros, doações, presença e
                comunicação.
              </p>
              <p className="mt-4 max-w-2xl text-base leading-7 text-slate-400">
                Enquanto isso, nossa equipe pode tirar suas dúvidas pelo WhatsApp e mostrar o
                melhor caminho para sua igreja começar com o Plenno.
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                {salesWhatsAppUrl ? (
                  <a
                    href={salesWhatsAppUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 px-7 py-3.5 text-base font-semibold text-white shadow-lg shadow-blue-500/25 transition-all duration-300 hover:-translate-y-0.5 hover:from-blue-500 hover:to-cyan-400 hover:shadow-blue-500/40"
                  >
                    <svg className="h-5 w-5 text-emerald-200" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Falar com o time Plenno
                  </a>
                ) : (
                  <span
                    aria-disabled="true"
                    className="inline-flex cursor-not-allowed items-center justify-center rounded-xl bg-slate-700 px-7 py-3.5 text-base font-semibold text-slate-300 opacity-70"
                  >
                    Falar com o time Plenno
                  </span>
                )}
                <a
                  href="/"
                  className="inline-flex items-center justify-center rounded-xl border border-white/[0.12] px-7 py-3.5 text-base font-semibold text-slate-200 transition-all duration-300 hover:border-white/20 hover:bg-white/[0.06]"
                >
                  Voltar para a página inicial
                </a>
              </div>

              {!salesWhatsAppUrl ? (
                <p className="mt-4 text-sm text-slate-400">
                  O WhatsApp comercial ainda não está configurado neste ambiente.
                </p>
              ) : null}
            </div>

            <aside className="rounded-2xl border border-cyan-400/20 bg-navy-900/80 p-5 shadow-2xl shadow-black/30 backdrop-blur-xl sm:p-6">
              <div className="flex items-center justify-between border-b border-white/[0.06] pb-4">
                <span className="text-sm font-semibold text-white">Demonstração Plenno</span>
                <span className="rounded-full bg-cyan-400/10 px-2.5 py-1 text-xs font-bold text-cyan-300">
                  Em produção
                </span>
              </div>
              <div className="mt-5 space-y-3">
                {['Membros e famílias', 'Dízimos e ofertas via Pix', 'Presença em cultos', 'Comunicação pastoral'].map(
                  (item) => (
                    <div key={item} className="flex items-center gap-3 rounded-lg bg-white/[0.04] px-3 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-cyan-400" />
                      <span className="text-sm font-medium text-slate-200">{item}</span>
                    </div>
                  )
                )}
              </div>
            </aside>
          </section>
        </main>
      </div>
    </div>
  );
}
