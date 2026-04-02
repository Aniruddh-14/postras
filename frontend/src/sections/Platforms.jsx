import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons';
import { ChevronRight } from 'lucide-react';

const PLATFORMS = [
  {
    icon: TwitterIcon, name: "Twitter / X", color: "#1DA1F2",
    bg: "from-sky-500/10 to-transparent",
    features: ["Short post & thread analysis", "Hook style classification", "Engagement pattern scoring", "Posting cadence insights"],
  },
  {
    icon: InstagramIcon, name: "Instagram", color: "#E4405F",
    bg: "from-pink-500/10 to-transparent",
    features: ["Caption style analysis", "Carousel text extraction", "Reel caption patterns", "Content mix analysis"],
  },
  {
    icon: LinkedinIcon, name: "LinkedIn", color: "#0A66C2",
    bg: "from-blue-600/10 to-transparent",
    features: ["Thought leadership scoring", "Authority-building analysis", "Audience response trends", "Professional tone detection"],
  },
  {
    icon: YoutubeIcon, name: "YouTube", color: "#FF0000",
    bg: "from-red-500/10 to-transparent",
    features: ["Title pattern analysis", "Description optimization", "Transcript-based insights", "Topic clustering"],
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="section-padding bg-[#0D0F0E]">
      <div className="max-w-[1240px] mx-auto px-6">
        {/* Header (Centered) */}
        <div className="text-center mb-24 max-w-[800px] mx-auto">
          <p className="text-[#006D3C] text-sm font-black uppercase tracking-widest mb-6">Supported Platforms</p>
          <h2 className="text-4xl md:text-6xl font-extrabold font-heading text-white leading-tight mb-8">
            Multi-platform <i className="italic font-heading">intelligence</i>.
          </h2>
          <p className="text-[#9CA3AF] text-xl max-w-[680px] mx-auto leading-relaxed text-center">
            Postra understands the nuances of each platform and tailors its analysis accordingly. No more guessing.
          </p>
        </div>

        {/* 4 Cards (Centered Internal Content) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {PLATFORMS.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={i} className="pill-card p-10 group transition-all hover:bg-white/[0.04] hover:shadow-2xl hover:shadow-[#006D3C]/5 hover:-translate-y-2 text-center flex flex-col items-center">
                <div className={`w-16 h-16 rounded-3xl bg-gradient-to-br ${p.bg} flex items-center justify-center mb-8 shadow-xl`}>
                  <Icon className="w-8 h-8" style={{ color: p.color }} />
                </div>
                <h3 className="text-2xl font-bold font-heading text-white mb-8 group-hover:text-[#006D3C] transition-colors uppercase tracking-tight">{p.name}</h3>
                <ul className="space-y-4 mb-10 w-full">
                  {p.features.map((f, j) => (
                    <li key={j} className="flex items-center justify-center gap-3 text-base text-[#9CA3AF] leading-relaxed group-hover:text-[#E5E7EB]">
                      <div className="w-2 h-2 rounded-full bg-[#006D3C] shrink-0 opacity-40 group-hover:opacity-100 transition-opacity" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
