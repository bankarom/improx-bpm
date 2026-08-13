"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const FAQS = [
  {
    question: "What is Business Process Management (BPM)?",
    answer: "Business Process Management (BPM) is the practice of systematically improving, automating, and optimizing your company's workflows. It covers everything from back-office operations like finance and HR, to intelligent automation using RPA — helping businesses reduce costs, eliminate errors, and scale efficiently."
  },
  {
    question: "What kind of businesses do you work with?",
    answer: "We work with mid-size and large enterprises across a wide range of industries including healthcare, banking & finance, retail, technology, logistics, and telecommunications. Whether you're a fast-growing startup or a Fortune 500 company, our services are designed to scale to your needs."
  },
  {
    question: "How do I get started with improxBPM?",
    answer: "Getting started is simple. Just fill out the contact form on this page or click 'Schedule Consultation' to book a free 15-minute discovery call. One of our experts will reach out to understand your challenges and recommend the right solution."
  },
  {
    question: "Will your team work with our existing processes?",
    answer: "Yes, absolutely. We always begin with a thorough assessment of your current workflows before making any recommendations. Our approach is to enhance and optimize what you already have, not to disrupt it. We work alongside your teams to ensure a smooth transition."
  },
  {
    question: "What results can I expect after partnering with improxBPM?",
    answer: "Our clients typically see measurable improvements within the first 90 days — including significant reductions in operational costs, faster processing times, fewer errors, and improved team productivity. We track and report on all KPIs so you always know the exact value we're delivering."
  }
];

interface FaqItem {
  question: string;
  answer: string;
}

export default function FaqAccordion({ faqs = FAQS }: { faqs?: FaqItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleAccordion = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-3xl mx-auto space-y-4">
      {faqs.map((faq, index) => {
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
