import { useState, useEffect } from 'react';
import { Activity, Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Platforms", href: "#platforms" },
  { label: "Sample Report", href: "#sample-report" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#0D0F0E]/90 backdrop-blur-xl border-b border-white/5' : 'bg-transparent'
    }`}>
      <div className="max-w-[1240px] mx-auto px-6 py-4 md:py-6 flex flex-col items-center gap-4 transition-all">
        {/* LOGO (Centered) */}
        <a href="#home" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#006D3C] flex items-center justify-center shadow-lg shadow-[#006D3C]/20">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="font-heading font-extrabold text-[#FFFFFF] tracking-tighter text-lg uppercase">Postra</span>
        </a>

        {/* NAV LINKS (CENTERED) */}
        <div className="hidden md:flex items-center gap-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-4 py-2 text-sm font-medium text-[#9CA3AF] hover:text-white transition-all relative group"
            >
              {link.label}
              <span className="absolute bottom-1 left-4 right-4 h-0.5 bg-[#006D3C] scale-x-0 group-hover:scale-x-100 transition-transform origin-left" />
            </a>
          ))}
        </div>

        {/* MOBILE TOGGLE (ABSOLUTE FOR CENTERED LOOK) */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden absolute right-6 top-6 p-2 text-[#9CA3AF] hover:text-white cursor-pointer"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {mobileOpen && (
        <div className="md:hidden bg-[#0D0F0E]/98 backdrop-blur-3xl border-t border-white/5 animate-fade-in">
          <div className="px-6 py-8 space-y-6 text-center">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileOpen(false)}
                className="block text-xl font-bold font-heading text-[#9CA3AF] hover:text-white"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
