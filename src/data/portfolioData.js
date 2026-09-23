/**
 * Portfolio Data Registry for Magnium Group
 * 
 * To add, edit, or remove a company or sector:
 * - Add/edit/remove an entry in SECTORS or COMPANIES below.
 * - The entire website (Explorer, filters, cards, and services) updates automatically!
 */

export const SECTORS = [
  { id: 'all', label: 'All Portfolio' },
  { id: 'pest-control', label: 'Pest & Environmental Health' },
  { id: 'digital-erp', label: 'Digital Operations & ERP' },
  { id: 'facility-services', label: 'Facility & Industrial Services' },
];

export const COMPANIES = [
  {
    id: 'orkin-turkiye',
    name: 'Orkin Türkiye',
    sectorId: 'pest-control',
    sectorLabel: 'Pest & Environmental Health',
    badge: 'Flagship Operating Company',
    status: 'Active Operating Leader',
    headline: 'Global Pest Management & Environmental Biosecurity',
    description:
      'Bringing over 120 years of science-backed Integrated Pest Management (IPM), international fumigation, and health-grade sanitization to commercial enterprises and residences across Turkey.',
    image: '/images/orkin-service.jpg',
    url: 'https://www.orkin.com.tr',
    featured: true,
    stats: [
      { label: 'Global Heritage', value: 'Since 1901' },
      { label: 'Worldwide Footprint', value: '70+ Countries' },
      { label: 'Standard', value: 'Rollins IPM' },
    ],
    services: [
      {
        title: 'Integrated Pest Management',
        description: 'Science-based pest prevention, detection, and control tailored for industrial, hospitality, and residential sites.',
      },
      {
        title: 'Fumigation & Disinfection',
        description: 'Advanced thermal treatments, export fumigation, and pathogen decontamination meeting international standards.',
      },
      {
        title: 'Bird & Wildlife Exclusion',
        description: 'Humane architectural exclusion systems for logistics hubs, food processing facilities, and airports.',
      },
    ],
  },
  {
    id: 'integra-pro-solutions',
    name: 'Integra Pro Solutions',
    sectorId: 'digital-erp',
    sectorLabel: 'Digital Operations & ERP',
    badge: 'Digital Solutions Champion',
    status: 'Active Technology Partner',
    headline: 'Enterprise ERP Implementation, AI & Mobile Systems',
    description:
      'An Odoo Silver Partner driving digital transformation through full-cycle ERP implementations, customized field-service mobile apps, and machine-learning automations.',
    image: '/images/digital-erp.jpg',
    url: 'https://www.integra-prosolutions.com',
    featured: true,
    stats: [
      { label: 'Partner Status', value: 'Odoo Silver' },
      { label: 'Focus', value: 'ERP & AI' },
      { label: 'Delivery', value: 'Full-Cycle' },
    ],
    services: [
      {
        title: 'Full-Cycle Odoo ERP Deployment',
        description: 'End-to-end ERP configuration, data migration, and operations workflows tailored to corporate scalability.',
      },
      {
        title: 'AI & Process Automation',
        description: 'Predictive intelligence, business process automation, and smart analytics eliminating operational friction.',
      },
      {
        title: 'Custom Field & Mobile Applications',
        description: 'Cross-platform mobile applications connecting field service teams, logistics, and executive dashboards.',
      },
    ],
  },
  {
    id: 'facility-industrial-expansion',
    name: 'Magnium Facility & Environmental Services',
    sectorId: 'facility-services',
    sectorLabel: 'Facility & Industrial Services',
    badge: 'Expanding Vertical',
    status: 'Active Expansion & Partnerships',
    headline: 'Smart Building Upkeep & Industrial Infrastructure Support',
    description:
      'Magnium is expanding its service ecosystem into comprehensive commercial facility maintenance, energy monitoring, and specialized industrial sanitation across corporate complexes.',
    image: '/images/facility-management.jpg',
    url: '#contact',
    featured: false,
    stats: [
      { label: 'Target Scope', value: 'Commercial / Hubs' },
      { label: 'Model', value: 'Smart FM' },
      { label: 'Opportunity', value: 'Open for Partners' },
    ],
    services: [
      {
        title: 'Smart Facility Maintenance',
        description: 'Preventive mechanical, electrical, and structural maintenance for commercial real estate and campus facilities.',
      },
      {
        title: 'Specialized Industrial Sanitation',
        description: 'Heavy-duty industrial cleaning, hazardous residue neutralization, and cleanroom sanitization.',
      },
      {
        title: 'Energy & ESG Compliance Audits',
        description: 'Comprehensive utility optimization and sustainability reporting for multi-tenant commercial centers.',
      },
    ],
  },
];

export const NETWORK_STATS = [
  { value: '120+', label: 'Years Combined Heritage' },
  { value: '70+', label: 'Countries with Network Reach' },
  { value: '100%', label: 'Global Standard Compliance' },
  { value: '24/7', label: 'Commercial Operational Readiness' },
];

export const MAGNIUM_ADVANTAGES = [
  {
    title: 'Global Operating Standards',
    description: 'We bring internationally proven protocols, such as Rollins Inc. IPM methodologies, ensuring our service providers deliver gold-standard compliance.',
    icon: 'shield',
  },
  {
    title: 'Centralized Digital Core',
    description: 'Every operating company benefits from modern ERP backbones, field-service mobile apps, and automated client reporting powered by Integra Pro.',
    icon: 'cpu',
  },
  {
    title: 'Multi-Service Synergy',
    description: 'Enterprise clients can manage environmental health, pest control, and facility tech under a single trusted management umbrella.',
    icon: 'layers',
  },
  {
    title: 'Strategic Growth & Capital',
    description: 'We provide service business owners with the executive guidance, operational scale, and capital required to dominate their regional market.',
    icon: 'trending-up',
  },
];
