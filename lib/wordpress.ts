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
  excerpt: string;
  deliverables: { title: string; description: string; icon: string }[];
  methodology: { step: number; title: string; description: string }[];
  businessImpact: { title: string; description: string }[];
};

export const MOCK_SERVICES: ServiceData[] = [
  {
    title: 'Finance & Accounting Operations',
    slug: 'finance-accounting',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    overview: 'Transform your finance department from a historical reporting center into a forward-looking strategic asset. We optimize P2P, O2C, and R2R workflows.',
    excerpt: 'End-to-end management of Procure-to-Pay, Order-to-Cash, and Record-to-Report workflows to reduce DSO and accelerate month-end close.',
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
    excerpt: 'Seamless execution of global payroll, benefits administration, onboarding, and employee helpdesk support.',
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
    image: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80',
    overview: 'Stop overpaying for indirect materials and services. We bring discipline, data visibility, and rigorous vendor management to your procurement lifecycle.',
    excerpt: 'End-to-end tactical buying, vendor master management, spend analytics, and contract lifecycle administration.',
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
  },
  {
    title: 'IT Helpdesk & Asset Management',
    slug: 'it-helpdesk',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1531496730074-83b638c0a7ac?auto=format&fit=crop&q=80',
    overview: 'Ensure maximum uptime for your workforce with 24/7 IT support, software provisioning, and hardware asset management.',
    excerpt: 'Global 24/7 technical support, ticket resolution, user provisioning, and enterprise asset tracking.',
    deliverables: [
      { title: 'Tier 1 & 2 Helpdesk', description: 'Resolving daily software issues, password resets, and connectivity problems.', icon: 'Headset' },
      { title: 'Access Management', description: 'Secure provisioning and de-provisioning of employee software access.', icon: 'ShieldCheck' },
      { title: 'Asset Tracking', description: 'Managing the lifecycle of corporate laptops, mobile devices, and peripherals.', icon: 'Database' },
      { title: 'Incident Routing', description: 'Escalating severe technical issues to specialized Level 3 engineering teams.', icon: 'Network' }
    ],
    methodology: [
      { step: 1, title: 'System Audits', description: 'Cataloging your current software footprint and user access protocols.' },
      { step: 2, title: 'Knowledge Base', description: 'Building a robust internal wiki to solve common issues instantly.' },
      { step: 3, title: 'Helpdesk Launch', description: 'Deploying our 24/7 global support team with integrated ticketing systems.' },
      { step: 4, title: 'Trend Analysis', description: 'Reviewing ticket data to identify and permanently fix recurring IT failures.' }
    ],
    businessImpact: [
      { title: 'Reduced Downtime', description: 'Employees get back to work faster, saving thousands of hours of lost productivity.' },
      { title: 'Software Savings', description: 'Identifying and removing unused software licenses across the company.' },
      { title: 'Security Compliance', description: 'Immediate removal of system access during employee terminations.' },
      { title: 'Scalable Support', description: 'Ability to support a rapidly growing global workforce.' }
    ]
  },
  {
    title: 'Document Management',
    slug: 'document-management',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    overview: 'Digitize, index, and securely store millions of physical and digital records to ensure compliance and rapid retrieval.',
    excerpt: 'High-volume document digitization, indexing, compliance archiving, and secure data extraction.',
    deliverables: [
      { title: 'Digital Conversion', description: 'Scanning and digitizing high volumes of paper records.', icon: 'Scan' },
      { title: 'Data Extraction', description: 'Using OCR to pull structured data from unstructured contracts and forms.', icon: 'FileText' },
      { title: 'Metadata Indexing', description: 'Categorizing documents so they can be instantly retrieved during an audit.', icon: 'Tags' },
      { title: 'Secure Archiving', description: 'Managing the legal retention policies and secure destruction of expired records.', icon: 'Archive' }
    ],
    methodology: [
      { step: 1, title: 'Inventory Assessment', description: 'Determining the scale and security requirements of your document backlog.' },
      { step: 2, title: 'Digitization', description: 'Running physical documents through high-speed scanners.' },
      { step: 3, title: 'OCR & Indexing', description: 'Software reads the documents and assigns searchable metadata tags.' },
      { step: 4, title: 'Cloud Migration', description: 'Securely transferring the digitized files into your enterprise CMS.' }
    ],
    businessImpact: [
      { title: 'Instant Retrieval', description: 'Find any document in seconds rather than spending hours digging through boxes.' },
      { title: 'Reduced Storage Costs', description: 'Eliminate expensive physical warehouse storage fees.' },
      { title: 'Audit Readiness', description: 'Never fail a regulatory audit due to missing paperwork again.' },
      { title: 'Data Security', description: 'Protect sensitive records from physical damage and unauthorized access.' }
    ]
  },
  {
    title: 'Customer Support Operations',
    slug: 'customer-support',
    category: 'back-office',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80',
    overview: 'Provide exceptional, omnichannel customer experiences 24/7 without the massive overhead of managing an in-house contact center.',
    excerpt: 'Global, 24/7 omnichannel customer service, order management, and technical troubleshooting.',
    deliverables: [
      { title: 'Omnichannel Support', description: 'Managing inquiries across phone, email, live chat, and social media.', icon: 'Headset' },
      { title: 'Order Management', description: 'Processing returns, refunds, and tracking inquiries for e-commerce brands.', icon: 'ShoppingCart' },
      { title: 'Technical Troubleshooting', description: 'Resolving Tier 1 product issues for SaaS and hardware companies.', icon: 'Settings' },
      { title: 'Customer Success', description: 'Proactive outreach to ensure clients are fully utilizing your product.', icon: 'Smile' }
    ],
    methodology: [
      { step: 1, title: 'SLA Definition', description: 'Establishing strict targets for response times and customer satisfaction scores.' },
      { step: 2, title: 'Agent Training', description: 'Immersing our dedicated teams in your brand voice and product knowledge.' },
      { step: 3, title: 'Omnichannel Launch', description: 'Deploying agents across all your preferred communication platforms.' },
      { step: 4, title: 'Continuous Coaching', description: 'Regularly reviewing calls and chats to constantly improve service quality.' }
    ],
    businessImpact: [
      { title: 'Increased CSAT', description: 'Significantly higher Customer Satisfaction and Net Promoter Scores.' },
      { title: '24/7 Availability', description: 'Serve your global customers in their timezone without paying night-shift premiums.' },
      { title: 'Lower Wait Times', description: 'Rapidly scale agent headcount during peak seasons to eliminate hold times.' },
      { title: 'Cost Efficiency', description: 'Reduce contact center overhead by up to 50% compared to onshore teams.' }
    ]
  },

  // PROCESS EXCELLENCE SERVICES (6)
  {
    title: 'Master Data Management',
    slug: 'master-data',
    category: 'process-excellence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
    overview: 'Inconsistent data across siloed departments leads to catastrophic decision-making errors. Our Master Data Management (MDM) services ensure that your enterprise has a singular, infallible source of truth.',
    excerpt: 'Ensuring your enterprise has a singular, infallible source of truth through aggressive data deduplication and governance.',
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
    category: 'process-excellence',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80',
    overview: 'Stop paying humans to act like robots. We build, deploy, and manage intelligent digital workforces that execute high-volume, repetitive tasks 24/7 with absolute precision.',
    excerpt: 'Building and deploying intelligent software robots to execute high-volume, repetitive tasks 24/7 with zero errors.',
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
    title: 'Lean Six Sigma Consulting',
    slug: 'lean-six-sigma',
    category: 'process-excellence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    overview: 'Eliminate waste, reduce variance, and drastically improve the quality of your operations using data-driven Lean Six Sigma methodologies.',
    excerpt: 'Applying data-driven methodologies to identify operational bottlenecks, eliminate waste, and optimize workflows.',
    deliverables: [
      { title: 'Value Stream Mapping', description: 'Visually diagramming your entire operation to find exactly where delays occur.', icon: 'Map' },
      { title: 'Waste Elimination', description: 'Removing non-value-added steps that slow down your team and increase costs.', icon: 'Scissors' },
      { title: 'Root Cause Analysis', description: 'Using statistical tools to find and fix the true underlying cause of operational errors.', icon: 'Search' },
      { title: 'Process Standardization', description: 'Creating bulletproof standard operating procedures to ensure consistent quality.', icon: 'FileText' }
    ],
    methodology: [
      { step: 1, title: 'Define', description: 'Clearly outline the business problem, goals, and customer requirements.' },
      { step: 2, title: 'Measure', description: 'Collect hard data on the current performance of the process.' },
      { step: 3, title: 'Analyze', description: 'Use statistical analysis to find the root cause of defects.' },
      { step: 4, title: 'Improve & Control', description: 'Implement the fix and establish monitoring to ensure the problem never returns.' }
    ],
    businessImpact: [
      { title: 'Increased Efficiency', description: 'Get more work done with the exact same amount of resources.' },
      { title: 'Defect Reduction', description: 'Drastically lower the amount of errors or rework required in your operations.' },
      { title: 'Cost Avoidance', description: 'Stop wasting money on unnecessary operational steps.' },
      { title: 'Predictable Quality', description: 'Deliver a consistent, high-quality experience to your customers every time.' }
    ]
  },
  {
    title: 'Process Mining & Discovery',
    slug: 'process-mining',
    category: 'process-excellence',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
    overview: 'Stop guessing how your business runs. We use advanced software to extract data logs from your IT systems to show you exactly how work is actually getting done.',
    excerpt: 'Utilizing data logs from your ERP systems to build a visual, factual map of how work is actually being executed.',
    deliverables: [
      { title: 'System Integration', description: 'Connecting our mining software directly to your SAP, Oracle, or Salesforce systems.', icon: 'Network' },
      { title: 'Process Visualization', description: 'Generating factual flowcharts showing every path a transaction takes.', icon: 'LineChart' },
      { title: 'Friction Analysis', description: 'Identifying the exact steps where transactions get stuck or take too long.', icon: 'AlertTriangle' },
      { title: 'Compliance Checking', description: 'Automatically flagging any transactions that violate company policy.', icon: 'ShieldCheck' }
    ],
    methodology: [
      { step: 1, title: 'Data Ingestion', description: 'We pull millions of event logs from your backend IT systems.' },
      { step: 2, title: 'Algorithmic Mapping', description: 'Software automatically draws the process map based on the raw data.' },
      { step: 3, title: 'Variance Analysis', description: 'We compare how the process is *supposed* to work versus how it *actually* works.' },
      { step: 4, title: 'Actionable Insights', description: 'We deliver a roadmap of specific fixes to optimize the workflow.' }
    ],
    businessImpact: [
      { title: 'Factual Transparency', description: 'No more relying on employee interviews; see the undeniable truth of your operations.' },
      { title: 'Targeted Automation', description: 'Know exactly which processes will yield the highest ROI if automated with RPA.' },
      { title: 'Audit Automation', description: 'Instantly prove to auditors that your system controls are working.' },
      { title: 'Reduced Cycle Times', description: 'Find and remove the hidden bottlenecks that slow down your business.' }
    ]
  },
  {
    title: 'Workflow Digitization',
    slug: 'workflow-digitization',
    category: 'process-excellence',
    image: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80',
    overview: 'Eliminate paper, emails, and spreadsheets by building custom, automated digital workflows that route approvals and data instantly.',
    excerpt: 'Eliminating paper, emails, and manual spreadsheets by building custom, automated digital workflows.',
    deliverables: [
      { title: 'Custom Forms', description: 'Building digital intake forms to replace PDFs and paper documents.', icon: 'FileText' },
      { title: 'Automated Routing', description: 'Designing logic that automatically sends requests to the correct approver.', icon: 'Network' },
      { title: 'System Triggers', description: 'Workflows that automatically update your CRM or ERP once approved.', icon: 'Database' },
      { title: 'Real-Time Tracking', description: 'Dashboards that show exactly where a request is stuck in the process.', icon: 'LineChart' }
    ],
    methodology: [
      { step: 1, title: 'Requirements Gathering', description: 'We map out the current manual process and list all stakeholders involved.' },
      { step: 2, title: 'Low-Code Development', description: 'We use modern platforms to rapidly build the digital workflow.' },
      { step: 3, title: 'UAT Testing', description: 'Employees test the digital forms to ensure they are user-friendly.' },
      { step: 4, title: 'Deployment & Training', description: 'We roll out the new system and train your team to stop using email for approvals.' }
    ],
    businessImpact: [
      { title: 'Instant Visibility', description: 'No more "Did you get my email?" You can track every request in real-time.' },
      { title: 'Faster Approvals', description: 'Automated reminders ensure managers approve requests on time.' },
      { title: 'Data Accuracy', description: 'Mandatory fields in digital forms prevent incomplete submissions.' },
      { title: 'Remote Work Enablement', description: 'Employees can submit and approve requests from anywhere in the world.' }
    ]
  },
  {
    title: 'Quality Assurance & Testing',
    slug: 'quality-assurance',
    category: 'process-excellence',
    image: 'https://images.unsplash.com/photo-1618044733300-9472054094ee?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80',
    overview: 'Ensure your software, processes, and customer interactions meet the highest possible standards before they ever reach the end user.',
    excerpt: 'Rigorous manual and automated testing to ensure your software, processes, and deliverables are flawless.',
    deliverables: [
      { title: 'Automated Software Testing', description: 'Writing scripts to automatically test your software for bugs on every update.', icon: 'Code' },
      { title: 'Call Center QA', description: 'Listening to agent calls to ensure compliance and excellent customer service.', icon: 'Headset' },
      { title: 'Process Auditing', description: 'Random sampling of back-office work to ensure standard operating procedures are followed.', icon: 'ClipboardList' },
      { title: 'User Acceptance Testing', description: 'Managing the final testing phase before a new system goes live.', icon: 'Users' }
    ],
    methodology: [
      { step: 1, title: 'Test Strategy', description: 'Defining exactly what needs to be tested and what constitutes a pass/fail.' },
      { step: 2, title: 'Test Case Creation', description: 'Writing hundreds of specific scenarios to test every possible edge-case.' },
      { step: 3, title: 'Execution', description: 'Our QA engineers run the tests and meticulously document every single defect.' },
      { step: 4, title: 'Remediation', description: 'We work with your developers or operations team to fix the issues before launch.' }
    ],
    businessImpact: [
      { title: 'Brand Protection', description: 'Prevent embarrassing bugs or poor service from reaching your customers.' },
      { title: 'Lower Support Costs', description: 'Fixing issues before launch drastically reduces inbound customer support tickets.' },
      { title: 'Faster Time-to-Market', description: 'Automated testing allows you to release updates faster without sacrificing quality.' },
      { title: 'Compliance Assurance', description: 'Documented proof that all required regulatory checks were performed.' }
    ]
  }
];

export type IndustryData = {
  title: string;
  slug: string;
  excerpt: string;
  image: string;
  secondaryImage: string;
  overview: string;
  challenges: { title: string; desc: string }[];
  deliverables: { title: string; description: string; icon: string }[];
  businessImpact: { title: string; description: string }[];
};

export const MOCK_INDUSTRIES: IndustryData[] = [
  { 
    title: 'Banking, Financial Services & Insurance (BFSI)', 
    slug: 'bfsi', 
    excerpt: 'KYC/AML compliance, loan document processing, and fraud detection operations for global financial institutions.',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&q=80',
    overview: 'In the heavily regulated BFSI sector, manual processing errors do not just cost money—they invite massive regulatory fines. We engineer bulletproof, compliant back-office operations for global banks and insurers.',
    challenges: [
      { title: 'Regulatory Compliance Burden', desc: 'Constantly changing global KYC, AML, and FATCA regulations require massive amounts of manual auditing.' },
      { title: 'Slow Loan Origination', desc: 'Manual underwriting and document verification cause lengthy delays in mortgage and loan approvals, frustrating customers.' },
      { title: 'High Fraud Risk', desc: 'Inability to analyze transaction data in real-time leaves institutions vulnerable to sophisticated fraud.' }
    ],
    deliverables: [
      { title: 'KYC / AML Operations', description: 'Executing rapid, highly accurate background checks and transaction monitoring.', icon: 'ShieldCheck' },
      { title: 'Claims Processing', description: 'Digitizing and adjudicating insurance claims to accelerate payouts and flag fraudulent submissions.', icon: 'FileText' },
      { title: 'Loan Administration', description: 'Managing the end-to-end document verification process for mortgages and commercial loans.', icon: 'Building2' },
      { title: 'Reconciliation', description: 'Automating the daily reconciliation of thousands of complex financial transactions.', icon: 'Calculator' }
    ],
    businessImpact: [
      { title: 'Zero Compliance Breaches', description: 'Strict adherence to all global banking regulations, eliminating the risk of multi-million dollar fines.' },
      { title: 'Faster Loan Approvals', description: 'Reduce the time-to-decision for mortgages and loans by up to 40%.' },
      { title: 'Reduced Operational Cost', description: 'Lower the cost per transaction through automation and offshore talent arbitrage.' }
    ]
  },
  { 
    title: 'Healthcare & Life Sciences', 
    slug: 'healthcare', 
    excerpt: 'HIPAA-compliant revenue cycle management, medical billing, and patient data administration for large hospital networks.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
    overview: 'Hospitals and clinics are bleeding revenue due to complex billing requirements and denied claims. We manage the entire Revenue Cycle Management (RCM) process with strict HIPAA compliance.',
    challenges: [
      { title: 'High Claim Denial Rates', desc: 'Minor coding errors leading to insurance claim denials, trapping millions of dollars in uncollected revenue.' },
      { title: 'Patient Data Fragmentation', desc: 'Critical patient information is scattered across incompatible Electronic Health Records (EHR) systems.' },
      { title: 'Administrative Burnout', desc: 'Nurses and doctors spending hours doing data entry instead of providing patient care.' }
    ],
    deliverables: [
      { title: 'Revenue Cycle Management', description: 'End-to-end management of medical coding, billing, and aggressive AR follow-up.', icon: 'LineChart' },
      { title: 'Patient Scheduling', description: 'Omnichannel contact center support to manage appointments and patient inquiries.', icon: 'Headset' },
      { title: 'Claims Adjudication', description: 'Rapidly processing health insurance claims with automated fraud detection.', icon: 'ShieldCheck' },
      { title: 'Clinical Trial Data', description: 'Highly accurate data entry and management for pharmaceutical research.', icon: 'Database' }
    ],
    businessImpact: [
      { title: 'Reduced Claim Denials', description: 'Increase first-pass acceptance rates by utilizing certified medical coders and automated scrubbers.' },
      { title: 'Improved Cash Flow', description: 'Accelerate the collection of outstanding patient and insurance balances.' },
      { title: 'Enhanced Patient Experience', description: 'Allow your medical staff to focus entirely on patient care, not paperwork.' }
    ]
  },
  { 
    title: 'Technology & SaaS', 
    slug: 'technology-saas', 
    excerpt: 'Tier 1/2 technical helpdesk, customer success, subscription billing, and platform moderation for fast-growing software companies.',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80',
    overview: 'Fast-growing software companies cannot afford to let their expensive engineers handle password resets and basic billing queries. We build scalable, global support operations for tech firms.',
    challenges: [
      { title: 'Engineer Distraction', desc: 'Highly paid developers spending their time fixing basic user errors instead of building new product features.' },
      { title: 'Global Support Demands', desc: 'SaaS companies have users in every timezone, making 24/7 in-house support incredibly expensive.' },
      { title: 'High Customer Churn', desc: 'Users canceling subscriptions because they cannot get immediate help when the software is confusing.' }
    ],
    deliverables: [
      { title: 'Technical Helpdesk (Tier 1 & 2)', description: 'Providing 24/7 troubleshooting for software bugs, API integrations, and access issues.', icon: 'MonitorSmartphone' },
      { title: 'Customer Success (CSM)', description: 'Proactive outreach to ensure clients are fully utilizing the platform to prevent churn.', icon: 'Smile' },
      { title: 'Subscription Billing', description: 'Managing complex recurring revenue, upgrades, downgrades, and failed payments.', icon: 'CreditCard' },
      { title: 'Content Moderation', description: 'Reviewing user-generated content to ensure platform safety and compliance.', icon: 'ShieldCheck' }
    ],
    businessImpact: [
      { title: 'Reduced Churn', description: 'Keep users subscribed longer by providing immediate, highly technical support when they get stuck.' },
      { title: 'Engineer Focus', description: 'Protect your engineering team’s time by deflecting 80% of incoming tickets.' },
      { title: 'Scalable Growth', description: 'Easily handle massive spikes in support tickets after a new product launch.' }
    ]
  },
  { 
    title: 'Retail & E-commerce', 
    slug: 'retail-ecommerce', 
    excerpt: 'Omnichannel customer support, order fulfillment tracking, and catalog data management for global retailers.',
    image: 'https://images.unsplash.com/photo-1472851294608-062f824d29cc?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?auto=format&fit=crop&q=80',
    overview: 'In the hyper-competitive world of retail, one bad customer service experience means losing a customer forever. We deliver flawless omnichannel support and order management at a massive scale.',
    challenges: [
      { title: 'Massive Seasonal Spikes', desc: 'The inability to handle 10x ticket volumes during Black Friday or holiday shopping seasons.' },
      { title: 'Returns Friction', desc: 'Slow processing of returns and refunds leading to angry customers and terrible online reviews.' },
      { title: 'Catalog Inconsistencies', desc: 'Messy product data and missing images leading to abandoned shopping carts.' }
    ],
    deliverables: [
      { title: 'Omnichannel CS', description: 'Providing instant support via live chat, email, phone, and social media platforms.', icon: 'Headset' },
      { title: 'Order & Returns Management', description: 'Tracking lost packages, processing RMAs, and issuing rapid refunds.', icon: 'ShoppingCart' },
      { title: 'Catalog Management', description: 'Standardizing SKUs, writing SEO-optimized product descriptions, and uploading images.', icon: 'Tags' },
      { title: 'Fraud Prevention', description: 'Reviewing high-risk orders to prevent chargebacks and inventory loss.', icon: 'ShieldCheck' }
    ],
    businessImpact: [
      { title: 'Increased Brand Loyalty', description: 'Turn angry customers into brand advocates through rapid, empathetic problem resolution.' },
      { title: 'Holiday Scalability', description: 'We instantly ramp up our agent headcount to handle your Q4 volume spikes seamlessly.' },
      { title: 'Higher Conversion Rates', description: 'Clean, accurate product catalogs drastically reduce cart abandonment.' }
    ]
  },
  { 
    title: 'Logistics & Supply Chain', 
    slug: 'logistics-supply-chain', 
    excerpt: 'Optimizing transport documentation, freight billing, track-and-trace operations, and vendor management to keep supply chains moving efficiently.',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80',
    overview: 'Global supply chains are paralyzed by archaic, paper-based processes. We digitize and automate transport documentation to ensure goods move without administrative delays.',
    challenges: [
      { title: 'Paper-Based Delays', desc: 'Trucks sitting idle at borders because bills of lading and customs documents are missing or incorrect.' },
      { title: 'Freight Audit Errors', desc: 'Companies overpaying carriers by millions of dollars due to complex, incorrect freight invoices.' },
      { title: 'Visibility Blackouts', desc: 'Inability to tell customers exactly where their shipment is at any given moment.' }
    ],
    deliverables: [
      { title: 'Freight Audit & Payment', description: 'Meticulously reviewing carrier invoices against contracted rates to prevent overpayment.', icon: 'Calculator' },
      { title: 'Track and Trace', description: 'Proactively monitoring shipments and updating customers on delays before they complain.', icon: 'Map' },
      { title: 'Customs Documentation', description: 'Ensuring all international shipping paperwork is 100% accurate to prevent border delays.', icon: 'FileText' },
      { title: 'Vendor Onboarding', description: 'Managing the compliance and setup of new carriers and 3PL partners.', icon: 'Truck' }
    ],
    businessImpact: [
      { title: 'Recovered Margin', description: 'Save millions by catching and rejecting inaccurate carrier freight bills.' },
      { title: 'Faster Transit Times', description: 'Eliminate administrative bottlenecks that keep shipments sitting in warehouses.' },
      { title: 'Improved Customer Trust', description: 'Provide your clients with proactive, accurate updates on their critical shipments.' }
    ]
  },
  { 
    title: 'Telecommunications', 
    slug: 'telecommunications', 
    excerpt: 'Billing dispute resolution, customer retention, churn management, and contract administration for global telcos.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1562408590-e32931084e23?auto=format&fit=crop&q=80',
    overview: 'Telcos operate in a saturated market where customers will switch providers over a single billing error. We build retention engines that keep your subscribers happy and loyal.',
    challenges: [
      { title: 'High Subscriber Churn', desc: 'Customers jumping to competitors due to long hold times and unresolved network issues.' },
      { title: 'Complex Billing Disputes', desc: 'Massive call volumes driven entirely by confusing invoices and unexpected roaming charges.' },
      { title: 'Back-Office Bottlenecks', desc: 'Slow processing of new contracts and number porting frustrating new customers.' }
    ],
    deliverables: [
      { title: 'Churn Management', description: 'Deploying highly trained retention specialists to save accounts that request cancellation.', icon: 'Smile' },
      { title: 'Billing Support', description: 'Resolving complex invoice disputes and managing payment collections.', icon: 'CreditCard' },
      { title: 'Network Support', description: 'Tier 1 troubleshooting for internet, mobile, and cable connectivity issues.', icon: 'RadioTower' },
      { title: 'Order Provisioning', description: 'Rapidly processing new account setups, upgrades, and number transfers in the backend.', icon: 'Database' }
    ],
    businessImpact: [
      { title: 'Increased CLV', description: 'Boost Customer Lifetime Value by drastically reducing subscriber churn rates.' },
      { title: 'Lower Cost to Serve', description: 'Offload high-volume, repetitive billing inquiries to cost-effective global delivery centers.' },
      { title: 'Faster Activation', description: 'Ensure new customers get their services turned on immediately without administrative delays.' }
    ]
  }
];

const MOCK_HOME_PAGE = {
  hero: {
    title: 'Transform Your Enterprise Operations.',
    subtitle: 'High-volume back-office management, intelligent automation, and measurable ROI for modern enterprises.',
    ctaPrimary: 'Schedule Consultation',
    ctaSecondary: 'Explore Services'
  },
  metrics: [
    { value: '99.9', suffix: '%', label: 'Processing Accuracy' },
    { value: '45', suffix: '%', label: 'Average Cost Reduction' },
    { value: '24/7', suffix: '', label: 'Global Operations' },
    { value: '500', suffix: '+', label: 'Global Clients Served' }
  ]
};

import { getLiveServices, getLiveIndustries, getLivePosts } from './wordpress-api';

export async function getHomePageData() {
  return MOCK_HOME_PAGE;
}

export async function getServices(): Promise<ServiceData[]> {
  const liveServices = await getLiveServices();
  return liveServices as unknown as ServiceData[];
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | undefined> {
  const services = await getServices();
  return services.find((s) => s.slug === slug);
}

export async function getIndustries(): Promise<IndustryData[]> {
  const liveIndustries = await getLiveIndustries();
  return liveIndustries as unknown as IndustryData[];
}

export const MOCK_POSTS = [
  {
    title: 'How Automated AP Processing Cuts Invoice Costs by 80%',
    slug: 'automated-ap-processing-cost',
    category: 'Finance & Accounting',
    excerpt: 'Manual Accounts Payable is bleeding enterprises dry. Here is how intelligent OCR and 3-way matching technology eliminates the cost and delays.',
    date: 'August 12, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
    content: `## The Hidden Cost of Manual Accounts Payable in Finance\n\nManual invoice processing remains one of the most expensive and error-prone activities in any modern enterprise. When invoices arrive via email, get printed, routed for physical approval, and then manually keyed into an Enterprise Resource Planning (ERP) system, weeks pass and money leaks at every single step of the workflow.\n\nEvery manually processed invoice costs enterprises between $12 and $30 in labor, overhead, and error correction. When you multiply this across tens of thousands of invoices per month, the financial leakage becomes truly catastrophic. Moreover, late payment penalties compound this issue, damaging vendor relationships and making supply chain financing more expensive. Financial controllers and CFOs are actively looking for solutions to modernize their accounting processes and reduce these bloated operational costs.\n\n## The Intelligent Accounts Payable Automation Solution\n\nBy deploying advanced Optical Character Recognition (OCR) technology and automated 3-way matching (Purchase Order vs. Invoice vs. Goods Receipt), improxBPM clients typically achieve up to 80% straight-through processing rates. This means invoices are ingested, verified, approved, and paid without a single human touch.\n\nExceptions—such as mismatched quantities or unapproved pricing—are intelligently routed to the correct department manager instantly via automated workflows. This eliminates the endless email chains and missing paperwork that plague traditional accounting teams. The impact on your financial operations is profound and immediate.\n\n## Transformative Results for Your Bottom Line\n\nThe business impact of this financial automation is undeniable. Days Sales Outstanding (DSO) drops dramatically, overall cash flow improves, and lucrative early-payment discounts are captured consistently instead of being lost to administrative delays. By transitioning from a manual to an automated AP framework, organizations can reallocate their talented accounting professionals away from mindless data entry toward high-value strategic financial analysis and business partnering.`
  },
  {
    title: 'Month-End Close in 3 Days: The Record-to-Report Revolution',
    slug: 'month-end-close-record-to-report',
    category: 'Finance & Accounting',
    excerpt: 'Top CFOs are slashing their month-end close from 10 days to 3. The secret is a disciplined R2R framework combined with intelligent automation.',
    date: 'August 11, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80',
    content: `## The Chaos of the Traditional Month-End Close\n\nFor most enterprise finance and accounting teams, the month-end close is the most stressful two weeks of the month. Accountants work late nights reconciling general ledgers, chasing departmental approvals, and correcting massive spreadsheet errors—only to start the entire grueling process again just thirty days later.\n\nWhy does the month-end close take so long? The root cause is almost always the same across industries: critical financial data is fragmented across multiple legacy systems, there is a heavy reliance on manual journal entries with poor audit trails, and approval workflows are hopelessly stuck in decentralized email chains. The complete lack of a standardized Record-to-Report (R2R) framework creates ongoing chaos and severely limits the CFO's ability to provide timely financial insights to the board of directors.\n\n## The improxBPM Record-to-Report Approach\n\nAt improxBPM, we fundamentally standardize the entire financial close process from initial general ledger reconciliation all the way to final financial statement production. Our specialized accounting teams implement automated intercompany eliminations, rigorous pre-close checklists, and real-time visibility dashboards so that financial leadership always knows exactly where the close stands at any given hour.\n\nBy applying lean process excellence to accounting workflows, we eliminate redundant tasks and automate standard journal entries.\n\n## Measurable Improvements in Financial Operations\n\nClients who partner with us to implement our robust R2R framework consistently report cutting their close cycle from 10-plus days down to 3 days or fewer. This rapid turnaround time means executives get their financial data faster, enabling more agile business decisions. Furthermore, external auditors appreciate the bulletproof documentation and automated audit trails, significantly reducing annual audit fees and compliance risks.`
  },
  {
    title: 'Offshore vs. Nearshore: Building Your Global HR Shared Services Center',
    slug: 'offshore-nearshore-hr',
    category: 'Human Resources',
    excerpt: 'An objective analysis on where to build your global shared services center based on language requirements, cost arbitrage, and time zones.',
    date: 'August 11, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    content: `## Strategic Location Planning for HR Shared Services\n\nWhen building a global shared services center for Human Resources operations, enterprise executives face a high-stakes strategic decision: should we build our teams offshore or nearshore? The answer depends entirely on the specific HR processes you are looking to centralize and the experience you want to deliver to your internal employees.\n\n## The Offshore Advantage for Transactional HR\n\nLocations like India and the Philippines provide the deepest talent pools on the planet and the most aggressive cost arbitrage for transactional HR work. If your organization is looking to streamline payroll processing, benefits administration data entry, and high-volume resume screening, offshore delivery provides unparalleled scale and efficiency. These teams can work around the clock, processing massive volumes of data accurately and cost-effectively, acting as the silent engine room of your HR department.\n\n## The Nearshore Advantage for Employee Experience\n\nHowever, nearshore locations in Latin America (such as Mexico or Costa Rica) offer exact time-zone alignment with the United States and exceptionally high levels of bilingual cultural affinity. This alignment is absolutely critical for functions like Tier 1 HR Helpdesk, live employee onboarding sessions, and complex employee relations support. When an employee has a question about their health benefits, they want to speak with someone in real-time who understands their cultural context.\n\n## The improxBPM Hybrid Model\n\nAt improxBPM, we do not believe in a one-size-fits-all approach. We build sophisticated hybrid global delivery models for our enterprise clients. We utilize offshore centers for the heavy administrative lifting and data processing, and we leverage nearshore centers for high-touch, voice-driven employee interactions. This structural design maximizes cost savings for the business while simultaneously elevating the overall employee experience.`
  },
  {
    title: 'The Real Cost of a Bad Hire and How BPM Prevents It',
    slug: 'real-cost-bad-hire-bpm',
    category: 'Human Resources',
    excerpt: 'Studies show a bad hire costs up to 30% of their annual salary. Here is how structured HR processes and automation eliminate hiring risk.',
    date: 'August 10, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&q=80',
    content: `## The Financial Devastation of Poor Recruitment\n\nAccording to the US Department of Labor, a single bad hire costs an organization up to 30% of that employee's first-year annual salary. For a mid-level corporate manager, that could mean $30,000 or more completely wasted. Beyond the hard financial costs, bad hires destroy team morale, damage client relationships, and drain management bandwidth.\n\nWhy do bad hires happen? They most often stem from deeply flawed Human Resources processes: inconsistent screening methodologies, excessively slow time-to-offer (which causes you to lose top candidates to faster competitors), and poor onboarding experiences that set new employees up for failure from their very first day on the job.\n\n## Transforming Talent Acquisition with BPM\n\nBusiness Process Management (BPM) applies rigorous operational discipline to the art of recruitment. By standardizing every single step of the talent acquisition lifecycle—from intelligent resume screening automation to highly structured interview scorecards and digital offer letter workflows—improxBPM clients dramatically improve both the velocity and the quality of their hiring decisions.\n\nWe help HR departments remove the subjective guesswork from recruitment.\n\n## Seamless Onboarding and Retention\n\nA great hire is only successful if they are onboarded properly. Automated background check integrations, seamless digital I-9 processing, and automated day-one IT system access provisioning ensure that every new hire starts their journey as an empowered productivity contributor, not a frustrated paperwork burden. By optimizing these HR workflows, organizations see immediate spikes in 90-day retention rates and overall employee engagement scores.`
  },
  {
    title: 'Why 24/7 Customer Support is Essential for Enterprise Brands',
    slug: 'why-247-customer-support-essential',
    category: 'Customer Support',
    excerpt: "Today's customers expect instant answers at any hour. Brands that cannot deliver lose revenue and loyalty permanently.",
    date: 'August 09, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1534536281715-e28d76689b4d?auto=format&fit=crop&q=80',
    content: `## The New Standard of Customer Expectations\n\nThe expectation gap in modern customer service has never been wider. Today's consumers and B2B clients benchmark every brand they interact with against the absolute best service they have ever received, completely regardless of the industry. They expect instant, accurate answers at 2:00 AM just as they do at 2:00 PM.\n\nStudies show that a staggering 89% of customers have switched to a competitor immediately following a single poor customer service experience. For large enterprise brands, each lost customer represents not just one missed transaction, but years of calculated lifetime value permanently evaporated. You simply cannot afford to have your support channels go dark after 5:00 PM.\n\n## Delivering Global 24/7 Support at Scale\n\nBuilding an internal 24/7 support team is prohibitively expensive for most organizations, requiring massive investments in night-shift premiums, specialized management, and constant backfilling due to high turnover.\n\nAt improxBPM, we solve this by deploying fully trained, brand-immersed customer support teams across strategically selected global time zones. This follow-the-sun methodology ensures seamless 24/7 coverage without the crushing cost of domestic overnight operations.\n\n## Omnichannel Excellence\n\nOur comprehensive omnichannel approach covers inbound phone support, email ticketing, proactive live chat, and rapid social media response. We equip these offshore and nearshore teams with AI-assisted knowledge bases and real-time Customer Satisfaction (CSAT) dashboards, giving your leadership team complete visibility into every interaction. The result is a world-class customer experience that drives fierce brand loyalty and protects your revenue streams.`
  },
  {
    title: '5 Metrics Every Customer Support Leader Must Track',
    slug: 'customer-support-metrics-2026',
    category: 'Customer Support',
    excerpt: 'Average Handle Time is dead. The new era of customer support is defined by CSAT, FCR, and Customer Effort Score.',
    date: 'August 08, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1556740714-a8395b3bf30f?auto=format&fit=crop&q=80',
    content: `## Evolving Beyond Legacy Call Center Metrics\n\nIn 2026, leading your customer support operations with Average Handle Time (AHT) as your primary Key Performance Indicator is a guaranteed path to disaster. When agents are pressured to get customers off the phone as quickly as possible, quality suffers, issues remain unresolved, and customer churn skyrockets. The modern contact center requires a much more sophisticated measurement framework focused on actual resolution and customer sentiment.\n\n## The 5 Support Metrics That Actually Matter\n\n**1. First Contact Resolution (FCR):** Can your team solve the customer's problem the very first time they reach out? FCR is statistically the single strongest predictor of overall customer satisfaction. High FCR drastically reduces repeat call volume and operational costs.\n\n**2. Customer Satisfaction Score (CSAT):** Measured immediately post-interaction via brief surveys, CSAT tells you exactly how customers felt in the moment about the specific agent and the resolution provided.\n\n**3. Customer Effort Score (CES):** How hard did the customer have to work to get their issue resolved? Did they have to repeat themselves to three different departments? Lower effort always equals higher long-term loyalty.\n\n**4. Net Promoter Score (NPS):** Are your customers loyal enough to actively recommend your brand to others? NPS reveals the overarching health of your long-term customer relationships, far beyond a single support ticket.\n\n**5. Escalation Rate:** What percentage of Tier 1 issues cannot be resolved by front-line agents without managerial escalation? Tracking this reveals critical training gaps and broken internal processes in real-time, allowing leaders to adjust knowledge bases dynamically.`
  },
  {
    title: 'How RPA is Eliminating Data Entry Errors in Healthcare',
    slug: 'rpa-healthcare-data-entry',
    category: 'Automation',
    excerpt: 'Discover how top hospitals are using software bots to process patient records with 100% accuracy, reducing claim denials by 30%.',
    date: 'August 07, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    content: `## The High Cost of Medical Billing Errors\n\nThe healthcare industry is currently bleeding billions of dollars annually due to incredibly simple administrative errors. When a tired human medical coder types the wrong billing code, or accidentally transposes two digits in a patient's ID, the insurance company automatically denies the claim. That means the hospital does not get paid for the critical care they just provided.\n\nThis systemic inefficiency leads to bloated back-office billing departments, severely delayed cash flow, and ultimately, higher healthcare costs for patients globally.\n\n## The Power of Robotic Process Automation (RPA)\n\nSoftware bots do not get tired, they do not get distracted by a busy office environment, and they execute rule-based tasks with 100% precision every single time. By deploying Robotic Process Automation (RPA) to handle repetitive medical coding, complex billing workflows, and high-volume claims processing, modern healthcare organizations are fundamentally rewiring how they operate.\n\nThese intelligent bots extract data directly from Electronic Health Records (EHRs), instantly cross-reference that data against constantly changing insurance payer rules, and automatically submit flawless claims with zero human intervention.\n\n## Measurable ROI for Hospital Networks\n\nThe financial impact is immediate. One of our regional hospital network clients saw a staggering 30% reduction in claim denials within the first 60 days of deploying our custom improxBPM bots. That translated directly to millions of dollars of trapped cash flow released back into the hospital's operating budget. Furthermore, their Accounts Receivable (A/R) days dropped significantly, allowing clinical leadership to reinvest those funds into better patient care rather than administrative overhead.`
  },
  {
    title: 'Building Your First RPA Bot: A Step-by-Step Enterprise Guide',
    slug: 'first-rpa-bot-enterprise-guide',
    category: 'Automation',
    excerpt: 'From process selection to go-live monitoring — a practical guide for enterprise operations leaders deploying their first RPA program.',
    date: 'August 07, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80',
    content: `## Avoiding the Common Pitfalls of Automation\n\nStarting an enterprise Robotic Process Automation (RPA) program without a highly structured operational approach almost always leads to wasted months, frustrated teams, and failed ROI. Many organizations make the fatal mistake of trying to automate broken, undocumented processes. You must optimize the process before you automate it.\n\n## Step 1: Scientific Process Selection\n\nNot every business process is a good candidate for automation. The absolute best candidates are highly repetitive, strictly rule-based, involve highly structured digital data, and consume significant human labor hours. We strongly recommend using dedicated process mining tools to identify these candidates objectively, removing political bias and guesswork from the pipeline prioritization.\n\n## Step 2: Resilient Bot Engineering and Staging\n\nOnce a process is scientifically selected, our automation engineers build highly resilient RPA scripts. Enterprise bots must be designed specifically to handle unexpected UI changes, system pop-ups, and network latency gracefully. Before ever touching live production data, these bots are deployed in a secure sandbox environment and rigorously tested against thousands of edge cases to ensure flawless execution.\n\n## Step 3: Go-Live and Intensive Hypercare\n\nDeploying the bot is only the beginning. After go-live, 24/7 monitoring is absolutely essential. Underlying legacy applications change frequently, and your bots must be actively updated to match. A dedicated "hypercare" period of 30-60 days ensures the bot performs flawlessly under real-world stress before it is officially handed over to steady-state IT operations. This disciplined framework guarantees that your automation investments actually deliver the promised financial returns.`
  },
  {
    title: 'Dirty Data is Costing Your Business More Than You Think',
    slug: 'dirty-data-business-cost',
    category: 'Data Management',
    excerpt: "Poor data quality costs the US economy $3.1 trillion per year. Here is how to calculate your organization's data quality debt — and fix it.",
    date: 'August 06, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    content: `## The Invisible Tax on Enterprise Operations\n\nGartner estimates that poor data quality costs organizations an average of $12.9 million per year. For large, complex enterprises, this number can be exponentially higher. However, this massive financial drain is almost always invisible to the C-suite because no one is actively measuring it. It manifests as a silent tax on every single business operation.\n\n## Where Data Quality Problems Hide and Multiply\n\nData quality issues hide in plain sight. Duplicate customer records in your CRM lead to expensive marketing campaigns reaching the same person multiple times, annoying the prospect and burning budget. Inconsistent vendor names across your ERP and procurement systems create massive reconciliation nightmares for the accounting team. Missing product attributes in your digital e-commerce catalog cause abandoned shopping carts and plummeting conversion rates.\n\nEvery time an employee has to stop their actual work to manually verify or clean a spreadsheet, you are paying the dirty data tax.\n\n## The improxBPM Master Data Management Approach\n\nFixing this requires a systematic approach. We begin with a comprehensive enterprise data architecture audit—mapping exactly every system where critical data lives and how it flows. We then run aggressive, AI-powered deduplication algorithms combined with manual expert review to cleanse your historical records.\n\nFinally, and most importantly, we implement strict data governance frameworks and validation rules that prevent dirty data from ever re-entering your systems in the future. Clean data is the prerequisite for any successful digital transformation or AI initiative.`
  },
  {
    title: 'Building a Master Data Governance Framework That Works',
    slug: 'master-data-governance-framework',
    category: 'Data Management',
    excerpt: 'Most data governance initiatives fail within 18 months. Here is the framework that top enterprises use to make data quality a competitive advantage.',
    date: 'August 06, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?auto=format&fit=crop&q=80',
    content: `## Why Data Governance Initiatives Fail\n\nIndustry statistics show that the vast majority of corporate data governance programs fail within their first 18 months. They fail for one primary reason: they are treated as temporary IT compliance projects rather than permanent business programs. When the business units do not take actual ownership of the data they generate, the data quality never improves.\n\n## The 4 Pillars of Effective Data Governance\n\nTo make data quality a sustainable competitive advantage, enterprises must implement a robust framework based on four critical pillars:\n\n**1. Explicit Data Ownership:** Every critical master data entity (Customer, Vendor, Employee, Product) must have a specifically designated business owner. This executive is directly accountable for the accuracy and completeness of that specific domain.\n\n**2. Enforced Data Standards:** You must create clear, documented definitions of what constitutes valid data for every critical field. Crucially, these rules must be enforced systematically at the point of entry, physically preventing users from saving bad data into the ERP or CRM.\n\n**3. Automated Quality Monitoring:** You cannot fix what you cannot see. Organizations must deploy automated dashboards that measure data completeness, accuracy, and consistency KPIs in real-time across all core systems.\n\n**4. Continuous Remediation Processes:** Data degrades naturally over time. You need a standing data stewardship team and a clear operational process for addressing and fixing data quality issues as they emerge, long before they compound into massive reporting errors. When all four pillars are fully operational, data governance becomes a self-sustaining engine for business intelligence.`
  },
  {
    title: 'The DMAIC Roadmap: Eliminating Business Process Problems',
    slug: 'dmaic-roadmap-process-improvement',
    category: 'Process Excellence',
    excerpt: 'Define, Measure, Analyze, Improve, Control. The DMAIC framework has helped enterprises save billions. Here is how to apply it.',
    date: 'August 05, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80',
    content: `## The Backbone of Operational Excellence\n\nThe DMAIC methodology (Define, Measure, Analyze, Improve, Control) is the structural backbone of Lean Six Sigma and widely considered one of the most powerful problem-solving frameworks ever developed for corporate operations. Yet, despite its proven track record, most organizations apply it incorrectly. They consistently skip the crucial Measure and Analyze phases, jumping straight to implementing solutions based on gut feelings rather than data.\n\n## Why Measurement is the Most Critical Phase\n\nWithout highly accurate baseline data, you cannot possibly know if your operational improvement actually worked. The Measure phase forces leadership teams to collect hard, objective data on current process performance. How long does the process actually take? What is the exact defect rate?\n\nBy quantifying the problem, you eliminate internal politics, subjective opinions, and departmental finger-pointing from the conversation. The subsequent Analyze phase then uses statistical tools to identify the true root cause of the defect, rather than just treating the surface-level symptoms.\n\n## Applying DMAIC at Enterprise Scale\n\nAt improxBPM, our certified Lean Six Sigma Black Belts systematically lead rigorous DMAIC projects across every functional area of our clients' businesses—from optimizing finance workflows and HR onboarding to reducing customer support escalation rates.\n\nWe have successfully utilized this exact framework to eliminate multi-million dollar operational inefficiencies for enterprise clients across a dozen different industries. The resulting improvements are always statistically measurable, heavily documented, and culturally sustainable through the final Control phase.`
  },
  {
    title: 'Value Stream Mapping: Exposing Hidden Waste in Operations',
    slug: 'value-stream-mapping-hidden-waste',
    category: 'Process Excellence',
    excerpt: 'Most operational waste is invisible to leadership because no one has mapped the end-to-end workflow. Here is how to change that.',
    date: 'August 05, 2026',
    author: 'Improx Team',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80',
    content: `## Making the Invisible Visible\n\nValue Stream Mapping (VSM) is arguably the most revealing and impactful tool in the Lean practitioner's entire toolkit. In most large enterprises, operational waste is completely invisible to senior leadership because no single person truly understands the end-to-end workflow. When you finally map the current state of a business process—documenting every single wait time, departmental handoff, and rework loop—the sheer magnitude of the waste becomes impossible to ignore.\n\n## What a True Value Stream Map Reveals\n\nIn our extensive consulting experience, the vast majority of total process lead time is classified as non-value-added time. It is the time a crucial vendor invoice sits unread in an inbox waiting for approval. It is the time a highly qualified job applicant waits for a second interview to be scheduled. It is the time a frustrated customer's query sits unassigned in a ticketing queue.\n\nVSM visually exposes these bottlenecks, showing exactly where flow stops and inventory (or digital backlog) piles up.\n\n## Designing the Ideal Future State\n\nOnce the Current State map is complete and the leadership team has confronted the reality of their operations, the VSM exercise rapidly shifts to designing the ideal Future State. This new design systematically eliminates identified waste, reduces unnecessary departmental handoffs, and minimizes wait times through parallel processing.\n\nThis Future State blueprint then becomes the definitive, prioritized roadmap for targeted process improvement initiatives, intelligent automation investments, and strategic organizational redesigns.`
  }
];

export async function getPosts() {
  const livePosts = await getLivePosts();
  return livePosts;
}

export async function getPostBySlug(slug: string) {
  const posts = await getPosts();
  return posts.find((p: any) => p.slug === slug);
}
