import { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Platforms", href: "#platforms" },
  { label: "Sample Report", href: "#sample-report" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleLinkClick = () => setMobileOpen(false);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-bg/90 backdrop-blur-xl border-b border-border shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-purple-500 flex items-center justify-center shadow-lg shadow-accent-glow">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold text-lg tracking-tight text-text-primary">Postra</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3.5 py-2 text-sm text-text-muted hover:text-text-primary transition-colors rounded-lg hover:bg-white/5"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#home"
            className="ml-3 px-5 py-2 rounded-lg bg-accent hover:bg-accent/90 text-white text-sm font-semibold transition-all shadow-lg shadow-accent-glow/30"
          >
            Analyze My Content
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-white/5 transition-colors cursor-pointer"
        >
          {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden bg-bg/95 backdrop-blur-xl border-t border-border">
          <div className="px-6 py-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={handleLinkClick}
                className="block px-4 py-3 text-sm text-text-secondary hover:text-text-primary hover:bg-white/5 rounded-lg transition-colors"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#home"
              onClick={handleLinkClick}
              className="block mt-3 px-4 py-3 rounded-lg bg-accent text-white text-sm font-semibold text-center"
            >
              Analyze My Content
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
