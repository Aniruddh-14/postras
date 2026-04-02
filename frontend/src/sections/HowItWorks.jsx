import { Link2, Cpu, Lightbulb } from 'lucide-react';

const STEPS = [
  {
    icon: Link2,
    number: "01",
    title: "Connect your content",
    description: "Enter your handle or upload your content from any platform. Postra ingests your posts, captions, titles, and transcripts.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    number: "02",
    title: "Postra analyzes your patterns",
    description: "Our AI engine classifies your content by type, tone, hook, topic, and format. It scores engagement and finds what's really driving results.",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Lightbulb,
    number: "03",
    title: "Get personalized strategy",
    description: "Receive a strategic report with specific insights, pattern-backed evidence, and clear next actions tailored to your content.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-24 md:py-32 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-accent text-sm font-semibold tracking-wide uppercase mb-3">How It Works</p>
          <h2 className="text-3xl md:text-4xl font-bold text-text-primary mb-4">
            Three steps to smarter content.
          </h2>
          <p className="text-text-secondary max-w-2xl mx-auto text-lg">
            No complex setup. Just connect, analyze, and act.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-6">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="group rounded-2xl border border-border bg-bg-card p-8 transition-all hover:border-border-light glow-border"
              >
                {/* Icon + number */}
                <div className="flex items-center justify-between mb-6">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                  <span className="text-3xl font-black text-border-light group-hover:text-border transition-colors">
                    {step.number}
                  </span>
                </div>

                {/* Text */}
                <h3 className="text-lg font-bold text-text-primary mb-3">{step.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
