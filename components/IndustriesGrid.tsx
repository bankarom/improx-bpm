"use client";

import { motion } from "framer-motion";
import { ArrowRight, Building2, ShieldCheck, Stethoscope, Truck } from "lucide-react";
import Link from "next/link";

interface IndustryProps {
  title: string;
  slug: string;
  excerpt: string;
}

const getIcon = (slug: string) => {
  switch (slug) {
    case 'healthcare': return <Stethoscope className="h-8 w-8 text-blue-400" />;
    case 'banking': return <ShieldCheck className="h-8 w-8 text-blue-400" />;
    case 'technology': return <Building2 className="h-8 w-8 text-blue-400" />;
    case 'logistics': return <Truck className="h-8 w-8 text-blue-400" />;
    default: return <Building2 className="h-8 w-8 text-blue-400" />;
  }
};

export default function IndustriesGrid({ industries }: { industries: IndustryProps[] }) {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <div className="mb-6 flex items-center">
              <span className="w-12 h-1 bg-blue-500 mr-4"></span>
              <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">Industries We Serve</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Specialized Domain Expertise.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We don't just provide generic resources. Our teams are deeply embedded in your industry's specific regulatory requirements, specialized software, and operational nuances.
            </p>
            <Link 
              href="/industries"
              className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 transition-colors"
            >
              Explore All Industries
            </Link>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid md:grid-cols-2 gap-6">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-800 p-8 border border-slate-700 hover:border-blue-500 transition-colors group cursor-default flex flex-col"
                >
                  <div className="mb-6">
                    {getIcon(industry.slug)}
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors duration-300">
                    {industry.title}
                  </h3>
                  <p className="text-slate-400 leading-relaxed flex-1">
                    {industry.excerpt}
                  </p>
                  <Link href={`/industries/${industry.slug}`} className="inline-flex items-center text-blue-500 hover:text-blue-400 font-semibold mt-6 transition-colors">
                    Learn More <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
