import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, Calculator, Database, LineChart, 
  FileText, CreditCard, BookOpen, BarChart3, Users, ClipboardList, HeartPulse, 
  Headset, Search, Briefcase, ShoppingCart, Keyboard, Scan, Archive, ShieldCheck, 
  Eraser, Network, Tags, Shield, Stethoscope, Truck, Building2, Activity, Map, 
  AlertTriangle, Box, Play, Target, Bot, BrainCircuit, LayoutDashboard, Code, 
  TrendingUp, AlertOctagon, PieChart, GitMerge, Scissors, Zap, Smile, 
  GraduationCap, Landmark, BarChart, ChevronDown, CheckCircle, Plus
} from 'lucide-react';
import { getServiceBySlug, getServices, getPosts } from '@/lib/wordpress';
import FaqAccordion from '@/components/FaqAccordion';

export async function generateStaticParams() {
  const services = await getServices();
  return services.map((service) => ({
    slug: service.slug,
  }));
}

const IconMap: Record<string, React.ElementType> = {
  Calculator, Database, LineChart, FileText, CreditCard, BookOpen, BarChart3, 
  Users, ClipboardList, HeartPulse, Headset, Search, Briefcase, ShoppingCart, 
  Keyboard, Scan, Archive, ShieldCheck, Eraser, Network, Tags, Shield, 
  Stethoscope, Truck, Building2, Activity, Map, AlertTriangle, Box, Play, 
  Target, Bot, BrainCircuit, LayoutDashboard, Code, TrendingUp, AlertOctagon, 
  PieChart, GitMerge, Scissors, Zap, Smile, GraduationCap, Landmark, BarChart
};

// Simplified, highly relevant pain points
function getDetailedPainPoints(slug: string) {
  const defaultPain = [
    { title: "Manual Processing Costs", desc: "Core staff spending too many hours on repetitive administrative tasks instead of focusing on business growth." },
    { title: "Compliance & Error Risks", desc: "High error rates in manual data entry leading to compliance issues, financial penalties, and poor client experiences." },
    { title: "Disconnected Systems", desc: "Using multiple software systems that do not communicate, causing major delays and a lack of clear reporting." },
    { title: "Difficulty Scaling", desc: "Inability to handle sudden increases in work volume without immediately hiring expensive new employees." }
  ];
  
  switch(slug) {
    case 'finance-accounting':
      return [
        { title: "Delayed Invoice Approvals", desc: "Invoices stuck in slow, manual approval workflows, causing missed early-payment discounts and vendor frustration." },
        { title: "Cash Flow Issues (DSO)", desc: "High Days Sales Outstanding (DSO) creating cash flow problems that prevent you from investing back into the business." },
        { title: "Slow Month-End Close", desc: "The month-end financial close takes weeks instead of days due to manual reconciliation across multiple spreadsheets." },
        { title: "Audit & Compliance Risks", desc: "Poor document management and lack of clear financial audit trails causing stress during regulatory reviews." }
      ];
    case 'human-resources':
      return [
        { title: "HR Administrative Burden", desc: "Your HR team is bogged down answering basic employee questions and managing paperwork instead of focusing on company culture." },
        { title: "Global Payroll Errors", desc: "Frequent payroll mistakes across different countries and tax jurisdictions leading to unhappy employees and tax penalties." },
        { title: "Slow Onboarding", desc: "Manual, paper-based onboarding processes causing delays and a poor first impression for new hires." },
        { title: "Scattered Employee Data", desc: "Employee records stored across different, unsecure systems, making reporting difficult and risking data privacy violations." }
      ];
    case 'rpa':
      return [
        { title: "Wasted Human Potential", desc: "Highly paid employees spending their days doing simple data entry between two different software screens." },
        { title: "High Transactional Errors", desc: "Human fatigue leading to unacceptable error rates when processing thousands of similar documents or invoices." },
        { title: "Processing Backlogs", desc: "Work piling up overnight or during peak seasons because humans can only work 8-hour shifts." },
        { title: "Legacy Software Limitations", desc: "Old company software that doesn't have modern APIs, making it impossible to integrate with new technology." }
      ];
    case 'procurement-sourcing':
      return [
        { title: "Rogue Spending", desc: "Employees buying from unapproved vendors, leading to higher costs and a lack of consolidated purchasing power." },
        { title: "Supplier Risks", desc: "Relying on a single supplier without backup options, making your supply chain highly vulnerable to disruptions." },
        { title: "Slow Purchasing Cycles", desc: "It takes too long for a purchase request to become an actual order, slowing down your entire business operation." },
        { title: "Poor Contract Tracking", desc: "Contracts auto-renewing without anyone noticing, and suppliers failing to meet their promised service levels." }
      ];
    default:
      return defaultPain;
  }
}

// Dynamic FAQs based on Service Slug
function getServiceFAQs(slug: string) {
  const defaultFAQs = [
    { question: "How quickly can you implement this service?", answer: "Implementation timelines vary based on complexity, but most of our standard operational transitions take between 4 to 8 weeks from initial discovery to go-live." },
    { question: "How do you ensure data security and confidentiality?", answer: "We are ISO 27001 certified and strictly adhere to global data privacy laws like GDPR and HIPAA. All client data is processed in highly secure, restricted-access environments." },
    { question: "Will we lose control of our operations?", answer: "Absolutely not. You maintain complete control and visibility through real-time performance dashboards, daily reporting, and regular governance meetings with your dedicated account manager." },
    { question: "How is pricing structured?", answer: "We offer flexible pricing models, including Full-Time Equivalent (FTE) rates, transaction-based pricing, and fixed-fee managed services, depending on what best aligns with your business goals." }
  ];

  switch(slug) {
    case 'rpa':
      return [
        { question: "Do we need to buy expensive software licenses for RPA?", answer: "It depends on the platform you choose. We partner with industry leaders like UiPath and Automation Anywhere, but we can also build custom bots using open-source frameworks to minimize licensing costs." },
        { question: "What happens if our target application's UI changes?", answer: "UI changes can cause bots to fail. That is why our Hypercare team provides 24/7 monitoring. If a bot fails due to an application update, we immediately pause the process, fix the code, and redeploy it." },
        { question: "Can bots read scanned documents or PDFs?", answer: "Yes, we integrate our RPA solutions with advanced Optical Character Recognition (OCR) and Cognitive AI tools that can accurately extract data from unstructured documents and invoices." },
        ...defaultFAQs.slice(1,3)
      ];
    case 'finance-accounting':
      return [
        { question: "Do you integrate with our existing ERP?", answer: "Yes, our teams are highly proficient in all major enterprise ERPs, including SAP, Oracle, NetSuite, and Microsoft Dynamics. We work directly within your systems—no data migration required." },
        { question: "How do you handle local tax compliances for different countries?", answer: "We employ regional finance experts and utilize localized tax compliance software to ensure that all transactional processing strictly adheres to the specific legal and tax requirements of that jurisdiction." },
        ...defaultFAQs.slice(1,3)
      ];
    default:
      return defaultFAQs;
  }
}


export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = await getServiceBySlug(slug);
  const posts = await getPosts();

  if (!service) {
    notFound();
  }

  const painPoints = getDetailedPainPoints(slug);
  const faqs = getServiceFAQs(slug);

  return (
    <div className="bg-white selection:bg-blue-100 font-sans text-zinc-900">
      
      {/* 1. CLEAN ENTERPRISE HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-zinc-100 bg-zinc-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            
            {/* Left: Typography */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-white border border-zinc-200 px-4 py-2 rounded-full shadow-sm">
                <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
                <span className="text-zinc-600 font-bold text-[10px] tracking-[0.2em] uppercase">
                  {service.category.replace('-', ' ')}
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 leading-[1.1] mb-8 tracking-tight">
                {service.title}
              </h1>
              
              <p className="text-lg text-zinc-600 leading-relaxed mb-10 font-medium max-w-lg">
                {service.overview}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="#challenge" 
                  className="inline-flex items-center justify-center text-zinc-600 font-bold hover:text-blue-600 transition-colors group px-8 py-4"
                >
                  Learn More <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: High Quality Image (Primary) */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] translate-x-4 translate-y-4 opacity-10 blur-lg"></div>
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white">
                <Image 
                  src={service.image} 
                  alt={service.title} 
                  fill 
                  className="object-cover"
                  priority
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section id="challenge" className="relative bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 py-24 md:py-32">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Current Landscape</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  The Challenge
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Growing companies often face the same operational bottlenecks. We identify these core issues and resolve them before implementing new technology or processes.
                </p>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:w-2/3 space-y-8">
              {painPoints.map((pain, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-8 md:p-12 rounded-3xl hover:bg-white/10 transition-colors duration-500 relative overflow-hidden group">
                  <div className="text-blue-500/10 text-8xl md:text-9xl font-black absolute top-1/2 -translate-y-1/2 right-4 md:right-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    0{idx + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 pr-16 text-white">{pain.title}</h3>
                    <p className="text-base md:text-lg text-zinc-400 leading-relaxed font-light">{pain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. CORE CAPABILITIES (Uniform Grid) */}
      <section className="py-24 md:py-32 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Solutions</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">Core Capabilities</h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
              We provide highly specific, scalable solutions designed to integrate smoothly into your global business operations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {service.deliverables.map((item, idx) => {
              const Icon = IconMap[item.icon] || Database;
              
              return (
                <div 
                  key={idx} 
                  className="relative overflow-hidden bg-white border border-zinc-200 p-8 rounded-[2rem] shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-blue-300 transition-all duration-500 flex flex-col group h-full"
                >
                  <div className="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-1/3 -translate-y-1/3 pointer-events-none"></div>
                  
                  <div className="w-14 h-14 bg-zinc-50 border border-zinc-100 text-blue-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10 shrink-0">
                    <Icon className="w-6 h-6" />
                  </div>
                  
                  <div className="relative z-10 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold text-zinc-900 mb-3">{item.title}</h3>
                    <p className="text-sm text-zinc-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* NEW: OUR APPROACH (Text-Heavy Descriptive Section) */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center">
          <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Our Approach</span>
          <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight mb-10">Why Choose Improx BPM?</h2>
          <div className="space-y-6 text-lg md:text-xl text-zinc-600 leading-relaxed font-medium">
            <p>
              Unlike traditional BPO vendors that simply throw cheap labor at broken processes, Improx BPM engineers permanent operational superiority. We believe that technology and human intelligence must work together seamlessly. 
            </p>
            <p>
              Before we take over any operation, our Lean Six Sigma certified analysts conduct a rigorous forensic audit of your current state. We identify bottlenecks, eliminate redundancies, and standardize workflows. Only then do we overlay advanced automation, RPA, and dedicated offshore talent to execute the process at scale.
            </p>
            <p>
              The result is a highly agile, 24/7 delivery model that guarantees 99.9% accuracy, ensures strict compliance, and typically reduces our clients' operational expenditure by over 40% within the first year.
            </p>
          </div>
        </div>
      </section>

      {/* 4. HOW WE WORK (Methodology) */}
      <section className="py-24 md:py-32 bg-zinc-50 relative overflow-hidden border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-24">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Methodology</span>
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">How We Work</h2>
          </div>
          
          <div className="max-w-5xl mx-auto relative">
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 bg-zinc-200 md:-translate-x-1/2 rounded-full overflow-hidden">
              <div className="w-full h-1/3 bg-gradient-to-b from-transparent via-blue-500 to-transparent animate-pulse" style={{animationDuration: '3s'}}></div>
            </div>
            
            <div className="space-y-16 md:space-y-24">
              {service.methodology.map((method, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-center group ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    <div className="absolute left-8 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-zinc-300 group-hover:border-blue-500 shadow-lg group-hover:shadow-[0_0_20px_rgba(59,130,246,0.6)] transform -translate-x-[15px] md:-translate-x-1/2 z-10 transition-all duration-500 flex items-center justify-center">
                      <div className="w-2 h-2 bg-blue-600 rounded-full opacity-0 group-hover:opacity-100 scale-0 group-hover:scale-100 transition-all duration-500 delay-100"></div>
                    </div>
                    
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                      <div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm group-hover:shadow-2xl group-hover:border-blue-200 group-hover:-translate-y-2 transition-all duration-500 relative overflow-hidden">
                        
                        <Plus className={`absolute w-32 h-32 text-zinc-50 opacity-0 group-hover:opacity-100 transition-all duration-700 -z-10 ${isEven ? '-top-10 -right-10 rotate-45' : '-bottom-10 -left-10 -rotate-45'}`} />

                        <span className="text-blue-600 font-black text-sm uppercase tracking-widest mb-3 block">Phase 0{method.step}</span>
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-900 mb-4">{method.title}</h3>
                        <p className="text-base text-zinc-600 leading-relaxed font-medium">
                          {method.description}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. BUSINESS IMPACT (Using Secondary Image!) */}
      <section className="py-24 md:py-32 bg-[#050505] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div>
              <span className="text-blue-500 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Results</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Business Impact</h2>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
                We focus entirely on delivering measurable results that improve your bottom line and make your business more efficient.
              </p>
              
              <div className="space-y-4">
                {service.businessImpact.map((impact, idx) => (
                  <div key={idx} className="flex gap-5 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/20 transition-all duration-300">
                    <CheckCircle className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-2 text-white">{impact.title}</h4>
                      <p className="text-sm text-zinc-400 leading-relaxed">{impact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Using the newly added secondaryImage to prevent duplicates */}
            <div className="relative h-[500px] lg:h-[800px] w-full rounded-[2.5rem] overflow-hidden">
              <Image 
                src={service.secondaryImage || service.image} 
                alt={`${service.title} Impact`} 
                fill 
                className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* NEW: FAQ SECTION */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Knowledge Base</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* 6. LATEST INSIGHTS */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Insights</span>
              <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Recent Articles</h2>
            </div>
            <Link href="/blog" className="inline-flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Posts <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full border border-zinc-200 bg-white rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.1em] mb-4">{post.category}</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-zinc-500 text-xs font-bold pt-6 border-t border-zinc-100">
                    <span>{post.date}</span>
                    <span className="text-blue-600 flex items-center group-hover:translate-x-2 transition-transform">
                      Read Post <ArrowRight className="ml-2 w-4 h-4" />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
