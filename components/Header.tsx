"use client";

import Link from "next/link";
import { ChevronDown, Menu, Calculator, Users, ShoppingCart, MonitorSmartphone, FileText, Headset, Database, Bot, LineChart, Search, Network, ShieldCheck, Stethoscope, Truck, RadioTower } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_MENU = {
  backOffice: {
    title: "Back-Office Operations",
    items: [
      { title: "Finance & Accounting", slug: "finance-accounting", icon: Calculator, desc: "P2P, O2C, and R2R workflows." },
      { title: "Human Resources", slug: "human-resources", icon: Users, desc: "Payroll, benefits, and onboarding." },
      { title: "Procurement & Sourcing", slug: "procurement-sourcing", icon: ShoppingCart, desc: "Spend analytics and vendor management." },
      { title: "IT Helpdesk", slug: "it-helpdesk", icon: MonitorSmartphone, desc: "24/7 global tech support and asset tracking." },
      { title: "Document Management", slug: "document-management", icon: FileText, desc: "Digitization and metadata indexing." },
      { title: "Customer Support", slug: "customer-support", icon: Headset, desc: "Omnichannel global customer care." },
    ]
  },
  processExcellence: {
    title: "Process Excellence",
    items: [
      { title: "Master Data Management", slug: "master-data", icon: Database, desc: "Data cleansing and governance." },
      { title: "Robotic Process Automation", slug: "rpa", icon: Bot, desc: "Intelligent software bot deployment." },
      { title: "Lean Six Sigma", slug: "lean-six-sigma", icon: LineChart, desc: "Data-driven waste elimination." },
      { title: "Process Mining", slug: "process-mining", icon: Search, desc: "Factual mapping of IT event logs." },
      { title: "Workflow Digitization", slug: "workflow-digitization", icon: Network, desc: "Custom digital form routing." },
      { title: "Quality Assurance", slug: "quality-assurance", icon: ShieldCheck, desc: "Rigorous manual and automated testing." },
    ]
  }
};

const INDUSTRIES_MENU = [
  { title: 'Banking & Financial', slug: 'bfsi', icon: ShieldCheck, desc: 'KYC/AML, loan processing, and fraud detection operations.', colSpan: 'col-span-2 md:col-span-1 lg:col-span-2' },
  { title: 'Healthcare & Life Sciences', slug: 'healthcare', icon: Stethoscope, desc: 'HIPAA-compliant revenue cycle management.', colSpan: 'col-span-2 md:col-span-1 lg:col-span-2' },
  { title: 'Technology & SaaS', slug: 'technology-saas', icon: MonitorSmartphone, desc: 'Tier 1/2 technical helpdesk and customer success operations.', colSpan: 'col-span-2 lg:col-span-3' },
  { title: 'Retail & E-commerce', slug: 'retail-ecommerce', icon: ShoppingCart, desc: 'Omnichannel fulfillment and catalog management.', colSpan: 'col-span-2 lg:col-span-3' },
  { title: 'Logistics', slug: 'logistics-supply-chain', icon: Truck, desc: 'Freight audit & track-and-trace.', colSpan: 'col-span-2 lg:col-span-2' },
  { title: 'Telecommunications', slug: 'telecommunications', icon: RadioTower, desc: 'Billing disputes & retention.', colSpan: 'col-span-2 lg:col-span-2' },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-xl border-b border-zinc-200" onMouseLeave={() => setActiveMenu(null)}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10" onClick={() => setActiveMenu(null)}>
           <span className="font-black text-2xl tracking-tighter text-zinc-900"><span className="text-blue-600">i</span>mpro<span className="text-blue-600">X</span> <span className="font-light">BPM</span></span>
        </Link>

        {/* Desktop Navigation (Shifted Right) */}
        <nav className="hidden md:flex items-center h-full gap-1 relative z-10 ml-auto mr-8">
          
          {/* SERVICES LINK */}
          <div 
            className="flex items-center h-full px-5"
            onMouseEnter={() => setActiveMenu('services')}
          >
            <button suppressHydrationWarning className={`flex items-center gap-1.5 font-bold text-sm tracking-wide transition-colors ${activeMenu === 'services' ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-900'}`}>
              Services <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* INDUSTRIES LINK */}
          <div 
            className="flex items-center h-full px-5"
            onMouseEnter={() => setActiveMenu('industries')}
          >
            <button className={`flex items-center gap-1.5 font-bold text-sm tracking-wide transition-colors ${activeMenu === 'industries' ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-900'}`}>
              Industries <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <Link href="/about" className="px-5 font-bold text-sm tracking-wide text-zinc-600 hover:text-zinc-900 transition-colors" onMouseEnter={() => setActiveMenu(null)}>
            About Us
          </Link>
          <Link href="/blog" className="px-5 font-bold text-sm tracking-wide text-zinc-600 hover:text-zinc-900 transition-colors" onMouseEnter={() => setActiveMenu(null)}>
            Blogs
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6 relative z-10">

          <Link 
            href="/#contact" 
            className="inline-flex items-center justify-center bg-zinc-900 hover:bg-blue-600 text-white rounded-full px-8 h-12 text-sm font-bold tracking-wide transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5"
          >
            Schedule Consultation
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <Sheet open={isMobileOpen} onOpenChange={setIsMobileOpen}>
          <SheetTrigger className="md:hidden p-2 hover:bg-zinc-100 rounded-md transition-colors relative z-10">
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-white border-l border-zinc-200">
             <div className="flex flex-col gap-6 pt-10">
                <Link href="/services" onClick={() => setIsMobileOpen(false)} className="text-lg font-bold">All Services</Link>
                <Link href="/industries" onClick={() => setIsMobileOpen(false)} className="text-lg font-bold">All Industries</Link>
                <Link href="/about" onClick={() => setIsMobileOpen(false)} className="text-lg font-bold">About Us</Link>
                <Link href="/#contact" onClick={() => setIsMobileOpen(false)} className="text-lg font-bold">Contact</Link>
             </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* --- COMPACT MEGA MENUS --- */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.98 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-[80px] left-1/2 -translate-x-1/2 w-[800px] bg-white rounded-3xl border border-zinc-200 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.15)] overflow-hidden"
          >
            
            {/* SERVICES MEGA MENU */}
            {activeMenu === 'services' && (
              <div className="p-8">
                <div className="grid grid-cols-2 gap-12 relative">
                  
                  {/* Decorative Divider */}
                  <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent"></div>

                  {/* Pillar 1 */}
                  <div>
                    <h3 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-6 flex items-center">
                      <span className="w-6 h-px bg-zinc-300 mr-3"></span>
                      {SERVICES_MENU.backOffice.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {SERVICES_MENU.backOffice.items.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="group relative flex items-center p-3 -mx-3 rounded-2xl transition-all duration-300 hover:bg-zinc-50"
                          >
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-zinc-600">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="font-bold text-zinc-900 text-sm mb-0.5 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                              <p className="text-xs text-zinc-500 font-medium">{service.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div>
                    <h3 className="text-xs font-black tracking-[0.2em] uppercase text-zinc-400 mb-6 flex items-center">
                      <span className="w-6 h-px bg-zinc-300 mr-3"></span>
                      {SERVICES_MENU.processExcellence.title}
                    </h3>
                    <div className="flex flex-col gap-1">
                      {SERVICES_MENU.processExcellence.items.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="group relative flex items-center p-3 -mx-3 rounded-2xl transition-all duration-300 hover:bg-zinc-50"
                          >
                            <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-zinc-600">
                              <Icon className="w-4 h-4" />
                            </div>
                            <div>
                              <h4 className="font-bold text-zinc-900 text-sm mb-0.5 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                              <p className="text-xs text-zinc-500 font-medium">{service.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* INDUSTRIES MEGA MENU */}
            {activeMenu === 'industries' && (
              <div className="p-8">
                <div className="grid grid-cols-2 gap-4">
                  {INDUSTRIES_MENU.map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <Link 
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className={`group relative overflow-hidden p-5 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:border-blue-100 hover:shadow-lg hover:shadow-blue-900/5 transition-all duration-300 flex items-start gap-4`}
                      >
                        <div className="w-10 h-10 shrink-0 rounded-xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shadow-sm">
                          <Icon className="w-4 h-4" />
                        </div>
                        
                        <div>
                          <h4 className="font-bold text-zinc-900 text-sm mb-1 group-hover:text-blue-600 transition-colors">{industry.title}</h4>
                          <p className="text-xs text-zinc-500 font-medium leading-relaxed">{industry.desc}</p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
