const features = [
  'Campanhas para membros',
  'Envio de links de doação',
  'Lembretes automáticos',
  'Segmentação futura por grupos',
  'Registro de status de envio',
  'Evita duplicidade de disparos',
];

const chatMessages = [
  {
    type: 'sent',
    name: 'Plenno',
    text: '🙏 Olá, Maria! O dízimo de Junho já está disponível. Contribua pelo link:',
    time: '10:30',
    hasLink: true,
  },
  {
    type: 'sent',
    name: 'Plenno',
    text: '📋 plenno.church/pix/dizimo-junho',
    time: '10:30',
    isLink: true,
  },
  {
    type: 'received',
    name: 'Maria S.',
    text: 'Pronto! Já fiz a contribuição 🙏',
    time: '10:45',
  },
  {
    type: 'status',
    text: '✅ Pagamento confirmado — R$ 150,00',
  },
];

function WhatsAppMockup() {
  return (
    <div className="relative w-full max-w-md mx-auto">
      <div className="absolute -inset-4 bg-emerald-500/6 rounded-3xl blur-2xl" />
      <div className="relative bg-navy-800/80 backdrop-blur-xl rounded-2xl border border-white/[0.08] shadow-2xl overflow-hidden">
        {/* WhatsApp header */}
        <div className="bg-emerald-700/30 px-4 py-3 border-b border-white/[0.06] flex items-center gap-3">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-emerald-500 to-green-400 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
          </div>
          <div>
            <span className="text-sm font-semibold text-white block">Igreja Plenno</span>
            <span className="text-[10px] text-emerald-300/60">Campanha Dízimo Junho</span>
          </div>
        </div>

        {/* Chat */}
        <div className="p-4 space-y-3 bg-navy-900/30 min-h-[280px]">
          {chatMessages.map((msg, i) => {
            if (msg.type === 'status') {
              return (
                <div key={i} className="flex justify-center">
                  <span className="bg-emerald-500/10 text-emerald-400 text-xs font-semibold px-4 py-1.5 rounded-full border border-emerald-500/20">
                    {msg.text}
                  </span>
                </div>
              );
            }
            const isSent = msg.type === 'sent';
            return (
              <div key={i} className={`flex ${isSent ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] rounded-2xl px-4 py-2.5 ${
                  isSent
                    ? 'bg-emerald-700/30 border border-emerald-500/15 rounded-tr-sm'
                    : 'bg-navy-700/50 border border-white/[0.06] rounded-tl-sm'
                }`}>
                  {msg.isLink ? (
                    <p className="text-sm text-blue-400 underline underline-offset-2">{msg.text}</p>
                  ) : (
                    <p className="text-sm text-slate-200 leading-relaxed">{msg.text}</p>
                  )}
                  <span className="text-[10px] text-slate-500 mt-1 block text-right">{msg.time}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Stats bar */}
        <div className="px-4 py-3 border-t border-white/[0.06] bg-navy-800/50">
          <div className="flex items-center justify-between text-xs">
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-emerald-400" />
                <span className="text-slate-400">156 enviadas</span>
              </div>
              <div className="flex items-center gap-1.5">
                <div className="w-2 h-2 rounded-full bg-blue-400" />
                <span className="text-slate-400">142 lidas</span>
              </div>
            </div>
            <span className="text-emerald-400 font-semibold">91% taxa de leitura</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function FeatureWhatsApp() {
  return (
    <section className="relative py-20 md:py-28 overflow-hidden">
      <div className="bg-orb w-80 h-80 bg-emerald-500/6 -right-20 top-1/4" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Mockup (left on desktop) */}
          <div className="reveal order-2 lg:order-1">
            <WhatsAppMockup />
          </div>

          {/* Text (right on desktop) */}
          <div className="order-1 lg:order-2">
            <div className="reveal">
              <span className="inline-flex items-center px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 mb-6">
                Comunicação
              </span>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white leading-tight mb-6">
                Comunique-se com os membros de forma mais{' '}
                <span className="bg-gradient-to-r from-emerald-400 to-green-400 bg-clip-text text-transparent">organizada.</span>
              </h2>
            </div>
            <div className="reveal reveal-delay-1">
              <p className="text-lg text-slate-300 leading-relaxed mb-8">
                O Plenno prepara a igreja para campanhas e lembretes via WhatsApp, com
                links Pix, avisos importantes e acompanhamento de envio.
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
                Menos mensagens manuais e mais organização na comunicação com a igreja.
              </p>
            </div>

            <div className="reveal reveal-delay-4 mt-4 bg-amber-500/5 rounded-xl p-3 border border-amber-500/10">
              <p className="text-xs text-amber-400/80 leading-relaxed">
                ⚡ Esta funcionalidade faz parte da evolução contínua da plataforma, sempre respeitando boas práticas de comunicação.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
