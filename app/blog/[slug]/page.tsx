import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { getPostBySlug, getPosts } from '@/lib/wordpress';
import ReactMarkdown from 'react-markdown';

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

          {/* Hero Image - hidden based on reference screenshot showing text immediately below nav */}
          {/* 
          <div className="relative h-[400px] md:h-[600px] w-full rounded-3xl overflow-hidden mb-16 shadow-lg border border-slate-100">
            <Image 
              src={post.image} 
              alt={post.title} 
              fill 
              className="object-cover"
              priority
            />
          </div>
          */}

          {/* Article Content */}
          <div className="prose prose-lg md:prose-xl prose-slate max-w-none prose-headings:font-bold prose-headings:text-slate-900 prose-h2:border-l-4 prose-h2:border-blue-600 prose-h2:pl-4 prose-h2:mt-12 prose-h2:mb-6 prose-a:text-blue-600 hover:prose-a:text-blue-700 prose-img:rounded-xl">
            <ReactMarkdown>{post.content.replace(/\\n/g, '\n')}</ReactMarkdown>
          </div>

          {/* CTA Section at bottom of post */}
          <div className="mt-16 p-6 bg-blue-50/50 rounded-xl border border-blue-100 text-blue-900">
            <p className="text-base md:text-lg m-0">
              Ready to transform your operations? <Link href="/#contact" className="text-blue-700 font-semibold hover:underline">Contact our enterprise team today</Link> to discuss a custom implementation plan tailored to your specific agency requirements.
            </p>
          </div>

          {/* Share Section */}
          <div className="mt-16 pt-8 border-t border-slate-200 flex items-center justify-between">
            <h3 className="text-xl font-bold text-slate-900">Share this article</h3>
            <div className="flex gap-3">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 hover:bg-blue-100 hover:text-blue-600 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>

        </article>
      </main>
    </div>
  );
}
