import { Activity, Sparkles, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative pt-16 md:pt-32 lg:pt-48 min-h-screen flex items-center bg-[#0D0F0E]">
      {/* Background radial glow */}
      <div className="absolute top-0 right-[20%] w-[500px] h-[500px] bg-[#006D3C]/[0.05] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] left-[10%] w-[400px] h-[400px] bg-[#006D3C]/[0.03] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 w-full relative z-10 text-center">
        {/* Core copy */}
        <div className="max-w-[900px] mx-auto mb-20 text-center">
          <h1 className="fade-in font-heading text-5xl sm:text-6xl md:text-[5.5rem] font-extrabold leading-[1] tracking-tight text-white mb-10">
            Postra learns how <i className="font-heading italic">YOU</i> create
            <br />and tells you what to do next.
          </h1>
          <p className="fade-in stagger-1 text-xl md:text-2xl text-[#9CA3AF] leading-relaxed mb-12 max-w-[720px] mx-auto text-center">
            Analyze your content across Twitter, Instagram, LinkedIn, and YouTube.
            Postra finds your patterns, understands your style, and gives you a
            personalized strategy to grow faster.
          </p>

          <div className="fade-in stagger-2 flex flex-wrap justify-center gap-6">
            <a
              href="#sample-report"
              className="pill-button bg-[#006D3C] hover:bg-[#008D4C] text-white flex items-center gap-2 px-10 py-5 text-lg font-bold transition-all hover:scale-[1.05] shadow-2xl shadow-[#006D3C]/30"
            >
              See Sample Report <ChevronRight className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Mock dashboard - Fully centered */}
        <div className="fade-in stagger-3 max-w-[960px] mx-auto float-anim mb-20">
          <div className="pill-card p-10 border border-white/[0.1] shadow-2xl relative bg-white/[0.02]">
            {/* Header */}
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/30">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="text-white text-xl font-extrabold font-heading">Postra Snapshot</span>
              </div>
              <div className="flex -space-x-3">
                <div className="w-9 h-9 rounded-full bg-[#E4405F]/80 border-2 border-[#151515]" title="Instagram" />
                <div className="w-9 h-9 rounded-full bg-[#1DA1F2]/80 border-2 border-[#151515]" title="Twitter" />
                <div className="w-9 h-9 rounded-full bg-[#0A66C2]/80 border-2 border-[#151515]" title="LinkedIn" />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 text-left">
              {/* Left column - Insights */}
              <div className="space-y-8">
                <div className="space-y-3">
                  <span className="text-[#00C16A] text-xs font-black uppercase tracking-widest">High Confidence Pattern</span>
                  <p className="text-[#E5E7EB] text-lg font-medium leading-relaxed">"Story-based posts get <span className="text-white font-extrabold">2.3x more interaction</span> than your average educational content."</p>
                </div>
                <div className="space-y-3 pt-6 border-t border-white/5">
                  <span className="text-rose-500 text-xs font-black uppercase tracking-widest">Performance Signal</span>
                  <p className="text-[#9CA3AF] text-base leading-relaxed">"High-frequency educational posting is leading to audience fatigue and lower organic reach."</p>
                </div>
              </div>

              {/* Right column - Next Step */}
              <div className="bg-white/[0.03] rounded-3xl p-8 border border-white/[0.05] shadow-inner shadow-[#006D3C]/5">
                <h3 className="text-white font-bold text-lg mb-6 font-heading">Next Strategic Move</h3>
                <div className="flex items-start gap-4 text-[#E5E7EB]">
                  <div className="w-8 h-8 rounded-full bg-[#006D3C]/40 flex items-center justify-center shrink-0 mt-0.5">
                    <span className="text-[#00C16A] font-black text-sm">1</span>
                  </div>
                  <p className="text-base leading-relaxed">
                    Shift 2 out of your next 5 posts to <span className="text-[#00C16A] font-extrabold underline decoration-[#006D3C] underline-offset-4">storytelling</span> to stabilize engagement.
                  </p>
                </div>
                <div className="mt-10">
                  <div className="h-3 w-full bg-white/[0.05] rounded-full overflow-hidden">
                    <div className="h-full bg-[#006D3C] w-[65%] rounded-full shadow-[0_0_15px_rgba(0,109,60,0.6)]" />
                  </div>
                  <div className="flex justify-between items-center mt-3">
                    <p className="text-[#6B7280] text-xs font-bold uppercase tracking-wider">Confidence Score</p>
                    <p className="text-[#00C16A] text-sm font-black">84.3%</p>
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
