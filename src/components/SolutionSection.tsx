const pillars = [
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 19.128a9.38 9.38 0 002.625.372 9.337 9.337 0 004.121-.952 4.125 4.125 0 00-7.533-2.493M15 19.128v-.003c0-1.113-.285-2.16-.786-3.07M15 19.128v.106A12.318 12.318 0 018.624 21c-2.331 0-4.512-.645-6.374-1.766l-.001-.109a6.375 6.375 0 0111.964-3.07M12 6.375a3.375 3.375 0 11-6.75 0 3.375 3.375 0 016.75 0zm8.25 2.25a2.625 2.625 0 11-5.25 0 2.625 2.625 0 015.25 0z" />
      </svg>
    ),
    title: 'Gestão de membros',
    description: 'Cadastre, organize e acompanhe cada membro com dados centralizados, status e histórico completo.',
    color: 'from-blue-500 to-cyan-400',
    bgColor: 'bg-blue-500/10',
    borderColor: 'border-blue-500/30',
    glowClass: 'glow-blue',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18.75a60.07 60.07 0 0115.797 2.101c.727.198 1.453-.342 1.453-1.096V18.75M3.75 4.5v.75A.75.75 0 013 6h-.75m0 0v-.375c0-.621.504-1.125 1.125-1.125H20.25M2.25 6v9m18-10.5v.75c0 .414.336.75.75.75h.75m-1.5-1.5h.375c.621 0 1.125.504 1.125 1.125v9.75c0 .621-.504 1.125-1.125 1.125h-.375m1.5-1.5H21a.75.75 0 00-.75.75v.75m0 0H3.75m0 0h-.375a1.125 1.125 0 01-1.125-1.125V15m1.5 1.5v-.75A.75.75 0 003 15h-.75M15 10.5a3 3 0 11-6 0 3 3 0 016 0zm3 0h.008v.008H18V10.5zm-12 0h.008v.008H6V10.5z" />
      </svg>
    ),
    title: 'Dízimos digitais',
    description: 'Receba contribuições via Pix, QR Code e links de doação com acompanhamento em tempo real.',
    color: 'from-emerald-500 to-green-400',
    bgColor: 'bg-emerald-500/10',
    borderColor: 'border-emerald-500/30',
    glowClass: 'glow-green',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
    title: 'Comunicação no culto',
    description: 'Compartilhe QR Code no telão, acompanhe contribuições ao vivo e facilite o momento da oferta.',
    color: 'from-amber-500 to-yellow-400',
    bgColor: 'bg-amber-500/10',
    borderColor: 'border-amber-500/30',
    glowClass: 'glow-gold',
  },
  {
    icon: (
      <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" />
      </svg>
    ),
    title: 'IA de engajamento',
    description: 'Identifique membros que precisam de atenção e receba alertas inteligentes para cuidado pastoral.',
    color: 'from-purple-500 to-violet-400',
    bgColor: 'bg-purple-500/10',
    borderColor: 'border-purple-500/30',
    glowClass: 'glow-purple',
  },
];

export default function SolutionSection() {
  return (
    <section id="funcionalidades" className="relative py-20 md:py-28 overflow-hidden">
      <div className="bg-orb w-72 h-72 bg-blue-500/8 bottom-0 left-1/4" />
      <div className="bg-orb w-64 h-64 bg-purple-500/6 top-0 right-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              O Plenno centraliza a operação da igreja em um{' '}
              <span className="gradient-text">painel simples e inteligente.</span>
            </h2>
          </div>
          <div className="reveal reveal-delay-1">
            <p className="text-lg text-slate-300 leading-relaxed">
              Com o Plenno, a igreja passa a ter uma plataforma única para gerenciar membros,
              acompanhar contribuições, criar links Pix, monitorar arrecadações em tempo real
              e receber alertas inteligentes sobre engajamento.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pillar, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} group relative bg-navy-800/50 backdrop-blur-sm rounded-2xl p-7 border ${pillar.borderColor} hover:border-opacity-60 transition-all duration-500`}
            >
              {/* Hover glow */}
              <div className={`absolute inset-0 rounded-2xl ${pillar.glowClass} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />

              <div className="relative">
                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl ${pillar.bgColor} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                  <div className={`bg-gradient-to-r ${pillar.color} bg-clip-text`} style={{ WebkitTextFillColor: 'transparent', WebkitBackgroundClip: 'text' }}>
                    <div className={`text-transparent`} style={{ color: 'inherit' }}>
                      {pillar.icon}
                    </div>
                  </div>
                </div>

                {/* Colored top accent line */}
                <div className={`absolute top-0 left-7 right-7 h-px bg-gradient-to-r ${pillar.color} opacity-40 -translate-y-7`} />

                <h3 className="text-xl font-bold text-white mb-3">{pillar.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{pillar.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
