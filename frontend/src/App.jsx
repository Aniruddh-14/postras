import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Platforms from './sections/Platforms';
import StrategySection from './sections/StrategySection';
import FooterCTA from './sections/FooterCTA';

export default function App() {
  return (
    <div className="min-h-screen bg-bg">
      <Navbar />
      <Hero />
      <div className="section-divider max-w-6xl mx-auto" />
      <HowItWorks />
      <div className="section-divider max-w-6xl mx-auto" />
      <Platforms />
      <div className="section-divider max-w-6xl mx-auto" />
      <StrategySection />
      <div className="section-divider max-w-6xl mx-auto" />
      <FooterCTA />
    </div>
  );
}
