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
            
            {/* SERVICES MEGA MENU (Dynamic Featured Layout) */}
            {activeMenu === 'services' && (
              <div className="flex bg-white">
                {/* Featured Section */}
                <div className="w-[280px] shrink-0 bg-blue-600 p-8 text-white flex flex-col justify-between relative overflow-hidden">
                  <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 bg-blue-500 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
                  <div className="absolute bottom-0 left-0 -ml-10 -mb-10 w-32 h-32 bg-blue-700 rounded-full blur-2xl opacity-50 pointer-events-none"></div>
                  <div className="relative z-10">
                    <h3 className="font-black text-2xl tracking-tighter mb-4 leading-tight">Transform Your Operations.</h3>
                    <p className="text-blue-100 text-sm font-medium mb-8 leading-relaxed">Discover how our intelligent automation and offshore expertise scale modern enterprises.</p>
                  </div>
                  <Link href="/services" onClick={() => setActiveMenu(null)} className="relative z-10 inline-flex items-center text-sm font-bold bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-blue-50 transition-colors w-fit shadow-lg shadow-blue-900/20 hover:-translate-y-0.5">
                    View All Services
                  </Link>
                </div>

                {/* Services Grid */}
                <div className="p-8 flex-1">
                  <div className="grid grid-cols-2 gap-x-8 gap-y-6">
                    {/* Combine top services from both pillars for a cleaner grid */}
                    {[...SERVICES_MENU.backOffice.items.slice(0, 4), ...SERVICES_MENU.processExcellence.items.slice(0, 4)].map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link 
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="group flex items-start transition-all duration-300 hover:translate-x-1"
                        >
                          <div className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300 text-zinc-600 shrink-0 shadow-sm">
                            <Icon className="w-4 h-4" />
                          </div>
                          <div className="overflow-hidden">
                            <h4 className="font-bold text-zinc-900 text-sm mb-1 group-hover:text-blue-600 transition-colors truncate">{service.title}</h4>
                            <p className="text-xs text-zinc-500 font-medium truncate">{service.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* INDUSTRIES MEGA MENU (Bento Box Layout) */}
            {activeMenu === 'industries' && (
              <div className="p-6 bg-zinc-50">
                <div className="grid grid-cols-6 gap-3">
                  {INDUSTRIES_MENU.map((industry, i) => {
                    const Icon = industry.icon;
                    // Dynamic col span to create an asymmetric bento box (first two are big, rest are small)
                    const isLarge = i < 2;
                    const colSpan = isLarge ? "col-span-3 row-span-2 p-6" : "col-span-2 p-4";
                    
                    return (
                      <Link 
                        key={industry.slug}
                        href={`/industries/${industry.slug}`}
                        onClick={() => setActiveMenu(null)}
                        className={`group relative overflow-hidden rounded-3xl bg-white border border-zinc-200 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-500 flex flex-col justify-between ${colSpan}`}
                      >
                        <div className="absolute -bottom-12 -right-12 w-40 h-40 bg-blue-100/50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>
                        
                        <div className="relative z-10 flex items-start justify-between mb-4">
                          <div className={`rounded-xl bg-zinc-50 border border-zinc-100 flex items-center justify-center text-zinc-600 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-200 transition-all duration-300 ${isLarge ? 'w-12 h-12' : 'w-10 h-10'}`}>
                            <Icon className={isLarge ? 'w-5 h-5' : 'w-4 h-4'} />
                          </div>
                        </div>
                        
                        <div className="relative z-10 mt-auto">
                          <h4 className={`font-bold text-zinc-900 group-hover:text-blue-600 transition-colors ${isLarge ? 'text-lg mb-1' : 'text-sm mb-0.5'}`}>{industry.title}</h4>
                          <p className={`text-zinc-500 font-medium leading-relaxed ${isLarge ? 'text-sm' : 'text-xs line-clamp-1'}`}>{industry.desc}</p>
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
