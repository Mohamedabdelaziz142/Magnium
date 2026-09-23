import { useState } from 'react';
import { SECTORS, COMPANIES } from '../../data/portfolioData';

export default function Industries() {
  const [activeSector, setActiveSector] = useState('all');

  const filteredCompanies = activeSector === 'all'
    ? COMPANIES
    : COMPANIES.filter((c) => c.sectorId === activeSector);

  return (
    <section id="industries" className="relative py-24 md:py-32 bg-slate-50 overflow-hidden">
      {/* Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-100/50 rounded-full blur-3xl pointer-events-none -mr-20 -mt-20" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-indigo-100/40 rounded-full blur-3xl pointer-events-none -ml-20 -mb-20" />

      <div className="relative max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-100 text-blue-800 text-xs font-bold uppercase tracking-wider mb-3">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
              Operating Portfolio & Verticals
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 leading-tight tracking-tight">
              A diversified group of <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-700 to-indigo-700">market-leading</span> services.
            </h2>
            <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
              Magnium manages, invests in, and expands mission-critical service providers. Browse our flagship operations, active partnerships, and growth sectors.
            </p>
          </div>

          {/* Acquisition / Expansion note */}
          <div className="hidden lg:block text-right">
            <span className="inline-block text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">
              Portfolio Growth
            </span>
            <p className="text-sm font-bold text-slate-800">
              Actively expanding across EMEA
            </p>
          </div>
        </div>

        {/* Sector Filter Tabs */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar">
          {SECTORS.map((sector) => {
            const count = sector.id === 'all'
              ? COMPANIES.length
              : COMPANIES.filter(c => c.sectorId === sector.id).length;

            const isActive = activeSector === sector.id;

            return (
              <button
                key={sector.id}
                onClick={() => setActiveSector(sector.id)}
                className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold tracking-wide uppercase transition-all duration-200 whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                  isActive
                    ? 'bg-slate-900 text-white shadow-md shadow-slate-900/20 scale-[1.02]'
                    : 'bg-white text-slate-600 hover:bg-slate-100 hover:text-slate-900 border border-slate-200'
                }`}
              >
                {sector.label}
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-extrabold ${
                  isActive ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Portfolio Cards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCompanies.map((company) => (
            <div
              key={company.id}
              className="group bg-white rounded-2xl overflow-hidden border border-slate-200/80 hover:border-blue-500 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Card Image Banner with Badges */}
              <div className="relative h-56 w-full overflow-hidden bg-slate-900">
                <img
                  src={company.image}
                  alt={company.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent" />
                
                {/* Sector & Status Badges */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between gap-2">
                  <span className="px-3 py-1 rounded-full text-[11px] font-bold tracking-wider uppercase bg-white/90 backdrop-blur-md text-slate-900 shadow-sm">
                    {company.sectorLabel}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-semibold tracking-wide uppercase bg-emerald-500/90 text-white">
                    {company.badge}
                  </span>
                </div>

                {/* Company Name Overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-2xl font-black text-white tracking-tight drop-shadow-sm">
                    {company.name}
                  </h3>
                  <p className="text-xs text-blue-200 font-medium tracking-wide">
                    {company.headline}
                  </p>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <p className="text-sm text-slate-600 leading-relaxed mb-6">
                    {company.description}
                  </p>

                  {/* Micro Stats Strip */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-3.5 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                    {company.stats.map((stat, i) => (
                      <div key={i} className="text-center">
                        <span className="block text-xs font-black text-slate-900">
                          {stat.value}
                        </span>
                        <span className="block text-[10px] text-slate-500 uppercase tracking-tight">
                          {stat.label}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Core Services Pills */}
                  <div className="mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2">
                      Core Operations
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {company.services.map((srv, idx) => (
                        <span
                          key={idx}
                          className="px-2.5 py-1 rounded-lg bg-slate-100 text-slate-700 text-xs font-medium"
                        >
                          {srv.title}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer Link / Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <a
                    href={company.url}
                    target={company.url.startsWith('http') ? '_blank' : '_self'}
                    rel={company.url.startsWith('http') ? 'noreferrer' : undefined}
                    className="inline-flex items-center gap-2 text-sm font-bold text-blue-700 hover:text-blue-900 uppercase tracking-wider group-hover:gap-3 transition-all"
                  >
                    {company.url.startsWith('http') ? 'Visit Official Portal' : 'Inquire for Partnership'}
                    <span aria-hidden="true">&rarr;</span>
                  </a>

                  <span className="text-[11px] font-semibold text-slate-400">
                    {company.status}
                  </span>
                </div>
              </div>
            </div>
          ))}

          {/* Dynamic "Join Our Group / Expand With Magnium" Card */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-800 to-blue-950 rounded-2xl p-8 text-white flex flex-col justify-between border border-white/10 shadow-lg relative overflow-hidden">
            <div className="absolute -right-10 -bottom-10 w-48 h-48 bg-blue-500/20 rounded-full blur-2xl pointer-events-none" />
            
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 text-xs font-bold uppercase tracking-wider mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-blue-400 animate-ping" />
                Sector Expansion
              </div>

              <h3 className="text-2xl font-black text-white mb-3">
                Are you a leading service company?
              </h3>

              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                Magnium is continually acquiring, integrating, and co-investing in high-potential service enterprises across pest control, facility management, and specialized B2B operations.
              </p>

              <ul className="space-y-2 text-xs text-slate-200 mb-8">
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Shared ERP & Automation Tech Stack
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Global Operating Methodologies & IPM
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-emerald-400 font-bold">✓</span> Enterprise Client Network & Scale
                </li>
              </ul>
            </div>

            <div>
              <a
                href="#contact"
                className="w-full inline-flex items-center justify-center gap-2 bg-white hover:bg-slate-100 text-slate-950 text-xs font-black uppercase tracking-wider py-3.5 px-6 rounded-xl transition-all shadow-md hover:shadow-xl"
              >
                Inquire for Portfolio Integration
                <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}