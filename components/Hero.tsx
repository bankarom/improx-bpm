"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface HeroProps {
  title: string;
  subtitle: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export default function Hero({ title, subtitle, ctaPrimary, ctaSecondary }: HeroProps) {
  return (
    <section className="bg-zinc-950">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        
        {/* Left Content Half */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-gradient-to-br from-blue-900 via-blue-800 to-indigo-950 relative overflow-hidden">
          {/* Decorative background elements */}
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-72 h-72 bg-blue-500 rounded-full blur-[100px] opacity-40 pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-indigo-600 rounded-full blur-[120px] opacity-30 pointer-events-none"></div>
          
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl relative z-10"
          >
            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-8 animate-fade-in">
              <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
              <span className="text-white font-bold uppercase tracking-wider text-sm">improx BPM</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-white leading-tight mb-6">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-blue-100 mb-10 leading-relaxed max-w-xl">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/#contact"
                className="inline-flex items-center justify-center bg-white hover:bg-blue-50 text-blue-900 rounded-none px-8 h-14 text-base font-bold transition-colors"
              >
                {ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 rounded-none px-8 h-14 text-base font-semibold transition-colors"
              >
                {ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Image Half */}
        <div className="relative hidden lg:block h-full min-h-[500px]">
          <Image 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2000&auto=format&fit=crop"
            alt="Business professionals in modern colorful corporate office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/20 mix-blend-multiply"></div>
          
          {/* Floating Trust Badge */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="absolute bottom-12 -left-20 bg-white p-6 shadow-xl border-l-4 border-blue-600 max-w-xs"
          >
            <p className="text-4xl font-bold text-slate-900 mb-1">24/7</p>
            <p className="text-sm text-slate-600 font-medium">Global Back-Office & Process Excellence</p>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}
