const securityPoints = [
  {
    title: 'Dados separados por igreja',
    description: 'Cada igreja possui seu próprio ambiente lógico com dados completamente isolados.',
  },
  {
    title: 'Acesso autenticado',
    description: 'Login seguro com autenticação para todos os usuários da plataforma.',
  },
  {
    title: 'Controle de permissões',
    description: 'Defina quem pode acessar cada área do sistema dentro da sua igreja.',
  },
  {
    title: 'Boas práticas de segurança',
    description: 'Infraestrutura preparada com criptografia e monitoramento contínuo.',
  },
  {
    title: 'Proteção de informações sensíveis',
    description: 'Dados financeiros e pessoais protegidos com camadas adicionais de segurança.',
  },
  {
    title: 'Preparado para LGPD',
    description: 'Práticas alinhadas com a Lei Geral de Proteção de Dados brasileira.',
  },
];

export default function SecuritySection() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="bg-orb w-72 h-72 bg-violet-500/5 bottom-0 right-0" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left - Visual */}
          <div className="reveal flex justify-center">
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-8 bg-violet-500/8 rounded-full blur-3xl" />

              <div className="relative w-64 h-64 flex items-center justify-center">
                {/* Shield */}
                <div className="w-40 h-40 rounded-3xl bg-gradient-to-br from-violet-500/20 to-purple-500/20 border border-violet-500/20 flex items-center justify-center shadow-2xl shadow-violet-500/10">
                  <svg className="w-20 h-20 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                </div>

                {/* Floating badges */}
                <div className="absolute -top-2 -right-2 bg-navy-800/90 backdrop-blur-sm border border-white/[0.08] rounded-xl px-3 py-2 shadow-lg animate-float">
                  <span className="text-xs font-semibold text-emerald-400">🔒 Criptografia</span>
                </div>
                <div className="absolute -bottom-2 -left-2 bg-navy-800/90 backdrop-blur-sm border border-white/[0.08] rounded-xl px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '2s' }}>
                  <span className="text-xs font-semibold text-blue-400">🛡️ LGPD</span>
                </div>
                <div className="absolute top-1/2 -right-8 bg-navy-800/90 backdrop-blur-sm border border-white/[0.08] rounded-xl px-3 py-2 shadow-lg animate-float" style={{ animationDelay: '4s' }}>
                  <span className="text-xs font-semibold text-violet-400">👁️ Monitoramento</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-violet-500/10 text-violet-400 border border-violet-500/20 mb-6">
                Segurança
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Segurança e privacidade{' '}
                <span className="bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">desde o início.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                O Plenno foi pensado para proteger dados de membros, informações
                financeiras e acessos da igreja. Cada igreja possui seu próprio
                ambiente lógico, com dados isolados e permissões controladas.
              </p>
            </div>

            <div className="reveal reveal-delay-2 space-y-4">
              {securityPoints.map((point, i) => (
                <div key={i} className="flex items-start gap-3 group">
                  <div className="w-6 h-6 rounded-lg bg-violet-500/10 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-violet-500/20 transition-colors">
                    <svg className="w-3.5 h-3.5 text-violet-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-white">{point.title}</h4>
                    <p className="text-xs text-slate-400 mt-0.5">{point.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
