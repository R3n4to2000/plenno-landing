const features = [
  'Cadastro completo de membros',
  'Status ativo/inativo',
  'Dados de contato',
  'Histórico e observações',
  'Preparação para grupos e células',
  'Visão individual por membro',
  'Base para score de engajamento',
];

function MemberProfileMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-blue-500/8 rounded-3xl blur-2xl" />
      <div className="relative bg-navy-800/80 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="bg-gradient-to-r from-blue-600/20 to-cyan-500/20 px-6 py-5 border-b border-white/[0.06]">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20">
              <span className="text-2xl font-bold text-white">MS</span>
            </div>
            <div>
              <h4 className="text-lg font-bold text-white">Maria Silva</h4>
              <div className="flex items-center gap-2 mt-1">
                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-400 border border-emerald-500/30">
                  ● Ativa
                </span>
                <span className="text-xs text-slate-400">Membro desde 2021</span>
              </div>
            </div>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          {/* Contact */}
          <div className="space-y-2.5">
            <div className="flex items-center gap-3 text-sm">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
              </svg>
              <span className="text-slate-300">maria.silva@email.com</span>
            </div>
            <div className="flex items-center gap-3 text-sm">
              <svg className="w-4 h-4 text-slate-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
              </svg>
              <span className="text-slate-300">(11) 98765-4321</span>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-white/[0.06]" />

          {/* Participation */}
          <div>
            <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Participação</span>
            <div className="mt-2 grid grid-cols-3 gap-2">
              <div className="bg-navy-700/50 rounded-lg p-2.5 text-center">
                <div className="text-lg font-bold text-blue-400">47</div>
                <div className="text-[10px] text-slate-500">Cultos</div>
              </div>
              <div className="bg-navy-700/50 rounded-lg p-2.5 text-center">
                <div className="text-lg font-bold text-emerald-400">R$ 3.6k</div>
                <div className="text-[10px] text-slate-500">Contribuído</div>
              </div>
              <div className="bg-navy-700/50 rounded-lg p-2.5 text-center">
                <div className="text-lg font-bold text-amber-400">12</div>
                <div className="text-[10px] text-slate-500">Eventos</div>
              </div>
            </div>
          </div>

          {/* Engagement Score */}
          <div>
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-slate-500 font-medium uppercase tracking-wider">Score de engajamento</span>
              <span className="text-sm font-bold text-emerald-400">8.7</span>
            </div>
            <div className="h-2 bg-navy-700 rounded-full overflow-hidden">
              <div className="h-full w-[87%] bg-gradient-to-r from-blue-500 to-emerald-400 rounded-full" />
            </div>
          </div>

          {/* Notes */}
          <div className="bg-navy-700/30 rounded-xl p-3 border border-white/[0.04]">
            <span className="text-[10px] text-slate-500 font-medium uppercase tracking-wider">Última observação</span>
            <p className="text-xs text-slate-400 mt-1">Participou do retiro de jovens. Demonstrou interesse em liderar célula.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureCRM() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-navy-900 via-navy-800/50 to-navy-900" />
      <div className="bg-orb w-80 h-80 bg-blue-500/8 -left-20 top-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text */}
          <div>
            <div className="reveal">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-blue-500/10 text-blue-400 border border-blue-500/20 mb-6">
                CRM de Membros
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Conheça melhor cada membro da sua{' '}
                <span className="gradient-text">igreja.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                Cadastre, organize e acompanhe membros com dados centralizados, status,
                contatos, histórico e informações importantes para o cuidado pastoral.
              </p>
            </div>

            <ul className="reveal reveal-delay-2 space-y-3 mb-8">
              {features.map((feature, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-blue-500/20 flex items-center justify-center flex-shrink-0">
                    <svg className="w-3 h-3 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <span className="text-sm text-slate-300">{feature}</span>
                </li>
              ))}
            </ul>

            <div className="reveal reveal-delay-3 bg-navy-800/50 rounded-xl p-4 border border-blue-500/10">
              <p className="text-sm text-slate-300 leading-relaxed">
                <span className="text-blue-400 font-semibold">✦ Benefício principal:</span>{' '}
                A liderança deixa de depender de informações soltas e passa a ter uma visão clara de cada pessoa.
              </p>
            </div>
          </div>

          {/* Mockup */}
          <div className="reveal reveal-delay-2">
            <MemberProfileMockup />
          </div>
        </div>
      </div>
    </section>
  );
}
