import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import HowItWorks from './sections/HowItWorks';
import Platforms from './sections/Platforms';
import SampleReport from './sections/SampleReport';
import FAQ from './sections/FAQ';
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
      <SampleReport />
      <div className="section-divider max-w-6xl mx-auto" />
      <FAQ />
      <FooterCTA />
    </div>
  );
}
