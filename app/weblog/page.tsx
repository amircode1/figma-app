// Weblog Page - Responsive, accessible, and ready for Figma design integration
"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function WeblogPage() {
  const [selectedCategory, setSelectedCategory] = useState('همه');

  const categories = ['همه', 'آموزش', 'اخبار', 'دستور پخت', 'تجهیزات', 'سلامت'];

  const blogPosts = [
    {
      id: 1,
      title: 'راهنمای کامل دم‌آوری قهوه در خانه',
      excerpt: 'در این مقاله به بررسی روش‌های مختلف دم‌آوری قهوه و نکات مهم آن می‌پردازیم...',
      date: '۱۴۰۳/۰۳/۱۵',
      readTime: '۸ دقیقه',
      category: 'آموزش',
      author: 'احمد رضایی',
      image: '/store-assets/coffee-bag-1.png',
      views: 245,
      featured: true
    },
    {
      id: 2,
      title: 'تفاوت قهوه عربیکا و روبوستا',
      excerpt: 'شناخت تفاوت‌های اساسی بین دو نوع اصلی دانه قهوه و کاربرد هر کدام...',
      date: '۱۴۰۳/۰۳/۱۲',
      readTime: '۵ دقیقه',
      category: 'آموزش',
      author: 'فاطمه احمدی',
      image: '/store-assets/coffee-bag-2.png',
      views: 189,
      featured: false
    },
    {
      id: 3,
      title: 'بهترین آسیاب‌های قهوه ۲۰۲۴',
      excerpt: 'معرفی و بررسی بهترین آسیاب‌های قهوه موجود در بازار و راهنمای خرید...',
      date: '۱۴۰۳/۰۳/۱۰',
      readTime: '۶ دقیقه',
      category: 'تجهیزات',
      author: 'محمد کریمی',
      image: '/store-assets/coffee-bag-3.png',
      views: 156,
      featured: false
    },
    {
      id: 4,
      title: 'فواید قهوه برای سلامتی',
      excerpt: 'بررسی علمی فواید مصرف قهوه و تأثیرات مثبت آن بر سلامت انسان...',
      date: '۱۴۰۳/۰۳/۰۸',
      readTime: '۷ دقیقه',
      category: 'سلامت',
      author: 'دکتر علی نوری',
      image: '/store-assets/coffee-bag-4.png',
      views: 298,
      featured: false
    },
    {
      id: 5,
      title: 'طرز تهیه کاپوچینو حرفه‌ای',
      excerpt: 'آموزش گام به گام تهیه کاپوچینو خوشمزه در خانه با تجهیزات ساده...',
      date: '۱۴۰۳/۰۳/۰۵',
      readTime: '۴ دقیقه',
      category: 'دستور پخت',
      author: 'سارا محمدی',
      image: '/store-assets/coffee-bag-1.png',
      views: 134,
      featured: false
    },
    {
      id: 6,
      title: 'اخبار صنعت قهوه ایران',
      excerpt: 'آخرین اخبار و رویدادهای مهم صنعت قهوه در ایران و جهان...',
      date: '۱۴۰۳/۰۳/۰۳',
      readTime: '۳ دقیقه',
      category: 'اخبار',
      author: 'رضا موسوی',
      image: '/store-assets/coffee-bag-2.png',
      views: 87,
      featured: false
    }
  ];

  const filteredPosts = selectedCategory === 'همه' 
    ? blogPosts 
    : blogPosts.filter(post => post.category === selectedCategory);

  const featuredPost = blogPosts.find(post => post.featured);

  return (
    <main aria-label="Weblog Page" className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-morabba">
            وبلاگ گارنیک کافی
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            آخرین مطالب، آموزش‌ها و اخبار دنیای قهوه
          </p>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="bg-[#1a1a1a] py-16">
          <div className="container mx-auto px-6">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-8 font-morabba">
                مطلب ویژه
              </h2>
              
              <div className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:bg-[#333] transition-colors duration-300 cursor-pointer">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                  <div className="h-80 bg-gray-700 flex items-center justify-center">
                    <span className="text-8xl">📰</span>
                  </div>
                  
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center gap-4 mb-4">
                      <span className="bg-[#009245] text-white px-3 py-1 rounded-full text-sm">
                        {featuredPost.category}
                      </span>
                      <span className="text-gray-400 text-sm">{featuredPost.date}</span>
                      <span className="text-gray-400 text-sm">{featuredPost.readTime}</span>
                    </div>
                    
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 font-morabba">
                      {featuredPost.title}
                    </h3>
                    
                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {featuredPost.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-[#009245] rounded-full flex items-center justify-center">
                          <span className="text-white text-sm">👤</span>
                        </div>
                        <span className="text-gray-300">{featuredPost.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 text-gray-400">
                        <span>👀</span>
                        <span>{featuredPost.views}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Category Filter */}
      <section className="bg-[#1a1a1a] py-8">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-wrap gap-4 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2 rounded-full transition-all duration-300 ${
                    selectedCategory === category
                      ? 'bg-[#009245] text-white'
                      : 'bg-[#2a2a2a] text-gray-300 hover:bg-[#333]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section aria-label="Blog List" className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredPosts.filter(post => !post.featured).map((post) => (
                <article key={post.id} className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:bg-[#333] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    <span className="text-4xl">📰</span>
                  </div>
                  
                  <div className="p-6">
                    <div className="flex items-center gap-3 mb-3">
                      <span className="bg-[#009245] text-white px-2 py-1 rounded text-xs">
                        {post.category}
                      </span>
                      <span className="text-gray-400 text-xs">{post.date}</span>
                    </div>
                    
                    <h3 className="text-white font-bold mb-3 font-yekan line-clamp-2">
                      {post.title}
                    </h3>
                    
                    <p className="text-gray-300 text-sm mb-4 line-clamp-3">
                      {post.excerpt}
                    </p>
                    
                    <div className="flex items-center justify-between text-xs text-gray-400">
                      <div className="flex items-center gap-2">
                        <span>👤</span>
                        <span>{post.author}</span>
                      </div>
                      
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-1">
                          <span>⏱️</span>
                          <span>{post.readTime}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <span>👀</span>
                          <span>{post.views}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
            
            {/* Pagination */}
            <div className="flex justify-center mt-12">
              <div className="flex gap-2">
                <button className="px-3 py-2 bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333] transition-colors">
                  قبلی
                </button>
                <button className="px-3 py-2 bg-[#009245] text-white rounded">
                  ۱
                </button>
                <button className="px-3 py-2 bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333] transition-colors">
                  ۲
                </button>
                <button className="px-3 py-2 bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333] transition-colors">
                  ۳
                </button>
                <button className="px-3 py-2 bg-[#2a2a2a] text-gray-300 rounded hover:bg-[#333] transition-colors">
                  بعدی
                </button>
              </div>
            </div>
            
            {/* Newsletter Signup */}
            <div className="mt-16 bg-[#2a2a2a] rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold text-white mb-4 font-morabba">
                عضویت در خبرنامه
              </h2>
              <p className="text-gray-300 mb-6">
                برای دریافت آخرین مطالب و اخبار دنیای قهوه عضو خبرنامه ما شوید
              </p>
              <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="ایمیل شما"
                  className="flex-1 px-4 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#009245]"
                />
                <button className="bg-[#009245] hover:bg-[#007a3a] text-white px-6 py-2 rounded-lg transition-colors duration-300">
                  عضویت
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
