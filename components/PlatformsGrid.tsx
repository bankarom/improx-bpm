"use client";

import { motion } from "framer-motion";
import { Settings } from "lucide-react";
import Link from "next/link";

const platforms = [
  { name: "RDN", desc: "Recovery Database Network" },
  { name: "Recovery Connect", desc: "Operations Management" },
  { name: "Clear Plan", desc: "Logistics Optimization" },
  { name: "Clear Data", desc: "Analytics Engine" },
  { name: "Resolvion", desc: "Enterprise Operations" },
  { name: "iRepo", desc: "Repository Platform" },
  { name: "iBeam", desc: "Workflow Integration" },
  { name: "idiCORE", desc: "Data Intelligence" },
];

export default function PlatformsGrid() {
  return (
    <section className="py-24 bg-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row gap-16">
          
          <div className="lg:w-1/3">
            <div className="mb-6 flex items-center">
              <span className="w-12 h-1 bg-blue-500 mr-4"></span>
              <span className="text-blue-400 font-bold uppercase tracking-wider text-sm">Technology Integration</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
              Seamless Ecosystem Connectivity.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Our experts are fully trained in the leading industry platforms. We integrate into your existing tech stack with zero onboarding friction and absolute data security.
            </p>
            <Link 
              href="/contact"
              className="inline-flex bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 px-8 transition-colors"
            >
              Discuss Your Stack
            </Link>
          </div>
          
          <div className="lg:w-2/3">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {platforms.map((platform, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="bg-slate-800 p-6 flex flex-col items-center justify-center aspect-square border border-slate-700 hover:border-blue-500 transition-colors group cursor-default"
                >
                  <div className="flex-1 flex items-center justify-center w-full mb-4">
                    <span className="text-xl md:text-2xl font-black text-slate-600 tracking-tighter group-hover:text-blue-400 transition-colors duration-300">
                      {platform.name}
                    </span>
                  </div>
                  <div className="mt-auto text-center">
                    <p className="text-sm font-semibold text-slate-300">{platform.name}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
