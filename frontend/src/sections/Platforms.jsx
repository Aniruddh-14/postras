import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons';

const PLATFORMS = [
  {
    icon: TwitterIcon,
    name: "Twitter / X",
    color: "#1DA1F2",
    gradient: "from-sky-500/10 to-sky-600/5",
    features: [
      "Short post & thread analysis",
      "Hook style classification",
      "Engagement pattern scoring",
      "Repetition & novelty signals",
      "Posting cadence insights",
    ],
  },
  {
    icon: InstagramIcon,
    name: "Instagram",
    color: "#E4405F",
    gradient: "from-pink-500/10 to-pink-600/5",
    features: [
      "Caption style analysis",
      "Carousel text extraction",
      "Reel caption patterns",
      "Educational vs lifestyle balance",
      "Content repetition detection",
    ],
  },
  {
    icon: LinkedinIcon,
    name: "LinkedIn",
    color: "#0A66C2",
    gradient: "from-blue-600/10 to-blue-700/5",
    features: [
      "Thought leadership scoring",
      "Authority-building pattern analysis",
      "Post format optimization",
      "Audience response trends",
      "Professional tone classification",
    ],
  },
  {
    icon: YoutubeIcon,
    name: "YouTube",
    color: "#FF0000",
    gradient: "from-red-500/10 to-red-600/5",
    features: [
      "Title pattern analysis",
      "Description optimization",
      "Transcript-based insights",
      "Topic clustering",
      "Long-form vs short-form patterns",
    ],
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-24 md:py-32 relative">
      {/* Subtle glow */}
      <div className="absolute top-[40%] left-[50%] -translate-x-1/2 w-[60vw] h-[30vw] bg-accent/[0.02] blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">Platforms</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            One strategist. Four platforms.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            Postra understands the nuances of each platform and tailors its analysis accordingly.
          </p>
        </div>

        {/* Platform cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {PLATFORMS.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-bg-card p-7 transition-all glow-border hover:border-border-light"
              >
                <div className="flex items-center gap-4 mb-5">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${platform.gradient} flex items-center justify-center`}>
                    <Icon className="w-6 h-6" style={{ color: platform.color }} />
                  </div>
                  <h3 className="text-xl font-bold text-text-primary">{platform.name}</h3>
                </div>

                <ul className="space-y-2.5">
                  {platform.features.map((feature, j) => (
                    <li key={j} className="flex items-center gap-3 text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 rounded-full bg-accent/50" />
                      {feature}
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
