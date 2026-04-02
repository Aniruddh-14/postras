import { ArrowRight, Activity } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section id="faq" className="py-20 md:py-24 relative">
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-text-primary mb-10">
          Frequently Asked Questions
        </h2>

        <a
          href="#home"
          className="inline-flex items-center gap-2 px-8 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-all shadow-lg shadow-accent-glow/30"
        >
          Analyze My Content
        </a>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-16 pt-6 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-text-muted text-xs">
          <div className="flex items-center gap-2">
            <Activity className="w-3.5 h-3.5 text-accent" />
            <span className="font-semibold text-text-secondary">Postra</span>
            <span>· AI Content Strategy Engine</span>
          </div>
          <p>Strategy, not guesses.</p>
        </div>
      </div>
    </section>
  );
}
