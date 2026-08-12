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
  GraduationCap, Landmark, BarChart, ChevronDown, CheckCircle
} from 'lucide-react';
import { getServiceBySlug, getServices, getPosts } from '@/lib/wordpress';

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

// Advanced dynamic pain points tailored to each service with high detail
function getDetailedPainPoints(slug: string) {
  const defaultPain = [
    { title: "Non-Value Added Overhead", desc: "Core staff spending exorbitant hours on non-revenue-generating administrative tasks instead of strategic execution." },
    { title: "Compliance Degradation", desc: "High error rates in manual processing leading to failed compliance audits, severe financial penalties, and loss of client trust." },
    { title: "Siloed Data Architecture", desc: "Disparate, non-communicating systems causing massive operational bottlenecks and completely obscuring enterprise-wide visibility." },
    { title: "Inelastic Scaling", desc: "Complete inability to scale operations rapidly during high-volume periods without linearly increasing expensive human headcount." }
  ];
  
  switch(slug) {
    case 'finance-accounting':
      return [
        { title: "Working Capital Trapped", desc: "Invoices delayed in convoluted, manual approval workflows causing entirely missed early-payment discounts and vendor friction." },
        { title: "Cash Flow Asphyxiation", desc: "High Days Sales Outstanding (DSO) creating severe cash flow bottlenecks that prevent strategic corporate reinvestment." },
        { title: "Month-End Paralysis", desc: "Month-end close takes weeks instead of days due to manual general ledger reconciliation and fragmented data sources." },
        { title: "Audit Anxiety", desc: "Constant fear of regulatory audits due to scattered financial documentation, lack of clear audit trails, and poor compliance standards." }
      ];
    case 'human-resources':
      return [
        { title: "Strategic Paralysis", desc: "Senior HR Business Partners bogged down by Tier-1 employee queries and mundane paperwork instead of focusing on culture and talent." },
        { title: "Global Payroll Liability", desc: "Intolerable payroll errors across fragmented global jurisdictions leading to disgruntled employees and immediate tax penalties." },
        { title: "Candidate Abandonment", desc: "Slow, manual onboarding processes causing high drop-off rates for top-tier candidates who expect a modern, seamless digital experience." },
        { title: "Data Fragmentation", desc: "Scattered, unprotected employee records across multiple non-integrated systems severely violating modern data privacy laws." }
      ];
    default:
      return defaultPain;
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

  return (
    <div className="bg-white selection:bg-blue-100 font-sans text-zinc-900">
      
      {/* 1. CLEAN ENTERPRISE HERO (White / Light Gray) */}
      <section className="relative min-h-[85vh] flex flex-col justify-center overflow-hidden border-b border-zinc-200 bg-zinc-50">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl mt-20">
          <div className="inline-flex items-center gap-2 mb-8 bg-white border border-zinc-200 px-5 py-2.5 rounded-full shadow-sm">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-zinc-600 font-bold text-xs tracking-[0.2em] uppercase">
              {service.category.replace('-', ' ')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-black text-zinc-900 leading-[1.05] mb-10 tracking-tighter">
            {service.title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-600 leading-relaxed max-w-4xl mx-auto mb-14 font-medium">
            {service.overview}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-10 py-5 text-base font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
            >
              Initiate Transformation
            </Link>
            <Link 
              href="#reality" 
              className="inline-flex items-center justify-center text-zinc-600 font-bold hover:text-blue-600 transition-colors group"
            >
              Explore Architecture <ChevronDown className="ml-2 w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      {/* 2. STICKY-SCROLL: THE OPERATIONAL REALITY (High Contrast Deep Navy) */}
      <section id="reality" className="relative bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 py-32">
            
            {/* Sticky Left Column */}
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-blue-400 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Operational Friction</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight">
                  The Enterprise Reality You Are Facing.
                </h2>
                <p className="text-zinc-400 text-lg leading-relaxed">
                  Enterprise growth is consistently bottlenecked by legacy friction. We identify the exact failure points in your architecture before we rewrite them.
                </p>
              </div>
            </div>

            {/* Scrolling Right Column */}
            <div className="lg:w-2/3 space-y-8">
              {painPoints.map((pain, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 p-10 md:p-14 rounded-3xl hover:bg-white/10 transition-colors duration-500">
                  <div className="text-blue-500/20 text-8xl font-black absolute top-6 right-10 pointer-events-none">
                    0{idx + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 pr-16">{pain.title}</h3>
                    <p className="text-lg text-zinc-400 leading-relaxed font-light">{pain.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            
          </div>
        </div>
      </section>

      {/* 3. BENTO BOX: CORE CAPABILITIES (Clean White / Zinc) */}
      <section className="py-32 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-4xl mx-auto mb-24">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Architecture</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight mb-8">Bespoke Execution Modules</h2>
            <p className="text-xl text-zinc-600 font-medium leading-relaxed">
              We do not provide off-the-shelf templates. Every capability is precision-engineered to integrate flawlessly into your existing enterprise ecosystem.
            </p>
          </div>
          
          {/* Asymmetrical Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[320px]">
            {service.deliverables.map((item, idx) => {
              const Icon = IconMap[item.icon] || Database;
              const isLarge = idx === 0 || idx === 3;
              
              return (
                <div 
                  key={idx} 
                  className={`relative overflow-hidden bg-white border border-zinc-200 p-10 rounded-[2rem] shadow-sm hover:shadow-xl hover:border-blue-300 transition-all duration-500 flex flex-col justify-between group ${isLarge ? 'md:col-span-2' : 'md:col-span-1'}`}
                >
                  <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full blur-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 translate-x-1/3 -translate-y-1/3"></div>
                  
                  <div className="w-16 h-16 bg-zinc-50 border border-zinc-100 text-blue-600 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 relative z-10">
                    <Icon className="w-8 h-8" />
                  </div>
                  
                  <div className="relative z-10 mt-auto">
                    <h3 className="text-2xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                    <p className="text-zinc-600 leading-relaxed font-medium">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GLOWING VERTICAL PIPELINE: METHODOLOGY (Clean Light Theme) */}
      <section className="py-32 bg-white relative overflow-hidden border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-4xl mx-auto mb-32">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Deployment</span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-zinc-900 tracking-tight">The Integration Pipeline</h2>
          </div>
          
          <div className="max-w-4xl mx-auto relative">
            {/* The Center Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-[2px] bg-zinc-200 md:-translate-x-1/2"></div>
            
            <div className="space-y-24">
              {service.methodology.map((method, idx) => {
                const isEven = idx % 2 === 0;
                return (
                  <div key={idx} className={`relative flex flex-col md:flex-row items-start ${isEven ? 'md:flex-row-reverse' : ''}`}>
                    
                    {/* The Node */}
                    <div className="absolute left-8 md:left-1/2 w-6 h-6 rounded-full bg-white border-4 border-blue-600 shadow-md transform -translate-x-[11px] md:-translate-x-1/2 mt-2 z-10"></div>
                    
                    {/* Content Box */}
                    <div className={`ml-20 md:ml-0 md:w-1/2 ${isEven ? 'md:pl-16' : 'md:pr-16 text-left md:text-right'}`}>
                      <span className="text-blue-600 font-black text-xl mb-2 block">Phase {method.step}</span>
                      <h3 className="text-3xl font-bold text-zinc-900 mb-6">{method.title}</h3>
                      <p className="text-lg text-zinc-600 leading-relaxed font-medium">
                        {method.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 5. DATA-DRIVEN IMPACT (Dark Section for Contrast) */}
      <section className="py-32 bg-[#050505] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <span className="text-blue-500 font-bold text-xs tracking-[0.2em] uppercase block mb-4">ROI Generation</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Measurable Business Impact.</h2>
              <p className="text-xl text-zinc-400 font-light leading-relaxed mb-12">
                We don't deal in hypotheticals. Our entire operational model is built to deliver hard, quantitative ROI that your executive board can see on the balance sheet within the first quarter.
              </p>
              
              <div className="space-y-6">
                {service.businessImpact.map((impact, idx) => (
                  <div key={idx} className="flex gap-6 items-start p-6 rounded-2xl bg-white/5 border border-white/5 hover:bg-white/10 transition-colors">
                    <CheckCircle className="w-8 h-8 text-blue-500 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-xl font-bold mb-2">{impact.title}</h4>
                      <p className="text-zinc-400 leading-relaxed">{impact.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="relative h-[800px] w-full rounded-[3rem] overflow-hidden">
              <Image 
                src={service.image} 
                alt={`${service.title} Impact`} 
                fill 
                className="object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. LATEST INSIGHTS (3 Articles - Requested by User) */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-16">
            <div>
              <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Intelligence</span>
              <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">Enterprise Insights</h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Publications <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full border border-zinc-200 bg-white rounded-[2rem] overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-2 transition-all duration-500">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.1em] mb-4">{post.category}</span>
                  <h3 className="text-2xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-zinc-500 text-sm font-bold pt-6 border-t border-zinc-100">
                    <span>{post.date}</span>
                    <span className="text-blue-600 flex items-center group-hover:translate-x-2 transition-transform">
                      Read Report <ArrowRight className="ml-2 w-4 h-4" />
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
