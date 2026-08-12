export const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://wp-bpm.improxtech.com/graphql';

export async function fetchGraphQL(query: string, variables?: any) {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      next: { revalidate: 60 },
    });

    const json = await res.json();
    if (json.errors) {
      console.error(json.errors);
      throw new Error('Failed to fetch API');
    }
    return json.data;
  } catch (error) {
    console.error('GraphQL Fetch Error:', error);
    return null;
  }
}

export type ServiceData = {
  title: string;
  slug: string;
  category: string;
  image: string;
  secondaryImage: string;
  overview: string;
  deliverables: { title: string; description: string; icon: string }[];
  methodology: { step: number; title: string; description: string }[];
  businessImpact: { title: string; description: string }[];
};

const MOCK_SERVICES: ServiceData[] = [
  {
    title: 'Master Data Management',
    slug: 'master-data',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
    overview: 'Inconsistent data across siloed departments leads to catastrophic decision-making errors. Our Master Data Management (MDM) services ensure that your enterprise has a singular, infallible source of truth.',
    deliverables: [
      { title: 'Data Cleansing', description: 'Aggressive deduplication and standardization of corrupted, legacy database structures.', icon: 'Eraser' },
      { title: 'Governance Frameworks', description: 'Implementing strict data entry protocols to ensure long-term database integrity.', icon: 'ShieldCheck' },
      { title: 'System Synchronization', description: 'Building automated bridges between your CRM, ERP, and localized spreadsheets.', icon: 'Network' },
      { title: 'Taxonomy Standardization', description: 'Categorizing global product and customer data into a unified, searchable hierarchy.', icon: 'Tags' }
    ],
    methodology: [
      { step: 1, title: 'Data Architecture Audit', description: 'We map out every single place your data currently lives, identifying silos, redundancies, and critical points of failure across your entire enterprise software stack.' },
      { step: 2, title: 'Cleansing & Deduplication', description: 'Our specialists run advanced algorithms and manual checks to merge duplicate records, delete obsolete data, and correct formatting inconsistencies.' },
      { step: 3, title: 'Governance Implementation', description: 'We establish strict new rules for how data enters your systems moving forward, ensuring that the database remains pristine and accurate.' },
      { step: 4, title: 'Continuous Monitoring', description: 'We deploy ongoing quality control protocols that automatically flag data anomalies for human review before they can impact your reporting.' }
    ],
    businessImpact: [
      { title: '100% Reporting Accuracy', description: 'Executives can finally trust the dashboards they are looking at to make multi-million dollar decisions.' },
      { title: 'Reduced IT Overload', description: 'Stop paying expensive engineers to manually fix database errors on a daily basis.' },
      { title: 'Faster ERP Migrations', description: 'Clean data reduces the time and cost of migrating to new enterprise software by up to 40%.' },
      { title: 'Regulatory Compliance', description: 'Ensure all customer data meets stringent international privacy standards like GDPR and CCPA.' }
    ]
  },
  {
    title: 'Robotic Process Automation',
    slug: 'rpa',
    category: 'automation',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    overview: 'Stop paying humans to act like robots. We build, deploy, and manage intelligent digital workforces that execute high-volume, repetitive tasks 24/7 with absolute precision.',
    deliverables: [
      { title: 'Unattended Bot Development', description: 'Engineering robust software robots that execute back-office tasks silently in the background.', icon: 'Bot' },
      { title: 'Cognitive AI Integration', description: 'Enabling bots to read unstructured emails, interpret sentiment, and make basic decisions.', icon: 'BrainCircuit' },
      { title: 'Bot Orchestration', description: 'Centralized management of your digital workforce to ensure maximum uptime and utilization.', icon: 'LayoutDashboard' },
      { title: 'Legacy System Integration', description: 'Using UI-level automation to connect archaic mainframes that lack modern API capabilities.', icon: 'Code' }
    ],
    methodology: [
      { step: 1, title: 'Process Mining', description: 'We monitor your employees keystrokes and clicks to scientifically identify the most repetitive, time-consuming tasks ripe for automation.' },
      { step: 2, title: 'Bot Engineering', description: 'Our developers code highly resilient RPA scripts designed to handle UI changes, pop-ups, and unexpected system errors without crashing.' },
      { step: 3, title: 'Staging & Testing', description: 'Bots are deployed in a sandbox environment and run against thousands of edge-cases to ensure 100% accuracy before touching live data.' },
      { step: 4, title: 'Hypercare & Maintenance', description: 'After going live, we provide 24/7 monitoring to immediately fix any bots that fail due to underlying application updates.' }
    ],
    businessImpact: [
      { title: 'Zero Error Rate', description: 'Bots do not get tired, distracted, or make transcription errors. Accuracy is guaranteed at 100%.' },
      { title: '24/7/365 Execution', description: 'Your back-office operations continue running flawlessly through the night, weekends, and holidays.' },
      { title: 'Massive Cost Reduction', description: 'A single software bot costs a fraction of a full-time employee while doing the work of three.' },
      { title: 'Rapid Scalability', description: 'Spin up 50 additional bots instantly to handle massive seasonal volume spikes without hiring.' }
    ]
  },
  {
    title: 'Finance & Accounting Operations',
    slug: 'finance-accounting',
    category: 'fna',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    overview: 'Transform your finance department from a historical reporting center into a forward-looking strategic asset. We optimize P2P, O2C, and R2R workflows.',
    deliverables: [
      { title: 'Procure-to-Pay (P2P)', description: 'End-to-end management of vendor onboarding, invoice processing, and payment disbursements.', icon: 'ShoppingCart' },
      { title: 'Order-to-Cash (O2C)', description: 'Accelerating revenue realization through optimized credit management and aggressive collections.', icon: 'TrendingUp' },
      { title: 'Record-to-Report (R2R)', description: 'Streamlining general ledger entries, intercompany reconciliations, and month-end close.', icon: 'FileText' },
      { title: 'Financial Planning & Analysis', description: 'Providing deep variance analysis, forecasting, and budget modeling for the CFO.', icon: 'PieChart' }
    ],
    methodology: [
      { step: 1, title: 'Workflow Diagnostics', description: 'We map your entire financial lifecycle to find exactly where invoices get stuck and where cash flow is being unnecessarily delayed.' },
      { step: 2, title: 'Standardization', description: 'We rewrite your financial Standard Operating Procedures (SOPs) to ensure every transaction is processed identically, regardless of location.' },
      { step: 3, title: 'Technology Overlay', description: 'We implement OCR technology to digitize paper invoices and route them through automated approval hierarchies.' },
      { step: 4, title: 'Global Delivery', description: 'Our offshore accounting teams take over the daily transactional workload, executing against strict SLAs.' }
    ],
    businessImpact: [
      { title: 'DSO Reduction', description: 'Significantly reduce Days Sales Outstanding, injecting massive amounts of trapped cash back into the business.' },
      { title: 'Faster Month-End Close', description: 'Reduce the time it takes to close the books from weeks down to a few days.' },
      { title: 'Zero Late Fees', description: 'Ensure all vendors are paid exactly on time, capturing early-payment discounts and avoiding penalties.' },
      { title: 'Audit Readiness', description: 'Maintain perfectly documented, easily searchable financial records for stress-free regulatory audits.' }
    ]
  },
  {
    title: 'Human Resources Administration',
    slug: 'human-resources',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    overview: 'Free your HR leaders to focus on company culture and talent strategy by offloading the massive administrative burden of employee lifecycle management.',
    deliverables: [
      { title: 'Global Payroll Processing', description: 'Flawless execution of multi-currency, multi-jurisdiction payroll with absolute compliance.', icon: 'CreditCard' },
      { title: 'Benefits Administration', description: 'Managing complex employee enrollments, claims processing, and vendor reconciliations.', icon: 'HeartPulse' },
      { title: 'Onboarding / Offboarding', description: 'Ensuring seamless day-one experiences and secure, compliant employee terminations.', icon: 'Briefcase' },
      { title: 'HR Helpdesk', description: 'Providing a tiered support system to quickly resolve daily employee queries and grievances.', icon: 'Headset' }
    ],
    methodology: [
      { step: 1, title: 'Compliance Audit', description: 'We deeply review your current HR practices against local labor laws to identify immediate legal liabilities.' },
      { step: 2, title: 'Process Centralization', description: 'We consolidate fragmented HR tasks from regional offices into a single, highly efficient global shared services center.' },
      { step: 3, title: 'Portal Implementation', description: 'We deploy employee self-service portals to drastically reduce the volume of inbound Tier 1 HR tickets.' },
      { step: 4, title: 'Lifecycle Management', description: 'Our teams take over the daily heavy lifting of generating offer letters, running background checks, and processing payroll.' }
    ],
    businessImpact: [
      { title: 'Zero Payroll Errors', description: 'Eliminate the friction and legal risk associated with paying employees incorrectly or late.' },
      { title: 'Strategic HR Focus', description: 'Your senior HR leaders can finally stop doing paperwork and start focusing on retaining top talent.' },
      { title: 'Enhanced Employee Experience', description: 'New hires receive a fast, modern, and frictionless onboarding experience.' },
      { title: 'Absolute Compliance', description: 'Rest easy knowing that your HR operations strictly adhere to complex international labor regulations.' }
    ]
  },
  {
    title: 'Procurement & Sourcing Support',
    slug: 'procurement-sourcing',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c66363?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
    overview: 'Stop overpaying for indirect materials and services. We bring discipline, data visibility, and rigorous vendor management to your procurement lifecycle.',
    deliverables: [
      { title: 'Spend Analytics', description: 'Deep-dive categorization of enterprise spending to identify rogue purchasing and consolidation opportunities.', icon: 'BarChart' },
      { title: 'Vendor Master Management', description: 'Rigorous vetting, onboarding, and continuous risk monitoring of your global supply base.', icon: 'Database' },
      { title: 'Contract Lifecycle', description: 'Digitizing, tracking, and managing supplier contracts to ensure SLAs are met and renewals are planned.', icon: 'FileText' },
      { title: 'Tactical Buying', description: 'Executing spot-buys and managing the daily Purchase Order (PO) generation process.', icon: 'ShoppingCart' }
    ],
    methodology: [
      { step: 1, title: 'Spend Cube Generation', description: 'We ingest millions of lines of AP data to build a complete, categorized picture of exactly where your money is going.' },
      { step: 2, title: 'Sourcing Strategy', description: 'We identify highly fragmented spend categories and execute RFP events to consolidate vendors and drive down prices.' },
      { step: 3, title: 'Procurement Operations', description: 'We take over the daily grind of converting PRs to POs, ensuring strict adherence to purchasing policies.' },
      { step: 4, title: 'Supplier Performance', description: 'We implement scorecarding systems to hold your vendors accountable to their promised delivery times and quality standards.' }
    ],
    businessImpact: [
      { title: 'Hard Cost Savings', description: 'Direct reduction in the cost of goods and services through vendor consolidation and aggressive negotiation.' },
      { title: 'Eliminated Rogue Spend', description: 'Ensure all employees buy from approved catalogs, maximizing your negotiated enterprise discounts.' },
      { title: 'Supply Chain Resilience', description: 'Continuous monitoring of vendor financial health and geopolitical risks to prevent supply disruptions.' },
      { title: 'Faster Cycle Times', description: 'Reduce the time it takes for an employee to request an item and actually receive it.' }
    ]
  }
];

// Fallback logic to generate remaining 7 services based on the list
const additionalServiceSlugs = [
  'data-entry', 'customer-support', 'document-management', 
  'insurance-bpo', 'healthcare-bpo', 'logistics', 'it-helpdesk'
];

additionalServiceSlugs.forEach(slug => {
  if (!MOCK_SERVICES.find(s => s.slug === slug)) {
    MOCK_SERVICES.push({
      title: slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' '),
      slug: slug,
      category: 'industry-specific',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
      secondaryImage: 'https://images.unsplash.com/photo-1507925922893-873105f4be8d?auto=format&fit=crop&q=80',
      overview: `End-to-end management of your ${slug.replace('-', ' ')} operations, engineered for high accuracy, rapid scalability, and strict compliance.`,
      deliverables: [
        { title: 'Core Processing', description: 'Executing the fundamental daily tasks required to keep this operation running smoothly.', icon: 'Settings' },
        { title: 'Quality Assurance', description: 'Implementing multi-tiered review processes to ensure absolute accuracy.', icon: 'Shield' },
        { title: 'Exception Handling', description: 'Managing complex edge-cases that require human judgement and specialized training.', icon: 'AlertOctagon' },
        { title: 'Performance Reporting', description: 'Delivering real-time dashboards detailing SLA adherence and operational throughput.', icon: 'BarChart' }
      ],
      methodology: [
        { step: 1, title: 'Discovery', description: 'Detailed mapping of the current operational state.' },
        { step: 2, title: 'Design', description: 'Re-engineering the workflow for maximum efficiency.' },
        { step: 3, title: 'Transition', description: 'Safely migrating the workload to our delivery centers.' },
        { step: 4, title: 'Optimization', description: 'Continuous improvement through Lean Six Sigma principles.' }
      ],
      businessImpact: [
        { title: 'Cost Arbitrage', description: 'Immediate reduction in operational expenditure.' },
        { title: 'Scalability', description: 'Ability to ramp operations up or down instantly.' },
        { title: 'Focus on Core', description: 'Allowing your team to focus on strategic growth.' },
        { title: 'Risk Mitigation', description: 'Transferring operational risk and ensuring business continuity.' }
      ]
    });
  }
});


const MOCK_INDUSTRIES = [
  { title: 'Healthcare', slug: 'healthcare', excerpt: 'HIPAA-compliant revenue cycle management, claims processing, and patient data administration for large hospital networks.' },
  { title: 'Banking & Financial', slug: 'banking', excerpt: 'KYC/AML compliance, loan document processing, and fraud detection operations for global financial institutions.' },
  { title: 'Retail & E-commerce', slug: 'retail', excerpt: 'Omnichannel customer support, order fulfillment tracking, and catalog data management for global retailers.' },
  { title: 'Logistics & Supply Chain', slug: 'logistics', excerpt: 'Optimizing transport documentation, freight billing, track-and-trace operations, and vendor management to keep supply chains moving efficiently.' },
];

const MOCK_HOME_PAGE = {
  hero: {
    title: 'Transform Your Enterprise Operations.',
    subtitle: 'High-volume back-office management, intelligent automation, and measurable ROI for modern enterprises.',
    ctaPrimary: 'Schedule Consultation',
    ctaSecondary: 'Explore Services'
  },
  metrics: [
    { value: '99.9%', label: 'Processing Accuracy' },
    { value: '45%', label: 'Average Cost Reduction' },
    { value: '24/7', label: 'Global Operations' },
    { value: 'ISO', label: '27001 Certified' }
  ]
};

export async function getHomePageData() {
  return MOCK_HOME_PAGE;
}

export async function getServices(): Promise<ServiceData[]> {
  return MOCK_SERVICES;
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | undefined> {
  return MOCK_SERVICES.find((s) => s.slug === slug);
}

export async function getIndustries() {
  return MOCK_INDUSTRIES;
}

const MOCK_POSTS = [
  {
    title: 'How RPA is Eliminating Data Entry Errors in Healthcare',
    slug: 'rpa-healthcare-data-entry',
    category: 'Automation',
    excerpt: 'Discover how top hospitals are using software bots to process patient records with 100% accuracy, reducing claim denials by 30%.',
    date: 'August 12, 2026',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80'
  },
  {
    title: 'The Hidden Costs of Manual Invoice Processing',
    slug: 'hidden-costs-manual-invoicing',
    category: 'Finance',
    excerpt: 'Manual Accounts Payable workflows are costing enterprises millions in late fees and missed early-payment discounts. Here is how to fix it.',
    date: 'August 05, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80'
  },
  {
    title: 'Offshore vs. Nearshore: Building a Global HR Team',
    slug: 'offshore-nearshore-hr',
    category: 'Human Resources',
    excerpt: 'An objective analysis on where to build your global shared services center based on language requirements, cost arbitrage, and time zones.',
    date: 'July 28, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80'
  }
];

export async function getPosts() {
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string) {
  return MOCK_POSTS.find((p) => p.slug === slug);
}
