"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const steps = [
  { id: "01", title: "Current-State Audit & Discovery", desc: "Our Process Excellence architects embed with your team to map out 'As-Is' workflows, measure baseline SLAs, and identify immediate cost-saving opportunities." },
  { id: "02", title: "Lean Re-engineering (To-Be Design)", desc: "We redesign your processes using Lean Six Sigma principles—eliminating redundancies, establishing stringent KPIs, and designing a technology-enabled 'To-Be' workflow." },
  { id: "03", title: "Knowledge Transfer & Shadowing", desc: "Our specialized transition managers conduct rigorous, documented training phases (Train-the-Trainer) to ensure zero operational disruption during handover." },
  { id: "04", title: "Go-Live & Hypercare", desc: "We launch the offshore/nearshore teams under a closely monitored 'Hypercare' phase, ensuring 100% adherence to quality metrics before shifting to steady-state operations." },
  { id: "05", title: "Continuous Improvement (Kaizen)", desc: "Post-transition, we don't just maintain; we optimize. Dedicated QA teams constantly deploy RPA tools and process tweaks to drive month-over-month efficiency gains." },
];

export default function ProcessTimeline() {
  return (
    <section className="py-24 bg-slate-50 border-y border-slate-200">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
          
          <div className="lg:col-span-4 lg:sticky lg:top-32 h-fit">
            <div className="mb-6 flex items-center">
              <span className="w-12 h-1 bg-blue-600 mr-4"></span>
              <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Transition Methodology</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              A Zero-Friction Transition.
            </h2>
            <p className="text-slate-600 text-lg mb-8 leading-relaxed">
              Migrating your back-office operations shouldn't cause downtime. Our 5-step transition methodology is battle-tested by enterprise organizations to ensure a seamless handover and immediate ROI.
            </p>
            <Link 
              href="/services"
              className="inline-flex bg-slate-900 hover:bg-slate-800 text-white font-semibold py-4 px-8 items-center transition-colors w-fit"
            >
              Explore Our Approach <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="lg:col-span-8">
            <div className="space-y-6">
              {steps.map((step, index) => (
                <motion.div 
                  key={step.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white p-8 border border-slate-200 flex gap-6 hover:shadow-lg transition-shadow group"
                >
                  <div className="hidden sm:flex flex-shrink-0 w-16 h-16 bg-slate-100 items-center justify-center text-xl font-bold text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                    {step.id}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-slate-900 mb-3">{step.title}</h3>
                    <p className="text-slate-600 text-lg leading-relaxed">{step.desc}</p>
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
