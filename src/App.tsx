import { useEffect } from 'react';
import LandingHeader from './components/LandingHeader';
import HeroSection from './components/HeroSection';
import ProblemSection from './components/ProblemSection';
import SolutionSection from './components/SolutionSection';
import FeatureCRM from './components/FeatureCRM';
import FeaturePix from './components/FeaturePix';
import FeatureDashboard from './components/FeatureDashboard';
import FeatureCulto from './components/FeatureCulto';
import FeatureWhatsApp from './components/FeatureWhatsApp';
import FeatureAI from './components/FeatureAI';
import HowItWorksSection from './components/HowItWorksSection';
import BenefitsSection from './components/BenefitsSection';
import ChurchProfilesSection from './components/ChurchProfilesSection';
import SecuritySection from './components/SecuritySection';
import FinalCTA from './components/FinalCTA';
import LandingFooter from './components/LandingFooter';

export default function App() {
  // Scroll reveal is desktop-only; mobile renders content immediately to avoid
  // first-paint stalls on weaker devices.
  useEffect(() => {
    const shouldAnimate =
      window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)').matches;
    const reveals = document.querySelectorAll('.reveal');

    if (!shouldAnimate || !('IntersectionObserver' in window)) {
      reveals.forEach((element) => element.classList.add('active'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.1,
      }
    );

    reveals.forEach((element) => observer.observe(element));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="bg-navy-950 text-slate-100 font-sans min-h-screen selection:bg-blue-500/30 selection:text-white overflow-x-hidden">
      {/* Navigation Header */}
      <LandingHeader />

      {/* Main Content */}
      <main>
        {/* Hero Section */}
        <HeroSection />

        {/* Problem Section */}
        <ProblemSection />

        {/* Core Solution Section */}
        <SolutionSection />

        {/* Detailed Features */}
        <div id="funcionalidades" className="relative scroll-mt-20">
          <FeatureCRM />
          <FeaturePix />
          <FeatureCulto />
          <FeatureDashboard />
          <FeatureWhatsApp />
          <FeatureAI />
        </div>

        {/* How It Works */}
        <HowItWorksSection />

        {/* Benefits Grid */}
        <BenefitsSection />

        {/* Church Profiles Segmentation */}
        <ChurchProfilesSection />

        {/* Security & Reliability */}
        <SecuritySection />

        {/* Final CTA */}
        <FinalCTA />
      </main>

      {/* Footer */}
      <LandingFooter />
    </div>
  );
}
