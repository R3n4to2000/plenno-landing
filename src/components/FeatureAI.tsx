const features = [
  'Score de engajamento por membro',
  'Alertas de possível afastamento',
  'Sugestões de ações pastorais',
  'Apoio na recuperação de cobranças falhas',
  'Insights para liderança',
];

const alerts = [
  {
    type: 'warning',
    name: 'João Silva',
    score: 3.2,
    message: 'Não participa de atividades há 60 dias.',
    suggestion: 'Enviar mensagem de acompanhamento pastoral.',
    color: 'amber',
  },
  {
    type: 'info',
    name: 'Ana Oliveira',
    score: 5.1,
    message: 'Contribuições reduziram nos últimos 2 meses.',
    suggestion: 'Verificar se precisa de suporte ou conversa.',
    color: 'blue',
  },
  {
    type: 'success',
    name: 'Pedro Santos',
    score: 9.4,
    message: 'Engajamento alto e crescente.',
    suggestion: 'Considerar para liderança de célula.',
    color: 'emerald',
  },
];

function AIAlertCard({ alert }: { alert: typeof alerts[0] }) {
  const colorMap: Record<string, { bg: string; border: string; text: string; scoreBg: string; icon: string }> = {
    amber: {
      bg: 'bg-amber-500/5',
      border: 'border-amber-500/15',
      text: 'text-amber-400',
      scoreBg: 'bg-amber-500/20',
      icon: '⚠️',
    },
    blue: {
      bg: 'bg-blue-500/5',
      border: 'border-blue-500/15',
      text: 'text-blue-400',
      scoreBg: 'bg-blue-500/20',
      icon: 'ℹ️',
    },
    emerald: {
      bg: 'bg-emerald-500/5',
      border: 'border-emerald-500/15',
      text: 'text-emerald-400',
      scoreBg: 'bg-emerald-500/20',
      icon: '✨',
    },
  };

  const colors = colorMap[alert.color];

  return (
    <div className={`${colors.bg} border ${colors.border} rounded-xl p-4 transition-all duration-300 hover:scale-[1.02]`}>
      <div className="flex items-start gap-3">
        <div className={`w-10 h-10 rounded-xl ${colors.scoreBg} flex items-center justify-center flex-shrink-0 text-lg`}>
          {colors.icon}
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between gap-2 mb-1">
            <span className="text-sm font-bold text-white truncate">{alert.name}</span>
            <div className={`flex items-center gap-1 px-2 py-0.5 rounded-full ${colors.scoreBg}`}>
              <span className={`text-[10px] font-bold ${colors.text}`}>Score: {alert.score}</span>
            </div>
          </div>
          <p className="text-xs text-slate-400 mb-2">{alert.message}</p>
          <div className="flex items-center gap-1.5">
            <svg className={`w-3.5 h-3.5 ${colors.text}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09z" />
            </svg>
            <span className={`text-xs ${colors.text} font-medium`}>Sugestão: {alert.suggestion}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function AIMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-purple-500/8 rounded-3xl blur-2xl" />
      <div className="relative bg-navy-800/80 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-purple-600/20 to-violet-500/20 px-5 py-4 border-b border-white/[0.06]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-purple-500 to-violet-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
              </svg>
            </div>
            <div>
              <span className="text-sm font-bold text-white block">IA de Engajamento</span>
              <span className="text-[10px] text-slate-400">3 alertas ativos</span>
            </div>
          </div>
        </div>

        {/* Alerts */}
        <div className="p-4 space-y-3">
          {alerts.map((alert, i) => (
            <AIAlertCard key={i} alert={alert} />
          ))}
        </div>

        {/* Summary */}
        <div className="px-4 pb-4">
          <div className="bg-navy-700/30 rounded-xl p-3 border border-white/[0.04]">
            <div className="flex items-center justify-between">
              <span className="text-xs text-slate-500">Membros monitorados</span>
              <span className="text-xs font-bold text-purple-400">342</span>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-xs text-slate-500">Alertas esta semana</span>
              <span className="text-xs font-bold text-amber-400">7</span>
            </div>
            <div className="flex items-center justify-between mt-1.5">
              <span className="text-xs text-slate-500">Ações sugeridas</span>
              <span className="text-xs font-bold text-blue-400">12</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureAI() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="bg-orb w-80 h-80 bg-purple-500/8 -right-20 top-1/3" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-purple-500/10 text-purple-400 border border-purple-500/20 mb-6">
                Inteligência Artificial
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Tecnologia para ajudar a cuidar melhor das{' '}
                <span className="bg-gradient-to-r from-purple-400 to-violet-400 bg-clip-text text-transparent">pessoas.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                A IA do Plenno ajuda a identificar sinais de queda de engajamento,
                membros que pararam de participar ou contribuir e oportunidades
                de cuidado pastoral.
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
                A IA não substitui o cuidado pastoral. Ela ajuda a liderança a enxergar melhor quem pode precisar de atenção.
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div className="reveal reveal-delay-2">
            <AIMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
