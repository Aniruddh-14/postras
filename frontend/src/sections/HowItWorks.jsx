import { Link2, Cpu, Lightbulb } from 'lucide-react';

const STEPS = [
  {
    icon: Link2,
    title: "Connect your content",
    description: "Enter your handle on Twitter, Instagram, LinkedIn, or YouTube. We pull your posts and start analyzing.",
    color: "from-blue-500/20 to-blue-600/5",
    iconColor: "text-blue-400",
  },
  {
    icon: Cpu,
    title: "Postra analyzes your patterns",
    description: "Our engine classifies your content by type, tone, hook, and format — then scores what actually drives engagement.",
    color: "from-purple-500/20 to-purple-600/5",
    iconColor: "text-purple-400",
  },
  {
    icon: Lightbulb,
    title: "Get personalized strategy",
    description: "Receive a report with evidence-backed insights and clear next steps tailored to your content style.",
    color: "from-emerald-500/20 to-emerald-600/5",
    iconColor: "text-emerald-400",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 md:py-24">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold text-text-primary">
            How It Works
          </h2>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-5">
          {STEPS.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-border bg-bg-card p-6 text-center transition-all hover:border-border-light glow-border"
              >
                <div className="flex justify-center mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${step.color} flex items-center justify-center`}>
                    <Icon className={`w-6 h-6 ${step.iconColor}`} />
                  </div>
                </div>
                <h3 className="text-base font-bold text-text-primary mb-2">{step.title}</h3>
                <p className="text-text-muted text-sm leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
