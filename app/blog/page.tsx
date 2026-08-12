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
    <div className="bg-zinc-50 min-h-screen pb-24">
      {/* Hero Section */}
      <section className="bg-[#050505] text-white pt-32 pb-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-40"></div>
        <div className="container mx-auto px-4 relative z-10 text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-black mb-6 tracking-tight">Enterprise Insights</h1>
          <p className="text-xl text-zinc-400 font-light leading-relaxed">
            Data-driven strategies on intelligent automation, global shared services, and Lean Six Sigma methodologies for modern back-offices.
          </p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="container mx-auto px-4 -mt-12 relative z-20">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <Link 
              key={post.slug} 
              href={`/blog/${post.slug}`}
              className="group bg-white rounded-3xl overflow-hidden shadow-lg shadow-zinc-200/50 hover:shadow-xl hover:-translate-y-2 transition-all duration-300 border border-zinc-200 flex flex-col"
            >
              <div className="relative h-64 w-full overflow-hidden">
                <Image 
                  src={post.image} 
                  alt={post.title} 
                  fill 
                  className="object-cover group-hover:scale-105 transition-transform duration-500" 
                />
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                  {post.category}
                </div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium mb-4">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h2 className="text-2xl font-bold text-zinc-900 mb-4 group-hover:text-blue-600 transition-colors leading-tight">
                  {post.title}
                </h2>
                <p className="text-zinc-600 font-medium leading-relaxed mb-8 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="mt-auto flex items-center text-sm font-bold text-blue-600 group-hover:text-blue-700 transition-colors">
                  Read Article <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
