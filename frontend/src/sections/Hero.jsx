import { ArrowRight, Eye, Sparkles, TrendingUp, Target, Zap } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16">
      {/* Ambient glows */}
      <div className="absolute top-[-10%] left-[20%] w-[50vw] h-[50vw] bg-accent/[0.04] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[0%] right-[10%] w-[40vw] h-[40vw] bg-purple-600/[0.03] blur-[120px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 py-20 md:py-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left — copy */}
          <div>
            {/* Badge */}
            <div className="fade-in inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-soft border border-accent/15 text-accent text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              AI-powered content strategy
            </div>

            {/* Headline */}
            <h1 className="fade-in stagger-1 text-4xl md:text-5xl lg:text-[3.5rem] font-black leading-[1.08] tracking-tight mb-6">
              Postra learns how{' '}
              <span className="gradient-text">YOU</span> create and tells you what to do next.
            </h1>

            {/* Subheadline */}
            <p className="fade-in stagger-2 text-lg text-text-secondary leading-relaxed mb-10 max-w-xl">
              Analyze your content across Twitter, Instagram, LinkedIn, and YouTube. Postra finds your patterns, understands your style, and gives you personalized strategy to grow faster.
            </p>

            {/* CTAs */}
            <div className="fade-in stagger-3 flex flex-wrap gap-4">
              <a
                href="#home"
                className="px-7 py-3.5 rounded-xl bg-accent hover:bg-accent/90 text-white font-semibold text-base transition-all flex items-center gap-2 shadow-lg shadow-accent-glow/30 pulse-glow"
              >
                Analyze My Content
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="#sample-report"
                className="px-7 py-3.5 rounded-xl border border-border hover:border-border-light text-text-secondary hover:text-text-primary font-medium text-base transition-all flex items-center gap-2 hover:bg-white/[0.03]"
              >
                <Eye className="w-4 h-4" />
                See Sample Report
              </a>
            </div>

            {/* Trust signals */}
            <div className="fade-in stagger-4 mt-12 flex flex-wrap gap-6 text-text-muted text-sm">
              <div className="flex items-center gap-2">
                <TrendingUp className="w-4 h-4 text-accent/60" />
                <span>Pattern detection</span>
              </div>
              <div className="flex items-center gap-2">
                <Target className="w-4 h-4 text-accent/60" />
                <span>Personalized strategy</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="w-4 h-4 text-accent/60" />
                <span>Multi-platform</span>
              </div>
            </div>
          </div>

          {/* Right — mock dashboard preview */}
          <div className="fade-in stagger-3 hidden lg:block">
            <div className="relative">
              {/* Glow behind dashboard */}
              <div className="absolute inset-0 bg-accent/[0.06] blur-[60px] rounded-3xl" />

              {/* Dashboard mock */}
              <div className="relative glass rounded-2xl p-6 space-y-4 float">
                {/* Header */}
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="text-text-muted text-xs font-medium">Strategy Report</p>
                    <p className="text-text-primary font-bold text-lg">@creator_pro</p>
                  </div>
                  <span className="px-3 py-1 rounded-full bg-success-soft border border-success-border text-success text-xs font-medium">
                    High Confidence
                  </span>
                </div>

                {/* Content mix preview */}
                <div className="space-y-2">
                  <p className="text-text-muted text-xs font-medium">Content Mix</p>
                  <div className="flex h-2.5 rounded-full overflow-hidden bg-bg-elevated">
                    <div className="bg-blue-500 w-[38%]" />
                    <div className="bg-amber-500 w-[22%]" />
                    <div className="bg-rose-500 w-[18%]" />
                    <div className="bg-purple-500 w-[12%]" />
                    <div className="bg-emerald-500 w-[10%]" />
                  </div>
                </div>

                {/* Insight cards */}
                <div className="space-y-2.5">
                  <div className="rounded-lg bg-success-soft border border-success-border p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-success mt-1.5 shrink-0" />
                      <p className="text-sm text-text-primary font-medium">Story posts perform 3.2x better</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-danger-soft border border-danger-border p-3">
                    <div className="flex items-start gap-2">
                      <div className="w-1.5 h-1.5 rounded-full bg-danger mt-1.5 shrink-0" />
                      <p className="text-sm text-text-primary font-medium">Educational content — 37% usage, 0% top posts</p>
                    </div>
                  </div>
                  <div className="rounded-lg bg-info-soft border border-info-border p-3">
                    <div className="flex items-start gap-2">
                      <ArrowRight className="w-3.5 h-3.5 text-info mt-0.5 shrink-0" />
                      <p className="text-sm text-text-primary font-medium">Shift 2 of 5 posts to storytelling</p>
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
