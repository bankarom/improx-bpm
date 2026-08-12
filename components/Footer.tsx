import Link from "next/link";
import { Linkedin, Instagram, Twitter, Facebook } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-200 py-16 border-t border-slate-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <span className="font-bold text-3xl tracking-tighter text-white">
                improx<span className="text-blue-500">BPM</span>
              </span>
            </Link>
            <p className="text-sm text-slate-400 mt-4 leading-relaxed max-w-xs mb-6">
              Building secure, scalable digital platforms and intelligent technology systems for enterprise organisations worldwide.
            </p>
            <div className="space-y-2 mb-6">
              <p className="text-sm font-semibold text-slate-200">Costal Highway, Lewes, DE 19958</p>
              <p className="text-sm font-semibold text-slate-200">
                Phone: <a href="tel:+14089000208" className="text-slate-400 hover:text-white transition-colors">+1 408 900 0208</a>
              </p>
              <p className="text-sm font-semibold text-slate-200">
                Email: <a href="mailto:info@improxtech.com" className="text-slate-400 hover:text-white transition-colors">info@improxtech.com</a>
              </p>
            </div>
            <div className="flex space-x-4 pt-4">
              <Link href="https://www.linkedin.com/company/improxtechinc/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Link>
              <Link href="https://www.instagram.com/improxtech/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://in.pinterest.com/improxtechinc/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.401.165-1.495-.69-2.433-2.878-2.433-4.646 0-3.776 2.748-7.252 7.951-7.252 4.168 0 7.392 2.967 7.392 6.923 0 4.135-2.607 7.462-6.233 7.462-1.214 0-2.354-.629-2.758-1.379l-.749 2.848c-.269 1.045-1.004 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.625 0 12.017 0z"/>
                </svg>
                <span className="sr-only">Pinterest</span>
              </Link>
              <Link href="https://x.com/improxtechinc" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">X (Twitter)</span>
              </Link>
              <Link href="https://www.facebook.com/improxtechinc/" target="_blank" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
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
              <li><Link href="/#contact" className="text-sm text-slate-400 hover:text-white transition-colors">Contact</Link></li>
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
