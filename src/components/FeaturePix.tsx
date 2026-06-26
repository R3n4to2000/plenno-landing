const features = [
  'Link de doação',
  'QR Code Pix',
  'Pix recorrente',
  'Cobranças automáticas',
  'Status de pagamento',
  'Recibos automáticos',
  'Dashboard financeiro',
  'Histórico de contribuições',
  'Recuperação de falhas com IA (em breve)',
];

const pixQrPattern = [
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,1,0,1,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,1,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,0,1,0,1,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,0,1,0,1,0,1,0,1,0,1],
    [0,1,0,1,0,0,0,1,1,0,0,1,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,0,1,1,0,1,0,0,1,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,0,1,0,1,0,0,0,1,0],
    [1,1,1,1,1,1,1,0,0,1,1,0,1,0,1,1,0,0,1],
    [1,0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,1,0,1,0,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,0,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,1,0,1,0,1,1,0,1,0,0],
    [1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,0,1,1],
    [1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0],
  ];

function PixMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-emerald-500/8 rounded-3xl blur-2xl" />
      <div className="relative bg-navy-800/80 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-emerald-600/20 to-green-500/20 px-6 py-4 border-b border-white/[0.06]">
          <div className="flex items-center justify-between">
            <div>
              <h4 className="text-base font-bold text-white">Dízimo — Junho 2026</h4>
              <p className="text-xs text-slate-400 mt-0.5">Campanha ativa</p>
            </div>
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-[10px] font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
              ● Ativo
            </span>
          </div>
        </div>

        <div className="p-6">
          {/* QR Code */}
          <div className="flex flex-col items-center mb-6">
            <div className="bg-white rounded-2xl p-4 shadow-lg mb-4">
              <div className="w-36 h-36">
                <div className="w-full h-full grid gap-[1px]" style={{ gridTemplateColumns: 'repeat(19, 1fr)', gridTemplateRows: 'repeat(19, 1fr)' }}>
                  {pixQrPattern.flat().map((cell, i) => (
                    <div key={i} className={cell ? 'bg-navy-900 rounded-[0.5px]' : 'bg-white'} />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-xs text-slate-400 mb-3">Escaneie para contribuir via Pix</p>

            {/* Copy button */}
            <button className="flex items-center gap-2 px-5 py-2.5 bg-emerald-500/10 border border-emerald-500/30 rounded-xl text-sm font-semibold text-emerald-400 hover:bg-emerald-500/20 transition-all">
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
              </svg>
              Copiar código Pix
            </button>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06] mb-4" />

          {/* Payment confirmed */}
          <div className="bg-emerald-500/10 border border-emerald-500/20 rounded-xl p-4 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                <svg className="w-5 h-5 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div>
                <span className="text-sm font-bold text-emerald-400">Pagamento confirmado</span>
                <p className="text-xs text-slate-400">Maria S. — R$ 150,00 — há 2 min</p>
              </div>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-navy-700/50 rounded-xl p-3 text-center border border-white/[0.04]">
              <div className="text-xl font-bold text-emerald-400">R$ 12.450</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Arrecadado</div>
            </div>
            <div className="bg-navy-700/50 rounded-xl p-3 text-center border border-white/[0.04]">
              <div className="text-xl font-bold text-blue-400">67</div>
              <div className="text-[10px] text-slate-500 mt-0.5">Contribuições</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeaturePix() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="bg-orb w-80 h-80 bg-emerald-500/8 -right-20 top-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mockup (left on desktop) */}
          <div className="reveal order-2 lg:order-1">
            <PixMockup />
          </div>

          {/* Text (right on desktop) */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                Dízimos Digitais
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Dízimos e ofertas via Pix, com acompanhamento{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">em tempo real.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                O Plenno permite criar links de doação, QR Codes dinâmicos e acompanhar
                pagamentos confirmados diretamente pelo painel da igreja.
              </p>
            </div>

            <ul className="reveal reveal-delay-2 space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-3 bg-navy-800/50 rounded-xl p-4 border border-emerald-500/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-emerald-400 font-semibold">✦ Benefício principal:</span>{' '}
                Mais facilidade para quem contribui e mais controle para quem administra.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
