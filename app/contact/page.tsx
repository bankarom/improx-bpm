import ContactForm from "@/components/ContactForm";
import FaqAccordion from "@/components/FaqAccordion";
import { ShieldCheck, Lock, Award, FileCheck } from "lucide-react";

export const metadata = {
  title: "Contact Us | ImproxBPM",
  description: "Schedule a free discovery call to optimize your enterprise back-office operations.",
};

export default function ContactPage() {
  return (
    <div className="bg-zinc-50 min-h-screen">
      
      {/* Hero Section */}
      <section className="pt-32 pb-48 bg-[#0B1120] text-white text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 mix-blend-overlay"></div>
        <div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"></div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-4xl">
          <h1 className="text-5xl md:text-6xl font-black mb-6 tracking-tight leading-tight">
            Ready to Transform Your <br/> Enterprise Operations?
          </h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Schedule a free 15-minute discovery call to see how we can help optimize your processes, reduce costs, and accelerate growth.
          </p>
        </div>
      </section>

      {/* Form Section (Pulled up into Hero) */}
      <section className="container mx-auto px-4 relative z-20 -mt-32 mb-24 max-w-6xl">
        <ContactForm />
      </section>

      {/* Trust & Credentials Strip */}
      <section className="py-24 bg-white border-y border-zinc-200">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-sm font-black tracking-[0.2em] uppercase text-zinc-400 mb-12">
            Enterprise-Grade Security & Compliance
          </h2>
          <div className="flex flex-wrap justify-center gap-12 md:gap-24">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <div className="font-bold text-zinc-900">ISO 27001</div>
              <div className="text-sm text-zinc-500 font-medium">Certified</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Lock className="w-8 h-8" />
              </div>
              <div className="font-bold text-zinc-900">SOC 2 Type II</div>
              <div className="text-sm text-zinc-500 font-medium">Compliant</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <FileCheck className="w-8 h-8" />
              </div>
              <div className="font-bold text-zinc-900">GDPR & HIPAA</div>
              <div className="text-sm text-zinc-500 font-medium">Ready</div>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-4">
                <Award className="w-8 h-8" />
              </div>
              <div className="font-bold text-zinc-900">99.9%</div>
              <div className="text-sm text-zinc-500 font-medium">SLA Adherence</div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-32 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-extrabold text-zinc-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
              Everything you need to know before partnering with our global teams.
            </p>
          </div>
          <FaqAccordion />
        </div>
      </section>

    </div>
  );
}
