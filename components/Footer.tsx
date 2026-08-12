import Link from "next/link";
import { Share2, Globe, MessageSquare } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="text-2xl font-bold tracking-tight text-white">
                Improx<span className="text-blue-500">BPM</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-xs">
              Intelligent business process management solutions helping organizations optimize workflows, reduce operational costs, and accelerate growth globally.
            </p>
            <div className="flex space-x-4 pt-4">
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Globe className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
              <Link href="#" className="text-slate-400 hover:text-white transition-colors">
                <MessageSquare className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
            </div>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              <li><Link href="/services/back-office-operations" className="text-sm text-slate-400 hover:text-white transition-colors">Back Office Operations</Link></li>
              <li><Link href="/services/finance-accounting" className="text-sm text-slate-400 hover:text-white transition-colors">Finance & Accounting</Link></li>
              <li><Link href="/services/customer-support" className="text-sm text-slate-400 hover:text-white transition-colors">Customer Support</Link></li>
              <li><Link href="/services/process-excellence" className="text-sm text-slate-400 hover:text-white transition-colors">Process Excellence</Link></li>
              <li><Link href="/services/business-process-outsourcing" className="text-sm text-slate-400 hover:text-white transition-colors">Business Process Outsourcing</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Industries</h3>
            <ul className="space-y-3">
              <li><Link href="/industries/healthcare" className="text-sm text-slate-400 hover:text-white transition-colors">Healthcare</Link></li>
              <li><Link href="/industries/banking" className="text-sm text-slate-400 hover:text-white transition-colors">BFSI</Link></li>
              <li><Link href="/industries/technology" className="text-sm text-slate-400 hover:text-white transition-colors">Technology & SaaS</Link></li>
              <li><Link href="/industries/manufacturing" className="text-sm text-slate-400 hover:text-white transition-colors">Manufacturing</Link></li>
              <li><Link href="/industries/retail" className="text-sm text-slate-400 hover:text-white transition-colors">Retail & Logistics</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-6 text-sm uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              <li><Link href="/about" className="text-sm text-slate-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link href="/case-studies" className="text-sm text-slate-400 hover:text-white transition-colors">Case Studies</Link></li>
              <li><Link href="/resources" className="text-sm text-slate-400 hover:text-white transition-colors">Insights & Resources</Link></li>
              <li><Link href="/contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-slate-500">
            &copy; {new Date().getFullYear()} Improx Technologies. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-sm text-slate-500 hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-sm text-slate-500 hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
