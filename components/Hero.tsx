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
    <section className="bg-white">
      <div className="grid lg:grid-cols-2 min-h-[90vh]">
        
        {/* Left Content Half */}
        <div className="flex flex-col justify-center px-8 md:px-16 lg:px-24 py-20 bg-slate-50">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-2xl"
          >
            <div className="mb-6 flex items-center">
              <span className="w-12 h-1 bg-blue-600 mr-4"></span>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Improx BPM</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-extrabold text-slate-900 leading-tight mb-6">
              {title}
            </h1>
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-xl">
              {subtitle}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-none px-8 h-14 text-base font-semibold transition-colors"
              >
                {ctaPrimary}
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link 
                href="/services"
                className="inline-flex items-center justify-center border border-slate-300 text-slate-700 hover:bg-slate-100 rounded-none px-8 h-14 text-base font-semibold transition-colors bg-white"
              >
                {ctaSecondary}
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Right Image Half */}
        <div className="relative hidden lg:block h-full min-h-[500px]">
          <Image 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2000&auto=format&fit=crop"
            alt="Business professionals in modern corporate office managing back-office operations"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-blue-900/10 mix-blend-multiply"></div>
          
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
