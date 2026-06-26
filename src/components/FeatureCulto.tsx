const features = [
  'QR Code grande para telão',
  'Link Pix para envio aos membros',
  'Feed de pagamentos confirmados',
  'Total arrecadado ao vivo',
  'Atualização em tempo real',
  'Tela sem exposição de dados sensíveis',
];

const livePayments = [
  { name: 'Maria S.', amount: 'R$ 150,00', time: 'agora' },
  { name: 'João P.', amount: 'R$ 80,00', time: '1 min' },
  { name: 'Ana L.', amount: 'R$ 200,00', time: '3 min' },
  { name: 'Carlos R.', amount: 'R$ 50,00', time: '4 min' },
  { name: 'Priscila M.', amount: 'R$ 120,00', time: '6 min' },
];

const liveQrPattern = [
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

function TelaoMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute -inset-4 bg-purple-500/8 rounded-3xl blur-2xl" />
      <div className="relative bg-navy-950/90 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden">
        {/* Top bar */}
        <div className="bg-gradient-to-r from-purple-600/20 to-violet-500/20 px-5 py-3 border-b border-white/[0.06] flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse" />
            <span className="text-xs text-slate-400 font-medium">MODO TELÃO — AO VIVO</span>
          </div>
          <span className="text-[10px] text-slate-500">Plenno Church Tech</span>
        </div>

        <div className="p-6 md:p-8 text-center">
          {/* Campaign name */}
          <h3 className="text-xl font-bold text-white mb-1">Dízimo de Junho</h3>
          <p className="text-sm text-slate-400 mb-6">Contribua via Pix</p>

          {/* Big QR Code */}
          <div className="flex justify-center mb-6">
            <div className="bg-white rounded-2xl p-5 shadow-xl shadow-purple-500/10">
              <div className="w-44 h-44 sm:w-52 sm:h-52">
                <div className="w-full h-full grid gap-[1px]" style={{ gridTemplateColumns: 'repeat(19, 1fr)', gridTemplateRows: 'repeat(19, 1fr)' }}>
                  {liveQrPattern.flat().map((cell, i) => (
                    <div key={i} className={cell ? 'bg-navy-900 rounded-[0.5px]' : 'bg-white'} />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Total */}
          <div className="mb-6">
            <span className="text-xs text-slate-500 uppercase tracking-wider font-medium">Total arrecadado</span>
            <div className="text-4xl sm:text-5xl font-extrabold text-white mt-1">
              R$ 12.450<span className="text-2xl text-slate-400">,00</span>
            </div>
            <span className="text-sm text-slate-400 mt-1 block">23 contribuições</span>
          </div>

          {/* Live feed */}
          <div className="bg-navy-800/50 rounded-xl p-4 border border-white/[0.04]">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <span className="text-xs text-slate-400 font-medium">Pagamentos confirmados</span>
            </div>
            <div className="space-y-2">
              {livePayments.map((p, i) => (
                <div key={i} className="flex items-center justify-between py-1.5 border-b border-white/[0.03] last:border-0">
                  <div className="flex items-center gap-2.5">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-purple-500/20 to-violet-500/20 flex items-center justify-center">
                      <span className="text-[10px] text-purple-300 font-bold">{p.name.split(' ').map(n => n[0]).join('')}</span>
                    </div>
                    <span className="text-sm text-slate-300">{p.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-sm font-semibold text-emerald-400">{p.amount}</span>
                    <span className="text-[10px] text-slate-500 block">{p.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureCulto() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="bg-orb w-80 h-80 bg-purple-500/8 -left-20 top-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                Monitor ao Vivo
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Transforme o momento do culto em uma experiência mais{' '}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">simples e conectada.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Durante o culto, a igreja pode compartilhar um QR Code Pix, acompanhar
                contribuições em tempo real e usar um modo telão limpo e objetivo.
              </p>
            </div>

            <ul className="reveal reveal-delay-2 space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-3 bg-navy-800/50 rounded-xl p-4 border border-purple-500/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-purple-400 font-semibold">✦ Benefício principal:</span>{' '}
                A igreja facilita a contribuição sem interromper a experiência do culto.
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div className="reveal reveal-delay-2">
            <TelaoMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
