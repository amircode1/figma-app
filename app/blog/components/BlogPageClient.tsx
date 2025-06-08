"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { getBlogs, type Blog } from '../../lib/api';

export default function BlogPageClient() {
  const [blogs, setBlogs] = useState<Blog[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadBlogs = async () => {
      try {
        const data = await getBlogs();
        setBlogs(data);
      } catch (error) {
        console.error('Error loading blogs:', error);
      } finally {
        setLoading(false);
      }
    };
    loadBlogs();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        <div className="text-white text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151515]">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#232323] to-[#151515] flex items-center justify-center">
        <Image src={"/store-assets/image.png"} alt='' fill className='bg-[#151515] mask-t-from-0% brightness-[0.6]' priority />
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">بلاگ</h1>
          <p className="text-lg md:text-xl opacity-90">آخرین مقالات و اخبار دنیای قهوه</p>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="max-w-6xl mx-auto py-12 px-4 grid grid-cols-1 md:grid-cols-2 gap-8">
        {blogs.map((blog) => (
          <div key={blog.id} className="rounded-2xl overflow-hidden bg-[#151515] shadow-lg">
                <div className="relative">
                  <Image src={blog.image} alt={blog.title} width={400} height={224} className="w-full h-56 object-cover" />
                  <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:bg-white/20 transition-all text-white px-3 py-1 text-xs font-yekan rounded-full">
                    {blog.date}
                  </span>                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[17px] mb-1 text-white">{blog.title}</h3>
                  <p className="text-gray-300 text-sm leading-relaxed">{blog.description}</p>
                  <div className="mt-4 flex justify-between items-center">
                    <span className="text-[#C6A15B] text-xs">دسته: {blog.category}</span>
                    <button className="text-[#00C16A] text-sm font-medium hover:underline">
                      ادامه مطلب
                    </button>
                  </div>
                </div>
              </div>
        ))}
      </section>
    </div>
  );
}
