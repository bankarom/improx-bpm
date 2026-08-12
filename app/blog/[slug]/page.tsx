import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getPostBySlug, getPosts } from '@/lib/wordpress';

export async function generateStaticParams() {
  const posts = await getPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="bg-white">
      <main className="pt-16 pb-24">
        <article className="container mx-auto px-4 md:px-6 max-w-4xl">
          
          {/* Back Button */}
          <Link href="/blog" className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold mb-8 group transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2 transform group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </Link>
          
          {/* Header */}
          <header className="mb-12">
            <div className="inline-flex items-center text-blue-600 font-bold uppercase tracking-wider text-sm mb-6">
              {post.category}
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight mb-8">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap items-center text-slate-500 font-medium gap-6">
              <div className="flex items-center bg-slate-50 px-4 py-2 rounded-full border border-slate-100">
                <User className="w-4 h-4 mr-2 text-blue-500" />
                By {post.author}
              </div>
              <div className="flex items-center">
                <Calendar className="w-4 h-4 mr-2 text-slate-400" />
                {post.date}
              </div>
              <div className="flex items-center">
                <span className="w-1.5 h-1.5 bg-slate-300 rounded-full mr-2"></span>
                3 min read
              </div>
            </div>
          </header>

          {/* Hero Image */}
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-16 shadow-lg border border-slate-100">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>

          {/* Article Content */}
          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
            {/* 
              Since our mock data uses a raw string with basic markdown-like structure, 
              we'll do a simple split and render. In a real WP setup, this would be dangerouslySetInnerHTML 
            */}
            {post.content.split('\n\n').map((paragraph, index) => {
              if (paragraph.startsWith('###')) {
                return <h3 key={index} className="text-2xl mt-8 mb-4">{paragraph.replace('### ', '')}</h3>;
              }
              if (paragraph.startsWith('1. ') || paragraph.startsWith('2. ') || paragraph.startsWith('3. ')) {
                return (
                  <p key={index} className="ml-4 pl-4 border-l-4 border-blue-100">
                    <strong>{paragraph.substring(3).split(':')[0]}</strong>: 
                    {paragraph.substring(3).split(':').slice(1).join(':')}
                  </p>
                );
              }
              return <p key={index} className="mb-6">{paragraph}</p>;
            })}
          </div>

          {/* CTA Section at bottom of post */}
          <div className="mt-20 p-10 bg-blue-600 rounded-3xl text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">Ready to apply these insights?</h2>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Let's discuss how our team can transform your business workflows and bottom line.
            </p>
            <Link 
              href="/#contact" 
              className="inline-flex items-center justify-center px-8 py-4 text-base font-bold text-blue-900 transition-all bg-white rounded-lg hover:bg-slate-50 hover:shadow-lg hover:-translate-y-0.5"
            >
              Schedule a Strategy Call
            </Link>
          </div>

        </article>
      </main>
    </div>
  );
}
