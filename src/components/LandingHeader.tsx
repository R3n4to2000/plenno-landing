import { useState, useEffect } from 'react';

const navLinks = [
  { label: 'Início', href: '#inicio' },
  { label: 'Funcionalidades', href: '#funcionalidades' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Benefícios', href: '#beneficios' },
  { label: 'Para igrejas', href: '#para-igrejas' },
  { label: 'Contato', href: '#contato' },
];

export default function LandingHeader() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    let ticking = false;

    const updateScrolledState = () => {
      const nextScrolled = window.scrollY > 20;
      setIsScrolled((current) => (current === nextScrolled ? current : nextScrolled));
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrolledState);
        ticking = true;
      }
    };

    updateScrolledState();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [isMobileOpen]);

  const handleNavClick = () => setIsMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-navy-900/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Navegação principal">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2.5 group" aria-label="Plenno - Página inicial">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-shadow">
              <span className="text-white font-extrabold text-lg leading-none">P</span>
            </div>
            <span className="text-xl font-bold text-white tracking-tight">
              Plenno
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3.5 py-2 text-sm font-medium text-slate-300 hover:text-white rounded-lg hover:bg-white/[0.06] transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href="#funcionalidades"
              className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Conhecer funcionalidades
            </a>
            <a
              href="#contato"
              className="px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl hover:from-blue-500 hover:to-cyan-400 transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5"
            >
              Solicitar demonstração
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileOpen(!isMobileOpen)}
            className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-xl hover:bg-white/[0.06] transition-colors"
            aria-label={isMobileOpen ? 'Fechar menu' : 'Abrir menu'}
            aria-expanded={isMobileOpen}
          >
            <div className="w-5 h-4 flex flex-col justify-between">
              <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${isMobileOpen ? 'rotate-45 translate-y-[7px]' : ''}`} />
              <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 ${isMobileOpen ? 'opacity-0 scale-0' : ''}`} />
              <span className={`block h-0.5 w-full bg-white rounded-full transition-all duration-300 origin-center ${isMobileOpen ? '-rotate-45 -translate-y-[7px]' : ''}`} />
            </div>
          </button>
        </nav>
      </div>

      {/* Mobile Menu Panel */}
      <div
        className={`lg:hidden fixed inset-0 top-16 bg-navy-900/95 backdrop-blur-2xl transition-all duration-300 ${
          isMobileOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="flex flex-col px-6 py-8 gap-1">
          {navLinks.map((link, i) => (
            <a
              key={link.href}
              href={link.href}
              onClick={handleNavClick}
              className="px-4 py-3.5 text-lg font-medium text-slate-200 hover:text-white hover:bg-white/[0.06] rounded-xl transition-all"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </a>
          ))}
          <div className="mt-6 pt-6 border-t border-white/[0.08] flex flex-col gap-3">
            <a
              href="#funcionalidades"
              onClick={handleNavClick}
              className="px-4 py-3 text-center text-base font-medium text-slate-300 border border-white/[0.1] rounded-xl hover:bg-white/[0.06] transition-all"
            >
              Conhecer funcionalidades
            </a>
            <a
              href="#contato"
              onClick={handleNavClick}
              className="px-4 py-3 text-center text-base font-semibold text-white bg-gradient-to-r from-blue-600 to-cyan-500 rounded-xl shadow-lg shadow-blue-500/25"
            >
              Solicitar demonstração
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
