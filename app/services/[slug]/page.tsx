import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, XCircle, Calculator, Database, LineChart, 
  FileText, CreditCard, BookOpen, BarChart3, Users, ClipboardList, HeartPulse, 
  Headset, Search, Briefcase, ShoppingCart, Keyboard, Scan, Archive, ShieldCheck, 
  Eraser, Network, Tags, Shield, Stethoscope, Truck, Building2, Activity, Map, 
  AlertTriangle, Box, Play, Target, Bot, BrainCircuit, LayoutDashboard, Code, 
  TrendingUp, AlertOctagon, PieChart, GitMerge, Scissors, Zap, Smile, 
  GraduationCap, Landmark, BarChart, Zap as Lightning
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

// Helper function to generate tailored pain points based on the service slug
function getPainPoints(slug: string) {
  const defaultPain = [
    "Core staff spending hours on non-revenue-generating administrative tasks",
    "High error rates leading to compliance audits and financial penalties",
    "Disparate, siloed data systems causing operational bottlenecks",
    "Inability to scale operations rapidly during high-volume periods"
  ];
  
  switch(slug) {
    case 'finance-accounting':
      return [
        "Invoices delayed in approval workflows causing missed early-payment discounts",
        "High Days Sales Outstanding (DSO) creating severe cash flow bottlenecks",
        "Month-end close takes weeks due to manual general ledger reconciliation",
        "Audit anxiety due to scattered financial documentation and poor compliance"
      ];
    case 'human-resources':
      return [
        "HR Business Partners bogged down by Tier-1 employee queries and paperwork",
        "Global payroll errors leading to disgruntled employees and tax penalties",
        "Slow onboarding processes causing high candidate drop-off rates",
        "Scattered employee records across multiple non-integrated systems"
      ];
    case 'rpa':
      return [
        "Human talent wasted on repetitive swivel-chair data entry",
        "Unacceptable error rates in high-volume transactional processing",
        "Massive backlogs building up due to inadequate staffing levels",
        "Legacy systems that cannot communicate with modern APIs"
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

  const painPoints = getPainPoints(slug);

  return (
    <div className="bg-white selection:bg-blue-100 font-sans">
      
      {/* SECTION 1: CLEAN HERO */}
      <section className="pt-20 pb-16 md:pt-32 md:pb-24 border-b border-zinc-100 relative">
        <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
        <div className="container mx-auto px-4 md:px-6 max-w-5xl text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 mb-6 bg-zinc-100 px-4 py-2 rounded-full">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
            <span className="text-zinc-600 font-bold text-xs tracking-[0.15em] uppercase">
              {service.category.replace('-', ' ')}
            </span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-zinc-900 leading-[1.05] mb-8 tracking-tighter">
            {service.title}
          </h1>
          
          <p className="text-lg md:text-xl text-zinc-500 leading-relaxed max-w-3xl mx-auto mb-10 font-medium">
            {service.excerpt}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/20"
            >
              Book Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 2: THE CHALLENGE (Admin Assist Style) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">Built for High-Volume Excellence</h2>
            <p className="text-lg text-zinc-600 leading-relaxed">
              {service.overview}
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-10 items-stretch">
            {/* Left: Pain Points Box */}
            <div className="bg-zinc-50 rounded-3xl p-8 md:p-12 border border-zinc-100 flex flex-col justify-center">
              <h3 className="text-2xl font-bold text-zinc-900 mb-8">
                Operational Friction is Disrupting Your Office
              </h3>
              <div className="space-y-6">
                {painPoints.map((pain, idx) => (
                  <div key={idx} className="flex gap-4 items-start">
                    <XCircle className="w-6 h-6 text-red-500 shrink-0 mt-0.5" />
                    <p className="text-zinc-700 font-medium leading-relaxed">{pain}</p>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Right: Cinematic Image with Quote */}
            <div className="relative h-[500px] lg:h-auto w-full rounded-3xl overflow-hidden shadow-2xl">
              <Image 
                src={service.image} 
                alt={`${service.title} Operations`} 
                fill 
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900/90 via-zinc-900/40 to-transparent"></div>
              
              <div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
                <p className="text-white text-xl md:text-2xl font-bold leading-snug">
                  "Stop letting operational friction dictate your growth. We provide the leverage you need to scale effortlessly."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3: CORE SOLUTIONS (Horizontal Cards) */}
      <section className="py-24 bg-zinc-50 border-y border-zinc-100">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight">Core Execution Capabilities</h2>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {service.deliverables.slice(0, 3).map((item, idx) => {
              const Icon = IconMap[item.icon] || Database;
              return (
                <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-blue-100 hover:border-blue-300 hover:shadow-xl transition-all duration-300 text-center flex flex-col items-center">
                  <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mb-6">
                    <Icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4">{item.title}</h3>
                  <p className="text-zinc-500 leading-relaxed text-sm">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* SECTION 4: STRATEGIC PARTNERSHIP (Dark Theme) */}
      <section className="py-32 bg-[#0B1120] text-white">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Why Choose Improx BPM</h2>
            <p className="text-xl text-zinc-400">We don't just provide remote workers; we provide strategic operational partners.</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.businessImpact.map((impact, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors">
                <Lightning className="w-8 h-8 text-blue-400 mb-6" />
                <h3 className="text-xl font-bold mb-4">{impact.title}</h3>
                <p className="text-zinc-400 leading-relaxed text-sm">
                  {impact.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SECTION 5: LATEST INSIGHTS (Blog Fallback) */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 md:px-6 max-w-7xl">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl md:text-4xl font-black text-zinc-900 tracking-tight">Latest Insights</h2>
            <Link href="/blog" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Posts <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {posts.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group flex flex-col h-full border border-zinc-200 rounded-3xl overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/50 hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-64 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-8 flex flex-col flex-grow bg-white">
                  <span className="text-blue-600 font-bold text-xs uppercase tracking-[0.1em] mb-4">{post.category}</span>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 leading-snug group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between text-zinc-500 text-sm font-medium">
                    <span>{post.date}</span>
                    <span className="text-blue-600 flex items-center group-hover:translate-x-1 transition-transform">
                      Read <ArrowRight className="ml-1 w-4 h-4" />
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
