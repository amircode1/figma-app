"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import CategorySidebar from '../components/CategorySidebar';
import { getSingleBlogData, SingleBlogPageData } from '../../lib/api';

export default function SingleBlogPageClient() {
  const [blogData, setBlogData] = useState<SingleBlogPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      try {
        const data = await getSingleBlogData();
        setBlogData(data);
      } catch (error) {
        console.error('Error fetching blog data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        <div className="text-white text-xl font-yekan">در حال بارگذاری...</div>
      </div>
    );
  }

  if (!blogData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        <div className="text-white text-xl font-yekan">خطا در بارگذاری اطلاعات</div>
      </div>
    );
  }
  const { post, relatedPosts } = blogData;

  return (
    <main className="min-h-screen bg-[#151515] font-yekan">
      {/* Hero Section */}
      <section className="relative h-80 bg-gray-800 flex items-center justify-center overflow-hidden">
        <Image 
          src={post.image} 
          alt="Hero Background"
          fill
          className="object-cover opacity-50"
        />
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 font-morabba">{post.title}</h1>
          <p className="text-lg md:text-xl opacity-90">نوشته: {post.writer}</p>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar */}
          <aside className="lg:col-span-1">
            <CategorySidebar />
          </aside>

          {/* Main Article */}
          <main className="lg:col-span-3">
            <article className="bg-white rounded-lg p-8 mb-8">
              <header className="mb-8">
                <h1 className="text-3xl font-bold text-gray-900 mb-4 font-morabba">
                  {post.title}
                </h1>
                <div className="flex items-center gap-4 text-gray-600 mb-6">
                  <span>{post.author}</span>
                  <span>•</span>
                  <span>{post.date}</span>
                  <span>•</span>
                  <span>نویسنده: {post.writer}</span>
                </div>
                <div className="mb-6">
                  <Image 
                    src={post.image} 
                    alt={post.title}
                    width={800}
                    height={400}
                    className="w-full h-96 object-cover rounded-lg"
                  />
                </div>
              </header>

              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed whitespace-pre-line">
                  {post.content}
                </div>
              </div>
            </article>

            {/* Related Posts */}
            {relatedPosts && relatedPosts.length > 0 && (
              <section className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-morabba">مقالات مرتبط</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {relatedPosts.map((relatedPost) => (
                    <article key={relatedPost.id} className="bg-[#1a1a1a] rounded-lg overflow-hidden hover:bg-[#252525] transition-colors">
                      <Image
                        src={relatedPost.image}
                        alt={relatedPost.title}
                        width={400}
                        height={250}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <h3 className="text-white font-semibold mb-2 line-clamp-2">
                          {relatedPost.title}
                        </h3>
                        <div className="flex items-center justify-between text-xs text-gray-400">
                          <span>{relatedPost.date}</span>
                        </div>
                      </div>
                    </article>
                  ))}
                </div>
              </section>
            )}
          </main>
        </div>
      </div>
    </main>
  );
}
