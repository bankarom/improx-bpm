import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { 
  ArrowRight, ShieldCheck, Stethoscope, Building2, MonitorSmartphone, 
  ShoppingCart, Truck, RadioTower, CheckCircle, Plus, LayoutDashboard, Database, AlertOctagon
} from 'lucide-react';
import { getIndustries, getPosts } from '@/lib/wordpress';
import FaqAccordion from '@/components/FaqAccordion';

export async function generateStaticParams() {
  const industries = await getIndustries();
  return industries.map((industry) => ({
    slug: industry.slug,
  }));
}

const IconMap: Record<string, React.ElementType> = {
  ShieldCheck, Stethoscope, Building2, MonitorSmartphone, ShoppingCart, Truck, RadioTower,
  LayoutDashboard, Database, AlertOctagon
};

// Dynamic FAQs based on Industry Slug
function getIndustryFAQs(slug: string) {
  const defaultFAQs = [
    { question: "How quickly can you onboard your team to our proprietary systems?", answer: "Our teams undergo rigorous, client-specific training programs. Typical onboarding takes 4-6 weeks, allowing our agents to master your internal systems and workflows before going live." },
    { question: "How do you ensure data security and compliance?", answer: "We are ISO 27001 certified and strictly adhere to global data privacy laws. All client data is processed in highly secure, restricted-access environments with zero tolerance for unauthorized data sharing." },
    { question: "Can we scale operations during our peak seasons?", answer: "Absolutely. Our agile delivery model allows us to rapidly ramp up headcount during your peak seasons (e.g., Q4 for retail, tax season for BFSI) and scale back down when volumes normalize." }
  ];

  switch(slug) {
    case 'healthcare':
      return [
        { question: "Are your operations HIPAA compliant?", answer: "Yes, our healthcare delivery centers are fully HIPAA compliant. Our staff undergoes continuous PHI (Protected Health Information) training, and our IT infrastructure is designed to securely process highly sensitive medical data." },
        ...defaultFAQs.slice(1,3)
      ];
    case 'bfsi':
      return [
        { question: "Do you offer KYC/AML compliance support?", answer: "Yes. Our analysts are trained in international Know Your Customer (KYC) and Anti-Money Laundering (AML) regulations, providing thorough background checks and continuous transaction monitoring." },
        ...defaultFAQs.slice(1,3)
      ];
    default:
      return defaultFAQs;
  }
}


export default async function IndustryPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const industries = await getIndustries();
  const industry = industries.find(i => i.slug === slug);
  const posts = await getPosts();

  if (!industry) {
    notFound();
  }

  const faqs = getIndustryFAQs(slug);

  return (
    <div className="bg-white selection:bg-blue-100 font-sans text-zinc-900">
      
      {/* 1. CLEAN ENTERPRISE HERO */}
      <section className="relative pt-32 pb-24 lg:pt-40 lg:pb-32 overflow-hidden border-b border-zinc-100 bg-[#0B1120] text-white">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px] opacity-60"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center max-w-7xl mx-auto">
            
            {/* Left: Typography */}
            <div>
              <div className="inline-flex items-center gap-2 mb-6 bg-white/10 border border-white/20 px-4 py-2 rounded-full shadow-sm backdrop-blur-md">
                <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                <span className="text-white font-bold text-[10px] tracking-[0.2em] uppercase">
                  Industry Expertise
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.1] mb-8 tracking-tight">
                {industry.title}
              </h1>
              
              <p className="text-lg text-zinc-300 leading-relaxed mb-10 font-light max-w-lg">
                {industry.overview}
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/#contact" 
                  className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-white transition-all bg-blue-600 rounded-lg hover:bg-blue-700 hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]"
                >
                  Schedule Consultation
                </Link>
                <Link 
                  href="#challenges" 
                  className="inline-flex items-center justify-center text-zinc-300 font-bold hover:text-white transition-colors group px-8 py-4"
                >
                  Learn More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right: High Quality Image */}
            <div className="relative">
              <div className="absolute inset-0 bg-blue-600 rounded-[2.5rem] translate-x-4 translate-y-4 opacity-20 blur-lg"></div>
              <div className="relative h-[400px] lg:h-[600px] w-full rounded-[2.5rem] overflow-hidden shadow-2xl border border-white/10">
                <Image 
                  src={industry.image || 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80'} 
                  alt={industry.title} 
                  fill 
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-[#0B1120] to-transparent opacity-60"></div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 2. THE CHALLENGE */}
      <section id="challenges" className="relative bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 py-24 md:py-32">
            
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Current Landscape</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight text-zinc-900">
                  Sector Challenges
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  We understand the severe operational bottlenecks and regulatory hurdles specific to your industry. 
                </p>
              </div>
            </div>

            <div className="lg:w-2/3 space-y-8">
              {industry.challenges && industry.challenges.map((pain: any, idx: number) => (
                <div key={idx} className="bg-zinc-50 border border-zinc-200 p-8 md:p-12 rounded-3xl hover:border-blue-300 hover:shadow-xl transition-all duration-500 relative overflow-hidden group">
                  <div className="text-blue-100 text-8xl md:text-9xl font-black absolute top-1/2 -translate-y-1/2 right-4 md:right-10 pointer-events-none group-hover:scale-110 transition-transform duration-700">
                    0{idx + 1}
                  </div>
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold mb-4 pr-16 text-zinc-900">{pain.title}</h3>
                    <p className="text-base md:text-lg text-zinc-600 leading-relaxed font-medium">{pain.desc}</p>
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
            <h2 className="text-4xl md:text-5xl font-black text-zinc-900 tracking-tight mb-6">Domain Capabilities</h2>
            <p className="text-lg text-zinc-600 font-medium leading-relaxed">
              Targeted, highly compliant operational workflows engineered specifically for the {industry.title} sector.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {industry.deliverables && industry.deliverables.map((item: any, idx: number) => {
              const Icon = IconMap[item.icon] || LayoutDashboard;
              
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

      {/* 4. BUSINESS IMPACT (Using Secondary Image) */}
      <section className="py-24 md:py-32 bg-[#050505] text-white overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
            <div>
              <span className="text-blue-500 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Results</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8">Measurable Impact</h2>
              <p className="text-lg text-zinc-400 font-light leading-relaxed mb-12">
                We focus entirely on delivering measurable results that improve your bottom line and make your business more efficient.
              </p>
              
              <div className="space-y-4">
                {industry.businessImpact && industry.businessImpact.map((impact: any, idx: number) => (
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
            
            <div className="relative h-[500px] lg:h-[800px] w-full rounded-[2.5rem] overflow-hidden">
              <Image 
                src={industry.secondaryImage || industry.image || 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'} 
                alt={`${industry.title} Impact`} 
                fill 
                className="object-cover opacity-60 hover:opacity-80 transition-opacity duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/50 to-transparent"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ SECTION */}
      <section className="py-24 bg-white border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl">
          <div className="text-center mb-16">
            <span className="text-blue-600 font-bold text-xs tracking-[0.2em] uppercase block mb-4">Knowledge Base</span>
            <h2 className="text-3xl md:text-5xl font-black text-zinc-900 tracking-tight">Frequently Asked Questions</h2>
          </div>
          
          <FaqAccordion faqs={faqs} />
        </div>
      </section>

      {/* LATEST INSIGHTS */}
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
