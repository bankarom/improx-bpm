"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "How long does the typical implementation process take?",
    answer: "Implementation timelines vary based on complexity, but a standard back-office process transition typically takes 30-45 days. Robotic Process Automation (RPA) deployments usually take 60-90 days from blueprinting to go-live."
  },
  {
    question: "Where are your global delivery centers located?",
    answer: "We operate a highly resilient hybrid model. Our primary offshore data and processing centers are in India and the Philippines, while our nearshore Tier-1 voice and customer support teams are strategically located in Costa Rica and Mexico."
  },
  {
    question: "How do you ensure data security and compliance?",
    answer: "Security is built into our core. We are ISO 27001 certified, SOC 2 Type II compliant, and strictly adhere to GDPR, HIPAA (for healthcare clients), and PCI-DSS (for finance/retail). All data is processed via secure VPNs and VDI environments."
  },
  {
    question: "What is your pricing model?",
    answer: "We offer flexible engagement models: FTE-based (Full-Time Equivalent) pricing for dedicated teams, Transaction-based pricing for high-volume repetitive tasks (e.g., invoice processing), and Outcome-based pricing for specific consulting deliverables."
  },
  {
    question: "Do you integrate with our existing software?",
    answer: "Absolutely. We are technology-agnostic. Our teams and automation bots integrate seamlessly with legacy ERPs (SAP, Oracle), modern SaaS platforms (Salesforce, Workday), and proprietary custom software via API or UI-level automation."
  }
];

export default function FaqAccordion() {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {FAQS.map((faq, index) => {
        const isOpen = openIndex === index;
        return (
          <div key={index} className="border border-zinc-200 rounded-2xl bg-white overflow-hidden shadow-sm">
            <button
              onClick={() => toggleAccordion(index)}
              className="w-full flex items-center justify-between p-6 text-left hover:bg-zinc-50 transition-colors"
            >
              <span className={`font-bold text-lg transition-colors ${isOpen ? 'text-blue-600' : 'text-zinc-900'}`}>
                {faq.question}
              </span>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all ${isOpen ? 'bg-blue-100 text-blue-600' : 'bg-zinc-100 text-zinc-500'}`}>
                <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
              </div>
            </button>
            
            <AnimatePresence>
              {isOpen && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 pt-2 text-zinc-600 leading-relaxed font-medium">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
}
