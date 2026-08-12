import Link from "next/link";
import { ArrowRight, ShieldCheck, Stethoscope, MonitorSmartphone, ShoppingCart, Truck, RadioTower } from "lucide-react";
import { getIndustries } from "@/lib/wordpress";

const ICONS: Record<string, React.ElementType> = {
  bfsi: ShieldCheck,
  healthcare: Stethoscope,
  "technology-saas": MonitorSmartphone,
  "retail-ecommerce": ShoppingCart,
  "logistics-supply-chain": Truck,
  telecommunications: RadioTower,
};

export default async function IndustriesPage() {
  const industries = await getIndustries();

  return (
    <div className="bg-white min-h-screen">

      {/* Hero */}
      <section className="bg-slate-50 border-b border-zinc-200 py-24">
        <div className="container mx-auto px-4 md:px-6 max-w-4xl text-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white border border-zinc-200 shadow-sm mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-600"></span>
            <span className="text-blue-600 font-bold uppercase tracking-wider text-sm">Industries We Serve</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-zinc-900 mb-6 leading-tight">
            Specialized Domain Expertise.
          </h1>
          <p className="text-xl text-zinc-600 max-w-2xl mx-auto leading-relaxed">
            Our teams are deeply embedded in your industry's specific regulatory requirements, specialized software, and operational nuances — not generic outsourcing.
          </p>
          <div className="mt-10">
            <Link href="/#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 h-14 text-base font-semibold transition-colors shadow-lg shadow-blue-600/20">
              Schedule a Free Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industries.map((industry) => {
              const Icon = ICONS[industry.slug] || ShieldCheck;
              return (
                <Link
                  key={industry.slug}
                  href={`/industries/${industry.slug}`}
                  className="group bg-zinc-50 hover:bg-white border border-zinc-200 hover:border-blue-200 rounded-3xl p-8 flex flex-col transition-all duration-300 hover:shadow-xl hover:shadow-blue-900/5 hover:-translate-y-1"
                >
                  <div className="w-14 h-14 rounded-2xl bg-white border border-zinc-200 group-hover:bg-blue-600 group-hover:border-blue-600 group-hover:text-white flex items-center justify-center text-blue-600 mb-6 transition-all duration-300 shadow-sm">
                    <Icon className="w-6 h-6" />
                  </div>
                  <h2 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {industry.title}
                  </h2>
                  <p className="text-zinc-600 text-sm leading-relaxed flex-grow">
                    {industry.excerpt}
                  </p>
                  <div className="mt-6 flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                    Explore Industry <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-zinc-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">Don't see your industry?</h2>
          <p className="text-lg text-zinc-400 mb-10">
            We work across many verticals. Book a free discovery call and let's discuss how we can support your specific operations.
          </p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-10 h-14 text-base font-bold transition-colors">
            Contact Us <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
