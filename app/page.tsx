import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Metrics from "@/components/Metrics";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import IndustriesGrid from "@/components/IndustriesGrid";
import { getHomePageData, getServices, getIndustries, getPosts } from "@/lib/wordpress";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar, ShieldCheck, Lock, Award, FileCheck } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";

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
      
      <LogoCarousel />
      
      <ServicesGrid services={services} />
      
      <ProcessTimeline />
      
      <IndustriesGrid industries={industries} />
      
      <Metrics metrics={homeData.metrics} />

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

      {/* FAQ Section */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Everything you need to know before partnering with our global teams.
            </p>
          </div>
          <FaqAccordion />
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
