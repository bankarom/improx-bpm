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
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Full-width Background Image */}
      <Image 
        src="https://images.unsplash.com/photo-1556761175-5973dc0f32b7?q=80&w=2000&auto=format&fit=crop"
        alt="Back office operations team working at computers"
        fill
        className="object-cover"
        priority
      />
      {/* Dark gradient overlay for text readability */}
      <div className="absolute inset-0 bg-gradient-to-r from-zinc-950/95 via-zinc-900/80 to-transparent"></div>
      
      {/* Content Container */}
      <div className="container mx-auto px-4 md:px-8 lg:px-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl pt-20"
        >
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-sm mb-8 animate-fade-in">
            <span className="flex h-2 w-2 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
            <span className="text-white font-bold uppercase tracking-wider text-sm">improx BPM</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-white leading-[1.1] mb-6 tracking-tight">
            {title}
          </h1>
          
          <p className="text-xl md:text-2xl text-zinc-300 mb-10 leading-relaxed max-w-2xl font-medium">
            {subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link 
              href="/#contact"
              className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-none px-8 h-14 text-base font-bold transition-all shadow-lg hover:shadow-blue-600/20"
            >
              {ctaPrimary}
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
            <Link 
              href="/services"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 backdrop-blur-sm rounded-none px-8 h-14 text-base font-semibold transition-colors"
            >
              {ctaSecondary}
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Floating Trust Badge */}
      <motion.div 
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="absolute bottom-12 right-8 md:right-12 hidden lg:flex bg-white/10 backdrop-blur-md border border-white/20 p-5 rounded-2xl shadow-2xl max-w-[280px] items-center gap-4"
      >
        <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center shrink-0">
          <span className="text-white font-bold text-lg">24/7</span>
        </div>
        <div>
          <p className="text-sm text-white font-bold leading-tight">Global Back-Office & Process Excellence</p>
        </div>
      </motion.div>
    </section>
  );
}
