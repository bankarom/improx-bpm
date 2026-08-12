"use client";

import { motion } from "framer-motion";

const logos = [
  "Acme Corp",
  "GlobalTech",
  "Quantum",
  "Synergy",
  "Apex",
  "Nexus",
  "Vertex",
  "Zenith"
];

export default function LogoCarousel() {
  return (
    <section className="py-12 bg-white border-y border-slate-100 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-center text-sm font-semibold text-slate-400 uppercase tracking-widest mb-8">
          Trusted by Industry Leaders
        </p>
        
        <div className="relative flex overflow-x-hidden">
          <div className="animate-marquee whitespace-nowrap flex items-center gap-16 md:gap-24">
            {[...logos, ...logos].map((logo, index) => (
              <div 
                key={index} 
                className="text-2xl font-black text-slate-300 tracking-tighter opacity-70 grayscale transition-all hover:grayscale-0 hover:opacity-100 hover:text-blue-900"
              >
                {logo}
              </div>
            ))}
          </div>
          
          <div className="absolute top-0 left-0 w-24 md:w-48 h-full bg-gradient-to-r from-white to-transparent pointer-events-none"></div>
          <div className="absolute top-0 right-0 w-24 md:w-48 h-full bg-gradient-to-l from-white to-transparent pointer-events-none"></div>
        </div>
      </div>
    </section>
  );
}
