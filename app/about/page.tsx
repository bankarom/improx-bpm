import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Globe2, Layers, Cpu, ShieldCheck, Zap } from 'lucide-react';

export default function AboutPage() {
  return (
    <div className="bg-white selection:bg-blue-100 font-sans text-zinc-900">
      
      {/* 1. CINEMATIC HERO */}
      <section className="relative pt-32 pb-24 lg:pt-48 lg:pb-40 overflow-hidden bg-[#050505] text-white border-b border-white/10">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-blue-600/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/3 pointer-events-none"></div>
        
        <div className="container mx-auto px-4 md:px-6 relative z-10 text-center max-w-5xl">
          <div className="inline-flex items-center gap-2 mb-8 bg-white/5 border border-white/10 px-5 py-2.5 rounded-full backdrop-blur-md">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            <span className="text-white font-bold text-[11px] tracking-[0.25em] uppercase">
              Global Business Process Management
            </span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight">
            We Engineer <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">Operational Excellence.</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-400 leading-relaxed mb-12 font-light max-w-3xl mx-auto">
            ImproxBPM isn't just an outsourcing vendor. We are architects of scale. We combine Lean Six Sigma methodologies, offshore talent arbitrage, and Robotic Process Automation to completely transform enterprise back-offices.
          </p>
        </div>
      </section>

      {/* 2. OUR STORY (EDITORIAL MASONRY) */}
      <section className="py-24 md:py-32 bg-white relative overflow-hidden">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            
            {/* Left: Text Content */}
            <div className="max-w-xl">
              <span className="text-blue-600 font-black text-xs tracking-[0.2em] uppercase block mb-6">Our Genesis</span>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-8 text-zinc-900 leading-tight">
                Built to solve the <br/> enterprise bottleneck.
              </h2>
              
              <div className="space-y-6 text-lg text-zinc-600 font-medium leading-relaxed">
                <p>
                  For decades, massive enterprises were forced to choose between two flawed operational models: build an incredibly expensive in-house back office, or outsource to a generic vendor that sacrifices quality and security for cost.
                </p>
                <p>
                  ImproxBPM was founded to shatter that paradigm. We saw that the true bottleneck wasn't just labor—it was <strong className="text-zinc-900">bad processes</strong>. 
                </p>
                <p>
                  Today, we don't just provide bodies to do data entry. We deploy process engineers to tear down your archaic workflows, rebuild them using Lean methodologies, automate what can be automated with software bots, and execute the rest with our elite global delivery teams.
                </p>
              </div>

              <div className="mt-12 flex items-center gap-6">
                <div className="text-lg font-bold text-zinc-900 border-l-4 border-blue-600 pl-4 py-2">
                  Backed by 1,500+ global <br/> process engineers & analysts.
                </div>
              </div>
            </div>

            {/* Right: Asymmetrical Masonry Grid */}
            <div className="relative h-[600px] md:h-[700px] w-full">
              <div className="absolute top-0 right-0 w-[60%] h-[55%] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" alt="Corporate office" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-0 left-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-2xl z-10 border-8 border-white">
                <Image src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" alt="Data analytics" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              <div className="absolute bottom-[10%] right-0 w-[40%] h-[35%] rounded-3xl overflow-hidden shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80" alt="Global operations" fill className="object-cover hover:scale-105 transition-transform duration-700" />
              </div>
              
              {/* Floating Badge */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-[0_20px_40px_-10px_rgba(0,0,0,0.15)] border border-white/50 text-center w-48">
                <Globe2 className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                <span className="block text-2xl font-black text-zinc-900 mb-1">4 Global</span>
                <span className="block text-xs font-bold text-zinc-500 uppercase tracking-wider">Delivery Centers</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. GLOBAL SCALE (BY THE NUMBERS) */}
      <section className="py-24 md:py-32 bg-[#0B1120] text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none"></div>
        <div className="container mx-auto px-4 md:px-6 relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6">Execution at Enterprise Scale.</h2>
            <p className="text-xl text-zinc-400 font-light leading-relaxed">
              We don't deal in hypotheticals. Our infrastructure processes massive volumes of mission-critical data every single day.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 divide-x divide-zinc-800">
            <div className="text-center px-4">
              <div className="text-5xl md:text-6xl font-black mb-4 text-blue-500">12M+</div>
              <div className="text-zinc-300 font-bold uppercase tracking-wider text-sm">Transactions<br/>Processed Annually</div>
            </div>
            <div className="text-center px-4">
              <div className="text-5xl md:text-6xl font-black mb-4 text-blue-500">99.9%</div>
              <div className="text-zinc-300 font-bold uppercase tracking-wider text-sm">SLA Quality<br/>Adherence Rate</div>
            </div>
            <div className="text-center px-4">
              <div className="text-5xl md:text-6xl font-black mb-4 text-blue-500">$2B+</div>
              <div className="text-zinc-300 font-bold uppercase tracking-wider text-sm">Managed Spend<br/>Optimized</div>
            </div>
            <div className="text-center px-4">
              <div className="text-5xl md:text-6xl font-black mb-4 text-blue-500">45%</div>
              <div className="text-zinc-300 font-bold uppercase tracking-wider text-sm">Average Client<br/>Cost Reduction</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. CORE VALUES (INTERACTIVE REVEAL) */}
      <section className="py-24 md:py-32 bg-zinc-50 border-b border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            
            <div className="lg:w-1/3">
              <div className="sticky top-32">
                <span className="text-blue-600 font-black text-xs tracking-[0.2em] uppercase block mb-6">Our DNA</span>
                <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-6 text-zinc-900 leading-tight">
                  The principles that drive our processes.
                </h2>
                <p className="text-zinc-600 text-lg leading-relaxed font-medium">
                  We are obsessed with data, security, and measurable outcomes. These core principles are engineered into every workflow we manage.
                </p>
              </div>
            </div>

            <div className="lg:w-2/3">
              <div className="grid sm:grid-cols-2 gap-6">
                
                <div className="group bg-white p-10 rounded-[2rem] border border-zinc-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                    <ShieldCheck className="w-32 h-32 text-blue-600" />
                  </div>
                  <ShieldCheck className="w-10 h-10 text-blue-600 mb-6 relative z-10" />
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 relative z-10">Absolute Compliance</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed relative z-10">
                    From HIPAA in healthcare to KYC in banking, we treat data security and regulatory compliance as non-negotiable foundations, never afterthoughts.
                  </p>
                </div>

                <div className="group bg-white p-10 rounded-[2rem] border border-zinc-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                    <Cpu className="w-32 h-32 text-blue-600" />
                  </div>
                  <Cpu className="w-10 h-10 text-blue-600 mb-6 relative z-10" />
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 relative z-10">Automation First</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed relative z-10">
                    We don't solve problems just by throwing cheap labor at them. We actively look for ways to deploy RPA bots to eliminate manual steps entirely.
                  </p>
                </div>

                <div className="group bg-white p-10 rounded-[2rem] border border-zinc-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                    <Zap className="w-32 h-32 text-blue-600" />
                  </div>
                  <Zap className="w-10 h-10 text-blue-600 mb-6 relative z-10" />
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 relative z-10">Lean Methodologies</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed relative z-10">
                    Every process we ingest undergoes rigorous Six Sigma analysis to identify waste, reduce variance, and optimize the workflow before execution begins.
                  </p>
                </div>

                <div className="group bg-white p-10 rounded-[2rem] border border-zinc-200 hover:border-blue-300 hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                  <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-700 pointer-events-none">
                    <Layers className="w-32 h-32 text-blue-600" />
                  </div>
                  <Layers className="w-10 h-10 text-blue-600 mb-6 relative z-10" />
                  <h3 className="text-2xl font-black text-zinc-900 mb-4 relative z-10">Scalable Architecture</h3>
                  <p className="text-zinc-600 font-medium leading-relaxed relative z-10">
                    Our operations are designed to scale instantly. Whether you are expanding to a new country or hitting a seasonal volume spike, our infrastructure adapts.
                  </p>
                </div>

              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. GLASSMORPHIC CTA */}
      <section className="relative py-32 bg-[#050505] overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80" alt="Cyber security background" fill className="object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]"></div>
        
        <div className="container mx-auto px-4 relative z-10 flex justify-center">
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-12 md:p-16 rounded-[3rem] max-w-4xl w-full text-center shadow-2xl">
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6 leading-tight">
              Ready to restructure your operations?
            </h2>
            <p className="text-lg text-zinc-300 mb-10 max-w-2xl mx-auto font-light">
              Stop bleeding margin through inefficient back-office workflows. Partner with ImproxBPM to build a resilient, automated, global operational engine.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-4 text-sm font-bold text-zinc-900 transition-all bg-white rounded-xl hover:bg-zinc-100 hover:scale-105"
              >
                Schedule an Operational Audit
              </Link>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
