const VALUES = [
  {
    title: 'Trust & Integrity',
    description:
      'Every company in our network is built on transparent relationships, ethical practices, and a commitment to delivering what we promise — every time.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
        <path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    title: 'Innovation First',
    description:
      'From AI-driven automation to science-based pest management, we invest in technologies that keep our companies — and our clients — ahead of the curve.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <path d="M12 2v4" />
        <path d="m6.34 6.34 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="m6.34 17.66 2.83-2.83" />
        <path d="M12 18v4" />
        <path d="m17.66 17.66-2.83-2.83" />
        <path d="M22 12h-4" />
        <path d="m17.66 6.34-2.83 2.83" />
        <circle cx="12" cy="12" r="3" />
      </svg>
    ),
  },
  {
    title: 'Global Standards',
    description:
      'Operating across multiple countries and industries, we uphold internationally recognised certifications and compliance frameworks in everything we do.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
  },
  {
    title: 'Technology-Driven',
    description:
      'We believe the best results come from pairing deep domain expertise with modern technology — ERP systems, mobile platforms, IoT, and data analytics.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
        <line x1="14" y1="4" x2="10" y2="20" />
      </svg>
    ),
  },
];

export default function Values() {
  return (
    <section id="values" className="bg-magnium relative overflow-hidden">
      {/* Decorative hexagons */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g opacity="0.05" fill="#fff">
          <polygon points="100,60 160,95 160,165 100,200 40,165 40,95" />
          <polygon points="200,300 260,335 260,405 200,440 140,405 140,335" />
          <polygon points="1050,80 1110,115 1110,185 1050,220 990,185 990,115" />
          <polygon points="1130,350 1190,385 1190,455 1130,490 1070,455 1070,385" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-blue-200 text-xs font-semibold uppercase tracking-widest mb-4">
            Why Magnium
          </p>
          <h2 className="text-3xl md:text-4xl font-black text-white leading-tight tracking-tight mb-4">
            The principles that drive every company we build.
          </h2>
          <p className="text-blue-100/70 leading-relaxed">
            Across every industry and every market, these four pillars define how we operate and the standard we hold ourselves to.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {VALUES.map((value) => (
            <div
              key={value.title}
              className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-xl p-7 text-center hover:bg-white/[0.12] transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-full bg-white/10 text-blue-200 flex items-center justify-center mx-auto mb-5">
                {value.icon}
              </div>
              <h3 className="text-lg font-bold text-white mb-3">
                {value.title}
              </h3>
              <p className="text-sm text-blue-100/60 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
