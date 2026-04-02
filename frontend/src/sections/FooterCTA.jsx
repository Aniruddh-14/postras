import { ArrowRight, Activity } from 'lucide-react';

export default function FooterCTA() {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Ambient glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-accent/[0.04] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
        {/* Accent line */}
        <div className="section-divider mb-16" />

        <h2 className="text-3xl md:text-5xl font-black text-text-primary leading-tight mb-6">
          Stop guessing what to post.
        </h2>
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto mb-10 leading-relaxed">
          Let Postra turn your past content into your next strategy.
        </p>

        <a
          href="#home"
          className="inline-flex items-center gap-2 px-8 py-4 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-lg transition-all shadow-xl shadow-accent-glow/30 pulse-glow"
        >
          Analyze My Content
          <ArrowRight className="w-5 h-5" />
        </a>
      </div>

      {/* Footer */}
      <div className="max-w-6xl mx-auto px-6 mt-20 pt-8 border-t border-border">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-text-muted text-sm">
          <div className="flex items-center gap-2">
            <Activity className="w-4 h-4 text-accent" />
            <span className="font-semibold text-text-secondary">Postra</span>
            <span>· AI Content Strategy Engine</span>
          </div>
          <p>Strategy, not guesses.</p>
        </div>
      </div>
    </section>
  );
}
