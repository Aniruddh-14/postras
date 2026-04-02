import { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const FAQ_ITEMS = [
  { q: "What does Postra do?", a: "Postra is an AI content strategist that analyzes your posts and tells you what to do next. It's a strategy engine, not a content generator." },
  { q: "Which platforms does Postra support?", a: "Twitter/X, Instagram, LinkedIn, and YouTube — each with platform-specific analysis." },
  { q: "Can it work with under 30 posts?", a: "Yes. With 10-29 posts you get early pattern detection. With 30+ posts you get full confidence analysis." },
  { q: "Does it generate content?", a: "No. Postra tells you what type of content to make, not what words to write. The creativity stays with you." },
  { q: "Is my data safe?", a: "Yes. We only analyze your public content. No data is stored permanently." },
];

export default function StrategySection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="sample-report" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section title */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            Your Personalized Strategy
          </h2>
        </div>

        {/* Two-column layout */}
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          {/* Left — heading + FAQ */}
          <div>
            <h3 className="text-xl font-bold text-text-primary mb-2">
              Insights that drive your growth
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-8">
              See exactly what's working, what's not, and get clear steps to improve.
            </p>

            {/* FAQ accordion */}
            <div className="space-y-2">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div
                    key={i}
                    className={`rounded-xl border transition-all ${
                      isOpen ? 'border-accent/30 bg-accent-soft/20' : 'border-border bg-bg-card'
                    }`}
                  >
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-4 py-3.5 text-left cursor-pointer"
                    >
                      <span className={`text-sm font-medium ${isOpen ? 'text-text-primary' : 'text-text-secondary'}`}>
                        {item.q}
                      </span>
                      <ChevronRight
                        className={`w-4 h-4 text-text-muted shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90' : ''}`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-3.5 pt-0">
                        <p className="text-text-muted text-xs leading-relaxed">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — mock report preview */}
          <div className="glass rounded-2xl p-5 space-y-3">
            {/* What's Working */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-emerald-500/15 px-4 py-2.5 flex items-center justify-between">
                <span className="text-emerald-400 text-sm font-bold">What's Working</span>
                <div className="flex gap-1">
                  <div className="h-1.5 w-10 rounded-full bg-emerald-500/40" />
                  <div className="h-1.5 w-14 rounded-full bg-emerald-500/25" />
                  <div className="h-1.5 w-8 rounded-full bg-emerald-500/15" />
                </div>
              </div>
              <div className="bg-bg-card/60 px-4 py-3">
                <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 shrink-0" />
                  Story posts perform 2.3x better.
                </div>
              </div>
            </div>

            {/* What's Hurting */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-rose-500/15 px-4 py-2.5 flex items-center justify-between">
                <span className="text-rose-400 text-sm font-bold">What's Hurting</span>
                <div className="flex gap-1">
                  <div className="h-1.5 w-12 rounded-full bg-rose-500/40" />
                  <div className="h-1.5 w-8 rounded-full bg-rose-500/25" />
                  <div className="h-1.5 w-10 rounded-full bg-rose-500/15" />
                </div>
              </div>
              <div className="bg-bg-card/60 px-4 py-3">
                <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <div className="w-2 h-2 rounded-full bg-rose-400 shrink-0" />
                  Educational content is underperforming.
                </div>
              </div>
            </div>

            {/* What To Do Next */}
            <div className="rounded-lg overflow-hidden">
              <div className="bg-blue-500/15 px-4 py-2.5">
                <span className="text-blue-400 text-sm font-bold">What To Do Next</span>
              </div>
              <div className="bg-bg-card/60 px-4 py-3">
                <div className="flex items-center gap-2.5 text-sm text-text-secondary">
                  <span className="text-blue-400 font-bold">✓</span>
                  Focus 2 of your next 5 posts on <span className="text-text-primary font-medium">storytelling</span>.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
