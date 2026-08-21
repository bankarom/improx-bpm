"use client";

import { CheckCircle2, Database, LineChart, Calculator, Headset } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

interface ServiceProps {
  title: string;
  slug: string;
  category: string;
  excerpt: string;
  features?: string[];
  icon?: string;
  image?: string;
}

const COLORS = [
  { bg: 'bg-indigo-50', border: 'border-indigo-100', text: 'text-indigo-600', iconColor: 'text-indigo-600', hoverBorder: 'hover:border-indigo-300', hoverText: 'hover:text-indigo-700' },
  { bg: 'bg-emerald-50', border: 'border-emerald-100', text: 'text-emerald-600', iconColor: 'text-emerald-600', hoverBorder: 'hover:border-emerald-300', hoverText: 'hover:text-emerald-700' },
  { bg: 'bg-amber-50', border: 'border-amber-100', text: 'text-amber-600', iconColor: 'text-amber-600', hoverBorder: 'hover:border-amber-300', hoverText: 'hover:text-amber-700' },
  { bg: 'bg-rose-50', border: 'border-rose-100', text: 'text-rose-600', iconColor: 'text-rose-600', hoverBorder: 'hover:border-rose-300', hoverText: 'hover:text-rose-700' },
  { bg: 'bg-purple-50', border: 'border-purple-100', text: 'text-purple-600', iconColor: 'text-purple-600', hoverBorder: 'hover:border-purple-300', hoverText: 'hover:text-purple-700' },
  { bg: 'bg-cyan-50', border: 'border-cyan-100', text: 'text-cyan-600', iconColor: 'text-cyan-600', hoverBorder: 'hover:border-cyan-300', hoverText: 'hover:text-cyan-700' },
  { bg: 'bg-fuchsia-50', border: 'border-fuchsia-100', text: 'text-fuchsia-600', iconColor: 'text-fuchsia-600', hoverBorder: 'hover:border-fuchsia-300', hoverText: 'hover:text-fuchsia-700' },
  { bg: 'bg-sky-50', border: 'border-sky-100', text: 'text-sky-600', iconColor: 'text-sky-600', hoverBorder: 'hover:border-sky-300', hoverText: 'hover:text-sky-700' },
];

// Remove getIcon


const ServiceCard = ({ service, index }: { service: ServiceProps, index: number }) => {
  const color = COLORS[index % COLORS.length];

  return (
  <div className={`relative group overflow-hidden rounded-2xl border transition-all duration-300 ${color.border} ${color.hoverBorder} hover:shadow-2xl flex flex-col min-h-[400px]`}>
    
    {/* Full Background Image */}
    {service.image && (
      <Image 
        src={service.image} 
        alt={service.title}
        fill
        className="object-cover group-hover:scale-110 transition-transform duration-700"
      />
    )}
    
    {/* Gradient Overlay for Text Readability */}
    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/95 via-zinc-950/70 to-zinc-900/30 group-hover:from-zinc-950 group-hover:via-zinc-900/80 transition-colors duration-500"></div>
    
    <div className="relative z-10 p-8 flex flex-col h-full justify-end">
      
      <h3 className="text-2xl font-bold text-white mb-3">
        {service.title}
      </h3>
      
      <p className="text-zinc-300 text-sm leading-relaxed mb-6">
        {service.excerpt}
      </p>
      
      {service.features && (
        <div className="space-y-3 mb-8 hidden group-hover:block transition-all duration-300 animate-fade-in">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-blue-400 mr-2.5 shrink-0 mt-0.5" />
              <span className="text-zinc-200 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      <Link 
        href={`/services/${service.slug}`}
        className={`inline-flex items-center text-white font-bold text-sm transition-colors group/link mt-auto w-fit bg-white/10 hover:bg-white/20 px-5 py-2.5 rounded-full backdrop-blur-md`}
      >
        Explore Solution 
        <ArrowRight className="ml-2 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
      </Link>
    </div>
  </div>
  );
};

export default function ServicesGrid({ services }: { services: ServiceProps[] }) {
  const backOfficeServices = services.filter(s => s.category === 'back-office');
  const processExcellenceServices = services.filter(s => s.category === 'process-excellence');

  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 -mr-64 -mt-64 w-[800px] h-[800px] bg-blue-50/50 rounded-full blur-3xl pointer-events-none"></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        
        {/* Section Header */}
        <div className="mb-20 text-center max-w-3xl mx-auto">
          <div className="mb-6 flex items-center justify-center">
            <span className="w-12 h-1 bg-blue-600 mr-4"></span>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Enterprise Operations</span>
            <span className="w-12 h-1 bg-blue-600 ml-4"></span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight">
            Comprehensive Services.
          </h2>
        </div>

        {/* Back Office Operations Section */}
        {backOfficeServices.length > 0 && (
          <div className="mb-24">
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Back Office Operations</h3>
              <p className="text-slate-600 max-w-2xl text-lg">Scalable, compliant, and highly accurate administrative execution across critical business functions.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px]">
              {backOfficeServices.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index} />
              ))}
            </div>
          </div>
        )}

        {/* Process Excellence Section */}
        {processExcellenceServices.length > 0 && (
          <div>
            <div className="mb-10">
              <h3 className="text-3xl font-bold text-slate-900 mb-4">Process Excellence</h3>
              <p className="text-slate-600 max-w-2xl text-lg">Data-driven methodologies and intelligent automation to transform and optimize your workflows.</p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-[1400px]">
              {processExcellenceServices.map((service, index) => (
                <ServiceCard key={service.slug} service={service} index={index + backOfficeServices.length} />
              ))}
            </div>
          </div>
        )}

      </div>
    </section>
  );
}
