import { Shield } from "lucide-react";

export default function PrivacyPolicy() {
  return (
    <div className="bg-white min-h-screen py-24">
      <div className="container mx-auto px-4 max-w-4xl">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="w-16 h-16 bg-blue-50 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8" />
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-zinc-900 mb-6">Privacy Policy</h1>
          <p className="text-lg text-zinc-600 max-w-2xl mx-auto">
            At improxBPM, we take your privacy and the security of your data extremely seriously. This policy outlines how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-zinc-400 mt-6 font-medium">Last Updated: August 2026</p>
        </div>

        {/* Content Box */}
        <div className="bg-zinc-50 border border-zinc-200 rounded-3xl p-8 md:p-12">
          
          <div className="space-y-12">
            
            {/* Section 1 */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="text-blue-600">1.</span> Information We Collect
              </h2>
              <p className="text-zinc-600 mb-6">
                We collect information that you provide directly to us when you use our website, contact us, or engage our services. This includes:
              </p>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-zinc-700"><strong className="text-zinc-900">Contact Information:</strong> Name, email address, phone number, and company details.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-zinc-700"><strong className="text-zinc-900">Service Data:</strong> Information related to your business operations and specific workflow requirements.</p>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
                  </div>
                  <p className="text-zinc-700"><strong className="text-zinc-900">Usage Data:</strong> Automatically collected data such as IP addresses, browser types, and interaction metrics on our website.</p>
                </li>
              </ul>
            </section>

            {/* Section 2 */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="text-blue-600">2.</span> How We Use Your Information
              </h2>
              <p className="text-zinc-600 mb-6">
                We use the collected information for the following enterprise purposes:
              </p>
              <ul className="list-disc pl-6 space-y-3 text-zinc-700 marker:text-blue-600">
                <li>To provide, maintain, and improve our business process management services.</li>
                <li>To process your service requests and manage your account.</li>
                <li>To communicate with you regarding updates, security alerts, and support messages.</li>
                <li>To comply with legal obligations relevant to our industry.</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="text-blue-600">3.</span> Data Security & Confidentiality
              </h2>
              <p className="text-zinc-700 leading-relaxed">
                Because we operate within the enterprise sector, security is our top priority. We implement enterprise-grade security measures to protect your data against unauthorized access, alteration, or destruction. All our remote staff operate under strict NDAs and utilize secure, encrypted connections. We do not sell, rent, or trade your personal information to third parties.
              </p>
            </section>

            {/* Section 4 */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="text-blue-600">4.</span> Third-Party Integrations
              </h2>
              <p className="text-zinc-700 leading-relaxed">
                Our services often require integration with third-party platforms. While we ensure secure API connections, your data on those platforms is also governed by their respective privacy policies.
              </p>
            </section>

            {/* Section 5 */}
            <section>
              <h2 className="text-2xl font-bold text-zinc-900 mb-6 flex items-center gap-3">
                <span className="text-blue-600">5.</span> Contact Us
              </h2>
              <p className="text-zinc-700 leading-relaxed mb-6">
                If you have any questions or concerns about this Privacy Policy or our data practices, please contact our compliance team:
              </p>
              
              <div className="bg-white border border-zinc-200 rounded-2xl p-6">
                <h4 className="font-bold text-zinc-900 mb-2">improxBPM Compliance</h4>
                <p className="text-zinc-600">Coastal Highway, Lewes, DE 19958</p>
                <p className="text-zinc-600 mt-1">Phone: (407) 900-0208</p>
                <p className="text-zinc-600 mt-1">Email: info@improxtech.com</p>
              </div>
            </section>

          </div>
        </div>

      </div>
    </div>
  );
}
