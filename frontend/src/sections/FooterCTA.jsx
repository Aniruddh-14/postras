import { Activity } from 'lucide-react';

export default function FooterCTA() {
  return (
    <footer id="faq" className="section-padding bg-[#0D0F0E] border-t border-white/5 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#006D3C]/[0.1] blur-[150px] rounded-full pointer-events-none" />

      <div className="max-w-[1240px] mx-auto px-6 relative z-10 text-center flex flex-col items-center">
        {/* Final Branding / Info (Centered) */}
        <div className="max-w-[800px] mx-auto mb-32 text-center">
          <p className="text-[#006D3C] text-sm font-black uppercase tracking-widest mb-8">Postra Strategist</p>
          <h2 className="text-4xl md:text-7xl font-extrabold font-heading text-white leading-tight mb-12">
            Stop guessing what to post.
            <br /><i className="italic font-heading">Start growing today.</i>
          </h2>
          <div className="h-1 w-32 bg-gradient-to-r from-transparent via-[#006D3C] to-transparent mx-auto opacity-40 shadow-[0_0_15px_#006D3C]" />
        </div>

        {/* Global Footer (Centered) */}
        <div className="w-full pt-20 border-t border-white/5 flex flex-col items-center gap-12">
          {/* Logo */}
          <div className="flex flex-col items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/40">
              <Activity className="w-6 h-6 text-white" />
            </div>
            <div className="flex flex-col items-center">
              <span className="font-heading font-extrabold text-white tracking-tighter text-2xl uppercase">Postra</span>
              <span className="text-[#4B5563] text-sm font-bold tracking-widest uppercase mt-1">AI Content Strategy Engine</span>
            </div>
          </div>

          {/* Links (Centered) */}
          <nav className="flex flex-wrap items-center justify-center gap-x-12 gap-y-6 text-[#9CA3AF] text-sm font-black uppercase tracking-widest">
            <a href="#how-it-works" className="hover:text-white transition-all hover:scale-110">Process</a>
            <a href="#platforms" className="hover:text-white transition-all hover:scale-110">Platforms</a>
            <a href="#sample-report" className="hover:text-white transition-all hover:scale-110">Sample Report</a>
            <a href="mailto:hello@postra.ai" className="hover:text-white transition-all hover:scale-110">Contact</a>
          </nav>

          {/* Social / Copy (Centered) */}
          <div className="flex flex-col items-center gap-4 text-[#4B5563] text-xs font-black uppercase tracking-widest">
            <p>© 2026 Postra Inc.</p>
            <p className="opacity-40 italic">Strategy, not guesses.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
