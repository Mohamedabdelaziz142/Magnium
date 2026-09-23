import { useState } from 'react';

const SERVICES = [
  {
    title: 'Integrated Pest Management (IPM)',
    description:
      'Science-based pest prevention and biosecurity programmes for commercial, industrial, and food-handling facilities — protecting health, brand reputation, and regulatory compliance.',
    company: 'Orkin Türkiye',
    companyTag: 'Flagship Operating Company',
    sector: 'pest-control',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: 'Bird & Wildlife Exclusion Systems',
    description:
      'Humane architectural exclusion, sensory deterrents, and physical barrier netting for commercial airports, warehouses, hospitality, and grain production sites.',
    company: 'Orkin Türkiye',
    companyTag: 'Flagship Operating Company',
    sector: 'pest-control',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M16 7h.01" />
        <path d="M3.4 18H12a8 8 0 0 0 8-8V7a4 4 0 0 0-7.28-2.3L2 20" />
        <path d="m20 7 2 .5-2 .5" />
        <path d="M10 18v3" />
        <path d="M14 17.75V21" />
        <path d="M7 18a6 6 0 0 0 3.84-10.61" />
      </svg>
    ),
  },
  {
    title: 'Full-Cycle Odoo ERP Implementation',
    description:
      'Turnkey enterprise resource planning — from workflow blueprinting and data migration to live deployment and localized compliance — built on Odoo.',
    company: 'Integra Pro Solutions',
    companyTag: 'Digital Partner',
    sector: 'digital-erp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <path d="M8 21h8" />
        <path d="M12 17v4" />
        <path d="M7 8h2" />
        <path d="M7 12h4" />
      </svg>
    ),
  },
  {
    title: 'AI & Automated Business Workflows',
    description:
      'Custom machine learning models, intelligent dispatch bots, and operational automations eliminating repetitive tasks and delivering real-time business telemetry.',
    company: 'Integra Pro Solutions',
    companyTag: 'Digital Partner',
    sector: 'digital-erp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2a4 4 0 0 1 4 4v1a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2V6a4 4 0 0 1 4-4z" />
        <path d="M9 8h.01" />
        <path d="M15 8h.01" />
        <path d="M10 14v2a2 2 0 1 0 4 0v-2" />
        <path d="M5 18a7 7 0 0 0 14 0" />
      </svg>
    ),
  },
  {
    title: 'Custom Field Service Mobile Apps',
    description:
      'Cross-platform mobile applications seamlessly connected to core ERP systems — empowering field technicians, inventory managers, and customer portals.',
    company: 'Integra Pro Solutions',
    companyTag: 'Digital Partner',
    sector: 'digital-erp',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <rect x="5" y="2" width="14" height="20" rx="2" />
        <path d="M12 18h.01" />
      </svg>
    ),
  },
  {
    title: 'Smart Facility Maintenance',
    description:
      'Condition-based mechanical, electrical, and structural upkeep for commercial headquarters, retail malls, and industrial complexes.',
    company: 'Facility Services',
    companyTag: 'Expanding Sector',
    sector: 'facility-services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M3 21h18" />
        <path d="M5 21V7l8-4v18" />
        <path d="M19 21V11l-6-4" />
        <path d="M9 9h1" />
        <path d="M9 13h1" />
        <path d="M9 17h1" />
      </svg>
    ),
  },
  {
    title: 'Specialized Industrial Sanitation',
    description:
      'High-grade cleanroom sanitation, chemical residue decontamination, and certified industrial hygiene programs for heavy manufacturing.',
    company: 'Facility Services',
    companyTag: 'Expanding Sector',
    sector: 'facility-services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v4" />
        <path d="m4.93 4.93 2.83 2.83" />
        <path d="M2 12h4" />
        <path d="m4.93 19.07 2.83-2.83" />
        <path d="M12 18v4" />
        <path d="m19.07 19.07-2.83-2.83" />
        <path d="M18 12h4" />
        <path d="m19.07 4.93-2.83 2.83" />
      </svg>
    ),
  },
  {
    title: 'ESG & Utility Compliance Audits',
    description:
      'End-to-end environmental sustainability assessments, water stewardship, and energy efficiency analytics for green building certification.',
    company: 'Facility Services',
    companyTag: 'Expanding Sector',
    sector: 'facility-services',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
        <path d="M12 2v20" />
        <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
  },
];

export default function Services() {
  const [filter, setFilter] = useState('all');

  const filteredServices = filter === 'all'
    ? SERVICES
    : SERVICES.filter((s) => s.sector === filter);

  return (
    <section id="services" className="max-w-7xl mx-auto px-6 py-24 md:py-32">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
            Specialized Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
            Comprehensive solutions across our network.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            From safeguarding commercial health and facilities to automating enterprise back-office workflows, our network provides specialized services backed by verified global standards.
          </p>
        </div>

        {/* Filter Pills */}
        <div className="flex flex-wrap gap-2">
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'all' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            All ({SERVICES.length})
          </button>
          <button
            onClick={() => setFilter('pest-control')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'pest-control' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Orkin Türkiye
          </button>
          <button
            onClick={() => setFilter('digital-erp')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'digital-erp' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Integra Pro
          </button>
          <button
            onClick={() => setFilter('facility-services')}
            className={`px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              filter === 'facility-services' ? 'bg-blue-900 text-white' : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
            }`}
          >
            Facility Services
          </button>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredServices.map((service) => (
          <div
            key={service.title}
            className="group bg-white border border-slate-200/90 rounded-2xl p-7 flex flex-col justify-between hover:border-blue-600 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-blue-50/50 rounded-bl-full pointer-events-none group-hover:bg-blue-100/60 transition-colors" />

            <div>
              {/* Header Icon + Tag */}
              <div className="flex items-center justify-between mb-6">
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300 shadow-sm">
                  {service.icon}
                </div>
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-600">
                  {service.companyTag}
                </span>
              </div>

              <h3 className="text-lg font-bold text-slate-900 mb-2.5 group-hover:text-blue-700 transition-colors">
                {service.title}
              </h3>
              
              <p className="text-sm text-slate-600 leading-relaxed mb-6">
                {service.description}
              </p>
            </div>

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
              <span className="text-xs font-bold text-slate-900">
                {service.company}
              </span>
              <a
                href="#contact"
                className="text-xs font-bold text-blue-600 hover:text-blue-800 uppercase tracking-wider inline-flex items-center gap-1"
              >
                Inquire &rarr;
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
