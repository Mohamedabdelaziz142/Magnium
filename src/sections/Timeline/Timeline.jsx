const MILESTONES = [
  {
    year: '1901',
    title: 'Orkin Founded',
    description:
      'Otto Orkin starts a small pest control operation in the United States, laying the foundation for what would become one of the world\'s largest pest management companies.',
  },
  {
    year: '1960s',
    title: 'Global Expansion Begins',
    description:
      'Orkin expands internationally, entering new markets and establishing a reputation for science-based Integrated Pest Management across multiple continents.',
  },
  {
    year: '2010',
    title: 'Orkin Türkiye Established',
    description:
      'The Orkin brand enters the Turkish market, bringing over a century of expertise to commercial and residential pest management across the country.',
  },
  {
    year: '2018',
    title: 'Integra Pro Solutions Launched',
    description:
      'A dedicated technology company is founded in Egypt as an Odoo Silver Partner, specialising in ERP systems, custom apps, and digital transformation.',
  },
  {
    year: '2023',
    title: 'Magnium Network Formed',
    description:
      'The Magnium Global Network is established, unifying Orkin Türkiye and Integra Pro Solutions under a shared vision of trust, service, and technology.',
  },
  {
    year: 'Today',
    title: 'Operating Across Markets',
    description:
      'Magnium companies serve clients in Turkey, Egypt, and beyond — with plans to expand the network into new industries and regions.',
  },
];

export default function Timeline() {
  return (
    <section id="milestones" className="max-w-7xl mx-auto px-6 py-20 md:py-28">
      <div className="max-w-2xl mx-auto text-center mb-16">
        <p className="text-magnium text-xs font-semibold uppercase tracking-widest mb-4">
          Our journey
        </p>
        <h2 className="text-3xl md:text-4xl font-black text-slate-900 leading-tight tracking-tight mb-4">
          Milestones that shaped our network.
        </h2>
        <p className="text-slate-600 leading-relaxed">
          Over a century of expertise, innovation, and growth — brought together under one global network.
        </p>
      </div>

      {/* Timeline */}
      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 md:-translate-x-px top-0 bottom-0 w-0.5 bg-slate-200" aria-hidden="true" />

        <div className="space-y-12">
          {MILESTONES.map((milestone, index) => {
            const isLeft = index % 2 === 0;

            return (
              <div
                key={milestone.year}
                className={`relative flex items-start md:items-center gap-8 ${
                  isLeft ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 w-3.5 h-3.5 rounded-full bg-magnium border-[3px] border-white shadow-sm z-10 mt-1.5 md:mt-0" />

                {/* Content card */}
                <div
                  className={`ml-14 md:ml-0 md:w-[calc(50%-2.5rem)] ${
                    isLeft ? 'md:text-right md:pr-0' : 'md:text-left md:pl-0'
                  }`}
                >
                  <div className="bg-white border border-slate-200 rounded-xl p-6 hover:border-magnium hover:shadow-md transition-all duration-300">
                    <span className="inline-block text-xs font-bold text-magnium uppercase tracking-widest mb-2 bg-magnium/5 px-3 py-1 rounded-full">
                      {milestone.year}
                    </span>
                    <h3 className="text-lg font-bold text-slate-900 mb-2">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-slate-600 leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden md:block md:w-[calc(50%-2.5rem)]" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
