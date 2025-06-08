'use client';

import Image from 'next/image';
import Link from 'next/link';
import { type BlogPost } from '../../../lib/api';

interface BlogDetailClientProps {
  blog: BlogPost;
  relatedBlogs: BlogPost[];
}

export default function BlogDetailClient({ blog, relatedBlogs }: BlogDetailClientProps) {
  return (
    <>
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 py-4">
        <nav className="text-sm text-gray-400">
          <Link href="/" className="hover:text-[#D4AF37]">خانه</Link>
          <span className="mx-2">/</span>
          <Link href="/blog" className="hover:text-[#D4AF37]">وبلاگ</Link>
          <span className="mx-2">/</span>
          <span className="text-white">{blog.title}</span>
        </nav>
      </div>

      {/* Blog Content */}
      <article className="container mx-auto px-4 py-8 max-w-4xl">
        {/* Blog Header */}
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-white mb-4 font-morabba leading-tight">
            {blog.title}
          </h1>
          
          <div className="flex items-center gap-4 text-gray-400 text-sm mb-6">
            {blog.date && (
              <div className="flex items-center gap-2">
                <span>📅</span>
                <span>{blog.date}</span>
              </div>
            )}
            {blog.category && (
              <div className="flex items-center gap-2">
                <span>📂</span>
                <span>{blog.category}</span>
              </div>
            )}
          </div>

          {blog.image && (
            <div className="mb-8">
              <Image
                src={blog.image}
                alt={blog.title}
                width={800}
                height={400}
                className="w-full h-96 object-cover rounded-lg"
              />
            </div>
          )}
        </header>        {/* Blog Content */}
        <div className="prose prose-invert max-w-none">
          <div className="text-xl text-gray-300 mb-8 p-6 bg-[#1a1a1a] rounded-lg border-r-4 border-[#D4AF37]">
            {blog.description}
          </div>
          
          <div className="text-gray-300 leading-relaxed space-y-6">
            <p>محتوای این مقاله در حال حاضر در دسترس نیست.</p>
          </div>
        </div>

        {/* Tags section removed since tags don't exist in the data */}
      </article>

      {/* Related Blogs */}
      {relatedBlogs.length > 0 && (
        <section className="container mx-auto px-4 py-12">
          <h2 className="text-2xl font-bold text-white mb-8 text-center font-morabba">
            مقالات مرتبط
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {relatedBlogs.map((relatedBlog) => (
              <Link key={relatedBlog.id} href={`/blog/${relatedBlog.id}`}>
                <article className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors h-full">
                  {relatedBlog.image && (
                    <Image
                      src={relatedBlog.image}
                      alt={relatedBlog.title}
                      width={400}
                      height={250}
                      className="w-full h-48 object-cover"
                    />
                  )}
                  <div className="p-6">                    
                    <h3 className="text-white font-semibold mb-2 line-clamp-2">
                      {relatedBlog.title}
                    </h3>
                    <p className="text-gray-300 text-sm line-clamp-2 mb-3">
                      {relatedBlog.description}
                    </p>
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      {relatedBlog.date && <span>{relatedBlog.date}</span>}
                      {relatedBlog.category && <span>{relatedBlog.category}</span>}
                    </div>
                  </div>
                </article>
              </Link>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
