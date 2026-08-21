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

const getIcon = (iconName?: string, colorClass: string = "text-blue-600") => {
  switch (iconName) {
    case 'Database': return <Database className={`h-6 w-6 ${colorClass}`} />;
    case 'LineChart': return <LineChart className={`h-6 w-6 ${colorClass}`} />;
    case 'Calculator': return <Calculator className={`h-6 w-6 ${colorClass}`} />;
    case 'Headset': return <Headset className={`h-6 w-6 ${colorClass}`} />;
    default: return <Database className={`h-6 w-6 ${colorClass}`} />;
  }
};

const ServiceCard = ({ service, index }: { service: ServiceProps, index: number }) => {
  const color = COLORS[index % COLORS.length];

  return (
  <div className={`relative group overflow-hidden rounded-2xl border border-slate-200 transition-all duration-300 ${color.hoverBorder} hover:shadow-xl flex flex-col h-full bg-white`}>
    {/* Subtle Background Image with Heavy Overlay */}
    {service.image && (
      <>
        <Image 
          src={service.image} 
          alt={service.title}
          fill
          className="object-cover opacity-[0.03] group-hover:opacity-[0.08] transition-opacity duration-500 pointer-events-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/80 to-white pointer-events-none"></div>
      </>
    )}
    
    <div className="relative z-10 p-8 flex flex-col h-full">
      <div className={`w-12 h-12 rounded-xl ${color.bg} flex items-center justify-center mb-6 border ${color.border}`}>
        {getIcon(service.icon, color.iconColor)}
      </div>
      
      <h3 className="text-xl font-bold text-slate-900 mb-3">
        {service.title}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6">
        {service.excerpt}
      </p>
      
      {service.features && (
        <div className="space-y-3 mb-8 flex-1">
          {service.features.map((feature, i) => (
            <div key={i} className="flex items-start">
              <CheckCircle2 className="h-4 w-4 text-blue-500 mr-2.5 shrink-0 mt-0.5" />
              <span className="text-slate-700 text-sm">{feature}</span>
            </div>
          ))}
        </div>
      )}
      
      <Link 
        href={`/services/${service.slug}`}
        className={`inline-flex items-center ${color.text} ${color.hoverText} font-semibold text-sm transition-colors group/link mt-auto w-fit`}
      >
        Explore Solution 
        <ArrowRight className="ml-1.5 h-4 w-4 transform group-hover/link:translate-x-1 transition-transform" />
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
