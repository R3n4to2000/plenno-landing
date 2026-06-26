const badges = [
  { label: 'Gestão de membros', color: 'bg-blue-500/10 text-blue-400 border-blue-500/20' },
  { label: 'Dízimos via Pix', color: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' },
  { label: 'Dashboard em tempo real', color: 'bg-amber-500/10 text-amber-400 border-amber-500/20' },
  { label: 'IA de engajamento', color: 'bg-purple-500/10 text-purple-400 border-purple-500/20' },
];

const recentPayments = [
  { name: 'Maria S.', amount: 'R$ 150,00', time: '2 min', type: 'Dízimo' },
  { name: 'João P.', amount: 'R$ 80,00', time: '5 min', type: 'Oferta' },
  { name: 'Ana L.', amount: 'R$ 200,00', time: '8 min', type: 'Dízimo' },
  { name: 'Carlos R.', amount: 'R$ 50,00', time: '12 min', type: 'Oferta' },
];

const heroQrPattern = [
  [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,1,1,0,1],
  [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
  [1,0,0,0,0,0,1,0,0,1,1,0,0,0,0,0,1],
  [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
  [0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0],
  [1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1],
  [0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0],
  [1,1,1,1,1,1,1,0,0,1,1,0,1,0,0,1,0],
  [1,0,0,0,0,0,1,0,1,0,0,1,0,1,0,0,1],
  [1,0,1,1,1,0,1,0,0,1,1,0,1,0,1,1,0],
  [1,0,1,1,1,0,1,0,1,0,1,0,0,1,0,0,1],
  [1,0,1,1,1,0,1,0,1,1,0,1,1,0,1,0,0],
  [1,0,0,0,0,0,1,0,0,0,1,0,1,0,0,1,1],
  [1,1,1,1,1,1,1,0,1,0,0,1,0,1,0,1,0],
];

function DashboardMockup() {
  return (
    <div className="relative w-full max-w-lg mx-auto lg:mx-0">
      {/* Glow behind */}
      <div className="absolute -inset-4 bg-blue-500/10 rounded-3xl blur-2xl" />
      
      <div className="relative bg-navy-800/80 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl shadow-black/40 overflow-hidden">
        {/* Window bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/[0.06]">
          <div className="w-3 h-3 rounded-full bg-red-400/70" />
          <div className="w-3 h-3 rounded-full bg-amber-400/70" />
          <div className="w-3 h-3 rounded-full bg-emerald-400/70" />
          <span className="ml-3 text-xs text-slate-500 font-medium">Plenno Dashboard</span>
        </div>

        <div className="p-4 space-y-4">
          {/* KPI Row */}
          <div className="grid grid-cols-2 gap-3">
            <KpiCard label="Total Arrecadado" value="R$ 47.850" accent="text-emerald-400" icon="💰" />
            <KpiCard label="Membros Ativos" value="342" accent="text-blue-400" icon="👥" />
            <KpiCard label="Doações Confirmadas" value="128" accent="text-amber-400" icon="✅" />
            <KpiCard label="Score Médio" value="8.2" accent="text-purple-400" icon="⭐" />
          </div>

          {/* Mini chart */}
          <div className="bg-navy-700/50 rounded-xl p-3 border border-white/[0.04]">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-400 font-medium">Arrecadação Mensal</span>
              <span className="text-xs text-emerald-400 font-semibold">+12.5%</span>
            </div>
            <svg viewBox="0 0 200 50" className="w-full h-10">
              <defs>
                <linearGradient id="heroChartGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#3b82f6" stopOpacity="0" />
                </linearGradient>
              </defs>
              <polygon
                points="0,40 18,36 36,38 54,28 72,32 90,20 108,24 126,14 144,17 162,10 180,13 200,8 200,50 0,50"
                fill="url(#heroChartGrad)"
              />
              <polyline
                points="0,40 18,36 36,38 54,28 72,32 90,20 108,24 126,14 144,17 162,10 180,13 200,8"
                fill="none" stroke="#3b82f6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
              />
            </svg>
          </div>

          {/* Bottom row: QR + Feed */}
          <div className="grid grid-cols-5 gap-3">
            {/* QR Code */}
            <div className="col-span-2 bg-white rounded-xl p-2.5 flex flex-col items-center justify-center">
              <QrCodeMini />
              <span className="text-[9px] text-navy-800 font-semibold mt-1.5">Pix Dízimo</span>
            </div>

            {/* Feed */}
            <div className="col-span-3 bg-navy-700/50 rounded-xl p-2.5 border border-white/[0.04]">
              <span className="text-[9px] text-slate-500 font-medium block mb-1.5">Pagamentos recentes</span>
              <div className="space-y-1.5">
                {recentPayments.map((p, i) => (
                  <div key={i} className="flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-blue-500/20 to-cyan-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-blue-300 font-bold">{p.name[0]}</span>
                      </div>
                      <div>
                        <span className="text-[9px] text-slate-300 block leading-tight">{p.name}</span>
                        <span className="text-[7px] text-slate-500">{p.type} • {p.time}</span>
                      </div>
                    </div>
                    <span className="text-[9px] text-emerald-400 font-semibold">{p.amount}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function KpiCard({ label, value, accent, icon }: { label: string; value: string; accent: string; icon: string }) {
  return (
    <div className="bg-navy-700/50 rounded-xl p-3 border border-white/[0.04]">
      <div className="flex items-center gap-1.5 mb-1">
        <span className="text-sm">{icon}</span>
        <span className="text-[10px] text-slate-400 font-medium">{label}</span>
      </div>
      <span className={`text-lg font-bold ${accent}`}>{value}</span>
    </div>
  );
}

function QrCodeMini() {
  return (
    <div className="w-16 h-16">
      <div className="w-full h-full grid gap-[0.5px]" style={{ gridTemplateColumns: `repeat(17, 1fr)`, gridTemplateRows: `repeat(17, 1fr)` }}>
        {heroQrPattern.flat().map((cell, i) => (
          <div key={i} className={cell ? 'bg-navy-900 rounded-[0.5px]' : 'bg-white'} />
        ))}
      </div>
    </div>
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center pt-20 pb-16 overflow-hidden">
      {/* Background Elements */}
      <div className="bg-orb w-96 h-96 bg-blue-600/15 top-0 -right-20" />
      <div className="bg-orb w-80 h-80 bg-purple-600/10 bottom-20 -left-20" />
      <div className="bg-orb w-64 h-64 bg-cyan-500/10 top-1/3 left-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left">
            <div className="reveal">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.1] tracking-tight text-white mb-6">
                A gestão completa da sua igreja em uma{' '}
                <span className="gradient-text">única plataforma.</span>
              </h1>
            </div>

            <div className="reveal reveal-delay-1">
              <p className="text-lg sm:text-xl text-slate-300 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                O Plenno ajuda igrejas a organizarem membros, dízimos, ofertas,
                comunicação e engajamento com tecnologia simples, segura e em tempo real.
              </p>
            </div>

            <div className="reveal reveal-delay-2 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contato"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 gap-2"
              >
                Solicitar demonstração
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#como-funciona"
                className="inline-flex items-center justify-center px-7 py-3.5 text-base font-semibold text-slate-200 border border-white/[0.12] rounded-xl hover:bg-white/[0.06] hover:border-white/20 transition-all duration-300 gap-2"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                Ver como funciona
              </a>
            </div>

            {/* Badges */}
            <div className="reveal reveal-delay-3 flex flex-wrap gap-2.5 justify-center lg:justify-start">
              {badges.map((badge) => (
                <span
                  key={badge.label}
                  className={`inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-medium border ${badge.color}`}
                >
                  {badge.label}
                </span>
              ))}
            </div>

            <div className="reveal reveal-delay-4 mt-8">
              <p className="text-sm text-slate-400 italic">
                Menos planilhas. Menos trabalho manual. Mais clareza para cuidar de pessoas e recursos.
              </p>
            </div>
          </div>

          {/* Right — Dashboard Mockup */}
          <div className="reveal reveal-delay-2 lg:reveal-delay-3">
            <DashboardMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
