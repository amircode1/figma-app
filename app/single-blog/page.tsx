"use client";

import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Image from 'next/image';
import ProductCard from '../components/ProductCard';
import CategorySidebar from './components/CategorySidebar';
import { getSingleBlogData, SingleBlogPageData } from '../lib/api';

export default function SingleBlogPage() {
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
      <main className="min-h-screen bg-[#151515] font-yekan">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">در حال بارگذاری...</div>
        </div>
        <Footer />
      </main>
    );
  }

  if (!blogData) {
    return (
      <main className="min-h-screen bg-[#151515] font-yekan">
        <Header />
        <div className="flex items-center justify-center min-h-screen">
          <div className="text-white">خطا در بارگذاری مقاله</div>
        </div>
        <Footer />
      </main>
    );
  }

  const { post, relatedPosts } = blogData;

  return (
    <main aria-label="Blog Post" className="bg-[#151515] min-h-screen font-yekan">
      <div className=" py-4 h-28 bg-black">
        <Header />
      </div>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-8 py-12 px-4">
        {/* Main Content */}
        <section className="flex-1">
          <div className=" rounded-2xl shadow-lg p-8">
            <div className="flex flex-col items-center mb-8">
              <Image src={post.image} alt={post.title} width={820} height={660} className="rounded-4xl mb-6 object-cover" />
              <div className="flex flex-wrap items-center justify-start gap-3 mb-4 max-w-2xl w-full absolute bottom-40 bg-[#151515] h-28 p-7 rounded-2xl">
                <span className="text-yellow-400 text-xs font-yekan rounded-full px-4 py-1">{post.date}</span>
                <span className="text-yellow-400 text-xs font-yekan">{post.writer}</span>
                <h1 className="text-2xl md:text-3xl font-bold font-morabba text-white mb-4 text-center">{post.title}</h1>
              </div>
            </div>            <article className="text-white font-yekan leading-8 text-right text-base whitespace-pre-line max-w-2xl mx-auto p-7">
              {post.content}
            </article>
          </div>
        </section>
        {/* Sidebar */}
        <aside className="w-full md:w-1/4 flex flex-col gap-8">
          <CategorySidebar />
          {/* محصول پیشنهادی */}          <div className="rounded-2xl flex flex-col items-center">
            <span className="bg-[#00C16A] text-white text-xs px-3 py-1 rounded-full mb-2">پیشنهاد ویژه</span>
            <ProductCard id="1" image="/store-assets/coffee-bag-1.png" title="دانه قهوه عربیکا اتیوپی یرگاچف" price="۱۲۳,۰۰۰ تومان" />
          </div>
          {/* مقالات پیشنهادی */}
          <div className=" rounded-2xl p-6">
            <h3 className="text-lg font-bold text-white mb-4 font-morabba">مقالات پیشنهادی</h3>
            <ul className="space-y-4">
              {relatedPosts.map((relatedPost, i) => (
                <li key={i} className="flex items-center gap-3">
                  <Image src={relatedPost.image} alt={relatedPost.title} width={48} height={48} className="rounded-lg" />
                  <div>
                    <h5 className="text-white text-sm font-bold mb-1 font-yekan">{relatedPost.title}</h5>
                    <span className="text-xs text-white font-yekan">{relatedPost.date}</span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </aside>
      </div>
      <Footer />
    </main>
  );
}
