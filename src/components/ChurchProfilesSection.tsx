const profiles = [
  {
    title: 'Igrejas pequenas',
    description: 'Saia das planilhas e organize sua base desde o início.',
    icon: '🏠',
    gradient: 'from-blue-500/20 to-cyan-500/20',
    borderColor: 'border-blue-500/20',
    hoverBorder: 'hover:border-blue-500/40',
    accent: 'text-blue-400',
  },
  {
    title: 'Igrejas em crescimento',
    description: 'Ganhe controle sobre membros, contribuições e comunicação.',
    icon: '📈',
    gradient: 'from-emerald-500/20 to-green-500/20',
    borderColor: 'border-emerald-500/20',
    hoverBorder: 'hover:border-emerald-500/40',
    accent: 'text-emerald-400',
  },
  {
    title: 'Igrejas com múltiplos ministérios',
    description: 'Prepare sua gestão para grupos, células, campanhas e relatórios.',
    icon: '⛪',
    gradient: 'from-amber-500/20 to-yellow-500/20',
    borderColor: 'border-amber-500/20',
    hoverBorder: 'hover:border-amber-500/40',
    accent: 'text-amber-400',
  },
  {
    title: 'Igrejas que querem digitalizar contribuições',
    description: 'Facilite dízimos e ofertas com Pix, QR Code e acompanhamento.',
    icon: '💎',
    gradient: 'from-purple-500/20 to-violet-500/20',
    borderColor: 'border-purple-500/20',
    hoverBorder: 'hover:border-purple-500/40',
    accent: 'text-purple-400',
  },
];

export default function ChurchProfilesSection() {
  return (
    <section id="para-igrejas" className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800 to-navy-900" />
      <div className="bg-orb w-80 h-80 bg-amber-500/5 top-0 left-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="reveal">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white leading-tight mb-6">
              Feito para igrejas que querem crescer com{' '}
              <span className="gradient-text-gold">organização.</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 gap-6">
          {profiles.map((profile, index) => (
            <div
              key={index}
              className={`reveal reveal-delay-${index + 1} group relative bg-navy-800/50 backdrop-blur-sm rounded-2xl p-7 border ${profile.borderColor} ${profile.hoverBorder} transition-all duration-500`}
            >
              {/* Gradient top */}
              <div className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${profile.gradient} rounded-t-2xl`} />

              <div className="flex items-start gap-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center text-2xl flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                  {profile.icon}
                </div>
                <div>
                  <h3 className={`text-lg font-bold text-white mb-2 group-hover:${profile.accent} transition-colors`}>{profile.title}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{profile.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
