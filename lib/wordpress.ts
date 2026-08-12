export const WP_GRAPHQL_URL = process.env.NEXT_PUBLIC_WP_API_URL || 'https://wp-bpm.improxtech.com/graphql';

export async function fetchGraphQL(query: string, variables?: any) {
  try {
    const res = await fetch(WP_GRAPHQL_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ query, variables }),
      next: { revalidate: 60 },
    });

    if (!res.ok) throw new Error(`API error ${res.status}`);
    const json = await res.json();
    if (json.errors) throw new Error('API query error');
    return json.data;
  } catch (error) {
    console.warn('WPGraphQL Error. Falling back to mock data.', error);
    return null;
  }
}

// --- FALLBACK DATA ---

export interface Deliverable {
  icon: string;
  title: string;
  description: string;
}

export interface BusinessImpact {
  title: string;
  description: string;
}

export interface MethodologyStep {
  step: string;
  title: string;
  description: string;
}

export interface ServiceData {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  icon: string;
  image: string;
  overview: string;
  deliverables: Deliverable[];
  businessImpact: BusinessImpact[];
  methodology: MethodologyStep[];
}

export interface PostData {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  content: string;
  image: string;
  date: string;
  author: string;
}

const MOCK_SERVICES: ServiceData[] = [
  // --- BACK OFFICE OPERATIONS ---
  {
    title: 'Finance & Accounting',
    slug: 'finance-accounting',
    category: 'back-office',
    excerpt: 'End-to-end financial operations management with strict adherence to global regulatory standards.',
    icon: 'Calculator',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    overview: 'Transform your financial operations from a static cost center into a dynamic, strategic asset. Our Enterprise Finance & Accounting outsourcing goes beyond basic bookkeeping. We architect resilient financial supply chains, deploying advanced automation and deep domain expertise to guarantee that your critical workflows—from procure-to-pay to order-to-cash—are executed with unparalleled compliance, speed, and accuracy.',
    deliverables: [
      { icon: 'FileText', title: 'Accounts Payable Automation', description: 'Intelligent invoice capture and three-way matching to eliminate duplicate payments and late fees.' },
      { icon: 'CreditCard', title: 'Accounts Receivable Management', description: 'Accelerated order-to-cash cycles with proactive collections and dispute resolution.' },
      { icon: 'BookOpen', title: 'General Ledger & Reconciliation', description: 'Continuous accounting practices ensuring audit-ready books and real-time financial visibility.' },
      { icon: 'BarChart3', title: 'Financial Planning & Analysis', description: 'Executive-level reporting and variance analysis to drive strategic corporate decisions.' }
    ],
    businessImpact: [
      { title: 'Working Capital Optimization', description: 'Dramatically reduce Days Sales Outstanding (DSO) and optimize cash flow management.' },
      { title: 'Regulatory Compliance Assurance', description: 'Strict adherence to GAAP, IFRS, and local tax regulations to eliminate audit risks.' },
      { title: 'Cost-to-Serve Reduction', description: 'Lower transactional processing costs by up to 45% through aggressive RPA deployment.' },
      { title: 'Scalable Financial Architecture', description: 'Seamlessly absorb volume spikes during month-end or year-end close without adding internal headcount.' }
    ],
    methodology: [
      { step: '01', title: 'Baseline Audit', description: 'Deep-dive analysis of existing financial workflows and legacy ERP configurations.' },
      { step: '02', title: 'Standardization', description: 'Redesigning processes to eliminate bespoke deviations and establish global standards.' },
      { step: '03', title: 'Automation Injection', description: 'Deploying RPA and OCR technologies to handle high-volume transactional data.' },
      { step: '04', title: 'Continuous Close', description: 'Transitioning from stressful month-end sprints to a continuous, real-time accounting model.' }
    ]
  },
  {
    title: 'Human Resources',
    slug: 'human-resources',
    category: 'back-office',
    excerpt: 'Comprehensive HR administration to support your global workforce efficiently and compliantly.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?q=80&w=1200&auto=format&fit=crop',
    overview: 'Managing a distributed, global workforce requires immense administrative infrastructure. Our Human Resources Managed Services alleviate this burden by handling the complex, data-heavy tasks associated with the complete employee lifecycle. From global payroll orchestration to compliance tracking, we enable your internal HR leaders to focus on culture, talent acquisition, and strategic organizational development.',
    deliverables: [
      { icon: 'Users', title: 'Global Payroll Orchestration', description: 'Flawless payroll execution across multiple jurisdictions with complex tax compliance.' },
      { icon: 'ClipboardList', title: 'Onboarding & Lifecycle Management', description: 'Digitized, seamless employee onboarding, background verification, and offboarding.' },
      { icon: 'HeartPulse', title: 'Benefits Administration', description: 'End-to-end management of complex employee benefits, enrollments, and queries.' },
      { icon: 'Headset', title: 'Employee Helpdesk', description: 'Tier-1 and Tier-2 support for all employee HR and payroll-related inquiries.' }
    ],
    businessImpact: [
      { title: 'Zero-Defect Payroll', description: 'Eliminate payroll errors that lead to employee dissatisfaction and compliance penalties.' },
      { title: 'Enhanced Employee Experience', description: 'Provide employees with rapid, accurate resolutions to their critical HR queries.' },
      { title: 'Risk Mitigation', description: 'Ensure absolute compliance with constantly shifting local and international labor laws.' },
      { title: 'Strategic HR Alignment', description: 'Free your internal HR business partners to focus entirely on talent and culture.' }
    ],
    methodology: [
      { step: '01', title: 'Policy Mapping', description: 'Comprehensive documentation of your global HR policies and local compliance requirements.' },
      { step: '02', title: 'HRIS Integration', description: 'Seamlessly connecting our delivery pods with your existing Workday, SAP, or ADP instances.' },
      { step: '03', title: 'SLA Establishment', description: 'Defining strict service level agreements for response times and processing accuracy.' },
      { step: '04', title: 'Service Evolution', description: 'Continuous improvement of employee self-service portals and query resolution protocols.' }
    ]
  },
  {
    title: 'Procurement & Sourcing',
    slug: 'procurement-sourcing',
    category: 'back-office',
    excerpt: 'Streamlined procurement lifecycles to reduce costs and manage supplier relationships.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8ed7c30a77?q=80&w=1200&auto=format&fit=crop',
    overview: 'Inefficient procurement processes lead to millions in lost revenue, rogue spending, and severe supply chain vulnerabilities. Our Procurement & Sourcing operations provide comprehensive, data-driven back-office support for your entire supply chain. We manage complex vendor onboarding, contract digitization, and procure-to-pay cycles, transforming your procurement function into a major driver of enterprise profitability.',
    deliverables: [
      { icon: 'Search', title: 'Strategic Vendor Discovery', description: 'Data-driven identification and vetting of global suppliers to ensure supply chain resilience.' },
      { icon: 'FileText', title: 'RFX Management', description: 'End-to-end coordination of complex RFI, RFP, and RFQ processes and response aggregation.' },
      { icon: 'Briefcase', title: 'Contract Lifecycle Management', description: 'Digitizing legacy contracts, tracking expiry dates, and monitoring SLA adherence.' },
      { icon: 'ShoppingCart', title: 'Procure-to-Pay (P2P)', description: 'Seamless processing of purchase requisitions, PO creation, and supplier payment reconciliation.' }
    ],
    businessImpact: [
      { title: 'Spend Consolidation', description: 'Identify rogue spending and consolidate suppliers to negotiate aggressive volume discounts.' },
      { title: 'Supply Chain Resilience', description: 'Mitigate risk by thoroughly vetting suppliers and establishing robust secondary sourcing.' },
      { title: 'Contract Compliance', description: 'Ensure suppliers actually deliver upon the SLAs negotiated in their contracts.' },
      { title: 'Administrative Efficiency', description: 'Drastically reduce the cycle time from purchase requisition to finalized purchase order.' }
    ],
    methodology: [
      { step: '01', title: 'Spend Analytics', description: 'Ingesting historical procurement data to identify immediate cost-saving opportunities.' },
      { step: '02', title: 'Vendor Rationalization', description: 'Consolidating the vendor base and terminating underperforming or redundant suppliers.' },
      { step: '03', title: 'Process Digitization', description: 'Implementing e-procurement platforms and automated approval workflows.' },
      { step: '04', title: 'Continuous Auditing', description: 'Ongoing monitoring of vendor performance metrics and contract compliance.' }
    ]
  },
  {
    title: 'Digital Admin Support',
    slug: 'digital-admin',
    category: 'back-office',
    excerpt: 'High-speed, error-free administrative processing to keep your core business moving.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1616423640778-28d1b53229bd?q=80&w=1200&auto=format&fit=crop',
    overview: 'The foundation of any modern enterprise is data, yet many organizations remain paralyzed by massive volumes of unstructured documents, manual data entry, and legacy paperwork. Our Digital Administrative Support operations rapidly transform physical and unstructured data into secure, searchable, and highly accurate digital assets, powering your core business operations at unprecedented velocity.',
    deliverables: [
      { icon: 'Keyboard', title: 'High-Volume Data Capture', description: 'Rapid, error-free data entry and processing across complex, multi-platform environments.' },
      { icon: 'Scan', title: 'Intelligent Document Processing (IDP)', description: 'Utilizing advanced OCR and AI to extract structured data from unstructured physical documents.' },
      { icon: 'Archive', title: 'Legacy System Migration', description: 'Securely migrating massive archives of historical data into modern cloud-based CRMs/ERPs.' },
      { icon: 'ShieldCheck', title: 'Compliance Archiving', description: 'Structuring and indexing digital records to ensure immediate retrieval during regulatory audits.' }
    ],
    businessImpact: [
      { title: 'Absolute Data Accuracy', description: 'Achieve 99.9% accuracy rates via dual-key verification and automated validation scripts.' },
      { title: 'Operational Velocity', description: 'Process thousands of complex documents per hour, completely eliminating operational backlogs.' },
      { title: 'Overhead Elimination', description: 'Remove the need for expensive internal administrative headcount and physical document storage.' },
      { title: 'Information Security', description: 'ISO 27001 compliant data handling ensures your sensitive corporate information is never compromised.' }
    ],
    methodology: [
      { step: '01', title: 'Data Ingestion', description: 'Establishing secure SFTP or API pipelines for the transfer of raw, unstructured data.' },
      { step: '02', title: 'AI Extraction', description: 'Running documents through machine learning models to automatically extract key fields.' },
      { step: '03', title: 'Human-in-the-Loop Verification', description: 'Specialized data stewards manually review and correct low-confidence AI extractions.' },
      { step: '04', title: 'Database Integration', description: 'Seamlessly injecting the validated, structured data back into your core enterprise systems.' }
    ]
  },
  {
    title: 'Master Data Management',
    slug: 'master-data',
    category: 'back-office',
    excerpt: 'Centralized data governance ensuring the accuracy and consistency of your enterprise data.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    overview: 'Inconsistent data across siloed departments leads to catastrophic decision-making errors. Our Master Data Management (MDM) services ensure that your enterprise has a singular, infallible source of truth. We clean, de-duplicate, and standardize your critical data assets—from global customer records to intricate product catalogs—ensuring your downstream analytics and ERP systems function flawlessly.',
    deliverables: [
      { icon: 'Eraser', title: 'Data Cleansing & De-duplication', description: 'Algorithmic and manual removal of redundant, outdated, and trivial (ROT) data.' },
      { icon: 'Network', title: 'Cross-System Harmonization', description: 'Ensuring customer and product data matches perfectly across your ERP, CRM, and SCM.' },
      { icon: 'Tags', title: 'Taxonomy & Metadata Structuring', description: 'Building rigorous, logical hierarchies for product catalogs and enterprise content.' },
      { icon: 'Shield', title: 'Data Governance Administration', description: 'Enforcing strict data entry protocols to prevent future database degradation.' }
    ],
    businessImpact: [
      { title: 'Single Source of Truth', description: 'Eliminate conflicting reports between sales, finance, and operations by unifying data.' },
      { title: 'Enhanced Customer Experience', description: 'Prevent embarrassing customer service errors caused by fragmented CRM records.' },
      { title: 'Advanced Analytics Enablement', description: 'Clean data is the prerequisite for AI. We prepare your databases for predictive modeling.' },
      { title: 'Merger & Acquisition Agility', description: 'Rapidly integrate and standardize databases acquired during corporate mergers.' }
    ],
    methodology: [
      { step: '01', title: 'Data Profiling', description: 'Comprehensive audit of existing databases to identify error rates and structural inconsistencies.' },
      { step: '02', title: 'Rule Definition', description: 'Collaborating with stakeholders to define absolute standards for data formatting and taxonomy.' },
      { step: '03', title: 'Cleansing Execution', description: 'Deploying automated scripts and human reviewers to overhaul the existing data lakes.' },
      { step: '04', title: 'Continuous Stewardship', description: 'Ongoing monitoring and approval workflows for any new data entering the ecosystem.' }
    ]
  },
  {
    title: 'Industry-Specific Ops',
    slug: 'industry-ops',
    category: 'back-office',
    excerpt: 'Tailored back-office support for specialized sectors with strict operational nuances.',
    icon: 'Database',
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=1200&auto=format&fit=crop',
    overview: 'Generic administrative support is insufficient for highly regulated or deeply specialized industries. We architect bespoke, deep-domain operational pods tailored to the specific nuances of your sector. Whether processing complex medical claims under strict HIPAA regulations, or managing track-and-trace logistics documentation for global freight, our specialized teams are trained in your exact industry protocols.',
    deliverables: [
      { icon: 'Stethoscope', title: 'Healthcare Administration', description: 'HIPAA-compliant claims adjudication, medical coding (ICD-10), and patient record management.' },
      { icon: 'Truck', title: 'Logistics & Supply Chain', description: 'Bill of Lading (BOL) processing, freight auditing, and global track-and-trace operations.' },
      { icon: 'Building2', title: 'Banking & Financial (BFSI)', description: 'High-volume KYC/AML documentation review, mortgage origination, and fraud investigations.' },
      { icon: 'ShoppingCart', title: 'Retail & E-Commerce', description: 'Catalog management, multi-channel order processing, and complex chargeback dispute resolution.' }
    ],
    businessImpact: [
      { title: 'Absolute Regulatory Compliance', description: 'Zero-tolerance adherence to industry-specific laws (HIPAA, GDPR, SEC regulations).' },
      { title: 'Domain Expertise on Demand', description: 'Instantly deploy personnel already trained in industry-standard software (e.g., Epic, SAP TM).' },
      { title: 'Accelerated Processing', description: 'Industry specialists process complex, nuanced tasks significantly faster than generalists.' },
      { title: 'Agile Scalability', description: 'Rapidly scale your specialized operations up or down based on seasonal industry demands.' }
    ],
    methodology: [
      { step: '01', title: 'Domain Immersion', description: 'Our leadership team immerses themselves in your specific regulatory and operational environment.' },
      { step: '02', title: 'Specialized Pod Assembly', description: 'Recruiting and assembling dedicated teams with proven backgrounds in your specific industry.' },
      { step: '03', title: 'Certification & Training', description: 'Rigorous internal training to ensure every team member passes your proprietary compliance exams.' },
      { step: '04', title: 'Secure Execution', description: 'Deploying operations within highly secure, isolated network environments tailored to your needs.' }
    ]
  },

  // --- PROCESS EXCELLENCE ---
  {
    title: 'Process Mining & Modeling',
    slug: 'process-mining',
    category: 'process-excellence',
    excerpt: 'AI-powered deep dives into your existing workflows to map architectures and identify variances.',
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    overview: 'You cannot optimize what you cannot see. Traditional process mapping relies on subjective employee interviews, leading to inaccurate representations of reality. Our Process Mining & Modeling practice utilizes advanced AI and event-log data extracted directly from your IT systems. We create an objective, real-time map of how your business processes actually function, exposing hidden bottlenecks, rework loops, and compliance violations.',
    deliverables: [
      { icon: 'Activity', title: 'System Event Log Ingestion', description: 'Extracting massive datasets of transactional logs from SAP, Oracle, Salesforce, and bespoke systems.' },
      { icon: 'Map', title: 'Algorithmic Process Discovery', description: 'Automatically generating highly detailed "As-Is" process maps based purely on factual data.' },
      { icon: 'AlertTriangle', title: 'Variance & Bottleneck Analysis', description: 'Identifying exactly where processes deviate from the Standard Operating Procedure (SOP).' },
      { icon: 'Calculator', title: 'Automation ROI Quantification', description: 'Mathematically calculating the exact financial benefit of automating specific workflow segments.' }
    ],
    businessImpact: [
      { title: '100% Objective Visibility', description: 'Eliminate guesswork and office politics by proving operational inefficiencies with hard data.' },
      { title: 'Root Cause Eradication', description: 'Stop treating symptoms. Identify the exact step causing SLA breaches and eliminate it.' },
      { title: 'Audit & Compliance Proof', description: 'Instantly prove to auditors that processes are being executed exactly as legally required.' },
      { title: 'Targeted Transformation', description: 'Only invest in automation where the data proves it will yield the highest return on investment.' }
    ],
    methodology: [
      { step: '01', title: 'Data Extraction', description: 'Deploying secure connectors to pull historical event logs from your core enterprise applications.' },
      { step: '02', title: 'Process Visualization', description: 'Utilizing platforms like Celonis or Signavio to render the data into interactive process maps.' },
      { step: '03', title: 'Deep Analysis', description: 'Our Six Sigma Black Belts analyze the models to identify critical points of friction and waste.' },
      { step: '04', title: 'Actionable Roadmap', description: 'Delivering a prioritized execution plan for reengineering, automation, or staff training.' }
    ]
  },
  {
    title: 'Digital Twins',
    slug: 'digital-twins',
    category: 'process-excellence',
    excerpt: 'Simulate the domino effect of potential transformations before implementing them in reality.',
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1200&auto=format&fit=crop',
    overview: 'Implementing systemic changes in a massive enterprise carries massive risk. A "Digital Twin" is a dynamic, highly accurate virtual replica of your operational processes. By simulating structural changes, software deployments, or volume spikes in this virtual environment first, we empower enterprise leaders to see the exact downstream impact of their decisions without ever risking real-world operational disruption.',
    deliverables: [
      { icon: 'Box', title: 'Stochastic Process Modeling', description: 'Building mathematical replicas of your operations incorporating variability and resource constraints.' },
      { icon: 'Play', title: 'What-If Scenario Simulation', description: 'Testing the impact of 2x volume spikes, staff reductions, or new software implementations.' },
      { icon: 'Network', title: 'Downstream Impact Analysis', description: 'Visualizing how a change in the finance department cascades into supply chain operations.' },
      { icon: 'Target', title: 'Target Operating Model (TOM) Validation', description: 'Proving that a proposed organizational restructuring will actually work before executing it.' }
    ],
    businessImpact: [
      { title: 'Risk-Free Transformation', description: 'Completely eliminate the danger of "breaking the business" during major structural changes.' },
      { title: 'Data-Driven Consensus', description: 'Overcome change management resistance by showing stakeholders mathematical proof of success.' },
      { title: 'Optimized Resource Allocation', description: 'Determine the exact optimal headcount required to maintain SLAs under varying conditions.' },
      { title: 'Future-Proofing', description: 'Stress-test your business against extreme macroeconomic events before they happen.' }
    ],
    methodology: [
      { step: '01', title: 'Architecture Mapping', description: 'Defining the parameters, resources, and dependencies of the physical process.' },
      { step: '02', title: 'Data Ingestion', description: 'Feeding historical and real-time operational metrics into the simulation engine.' },
      { step: '03', title: 'Scenario Execution', description: 'Running thousands of Monte Carlo simulations to test the system under extreme stress.' },
      { step: '04', title: 'Continuous Synchronization', description: 'Updating the Digital Twin continuously to ensure it remains a perfect replica of reality.' }
    ]
  },
  {
    title: 'Intelligent Automation (RPA)',
    slug: 'rpa',
    category: 'process-excellence',
    excerpt: 'Deploying software bots combined with AI to handle high-volume tasks with zero defects.',
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
    overview: 'Human talent is wasted on repetitive, swivel-chair data entry. Our Intelligent Automation practice deploys a digital workforce of Robotic Process Automation (RPA) bots that operate 24/7/365. By combining basic RPA with Cognitive AI (Hyper-automation), we automate incredibly complex, unstructured workflows, drastically reducing your operational overhead while achieving absolute, zero-defect accuracy.',
    deliverables: [
      { icon: 'Bot', title: 'Unattended Bot Development', description: 'Engineering robust software robots that execute back-office tasks silently in the background.' },
      { icon: 'BrainCircuit', title: 'Cognitive AI Integration', description: 'Enabling bots to read unstructured emails, interpret sentiment, and make basic decisions.' },
      { icon: 'LayoutDashboard', title: 'Bot Orchestration & Maintenance', description: 'Centralized management of your digital workforce to ensure maximum uptime and utilization.' },
      { icon: 'Code', title: 'Legacy System Integration', description: 'Using UI-level automation to connect archaic mainframes that lack modern API capabilities.' }
    ],
    businessImpact: [
      { title: 'Massive Cost Take-Out', description: 'A single software bot can do the work of 3-5 full-time employees at a fraction of the cost.' },
      { title: 'Zero-Defect Quality', description: 'Bots do not get tired or distracted. They execute processes with 100% mathematical precision.' },
      { title: 'Instant Scalability', description: 'Handle massive, unexpected spikes in transactional volume by instantly spinning up more bots.' },
      { title: 'Employee Elevation', description: 'Free your human workforce to focus on high-value analytics, customer relations, and strategy.' }
    ],
    methodology: [
      { step: '01', title: 'Process Qualification', description: 'Identifying highly standardized, rules-based processes that yield the highest automation ROI.' },
      { step: '02', title: 'Process Standardization', description: 'Optimizing and documenting the process perfectly before writing a single line of bot code.' },
      { step: '03', title: 'Agile Development', description: 'Rapidly engineering and deploying the automation using platforms like UiPath or Automation Anywhere.' },
      { step: '04', title: 'Hypercare & Maintenance', description: 'Continuous monitoring of the bot ecosystem to adjust for UI changes in underlying applications.' }
    ]
  },
  {
    title: 'Predictive Analytics',
    slug: 'predictive-analytics',
    category: 'process-excellence',
    excerpt: 'Dynamic process intelligence that anticipates disruptions before they impact operations.',
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop',
    overview: 'Historical reporting tells you why you failed yesterday. Predictive Analytics tells you how to succeed tomorrow. We build dynamic, AI-driven intelligence engines that analyze your live operational data streams. We forecast volume spikes, predict SLA breaches days before they happen, and provide your executive team with the foresight needed to transition from reactive firefighting to proactive enterprise strategy.',
    deliverables: [
      { icon: 'TrendingUp', title: 'Machine Learning Forecasting', description: 'Deploying advanced algorithms to predict future transactional volumes and resource demands.' },
      { icon: 'AlertOctagon', title: 'Early Warning Systems', description: 'Real-time alerts notifying managers of impending process failures or SLA violations.' },
      { icon: 'PieChart', title: 'Executive BI Dashboards', description: 'Custom-built Tableau or PowerBI interfaces providing a unified view of enterprise health.' },
      { icon: 'Users', title: 'Customer Churn Prediction', description: 'Identifying behavioral patterns that indicate a client is about to leave, allowing proactive retention.' }
    ],
    businessImpact: [
      { title: 'Proactive SLA Protection', description: 'Reallocate resources to failing processes before the customer ever experiences a delay.' },
      { title: 'Optimized Staffing Models', description: 'Never overstaff or understaff again. Know exactly how many employees you need next Tuesday.' },
      { title: 'Revenue Retention', description: 'Stop customer churn in its tracks by identifying at-risk accounts before they cancel.' },
      { title: 'Strategic Clarity', description: 'Provide the C-Suite with a real-time, objective, and unified understanding of company performance.' }
    ],
    methodology: [
      { step: '01', title: 'Data Lake Architecture', description: 'Centralizing fragmented data streams from across the enterprise into a secure, structured repository.' },
      { step: '02', title: 'Model Training', description: 'Data Scientists train and refine machine learning models using years of historical company data.' },
      { step: '03', title: 'Dashboard Engineering', description: 'Translating complex predictive mathematics into highly intuitive, visual UI dashboards.' },
      { step: '04', title: 'Operational Integration', description: 'Training management teams on how to interpret the data and take proactive corrective actions.' }
    ]
  },
  {
    title: 'Value Stream Reengineering',
    slug: 'value-stream',
    category: 'process-excellence',
    excerpt: 'Completely overhauling inefficient pipelines to drastically improve the customer journey.',
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=1200&auto=format&fit=crop',
    overview: 'A Value Stream encompasses every single action required to bring a product or service from concept to the customer. As enterprises grow, these streams become bloated with siloed departmental handoffs, redundant approvals, and non-value-added activities. Our Value Stream Reengineering practice strips away the bloat, radically redesigning your cross-functional pipelines to maximize speed, agility, and the end-customer experience.',
    deliverables: [
      { icon: 'GitMerge', title: 'Cross-Functional Integration', description: 'Shattering departmental silos to create unified, end-to-end execution pipelines.' },
      { icon: 'Scissors', title: 'Waste (Muda) Elimination', description: 'Ruthlessly cutting redundant approvals, manual data transfers, and unnecessary wait times.' },
      { icon: 'Zap', title: 'Agile Pod Implementation', description: 'Restructuring traditional departments into highly agile, cross-functional delivery teams.' },
      { icon: 'Smile', title: 'CX-Centric Architecture', description: 'Redesigning internal operations entirely around improving the end-customer experience.' }
    ],
    businessImpact: [
      { title: 'Radical Lead Time Reduction', description: 'Slash the time it takes to deliver your product or service from weeks down to days.' },
      { title: 'Enhanced Customer Delight', description: 'Faster delivery and fewer handoff errors result in a dramatically improved customer journey.' },
      { title: 'Overhead Drastic Reduction', description: 'Eliminating non-value-added tasks directly translates to lower operational costs.' },
      { title: 'Organizational Agility', description: 'Transform into a nimble enterprise capable of pivoting rapidly in response to market changes.' }
    ],
    methodology: [
      { step: '01', title: 'Current State Mapping', description: 'Documenting every single step, delay, and handoff in the existing, flawed value stream.' },
      { step: '02', title: 'Value Identification', description: 'Categorizing every action strictly as Value-Adding, Non-Value-Adding, or Required Waste.' },
      { step: '03', title: 'Future State Design', description: 'Architecting a streamlined, idealized pipeline that flows continuously without interruption.' },
      { step: '04', title: 'Kaizen Execution', description: 'Implementing the new architecture through rapid, iterative improvement sprints.' }
    ]
  },
  {
    title: 'Continuous Optimization',
    slug: 'continuous-optimization',
    category: 'process-excellence',
    excerpt: 'Establishing frameworks like Lean Six Sigma to ensure ongoing operational maturity.',
    icon: 'LineChart',
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?q=80&w=1200&auto=format&fit=crop',
    overview: 'Process excellence is not a one-time consulting project; it is a permanent cultural shift. Our Continuous Optimization practice embeds the philosophies of Lean Six Sigma directly into your corporate DNA. We establish the internal frameworks, governance, and Centers of Excellence (CoEs) necessary to ensure that your operations continually evolve, adapt, and improve year over year without external reliance.',
    deliverables: [
      { icon: 'GraduationCap', title: 'Six Sigma Training & Certification', description: 'Training your internal staff to become certified Green Belts and Black Belts in Process Excellence.' },
      { icon: 'Landmark', title: 'Center of Excellence (CoE) Setup', description: 'Establishing a centralized, internal governance body to oversee all future automation and optimization.' },
      { icon: 'BarChart', title: 'Statistical Process Control (SPC)', description: 'Implementing mathematical frameworks to monitor process stability and prevent future degradation.' },
      { icon: 'Target', title: 'Maturity Benchmarking', description: 'Regularly assessing your operational maturity against industry-leading global standards.' }
    ],
    businessImpact: [
      { title: 'Self-Sustaining Excellence', description: 'Build the internal capability to continuously improve without endlessly paying external consultants.' },
      { title: 'Cultural Transformation', description: 'Shift employee mindsets from "this is how we always do it" to "how can we do this better?"' },
      { title: 'Guaranteed YoY Efficiency', description: 'Ensure that operational costs decrease and quality increases consistently, every single year.' },
      { title: 'Process Stability', description: 'Eliminate chaotic operational swings by establishing rigid, statistically controlled processes.' }
    ],
    methodology: [
      { step: '01', title: 'Define & Measure', description: 'Establishing strict baseline metrics and defining what "perfection" looks like for your business.' },
      { step: '02', title: 'CoE Establishment', description: 'Selecting internal champions and building the infrastructure for the Center of Excellence.' },
      { step: '03', title: 'Framework Deployment', description: 'Rolling out the Assess-Define-Establish (ADE) framework across all major departments.' },
      { step: '04', title: 'Governance & Control', description: 'Implementing ongoing audit cadences to ensure the new culture of excellence is maintained.' }
    ]
  }
];

const MOCK_POSTS: PostData[] = [
  {
    title: 'How to Maximize ROI with a Remote Administrative Team',
    slug: 'maximize-roi-administrative-team',
    category: 'Operations',
    excerpt: 'Discover how transitioning from expensive in-house admin staff to a highly trained, remote back-office team can cut payroll costs by 60%.',
    content: `
In today's fast-paced business environment, maximizing Return on Investment (ROI) is crucial for sustainable growth. Discover how transitioning from expensive in-house admin staff to a highly trained, remote back-office team can cut payroll costs by 60% while drastically improving your operational efficiency and output.

### The Strategic Advantage

Implementing this approach provides a significant competitive edge. By leveraging global talent pools, companies can access highly specialized skills at a fraction of local market rates. This isn't just about cost-cutting; it's about reallocating resources. 

When your core team is freed from tedious, repetitive administrative tasks (like data entry, basic HR processing, or level-1 customer support), they can focus entirely on high-value, revenue-generating activities. 

### Key Steps to Transition

1. **Audit Your Current Workflows:** Identify exactly which tasks are rules-based, repetitive, and do not require on-site physical presence.
2. **Select the Right BPM Partner:** Look for partners that offer robust data security (ISO 27001), high-speed infrastructure, and dedicated account management.
3. **Establish Clear KPIs:** You cannot manage what you cannot measure. Set strict Service Level Agreements (SLAs) for turnaround times and error rates before transitioning any workflow.

By treating a remote team not as an outsourced vendor, but as a seamless extension of your internal operations, enterprises can achieve unprecedented scalability and operational agility.
    `,
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
    date: 'August 12, 2026',
    author: 'Improx Team'
  },
  {
    title: 'Top 5 Software Tools Every Executive Assistant Needs',
    slug: 'top-5-software-tools-executive-assistant',
    category: 'Technology',
    excerpt: 'To perform at the highest level, modern Executive Assistants require modern tools. Here is our curated stack for ultimate productivity.',
    content: `
The role of the Executive Assistant has evolved from simple calendar management to becoming a strategic operational partner. To perform at this elevated level, EAs must leverage the best technology available. Here are the top 5 tools every modern EA needs in their stack.

### 1. Advanced Calendar Orchestration (Motion / Clockwise)
Managing an executive's calendar is a complex puzzle. AI-driven calendar tools automatically shift meetings to create blocks of deep work, optimizing the executive's time without manual back-and-forth negotiations.

### 2. Expense Management (Ramp / Expensify)
Handling receipts and expense reports is tedious. Modern tools automate this process with smart corporate cards that categorize expenses at the point of sale, completely eliminating end-of-month reconciliation headaches.

### 3. Project Management (Asana / Linear)
EAs are often the central hub for cross-departmental projects. A robust project management tool is non-negotiable for tracking deliverables, assigning tasks, and ensuring strategic initiatives do not fall through the cracks.

### 4. Intelligent Note-Taking (Otter.ai / Fireflies)
EAs can't afford to miss a detail during critical board meetings. AI transcription tools join meetings automatically, transcribe the conversation, and instantly generate searchable summaries and action items.

### 5. Secure Password Management (1Password / Bitwarden)
EAs manage access to incredibly sensitive corporate accounts. A secure password manager allows for seamless, encrypted sharing of credentials without ever exposing the actual passwords via email or Slack.
    `,
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1200&auto=format&fit=crop',
    date: 'August 06, 2026',
    author: 'Improx Team'
  },
  {
    title: 'The Future of BPO: Trends to Watch in 2027',
    slug: 'future-of-bpo-trends-2027',
    category: 'Industry',
    excerpt: 'From hyper-automation to AI-driven process mining, explore the technological shifts that will redefine Business Process Outsourcing in the coming year.',
    content: `
The Business Process Outsourcing (BPO) industry is undergoing a massive paradigm shift. The days of simple "lift and shift" labor arbitrage are over. Clients now demand strategic partnerships driven by technology. Here are the key trends defining the future of BPM in 2027.

### Hyper-Automation and Cognitive AI
Basic Robotic Process Automation (RPA) is now table stakes. The future lies in Hyper-automation—combining RPA with Cognitive AI to automate highly complex, unstructured workflows that previously required human judgment, such as reading handwritten documents or interpreting ambiguous customer emails.

### Process Mining as a Service
Before optimizing a process, you must understand it. BPM providers are increasingly utilizing Process Mining tools (like Celonis or SAP Signavio) to ingest event logs from client ERPs. This creates an objective, data-driven map of how workflows actually happen, instantly revealing bottlenecks.

### The Shift to Outcome-Based Pricing
Clients are moving away from paying per hour or per "FTE" (Full-Time Equivalent). Instead, BPM contracts are becoming outcome-based. Providers are paid based on measurable business results, such as the total reduction in claim processing times or the exact percentage of improved customer retention.

BPM partners that fail to invest heavily in AI, data analytics, and continuous process optimization will quickly become obsolete in this new era of intelligent operations.
    `,
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop',
    date: 'August 05, 2026',
    author: 'Improx Team'
  }
];

const MOCK_INDUSTRIES = [
  { title: 'Healthcare & Life Sciences', slug: 'healthcare', excerpt: 'Strictly HIPAA-compliant operations handling medical billing, claims processing, and patient data management with absolute security and precision.' },
  { title: 'Banking & Financial Services (BFSI)', slug: 'banking', excerpt: 'Secure, high-volume processing for mortgage origination, KYC/AML compliance, fraud detection, and retail banking support.' },
  { title: 'Technology & SaaS', slug: 'technology', excerpt: 'Agile operational support tailored for fast-growing tech companies, covering customer success, subscription management, and technical helpdesk.' },
  { title: 'Logistics & Supply Chain', slug: 'logistics', excerpt: 'Optimizing transport documentation, freight billing, track-and-trace operations, and vendor management to keep supply chains moving efficiently.' },
];

export async function getHomePageData() {
  return MOCK_HOME_PAGE;
}

export async function getServices(): Promise<ServiceData[]> {
  return MOCK_SERVICES;
}

export async function getServiceBySlug(slug: string): Promise<ServiceData | undefined> {
  return MOCK_SERVICES.find(s => s.slug === slug);
}

export async function getPosts(): Promise<PostData[]> {
  return MOCK_POSTS;
}

export async function getPostBySlug(slug: string): Promise<PostData | undefined> {
  return MOCK_POSTS.find(p => p.slug === slug);
}

export async function getIndustries() {
  return MOCK_INDUSTRIES;
}

export async function getIndustryBySlug(slug: string) {
  return MOCK_INDUSTRIES.find(i => i.slug === slug);
}

export async function getTestimonials() {
  return [
    { name: 'Sarah Jenkins', role: 'COO', company: 'GlobalTech Solutions', text: 'Improx BPM completely transformed our back-office efficiency. We saw a 45% reduction in processing time within the first quarter.' },
    { name: 'Michael Chen', role: 'VP of Operations', company: 'FinServe International', text: 'Their Finance & Accounting outsourcing team operates as a seamless extension of our own. Absolute professionals.' },
  ];
}

export async function getCaseStudies() {
  return [
    { title: 'Reducing operational costs by 40% for a Global SaaS Provider', slug: 'saas-cost-reduction' },
    { title: 'Scaling customer support to 24/7 coverage with 99% CSAT', slug: 'scaling-customer-support' },
  ];
}

export async function getResources() {
  return [
    { title: 'The Future of Business Process Outsourcing in 2026', type: 'Blog' },
    { title: 'Lean Transformation: A Guide for Mid-Market Enterprises', type: 'Whitepaper' },
  ];
}
