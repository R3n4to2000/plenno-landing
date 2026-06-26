const kpis = [
  { label: 'Total Arrecadado', value: 'R$ 47.850', change: '+12.5%', positive: true, icon: '💰' },
  { label: 'Doações Confirmadas', value: '128', change: '+8', positive: true, icon: '✅' },
  { label: 'Doações Pendentes', value: '14', change: '-3', positive: true, icon: '⏳' },
  { label: 'Cobranças Falhas', value: '5', change: '+2', positive: false, icon: '⚠️' },
  { label: 'Membros Ativos', value: '342', change: '+18', positive: true, icon: '👥' },
  { label: 'Novos Membros', value: '23', change: '+5', positive: true, icon: '🆕' },
  { label: 'Conversão Links Pix', value: '72%', change: '+4%', positive: true, icon: '📊' },
  { label: 'Evolução Mensal', value: '+15%', change: 'vs mês anterior', positive: true, icon: '📈' },
];

const barData = [28, 42, 35, 50, 38, 55, 45, 62, 48, 58, 65, 72];
const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

export default function FeatureDashboard() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="bg-orb w-96 h-96 bg-blue-500/6 top-1/4 left-1/2 -translate-x-1/2" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal">
            <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
              Dashboard
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
              Indicadores claros para{' '}
              <span className="gradient-text">decisões melhores.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="text-lg text-slate-300 leading-relaxed">
              Acompanhe os principais números da igreja em um painel visual e fácil de entender.
            </p>
          </div>
        </div>

        {/* KPI Grid */}
        <div className="reveal reveal-delay-2 grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {kpis.map((kpi, i) => (
            <div key={i} className="glass-card p-5">
              <div className="flex items-center gap-2 mb-2">
                <span className="text-lg">{kpi.icon}</span>
                <span className="text-xs text-slate-400 font-medium">{kpi.label}</span>
              </div>
              <div className="text-2xl font-bold text-white mb-1">{kpi.value}</div>
              <span className={`text-xs font-semibold ${kpi.positive ? 'text-emerald-400' : 'text-red-400'}`}>
                {kpi.change}
              </span>
            </div>
          ))}
        </div>

        {/* Chart Area */}
        <div className="reveal reveal-delay-3 glass-card p-6">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg font-bold text-white">Evolução da Arrecadação</h3>
              <p className="text-sm text-slate-400">Últimos 12 meses</p>
            </div>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-3 h-3 rounded-full bg-blue-500" />
                <span className="text-xs text-slate-400">Arrecadação</span>
              </div>
            </div>
          </div>

          {/* Bar Chart */}
          <div className="flex items-end justify-between gap-2 h-48 px-2">
            {barData.map((value, i) => (
              <div key={i} className="flex-1 flex flex-col items-center gap-2 h-full justify-end">
                <div className="w-full h-36 relative group flex items-end">
                  {/* Tooltip */}
                  <div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity bg-navy-600 text-white text-[10px] font-semibold px-2 py-1 rounded-lg whitespace-nowrap pointer-events-none z-10">
                    R$ {(value * 680).toLocaleString('pt-BR')}
                  </div>
                  <div
                    className={`w-full rounded-t-md transition-all duration-300 group-hover:opacity-100 chart-bar ${
                      i === barData.length - 1
                        ? 'bg-gradient-to-t from-blue-600 to-cyan-400'
                        : 'bg-navy-500/80 group-hover:bg-blue-500/50'
                    }`}
                    style={{
                      ['--bar-height' as any]: `${(value / 75) * 100}%`,
                    }}
                  />
                </div>
                <span className="text-[10px] text-slate-500 font-medium">{months[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Benefit */}
        <div className="reveal reveal-delay-4 mt-8 text-center">
          <div className="inline-block bg-navy-800/50 rounded-xl px-6 py-4 border border-blue-500/10">
            <p className="text-sm text-slate-300 leading-relaxed">
              <span className="text-blue-400 font-semibold">✦ Benefício principal:</span>{' '}
              O pastor e a liderança passam a enxergar a saúde operacional e financeira da igreja com mais clareza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
