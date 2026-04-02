import { ArrowRight, Eye, Sparkles } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-accent/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[0%] right-[10%] w-[40vw] h-[40vw] bg-purple-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-28 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left — copy */}
          <div>
            <h1 className="fade-in text-3xl md:text-4xl lg:text-[2.75rem] font-extrabold leading-[1.15] tracking-tight mb-5">
              Postra learns how{' '}
              <span className="gradient-text">YOU</span> create—
              <br />and tells you what to do next.
            </h1>

            <p className="fade-in stagger-1 text-[15px] text-text-secondary leading-relaxed mb-8 max-w-md">
              Analyze your content across Twitter, Instagram, LinkedIn, and YouTube.
              Postra finds your patterns, understands your style, and gives you
              personalized strategy to grow faster.
            </p>

            {/* CTAs */}
            <div className="fade-in stagger-2 flex flex-wrap gap-3">
              <a
                href="#home"
                className="px-6 py-3 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-sm transition-all flex items-center gap-2 shadow-lg shadow-accent-glow/30"
              >
                Analyze My Content
              </a>
              <a
                href="#sample-report"
                className="px-6 py-3 rounded-xl border border-border-light hover:border-text-muted text-text-secondary hover:text-text-primary font-medium text-sm transition-all flex items-center gap-2"
              >
                See Sample Report
              </a>
            </div>
          </div>

          {/* Right — mock dashboard */}
          <div className="fade-in stagger-2 hidden lg:block">
            <div className="relative">
              <div className="absolute inset-0 bg-accent/[0.05] blur-[50px] rounded-3xl" />

              <div className="relative glass rounded-2xl p-5 space-y-3">
                {/* Header */}
                <div className="flex items-center justify-between mb-1">
                  <div className="flex items-center gap-2">
                    <div className="w-7 h-7 rounded-full bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                    </div>
                    <span className="text-text-primary font-semibold text-sm">Postra</span>
                  </div>
                  <div className="flex -space-x-1.5">
                    <div className="w-6 h-6 rounded-full bg-rose-500/80 border-2 border-bg-card" />
                    <div className="w-6 h-6 rounded-full bg-amber-500/80 border-2 border-bg-card" />
                    <div className="w-6 h-6 rounded-full bg-emerald-500/80 border-2 border-bg-card" />
                  </div>
                </div>

                {/* What's Working */}
                <div className="rounded-lg overflow-hidden">
                  <div className="bg-emerald-500/20 px-4 py-2 flex items-center justify-between">
                    <span className="text-emerald-400 text-xs font-bold">What's Working</span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-8 rounded-full bg-emerald-500/50" />
                      <div className="h-1.5 w-12 rounded-full bg-emerald-500/30" />
                      <div className="h-1.5 w-6 rounded-full bg-emerald-500/20" />
                    </div>
                  </div>
                  <div className="bg-bg-card/80 px-4 py-2.5">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      Story posts get 2.3x more engagement than average.
                    </div>
                  </div>
                </div>

                {/* What's Hurting */}
                <div className="rounded-lg overflow-hidden">
                  <div className="bg-rose-500/20 px-4 py-2 flex items-center justify-between">
                    <span className="text-rose-400 text-xs font-bold">What's Hurting</span>
                    <div className="flex gap-1">
                      <div className="h-1.5 w-10 rounded-full bg-rose-500/50" />
                      <div className="h-1.5 w-6 rounded-full bg-rose-500/30" />
                      <div className="h-1.5 w-8 rounded-full bg-rose-500/20" />
                    </div>
                  </div>
                  <div className="bg-bg-card/80 px-4 py-2.5">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <div className="w-2 h-2 rounded-full bg-rose-400" />
                      Too many educational posts with low interaction.
                    </div>
                  </div>
                </div>

                {/* What To Do Next */}
                <div className="rounded-lg overflow-hidden">
                  <div className="bg-blue-500/20 px-4 py-2">
                    <span className="text-blue-400 text-xs font-bold">What To Do Next</span>
                  </div>
                  <div className="bg-bg-card/80 px-4 py-2.5">
                    <div className="flex items-center gap-2 text-xs text-text-secondary">
                      <span className="text-blue-400">✓</span>
                      Shift 2 out of your next 5 posts to storytelling.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
