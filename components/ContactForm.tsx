"use client";

import { useState } from "react";
import { Phone, Mail, Clock, CheckCircle2 } from "lucide-react";

const COUNTRY_CODES = [
  { code: "+1", label: "US (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+91", label: "IN (+91)" },
  { code: "+61", label: "AU (+61)" },
  { code: "+49", label: "DE (+49)" },
  { code: "+33", label: "FR (+33)" },
];

const SERVICES_DATA = {
  "Back-Office Operations": [
    "Finance & Accounting",
    "Human Resources",
    "Procurement & Sourcing",
    "IT Helpdesk",
    "Document Management",
    "Customer Support",
  ],
  "Process Excellence": [
    "Master Data Management",
    "Robotic Process Automation (RPA)",
    "Lean Six Sigma",
    "Process Mining",
    "Workflow Digitization",
    "Quality Assurance",
  ]
};

export default function ContactForm() {
  const [selectedCategory, setSelectedCategory] = useState<string>("");
  const [selectedService, setSelectedService] = useState<string>("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formDataObj = new FormData(e.target as HTMLFormElement);
    const formData = {
      name: `${formDataObj.get('firstName')} ${formDataObj.get('lastName')}`,
      email: formDataObj.get('email'),
      phone: `${formDataObj.get('countryCode')} ${formDataObj.get('phone')}`,
      company: formDataObj.get('company'),
      category: selectedCategory,
      service: selectedService,
      message: formDataObj.get('message'),
    };

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setIsSuccess(true);
      } else {
        alert('Something went wrong. Please try again.');
      }
    } catch (error) {
      console.error(error);
      alert('Error connecting to the server.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-200 overflow-hidden flex flex-col md:flex-row">
      
      {/* Left Panel: Contact Info */}
      <div className="bg-zinc-950 text-white p-10 md:w-1/3 flex flex-col justify-between">
        <div>
          <h2 className="text-3xl font-extrabold mb-10">Get in Touch</h2>
          
          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0 border border-white/10">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <div className="text-zinc-400 text-sm font-medium mb-1">Call us directly</div>
                <div className="text-xl font-bold">+1 408 900 0208</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0 border border-white/10">
                <Mail className="w-6 h-6" />
              </div>
              <div>
                <div className="text-zinc-400 text-sm font-medium mb-1">Email us</div>
                <div className="text-lg font-bold text-wrap break-all">enquiry@improxgroup.com</div>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0 border border-white/10">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <div className="text-zinc-400 text-sm font-medium mb-1">Response time</div>
                <div className="text-xl font-bold">Within 2 hours</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-white/10 p-3 rounded-xl shrink-0 border border-white/10">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <div>
                <div className="text-zinc-400 text-sm font-medium mb-1">Office Address</div>
                <div className="text-base font-bold text-wrap leading-tight">Costal Highway, Lewes, DE 19958</div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-10 border-t border-white/10">
          <h3 className="font-bold text-lg mb-6">What to expect:</h3>
          <ul className="space-y-4">
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
              <span className="font-medium text-zinc-300">15-minute discovery call</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
              <span className="font-medium text-zinc-300">Custom ROI & cost analysis</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
              <span className="font-medium text-zinc-300">Platform integration assessment</span>
            </li>
            <li className="flex items-center gap-3">
              <CheckCircle2 className="w-5 h-5 text-zinc-500 shrink-0" />
              <span className="font-medium text-zinc-300">Personalized deployment plan</span>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Panel: The Form */}
      <div className="p-10 md:p-12 md:w-2/3 bg-white flex flex-col justify-center">
        {isSuccess ? (
          <div className="bg-green-50 border border-green-200 rounded-2xl p-10 text-center animate-fade-in my-auto">
            <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-3xl font-extrabold text-green-900 mb-4">Request Received!</h3>
            <p className="text-lg text-green-700 font-medium">
              Thank you for reaching out to improxBPM. We have received your discovery call request and one of our experts will contact you shortly to schedule a time that works best for you.
            </p>
          </div>
        ) : (
        <form className="space-y-6" onSubmit={handleSubmit}>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-zinc-900 mb-2">First Name <span className="text-red-500">*</span></label>
              <input type="text" name="firstName" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-900 mb-2">Last Name <span className="text-red-500">*</span></label>
              <input type="text" name="lastName" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-bold text-zinc-900 mb-2">Work Email <span className="text-red-500">*</span></label>
              <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
            </div>
            <div>
              <label className="block text-sm font-bold text-zinc-900 mb-2">Phone Number <span className="text-red-500">*</span></label>
              <div className="flex">
                <select name="countryCode" className="px-3 py-3 rounded-l-xl border border-zinc-200 bg-zinc-100 focus:ring-2 focus:ring-blue-600 outline-none border-r-0 font-medium text-zinc-700">
                  {COUNTRY_CODES.map(country => (
                    <option key={country.code} value={country.code}>{country.code}</option>
                  ))}
                </select>
                <input type="tel" name="phone" required minLength={7} className="w-full px-4 py-3 rounded-r-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-bold text-zinc-900 mb-2">Company Name <span className="text-red-500">*</span></label>
            <input type="text" name="company" required className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all" />
          </div>

          {/* Cascading Dropdowns */}
          <div>
            <label className="block text-sm font-bold text-zinc-900 mb-2">Primary Area of Interest <span className="text-red-500">*</span></label>
            <select 
              required 
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none"
              value={selectedCategory}
              onChange={(e) => {
                setSelectedCategory(e.target.value);
                setSelectedService(""); // Reset sub-service when category changes
              }}
            >
              <option value="" disabled>Select category</option>
              {Object.keys(SERVICES_DATA).map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
          </div>

          {selectedCategory && (
            <div className="animate-fade-in">
              <label className="block text-sm font-bold text-zinc-900 mb-2">Specific Service</label>
              <select 
                className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all appearance-none"
                value={selectedService}
                onChange={(e) => setSelectedService(e.target.value)}
              >
                <option value="" disabled>Select service</option>
                {SERVICES_DATA[selectedCategory as keyof typeof SERVICES_DATA].map(service => (
                  <option key={service} value={service}>{service}</option>
                ))}
              </select>
            </div>
          )}

          <div>
            <label className="block text-sm font-bold text-zinc-900 mb-2">Tell us about your current challenges <span className="text-red-500">*</span></label>
            <textarea 
              name="message"
              required
              rows={4} 
              className="w-full px-4 py-3 rounded-xl border border-zinc-200 bg-zinc-50 focus:bg-white focus:ring-2 focus:ring-blue-600 focus:border-transparent outline-none transition-all resize-none"
              placeholder="Describe your current pain points, team size, and what you hope to achieve..."
            ></textarea>
          </div>

          <button 
            type="submit" 
            disabled={isSubmitting}
            className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white font-bold py-4 rounded-xl transition-all shadow-[0_4px_14px_0_rgb(0,0,0,0.1)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5 text-lg mt-4 flex items-center justify-center"
          >
            {isSubmitting ? (
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
            ) : null}
            {isSubmitting ? "Submitting..." : "Schedule My Free Discovery Call"}
          </button>
          
          <p className="text-xs text-center text-zinc-500 font-medium pt-4">
            By submitting this form, you agree to receive communications from improxBPM. We respect your privacy and will never share your information.
          </p>

        </form>
        )}
      </div>

    </div>
  );
}
