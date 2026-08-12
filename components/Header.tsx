"use client";

import Link from "next/link";
import { ChevronDown, Menu, ArrowRight, Calculator, Users, ShoppingCart, MonitorSmartphone, FileText, Headset, Database, Bot, LineChart, Search, Network, ShieldCheck, Stethoscope, Truck, RadioTower } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const SERVICES_MENU = {
  backOffice: {
    title: "Back-Office Operations",
    description: "High-volume, complex administrative workflows.",
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
    description: "Intelligent automation and workflow optimization.",
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
  { title: 'BFSI', slug: 'bfsi', icon: ShieldCheck, desc: 'KYC/AML & fraud detection.' },
  { title: 'Healthcare', slug: 'healthcare', icon: Stethoscope, desc: 'HIPAA-compliant RCM.' },
  { title: 'Technology & SaaS', slug: 'technology-saas', icon: MonitorSmartphone, desc: 'Tier 1/2 helpdesk & CS.' },
  { title: 'Retail & E-commerce', slug: 'retail-ecommerce', icon: ShoppingCart, desc: 'Omnichannel fulfillment.' },
  { title: 'Logistics', slug: 'logistics-supply-chain', icon: Truck, desc: 'Freight audit & track-and-trace.' },
  { title: 'Telecommunications', slug: 'telecommunications', icon: RadioTower, desc: 'Billing disputes & retention.' },
];

export default function Header() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [activeServiceTab, setActiveServiceTab] = useState<'backOffice' | 'processExcellence'>('backOffice');

  const activeServices = SERVICES_MENU[activeServiceTab].items;

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-zinc-200" onMouseLeave={() => setActiveMenu(null)}>
      <div className="container mx-auto flex h-20 items-center justify-between px-4 md:px-6">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 relative z-10" onClick={() => setActiveMenu(null)}>
           <span className="font-bold text-2xl tracking-tighter">Improx<span className="text-blue-600">BPM</span></span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center h-full gap-2 relative z-10">
          
          {/* SERVICES LINK */}
          <div 
            className="flex items-center h-full px-4"
            onMouseEnter={() => setActiveMenu('services')}
          >
            <button className={`flex items-center gap-1 font-semibold text-sm transition-colors ${activeMenu === 'services' ? 'text-blue-600' : 'text-zinc-700 hover:text-black'}`}>
              Services <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'services' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          {/* INDUSTRIES LINK */}
          <div 
            className="flex items-center h-full px-4"
            onMouseEnter={() => setActiveMenu('industries')}
          >
            <button className={`flex items-center gap-1 font-semibold text-sm transition-colors ${activeMenu === 'industries' ? 'text-blue-600' : 'text-zinc-700 hover:text-black'}`}>
              Industries <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${activeMenu === 'industries' ? 'rotate-180' : ''}`} />
            </button>
          </div>

          <Link href="/about" className="px-4 font-semibold text-sm text-zinc-700 hover:text-black transition-colors" onMouseEnter={() => setActiveMenu(null)}>
            About Us
          </Link>
          <Link href="/resources" className="px-4 font-semibold text-sm text-zinc-700 hover:text-black transition-colors" onMouseEnter={() => setActiveMenu(null)}>
            Resources
          </Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-6 relative z-10">
          <Link href="/login" className="text-sm font-bold text-zinc-600 hover:text-blue-600 transition-colors">
            Client Login
          </Link>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-full px-7 h-11 text-sm font-bold transition-all shadow-sm hover:shadow-md"
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
                <Link href="/contact" onClick={() => setIsMobileOpen(false)} className="text-lg font-bold">Contact</Link>
             </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* --- MEGA MENUS --- */}
      <AnimatePresence>
        {activeMenu && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="absolute top-20 left-0 w-full bg-white border-b border-zinc-200 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] overflow-hidden"
          >
            
            {/* SERVICES MEGA MENU */}
            {activeMenu === 'services' && (
              <div className="container mx-auto px-4 md:px-6 flex min-h-[400px]">
                {/* Left Sidebar */}
                <div className="w-1/3 border-r border-zinc-100 py-8 pr-8 flex flex-col gap-2">
                  
                  <button 
                    onMouseEnter={() => setActiveServiceTab('backOffice')}
                    className={`flex flex-col text-left p-4 rounded-xl transition-all duration-300 ${activeServiceTab === 'backOffice' ? 'bg-blue-50/50 shadow-sm border border-blue-100' : 'hover:bg-zinc-50 border border-transparent'}`}
                  >
                    <span className={`font-bold text-lg mb-1 ${activeServiceTab === 'backOffice' ? 'text-blue-700' : 'text-zinc-900'}`}>
                      {SERVICES_MENU.backOffice.title}
                    </span>
                    <span className="text-sm text-zinc-500 font-medium">
                      {SERVICES_MENU.backOffice.description}
                    </span>
                  </button>

                  <button 
                    onMouseEnter={() => setActiveServiceTab('processExcellence')}
                    className={`flex flex-col text-left p-4 rounded-xl transition-all duration-300 ${activeServiceTab === 'processExcellence' ? 'bg-blue-50/50 shadow-sm border border-blue-100' : 'hover:bg-zinc-50 border border-transparent'}`}
                  >
                    <span className={`font-bold text-lg mb-1 ${activeServiceTab === 'processExcellence' ? 'text-blue-700' : 'text-zinc-900'}`}>
                      {SERVICES_MENU.processExcellence.title}
                    </span>
                    <span className="text-sm text-zinc-500 font-medium">
                      {SERVICES_MENU.processExcellence.description}
                    </span>
                  </button>

                  <div className="mt-auto pt-8">
                    <Link href="/services" onClick={() => setActiveMenu(null)} className="inline-flex items-center font-bold text-sm text-blue-600 hover:text-blue-700 transition-colors group">
                      View All Services <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>

                {/* Right Content */}
                <div className="w-2/3 py-8 pl-8">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {activeServices.map((service) => {
                      const Icon = service.icon;
                      return (
                        <Link 
                          key={service.slug}
                          href={`/services/${service.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="bg-white border border-zinc-200 p-2.5 rounded-lg group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">{service.title}</h4>
                            <p className="text-xs text-zinc-500 font-medium leading-relaxed">{service.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* INDUSTRIES MEGA MENU */}
            {activeMenu === 'industries' && (
              <div className="container mx-auto px-4 md:px-6 py-8 flex">
                <div className="w-2/3 pr-8 border-r border-zinc-100">
                  <div className="grid grid-cols-2 gap-x-6 gap-y-4">
                    {INDUSTRIES_MENU.map((industry) => {
                      const Icon = industry.icon;
                      return (
                        <Link 
                          key={industry.slug}
                          href={`/industries/${industry.slug}`}
                          onClick={() => setActiveMenu(null)}
                          className="flex items-start gap-4 p-4 rounded-xl hover:bg-zinc-50 transition-colors group"
                        >
                          <div className="bg-white border border-zinc-200 p-2.5 rounded-lg group-hover:border-blue-300 group-hover:bg-blue-50 transition-colors shrink-0">
                            <Icon className="w-5 h-5 text-blue-600" />
                          </div>
                          <div>
                            <h4 className="font-bold text-zinc-900 mb-1 group-hover:text-blue-600 transition-colors">{industry.title}</h4>
                            <p className="text-xs text-zinc-500 font-medium leading-relaxed">{industry.desc}</p>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                </div>
                <div className="w-1/3 pl-8 flex flex-col justify-center">
                  <div className="bg-slate-900 rounded-2xl p-6 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-600 rounded-full blur-3xl opacity-20 group-hover:opacity-40 transition-opacity duration-700 pointer-events-none"></div>
                    <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-blue-400 mb-3 block">Featured Industry</span>
                    <h4 className="text-xl font-bold text-white mb-3">Technology & SaaS</h4>
                    <p className="text-sm text-zinc-400 leading-relaxed mb-6">
                      See how we scaled a Tier-1 support desk for a hyper-growth SaaS platform in 30 days.
                    </p>
                    <Link 
                      href="/industries/technology-saas"
                      onClick={() => setActiveMenu(null)}
                      className="inline-flex items-center text-sm font-bold text-white transition-colors hover:text-blue-400"
                    >
                      Read Case Study <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </div>
            )}

          </motion.div>
        )}
      </AnimatePresence>

    </header>
  );
}
