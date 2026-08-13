import Hero from "@/components/Hero";
import Metrics from "@/components/Metrics";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import IndustriesGrid from "@/components/IndustriesGrid";
import { getHomePageData, getServices, getIndustries, getPosts } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqComponent from "@/components/FaqComponent";

export default async function Home() {
  const homeData = await getHomePageData();
  const services = await getServices();
  const industries = await getIndustries();
  const posts = await getPosts();

  return (
    <>
      <Hero 
        title={homeData.hero.title}
        subtitle={homeData.hero.subtitle}
        ctaPrimary={homeData.hero.ctaPrimary}
        ctaSecondary={homeData.hero.ctaSecondary}
      />
      

      <ServicesGrid services={services} />
      
      {/* Why Choose Us Section */}
      <section className="py-24 bg-zinc-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:24px_24px] opacity-10"></div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <span className="text-blue-400 font-bold text-sm tracking-[0.2em] uppercase block mb-4">Why Choose Improx BPM</span>
            <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">
              Engineering Permanent Operational Superiority
            </h2>
            <div className="space-y-6 text-lg md:text-xl text-zinc-300 leading-relaxed font-medium text-left md:text-center">
              <p>
                In today's hyper-competitive global market, traditional Business Process Outsourcing (BPO) is no longer enough. Simply handing off broken, inefficient processes to a cheaper offshore labor pool only scales your inefficiencies. At Improx BPM, we completely reject this outdated model. We don't just process your work—we forensically analyze, optimize, and automate it.
              </p>
              <p>
                Our approach combines top-tier offshore talent with Lean Six Sigma methodologies and enterprise-grade automation technology. Before we take over any workflow, our specialized teams map out your entire operational lifecycle to identify costly bottlenecks and eliminate redundant tasks. Whether it's cutting your month-end financial close down to three days, automating high-volume accounts payable, or building a global 24/7 HR shared services center, we engineer processes that are flawless by design.
              </p>
              <p>
                By partnering with us, you are not just reducing operational expenditures by 40% to 60%. You are actively transforming your back-office from a sluggish cost center into a highly agile, data-driven engine that empowers your frontline teams to focus entirely on revenue growth and customer satisfaction. Choose Improx BPM to build a resilient, scalable foundation capable of weathering any industry challenge.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProcessTimeline />
      
      <IndustriesGrid industries={industries} />
      
      <Metrics metrics={homeData.metrics} />

      {/* FAQ Section */}
      <section className="py-24 bg-white border-t border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Everything you need to know before partnering with our global teams.
            </p>
          </div>
          <FaqComponent />
        </div>
      </section>

      {/* Latest Insights / Blogs Section */}
      <section className="py-24 bg-zinc-50 border-t border-zinc-200">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div>
              <div className="mb-4 flex items-center">
                <span className="w-8 h-1 bg-blue-600 mr-4"></span>
                <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Enterprise Insights</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 leading-tight">
                Latest from the Blog
              </h2>
            </div>
            <Link href="/blog" className="hidden md:flex items-center text-blue-600 font-bold hover:text-blue-700 transition-colors">
              View All Articles <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {posts.slice(0, 3).map((post) => (
              <Link 
                key={post.slug} 
                href={`/blog/${post.slug}`}
                className="group bg-white rounded-3xl overflow-hidden shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-zinc-200 flex flex-col"
              >
                <div className="relative h-56 w-full overflow-hidden">
                  <Image 
                    src={post.image} 
                    alt={post.title} 
                    fill 
                    className="object-cover group-hover:scale-105 transition-transform duration-500" 
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                    {post.category}
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-4">
                    <Calendar className="w-4 h-4" />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-white border-t border-zinc-200 relative overflow-hidden">
        <div className="absolute top-0 right-1/4 w-[800px] h-[800px] bg-blue-50 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6 leading-tight">
              Ready to Transform Your Operations?
            </h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Schedule a free 15-minute discovery call to see how we can help optimize your processes, reduce costs, and accelerate growth.
            </p>
          </div>
          
          <ContactForm />
        </div>
      </section>
    </>
  );
}
