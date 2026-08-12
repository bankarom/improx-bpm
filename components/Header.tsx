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
           <span className="font-black text-2xl tracking-tighter text-zinc-900">improx<span className="text-blue-600">BPM</span></span>
        </Link>

        {/* Desktop Navigation (Shifted Right) */}
        <nav className="hidden md:flex items-center h-full gap-1 relative z-10 ml-auto mr-8">
          
          {/* SERVICES LINK */}
          <div 
            className="flex items-center h-full px-5"
            onMouseEnter={() => setActiveMenu('services')}
          >
            <button className={`flex items-center gap-1.5 font-bold text-sm tracking-wide transition-colors ${activeMenu === 'services' ? 'text-blue-600' : 'text-zinc-600 hover:text-zinc-900'}`}>
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
          <Link href="/login" className="text-sm font-bold text-zinc-500 hover:text-blue-600 transition-colors">
            Client Login
          </Link>
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

      {/* --- UNIQUE MEGA MENUS --- */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -5 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            
            {/* SERVICES MEGA MENU (Dual Pillar Full View) */}
            {activeMenu === 'services' && (
              <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 relative">
                  
                  {/* Decorative Divider */}
                  <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-zinc-200 to-transparent"></div>

                  {/* Pillar 1 */}
                  <div>
                    <h3 className="text-sm font-black tracking-[0.2em] uppercase text-zinc-400 mb-8 flex items-center">
                      <span className="w-8 h-px bg-zinc-300 mr-4"></span>
                      {SERVICES_MENU.backOffice.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {SERVICES_MENU.backOffice.items.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="group relative flex items-center p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-zinc-50/80"
                          >
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-100 transition-colors pointer-events-none"></div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mr-5 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300 text-zinc-600">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-zinc-900 text-base mb-0.5 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                              <p className="text-sm text-zinc-500 font-medium">{service.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                  {/* Pillar 2 */}
                  <div>
                    <h3 className="text-sm font-black tracking-[0.2em] uppercase text-zinc-400 mb-8 flex items-center">
                      <span className="w-8 h-px bg-zinc-300 mr-4"></span>
                      {SERVICES_MENU.processExcellence.title}
                    </h3>
                    <div className="flex flex-col gap-2">
                      {SERVICES_MENU.processExcellence.items.map((service) => {
                        const Icon = service.icon;
                        return (
                          <Link 
                            key={service.slug}
                            href={`/services/${service.slug}`}
                            onClick={() => setActiveMenu(null)}
                            className="group relative flex items-center p-4 -mx-4 rounded-2xl transition-all duration-300 hover:bg-zinc-50/80"
                          >
                            <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-blue-100 transition-colors pointer-events-none"></div>
                            <div className="w-12 h-12 rounded-xl bg-zinc-100 flex items-center justify-center mr-5 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300 text-zinc-600">
                              <Icon className="w-5 h-5" />
                            </div>
                            <div>
                              <h4 className="font-bold text-zinc-900 text-base mb-0.5 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                              <p className="text-sm text-zinc-500 font-medium">{service.desc}</p>
                            </div>
                          </Link>
                        );
                      })}
                    </div>
                  </div>

                </div>
              </div>
            )}

            {/* INDUSTRIES MEGA MENU (Bento Box) */}
            {activeMenu === 'industries' && (
              <div className="container mx-auto px-4 md:px-6 py-12">
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
                  {INDUSTRIES_MENU.map((industry) => {
                    const Icon = industry.icon;
                    return (
                      <Link 
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className={`group relative overflow-hidden p-6 rounded-3xl border border-zinc-200 bg-zinc-50/50 hover:bg-white hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 ${industry.colSpan} min-h-[160px] flex flex-col justify-between`}
                      >
                        {/* Subtle Background Glow on Hover */}
                        <div className="absolute -top-24 -right-24 w-48 h-48 bg-blue-100 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        
                        <div className="relative z-10 flex items-start justify-between mb-4">
                          <div className="w-12 h-12 rounded-2xl bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 group-hover:text-blue-600 group-hover:border-blue-200 transition-colors shadow-sm">
                            <Icon className="w-5 h-5" />
                          </div>
                          <div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-zinc-400 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 group-hover:bg-blue-50 group-hover:text-blue-600 transition-all duration-300">
                            <ChevronDown className="w-4 h-4 -rotate-90" />
                          </div>
                        </div>
                        
                        <div className="relative z-10">
                          <h4 className="font-extrabold text-zinc-900 text-lg mb-1 group-hover:text-blue-600 transition-colors">{industry.title}</h4>
                          <p className="text-sm text-zinc-500 font-medium leading-relaxed max-w-sm">{industry.desc}</p>
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
