import { TwitterIcon, InstagramIcon, LinkedinIcon, YoutubeIcon } from '../components/BrandIcons';

const PLATFORMS = [
  {
    icon: TwitterIcon,
    name: "Twitter/X",
    color: "#1DA1F2",
    features: ["Post analysis", "Hook style classification", "Engagement pattern scoring", "Cadence insights"],
  },
  {
    icon: InstagramIcon,
    name: "Instagram",
    color: "#E4405F",
    features: ["Caption style analysis", "Carousel text extraction", "Reel caption patterns", "Content mix analysis"],
  },
  {
    icon: LinkedinIcon,
    name: "LinkedIn",
    color: "#0A66C2",
    features: ["Thought leadership scoring", "Authority-building analysis", "Audience response trends", "Professional tone detection"],
  },
  {
    icon: YoutubeIcon,
    name: "YouTube",
    color: "#FF0000",
    features: ["Title pattern analysis", "Description optimization", "Transcript-based insights", "Topic clustering"],
  },
];

export default function Platforms() {
  return (
    <section id="platforms" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            Supported Platforms
          </h2>
        </div>

        {/* 4 compact cards in a row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {PLATFORMS.map((platform, i) => {
            const Icon = platform.icon;
            return (
              <div
                key={i}
                className="rounded-xl border border-border bg-bg-card p-5 transition-all hover:border-border-light glow-border"
              >
                <div className="flex items-center gap-2.5 mb-4">
                  <Icon className="w-5 h-5" style={{ color: platform.color }} />
                  <h3 className="text-sm font-bold text-text-primary">{platform.name}</h3>
                </div>
                <ul className="space-y-1.5">
                  {platform.features.map((f, j) => (
                    <li key={j} className="flex items-start gap-2 text-xs text-text-muted">
                      <div className="w-1 h-1 rounded-full bg-text-muted mt-1.5 shrink-0" />
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
