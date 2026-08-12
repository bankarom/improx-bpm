import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, Calendar } from 'lucide-react';
import { getPosts } from '@/lib/wordpress';

export const metadata = {
  title: 'Blog | ImproxBPM',
  description: 'Enterprise insights on business process management, RPA, and offshore operations.',
};

export default async function BlogIndexPage() {
  const posts = await getPosts();

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-white/10 border border-white/20 mb-8">
            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
            <span className="text-blue-300 font-bold uppercase tracking-wider text-sm">Insights & Analytics</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Enterprise Insights</h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Data-driven strategies on intelligent automation, global shared services, and Lean Six Sigma methodologies for modern back-offices.
          </p>
        </div>
      </section>

      {/* Blog List — Vertical one-by-one layout */}
      <section className="container mx-auto px-4 md:px-6 py-16 max-w-4xl">
        <div className="flex flex-col divide-y divide-zinc-100">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="group flex flex-col md:flex-row gap-6 py-10 hover:bg-zinc-50 -mx-4 px-4 rounded-2xl transition-colors duration-200"
            >
              {/* Thumbnail */}
              <div className="relative w-full md:w-72 h-52 md:h-44 rounded-2xl overflow-hidden shrink-0">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col justify-center flex-1">
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-3 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-zinc-500 leading-relaxed line-clamp-2 mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-zinc-900 text-white py-20 text-center">
        <div className="container mx-auto px-4 max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Ready to apply these insights?</h2>
          <p className="text-zinc-400 mb-8">Let's discuss how our team can transform your business workflows and bottom line.</p>
          <Link href="/#contact" className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-500 text-white rounded-xl px-8 h-14 text-base font-bold transition-colors">
            Schedule a Free Discovery Call <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
