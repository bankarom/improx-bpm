import Link from "next/link";
import { ArrowRight, Calculator, Users, ShoppingCart, MonitorSmartphone, FileText, Headset, Database, Bot, LineChart, Search, Network, ShieldCheck } from "lucide-react";

const SERVICES = [
  {
    category: "Back-Office Operations",
    description: "We take over your high-volume, repeatable business processes so your team can focus on what drives growth.",
    color: "blue",
    items: [
      { title: "Finance & Accounting", slug: "finance-accounting", icon: Calculator, desc: "End-to-end P2P, O2C, and R2R workflows — invoice processing, reconciliations, financial reporting, and treasury management." },
      { title: "Human Resources", slug: "human-resources", icon: Users, desc: "Payroll processing, benefits administration, employee onboarding, offboarding, and HR helpdesk support at scale." },
      { title: "Procurement & Sourcing", slug: "procurement-sourcing", icon: ShoppingCart, desc: "Strategic spend analytics, purchase order management, vendor vetting, and contract lifecycle operations." },
      { title: "IT Helpdesk", slug: "it-helpdesk", icon: MonitorSmartphone, desc: "24/7 global Tier 1 & 2 tech support, asset tracking, software licensing management, and ITSM process execution." },
      { title: "Document Management", slug: "document-management", icon: FileText, desc: "Digitization, metadata indexing, classification, and secure archiving of all your critical business documents." },
      { title: "Customer Support", slug: "customer-support", icon: Headset, desc: "Omnichannel global customer care across phone, email, chat, and social media — with full CSAT reporting." },
    ]
  },
  {
    category: "Process Excellence",
    description: "We use data and intelligent technology to permanently eliminate waste and optimize how your business operates.",
    color: "indigo",
    items: [
      { title: "Master Data Management", slug: "master-data", icon: Database, desc: "Data cleansing, governance, deduplication, and enrichment to ensure a single source of truth across all your systems." },
      { title: "Robotic Process Automation", slug: "rpa", icon: Bot, desc: "Intelligent software bot deployment to automate repetitive digital tasks — reducing errors and freeing your talent." },
      { title: "Lean Six Sigma", slug: "lean-six-sigma", icon: LineChart, desc: "Data-driven waste elimination using DMAIC methodology, value stream mapping, and statistical process control." },
      { title: "Process Mining", slug: "process-mining", icon: Search, desc: "Factual, algorithmic mapping of your IT event logs to reveal how your processes actually run vs. how they should." },
      { title: "Workflow Digitization", slug: "workflow-digitization", icon: Network, desc: "Custom digital form routing, approval workflows, and e-signature integration to replace all your paper-based processes." },
      { title: "Quality Assurance", slug: "quality-assurance", icon: ShieldCheck, desc: "Rigorous manual and automated QA testing, SLA monitoring, audit trails, and compliance reporting frameworks." },
    ]
  }
];

export default function ServicesPage() {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Hero Section */}
      <section className="bg-slate-50 border-b border-zinc-200 py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Enterprise Operations</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 leading-tight">
            Comprehensive Services.
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            From high-volume back-office management to intelligent process automation — we handle the complexity so you can scale with confidence.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-14 text-base font-semibold transition-colors shadow-lg shadow-blue-600/20">
              Schedule a Free Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Services Sections */}
      {SERVICES.map((section) => (
        <section key={section.category} className="py-24 border-b border-zinc-100">
          <div className="container mx-auto px-4 md:px-6">

            {/* Section Header */}
            <div className="mb-16 max-w-2xl">
              <div className="flex items-center gap-3 mb-4">
                <span className="w-8 h-1 bg-blue-600 rounded-full"></span>
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">{section.category}</span>
              </div>
              <p className="text-lg text-zinc-600">{section.description}</p>
            </div>

            {/* Service Cards Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {section.items.map((service) => {
                const Icon = service.icon;
                return (
                  <Link
                    key={service.slug}
                    href={`/services/${service.slug}`}
                    className="group bg-zinc-50 hover:bg-white border border-zinc-200 hover:border-blue-200 rounded-2xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                  >
                    <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center text-zinc-700 mb-6 transition-all duration-300 shadow-sm">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                      {service.desc}
                    </p>
                    <div className="mt-6 flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                      Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>
        </section>
      ))}

      {/* Bottom CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Not sure which service fits?</h2>
          <p className="text-lg text-zinc-400 mb-10">
            Book a free 15-minute discovery call. Our experts will map the right solution to your exact operational challenges.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-10 h-14 text-base font-bold transition-colors">
            Schedule Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
