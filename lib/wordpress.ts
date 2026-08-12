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

const MOCK_SERVICES: ServiceData[] = [
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
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c66363?auto=format&fit=crop&q=80',
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
    secondaryImage: 'https://images.unsplash.com/photo-1568225367111-440f3532c1eb?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1507925922893-873105f4be8d?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1516322073974-bc5bb7090b85?auto=format&fit=crop&q=80',
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

const MOCK_INDUSTRIES: IndustryData[] = [
  { 
    title: 'Banking, Financial Services & Insurance (BFSI)', 
    slug: 'bfsi', 
    excerpt: 'KYC/AML compliance, loan document processing, and fraud detection operations for global financial institutions.',
    image: 'https://images.unsplash.com/photo-1501167783336-c63704dc17ab?auto=format&fit=crop&q=80',
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
    image: 'https://images.unsplash.com/photo-1576091160550-2173ff9e5ee5?auto=format&fit=crop&q=80',
    secondaryImage: 'https://images.unsplash.com/photo-1551076805-e1869043e560?auto=format&fit=crop&q=80',
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
    { value: '99.9%', label: 'Processing Accuracy' },
    { value: '45%', label: 'Average Cost Reduction' },
    { value: '24/7', label: 'Global Operations' },
    { value: '500+', label: 'Global Clients Served' }
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

export async function getIndustries(): Promise<IndustryData[]> {
  return MOCK_INDUSTRIES;
}

const MOCK_POSTS = [
  {
    title: 'How RPA is Eliminating Data Entry Errors in Healthcare',
    slug: 'rpa-healthcare-data-entry',
    category: 'Automation',
    excerpt: 'Discover how top hospitals are using software bots to process patient records with 100% accuracy, reducing claim denials by 30%.',
    date: 'August 12, 2026',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80',
    content: `The healthcare industry is bleeding billions of dollars annually due to simple administrative errors. When a human medical coder types the wrong billing code, the insurance company denies the claim. That means the hospital doesn't get paid for the work they just did. This systemic inefficiency leads to bloated back-office departments, delayed cash flow, and ultimately, higher costs for patients.

Enter Robotic Process Automation (RPA).

### The Power of Precision in Healthcare

Software bots do not get tired, they do not get distracted by a busy emergency room, and they certainly do not make transcription errors. By deploying RPA to handle medical coding, billing, and claims processing, modern healthcare organizations are fundamentally rewiring how they operate. These bots can extract data from electronic health records (EHRs), cross-reference it against complex insurance payer rules, and automatically submit claims with zero human intervention.

The sheer volume of data in healthcare makes it the perfect candidate for automation. Every single patient encounter generates massive amounts of structured and unstructured data. Relying on human labor to manually route this data between disparate legacy systems is a recipe for disaster. Bots can bridge these gaps instantly, ensuring data flows seamlessly from the point of care to the billing department.

### Measurable ROI and Revenue Cycle Optimization

The financial results of deploying intelligent automation are staggering. One of our recent clients, a massive regional hospital network, saw a 30% reduction in claim denials within the first 60 days of deploying our custom bots. 

That translates to millions of dollars of trapped cash flow instantly released back into the hospital's operating budget. Furthermore, the Accounts Receivable (A/R) days dropped significantly, meaning the hospital got paid much faster.

Beyond just the financial metrics, the implementation of RPA allowed the hospital to reallocate their human workforce. Instead of staring at screens doing mindless data entry, their staff could focus on high-value tasks like complex claim resolution, patient financial counseling, and improving the overall patient experience.

Automation is no longer a luxury in healthcare; it is an absolute necessity for survival in a highly regulated and margin-compressed industry.`
  },
  {
    title: 'The Hidden Costs of Manual Invoice Processing',
    slug: 'hidden-costs-manual-invoicing',
    category: 'Finance',
    excerpt: 'Manual Accounts Payable workflows are costing enterprises millions in late fees and missed early-payment discounts. Here is how to fix it.',
    date: 'August 05, 2026',
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80',
    content: `Are you still paying highly compensated employees to type invoice numbers into a spreadsheet? If so, your Accounts Payable (AP) department is functioning as a massive cost center when it should be a strategic asset.

Manual invoice processing is incredibly slow, error-prone, and frustrating. By the time an invoice is received via email, physically printed or routed for approval, and manually keyed into the ERP system, weeks may have passed.

### Losing Out on Discounts and Incurring Penalties

Because of these excessively slow cycle times, companies are consistently missing out on early-payment discounts (such as 2/10 Net 30 terms). Even worse, they are often getting hit with late fees from their suppliers. 

When you scale this inefficiency across tens of thousands of invoices per month, the financial leakage is catastrophic. Millions of dollars are lost simply because the approval workflow is stuck in someone's inbox. Additionally, the lack of real-time visibility into liabilities makes it nearly impossible for the treasury team to accurately forecast cash flow.

### The Automated Solution: OCR and Intelligent Routing

The solution is entirely within reach. By digitizing your Accounts Payable workflow using advanced OCR (Optical Character Recognition) and intelligent routing algorithms, invoices can be processed in minutes, not weeks. 

When an invoice arrives, the OCR technology instantly extracts key data points (vendor name, invoice number, line items, total amount) with near-perfect accuracy. The system then automatically matches the invoice against the Purchase Order (PO) and receiving documents. If it's a perfect match (a 3-way match), the invoice is automatically approved and scheduled for payment without a human ever touching it.

If there is a discrepancy, the system intelligently routes the exception to the correct manager for review. This allows your treasury team to hold onto cash longer while still capturing massive early-payment discounts. By transforming AP from a tactical data-entry function into a strategic cash-management hub, enterprises can realize massive ROI within the first year of deployment.`
  },
  {
    title: 'Offshore vs. Nearshore: Building a Global HR Team',
    slug: 'offshore-nearshore-hr',
    category: 'Human Resources',
    excerpt: 'An objective analysis on where to build your global shared services center based on language requirements, cost arbitrage, and time zones.',
    date: 'July 28, 2026',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80',
    content: `When building a global shared services center for Human Resources, executives are faced with a massive, high-stakes decision: do we build our operations offshore (e.g., India, Philippines) or nearshore (e.g., Mexico, Costa Rica, Colombia)?

Both models offer significant advantages, but choosing the wrong location for a specific business function can lead to cultural friction, poor employee experience, and failed ROI. Here is an objective analysis of how to structure your global delivery model.

### The Offshore Advantage: Maximum Arbitrage

Offshore locations like India and the Philippines provide the deepest talent pools on the planet and the most aggressive cost arbitrage. For highly transactional, repetitive back-office work like payroll processing, benefits administration data entry, and resume screening, offshore is usually the most mathematically sound decision.

These locations have spent decades building massive infrastructure and educational pipelines specifically designed to support Western enterprises. If the workflow is rule-based and doesn't require real-time collaboration with US time zones, offshore provides unparalleled efficiency and scale.

### The Nearshore Advantage: Alignment and Affinity

Nearshore locations in Latin America offer something offshore cannot: exact time-zone alignment with the United States and high levels of bilingual (English/Spanish) cultural affinity. 

If your HR team needs to be on the phone or Zoom constantly with US-based employees—for example, acting as a Tier 1 HR Helpdesk, conducting live onboarding sessions, or handling complex employee relations issues—nearshore is often heavily preferred. The ability to collaborate in real-time without the friction of a 12-hour time difference ensures a seamless cultural experience for your internal teams.

### The Hybrid Approach

At ImproxBPM, we do not believe in a one-size-fits-all approach. We help enterprise clients build sophisticated hybrid models. We utilize offshore centers for the heavy lifting (the data processing, the analytics, the administrative burden) and nearshore centers for the high-touch, voice-driven employee interactions. This structural design maximizes cost savings while simultaneously elevating the employee experience.`
  }
];

export async function getPosts() {
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string) {
  return MOCK_POSTS.find((p) => p.slug === slug);
}
