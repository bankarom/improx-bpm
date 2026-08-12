import Hero from "@/components/Hero";
import LogoCarousel from "@/components/LogoCarousel";
import Metrics from "@/components/Metrics";
import ServicesGrid from "@/components/ServicesGrid";
import ProcessTimeline from "@/components/ProcessTimeline";
import IndustriesGrid from "@/components/IndustriesGrid";
import { getHomePageData, getServices, getIndustries } from "@/lib/wordpress";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default async function Home() {
  const homeData = await getHomePageData();
  const services = await getServices();
  const industries = await getIndustries();

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

      <section className="py-32 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="mb-6 flex justify-center">
            <span className="w-12 h-1 bg-blue-600 mb-6 block"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
            Ready to Optimize Your Back Office?
          </h2>
          <p className="text-slate-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
            Partner with Improx BPM to eliminate operational waste, reduce costs by up to 45%, and build a highly scalable, 24/7 delivery model.
          </p>
          <div className="flex justify-center">
             <Link 
               href="/contact" 
               className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-10 text-lg transition-colors flex items-center"
             >
               Request a Free Process Audit <ArrowRight className="ml-3 h-5 w-5" />
             </Link>
          </div>
        </div>
      </section>
    </>
  );
}
