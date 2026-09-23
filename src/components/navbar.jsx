import { useState } from 'react';
import { BRAND_LOGO } from '../constants';

const NAV_LINKS = [
  { href: '#heritage', label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#industries', label: 'Industries' },
  { href: '#milestones', label: 'Our Journey' },
  { href: '#contact', label: 'Contact' },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-slate-200 bg-white/95 backdrop-blur-sm sticky top-0 z-[999]">
      <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
        <a href="#top" className="flex items-center gap-4">
          <img src={BRAND_LOGO} alt="Magnium logo" className="h-16 w-auto object-contain" />
          <span className="text-slate-400 text-xs font-semibold uppercase tracking-widest border-l border-slate-200 pl-4 hidden sm:inline">
            Global Network
          </span>
        </a>

        <nav aria-label="Main navigation" className="hidden md:flex gap-8 text-sm font-semibold text-slate-700">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="relative py-1 hover:text-magnium transition-colors focus-visible:outline-2 focus-visible:outline-magnium focus-visible:outline-offset-4 rounded-sm">
              {link.label}
            </a>
          ))}
        </nav>

        <a href="#contact" className="hidden md:inline-block bg-magnium hover:bg-magnium-light text-white text-xs font-bold py-2.5 px-5 rounded-lg uppercase tracking-wider transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-magnium">
          Get in Touch
        </a>

        <button className="md:hidden p-2 -mr-2 focus-visible:outline-2 focus-visible:outline-magnium rounded-sm" aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen} onClick={() => setMenuOpen((v) => !v)}>
          <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-transform ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <div className={`w-6 h-0.5 bg-slate-800 mb-1.5 transition-opacity ${menuOpen ? 'opacity-0' : ''}`} />
          <div className={`w-6 h-0.5 bg-slate-800 transition-transform ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {menuOpen && (
        <nav aria-label="Mobile navigation" className="md:hidden border-t border-slate-200 bg-white px-6 py-4 flex flex-col gap-4">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)} className="font-semibold text-slate-700 focus-visible:outline-2 focus-visible:outline-magnium rounded-sm">
              {link.label}
            </a>
          ))}
          <a href="#contact" onClick={() => setMenuOpen(false)} className="bg-magnium text-white text-center font-bold py-2.5 rounded-lg text-sm uppercase">
            Get in Touch
          </a>
        </nav>
      )}
    </header>
  );
}