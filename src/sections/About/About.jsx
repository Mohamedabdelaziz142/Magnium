export default function About() {
  return (
    <section id="heritage" className="bg-magnium relative overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none"
        viewBox="0 0 1200 500"
        preserveAspectRatio="xMidYMid slice"
        aria-hidden="true"
      >
        <g opacity="0.06" fill="#fff">
          <polygon points="1000,60 1060,95 1060,165 1000,200 940,165 940,95" />
          <polygon points="1100,180 1160,215 1160,285 1100,320 1040,285 1040,215" />
          <polygon points="950,300 1010,335 1010,405 950,440 890,405 890,335" />
        </g>
      </svg>

      <div className="relative max-w-7xl mx-auto px-6 py-20 md:py-28">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-200 text-xs font-bold uppercase tracking-[0.2em] mb-4">
            Who We Are
          </p>
          
          <h2 className="text-3xl md:text-5xl font-black text-white leading-tight mb-8 tracking-tight">
            A network of industry leaders, operating at the highest global standards.
          </h2>
          
          <p className="text-lg md:text-xl text-blue-100/90 leading-relaxed mb-8">
            Magnium is a specialized group of independently operated companies, each renowned in its respective field. From safeguarding environments through Orkin Türkiye's world-class pest management and facility services, to driving digital innovation with Integra Pro Solutions' advanced ERP and AI systems &mdash;
          </p>
          
          <p className="text-xl md:text-2xl font-bold text-white leading-snug">
            we share a single, unwavering commitment: delivering measurable, trusted results across every industry we serve.
          </p>
        </div>
      </div>
    </section>
  );
}