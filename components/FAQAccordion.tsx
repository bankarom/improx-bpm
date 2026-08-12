"use client";

import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

type FAQ = {
  question: string;
  answer: string;
};

export default function FAQAccordion({ faqs }: { faqs: FAQ[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0); // First one open by default

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="space-y-4">
      {faqs.map((faq, idx) => (
        <div 
          key={idx} 
          className={`border transition-all duration-300 rounded-2xl overflow-hidden ${
            openIndex === idx 
              ? 'border-blue-300 bg-white shadow-lg' 
              : 'border-zinc-200 bg-zinc-50 hover:border-blue-200'
          }`}
        >
          <button
            onClick={() => toggleFAQ(idx)}
            className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
          >
            <h3 className={`text-xl font-bold flex items-start transition-colors ${
              openIndex === idx ? 'text-blue-600' : 'text-zinc-900'
            }`}>
              <span className="text-blue-600 mr-4 font-black">Q.</span> 
              {faq.question}
            </h3>
            <ChevronDown 
              className={`w-5 h-5 text-zinc-400 shrink-0 transition-transform duration-300 ${
                openIndex === idx ? 'rotate-180 text-blue-600' : ''
              }`} 
            />
          </button>
          
          <div 
            className={`transition-all duration-300 ease-in-out ${
              openIndex === idx 
                ? 'max-h-96 opacity-100 pb-8 px-8' 
                : 'max-h-0 opacity-0 px-8'
            }`}
          >
            <div className="pl-9">
              <p className="text-zinc-600 leading-relaxed font-medium">
                {faq.answer}
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
