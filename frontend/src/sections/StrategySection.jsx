import { useState } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';

const FAQ_ITEMS = [
  { q: "What does Postra do?", a: "Postra is an AI-powered content strategist. It analyzes your existing content to identify what's working, what's hurting your growth, and gives you specific, personalized next steps. It's a strategy engine, not a content generator." },
  { q: "Which platforms does Postra support?", a: "Twitter/X, Instagram, LinkedIn, and YouTube each with platform-specific, tailored analysis." },
  { q: "Can it work with fewer than 30 posts?", a: "Yes. With 10 to 29 posts you get early pattern detection with clear confidence notes. With 30 plus posts you get full high-confidence analysis." },
  { q: "Does it generate content for me?", a: "No. Postra gives you strategic direction what types of posts to make, which hooks to use, what to reduce. The creativity is yours." },
  { q: "Is the analysis personalized?", a: "100 percent. Every insight is based on your content, your patterns, and your engagement data from your profile." },
];

export default function StrategySection() {
  const [openFaq, setOpenFaq] = useState(null);

  return (
    <section id="sample-report" className="section-padding bg-[#0D0F0E]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header (Centered) */}
        <div className="text-center mb-24 max-w-[800px] mx-auto">
          <p className="text-[#006D3C] text-sm font-black uppercase tracking-widest mb-6">Strategy Engine</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white leading-tight mb-8">
            Your <i className="italic font-heading">Personalized Report</i>.
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-[620px] mx-auto leading-relaxed text-center">
            Every insight is backed by evidence from your own content history. No more general advice.
          </p>
        </div>

        {/* Stacked Layout for Centering */}
        <div className="flex flex-col items-center gap-20">
          
          {/* Strategy Preview Card (Centered Highlight) */}
          <div className="pill-card p-12 border border-white/10 shadow-2xl space-y-10 w-full max-w-[1000px] bg-white/[0.01]">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-10 pb-6 border-b border-white/[0.05]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/30">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <span className="text-white text-2xl font-extrabold font-heading">Deep Analysis</span>
              </div>
              <div className="flex items-center gap-3 bg-white/[0.05] px-5 py-2.5 rounded-full border border-white/5">
                <span className="text-[#00C16A] text-sm font-black uppercase tracking-widest leading-none">Strategy Preview</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-12">
              {/* Pattern 1 */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
                <div className="bg-[#00C16A]/[0.15] px-8 py-5 flex items-center justify-between border-b border-[#00C16A]/10">
                  <span className="text-[#00C16A] text-sm font-black uppercase tracking-widest">Growth Driver</span>
                </div>
                <div className="bg-[#121212] px-8 py-7">
                  <p className="flex items-start gap-4 text-lg text-[#E5E7EB] leading-relaxed">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#00C16A] mt-[9px] shrink-0 shadow-[0_0_10px_#00C16A]" />
                    Story-based posts generate <span className="text-white font-black underline decoration-[#006D3C] underline-offset-4 decoration-2">2.3x higher retention</span> than standard listicles.
                  </p>
                </div>
              </div>

              {/* Pattern 2 */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-black/40 border border-white/5">
                <div className="bg-rose-500/[0.15] px-8 py-5 flex items-center justify-between border-b border-rose-500/10">
                  <span className="text-rose-500 text-sm font-black uppercase tracking-widest">Engagement Leak</span>
                </div>
                <div className="bg-[#121212] px-8 py-7">
                  <p className="flex items-start gap-4 text-lg text-[#E5E7EB] leading-relaxed">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500 mt-[9px] shrink-0 shadow-[0_0_10px_#EF4444]" />
                    Repetitive daily educational hooks are leading to significant audience drop-off.
                  </p>
                </div>
              </div>
            </div>

            {/* Recommendation Block */}
            <div className="rounded-3xl overflow-hidden bg-gradient-to-br from-[#006D3C]/[0.25] to-transparent border border-[#006D3C]/20 p-10 mt-12">
               <h3 className="text-2xl font-bold font-heading text-white mb-6 uppercase tracking-tight">Direct Recommendation</h3>
               <p className="text-xl text-[#E5E7EB] leading-relaxed mb-8 max-w-[800px]">
                 Focus <span className="text-[#00C16A] font-black underline underline-offset-4 decoration-2">40 percent of your next 5 uploads</span> on storytelling frameworks to stabilize your core engagement.
               </p>
               <div className="flex items-center gap-4 py-4 px-6 bg-black/40 rounded-2xl border border-white/5 inline-flex">
                 <p className="text-[#9CA3AF] text-sm font-bold uppercase tracking-widest">AI Confidence Score:</p>
                 <span className="text-[#00C16A] text-lg font-black tracking-tighter">84.3%</span>
               </div>
            </div>
          </div>

          {/* FAQ Section (Centered Below) */}
          <div className="w-full max-w-[860px] pt-12">
            <h3 className="text-3xl font-extrabold font-heading text-white mb-10 text-center uppercase tracking-tight">Common Questions</h3>
            <div id="faq" className="space-y-5">
              {FAQ_ITEMS.map((item, i) => {
                const isOpen = openFaq === i;
                return (
                  <div key={i} className={`pill-card overflow-hidden transition-all duration-300 ${isOpen ? 'border-[#006D3C]/50 bg-white/[0.06] shadow-2xl shadow-black/40' : 'hover:border-white/20'}`}>
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="w-full flex items-center justify-between px-10 py-6 text-left cursor-pointer"
                    >
                      <span className={`text-lg font-bold font-heading ${isOpen ? 'text-white' : 'text-[#9CA3AF]'}`}>{item.q}</span>
                      <ChevronDown className={`w-6 h-6 text-[#9CA3AF] shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white shadow-[0_0_10px_#006D3C]' : ''}`} />
                    </button>
                    {isOpen && (
                      <div className="px-10 pb-8 animate-fade-in">
                        <p className="text-lg text-[#9CA3AF] leading-relaxed text-center">{item.a}</p>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
