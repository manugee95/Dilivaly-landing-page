import { Navigation } from './components/Navigation';
import { HeroSection } from './components/HeroSection';
import { StatsBar } from './components/StatsBar';
import { HowItWorksVendor } from './components/HowItWorksVendor';
import { HowItWorksAgent } from './components/HowItWorksAgent';
import { EscrowSection } from './components/EscrowSection';
import { TrustSection } from './components/TrustSection';
import { Testimonials } from './components/Testimonials';
import { FAQ } from './components/FAQ';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#07120A]">
      <Navigation />
      <HeroSection />
      <StatsBar />
      <div id="how-it-works">
        <HowItWorksVendor />
        <HowItWorksAgent />
      </div>
      <EscrowSection />
      <TrustSection />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </div>
  );
}