// Single Blog Page - Responsive, accessible, and ready for Figma design integration
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function SingleBlogPage() {
  const blogPost = {
    title: 'راهنمای کامل دم‌آوری قهوه در خانه',
    date: '۱۴۰۳/۰۳/۱۵',
    readTime: '۸ دقیقه مطالعه',
    category: 'آموزش',
    author: 'تیم گارنیک کافی',
    image: '/store-assets/coffee-bag-1.png',
    content: `
      قهوه یکی از محبوب‌ترین نوشیدنی‌های جهان است و دم‌آوری صحیح آن هنری است که با یادگیری آن می‌توانید 
      بهترین طعم را از دانه‌های قهوه خود استخراج کنید. در این مقاله به بررسی روش‌های مختلف دم‌آوری قهوه می‌پردازیم.

      ## روش‌های مختلف دم‌آوری

      ### ۱. قهوه‌ساز فرانسوی (فرنچ پرس)
      این روش یکی از ساده‌ترین و محبوب‌ترین روش‌های دم‌آوری قهوه است. برای این کار:
      - آب را تا ۹۵ درجه سانتی‌گراد گرم کنید
      - قهوه را با درجه آسیاب درشت آماده کنید
      - نسبت ۱:۱۵ قهوه به آب را رعایت کنید
      - ۴ دقیقه صبر کنید و سپس پیستون را فشار دهید

      ### ۲. وی۶۰ (V60)
      این روش برای کسانی که دوست دارند کنترل بیشتری روی فرآیند دم‌آوری داشته باشند:
      - از فیلتر کاغذی استفاده کنید
      - آسیاب متوسط تا ریز
      - دم‌آوری به صورت دایره‌ای از مرکز به بیرون

      ### ۳. اسپرسو
      برای تهیه اسپرسو حرفه‌ای:
      - آسیاب بسیار ریز
      - فشار ۹ بار
      - زمان استخراج ۲۵-۳۰ ثانیه

      ## نکات مهم

      - **کیفیت آب**: از آب تصفیه شده استفاده کنید
      - **تازگی قهوه**: قهوه را حداکثر ۲ هفته پس از برشت مصرف کنید
      - **نسبت‌ها**: نسبت قهوه به آب را رعایت کنید
      - **دمای آب**: دمای مناسب بین ۹۰ تا ۹۶ درجه است

      ## تجهیزات پیشنهادی

      برای شروع، این تجهیزات را پیشنهاد می‌کنیم:
      - آسیاب قهوه
      - ترازوی دیجیتال
      - دماسنج
      - تایمر
      - قهوه‌ساز مناسب

      با رعایت این نکات می‌توانید در خانه قهوه‌ای با کیفیت تهیه کنید که از کافه‌ها کم نداشته باشد.
    `
  };

  const relatedPosts = [
    {
      title: 'انواع دانه‌های قهوه و تفاوت‌هایشان',
      date: '۱۴۰۳/۰۳/۱۰',
      image: '/store-assets/coffee-bag-2.png'
    },
    {
      title: 'راهنمای خرید آسیاب قهوه',
      date: '۱۴۰۳/۰۳/۰۵',
      image: '/store-assets/coffee-bag-3.png'
    },
    {
      title: 'تاریخچه قهوه در ایران',
      date: '۱۴۰۳/۰۲/۲۸',
      image: '/store-assets/coffee-bag-4.png'
    }
  ];

  return (
    <main aria-label="Blog Post" className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex items-center justify-center gap-4 mb-6">
              <span className="bg-[#009245] text-white px-3 py-1 rounded-full text-sm">
                {blogPost.category}
              </span>
              <span className="text-gray-400">{blogPost.date}</span>
              <span className="text-gray-400">{blogPost.readTime}</span>
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-morabba">
              {blogPost.title}
            </h1>
            
            <p className="text-xl text-gray-300 mb-8">
              نویسنده: {blogPost.author}
            </p>
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            
            {/* Featured Image */}
            <div className="mb-12 text-center">
              <div className="relative w-full h-80 bg-[#2a2a2a] rounded-lg overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-8xl">☕</span>
                </div>
              </div>
            </div>

            {/* Article Content */}
            <article aria-label="Blog Content" className="prose prose-lg max-w-none">
              <div className="text-gray-300 leading-relaxed text-lg space-y-6">
                {blogPost.content.split('\n\n').map((paragraph, index) => {
                  if (paragraph.startsWith('##')) {
                    return (
                      <h2 key={index} className="text-2xl font-bold text-white mt-8 mb-4 font-morabba">
                        {paragraph.replace('## ', '')}
                      </h2>
                    );
                  } else if (paragraph.startsWith('###')) {
                    return (
                      <h3 key={index} className="text-xl font-bold text-white mt-6 mb-3 font-yekan">
                        {paragraph.replace('### ', '')}
                      </h3>
                    );
                  } else if (paragraph.includes('- ')) {
                    const items = paragraph.split('- ').filter(item => item.trim());
                    return (
                      <ul key={index} className="list-disc list-inside space-y-2 mr-4">
                        {items.map((item, i) => (
                          <li key={i} className="text-gray-300">{item.trim()}</li>
                        ))}
                      </ul>
                    );
                  } else {
                    return (
                      <p key={index} className="text-gray-300">
                        {paragraph}
                      </p>
                    );
                  }
                })}
              </div>
            </article>

            {/* Share Section */}
            <div className="mt-12 pt-8 border-t border-gray-600">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <span className="text-white font-bold">اشتراک‌گذاری:</span>
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-[#009245] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-300">
                      <span className="text-white">📱</span>
                    </button>
                    <button className="w-10 h-10 bg-[#009245] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-300">
                      <span className="text-white">📧</span>
                    </button>
                    <button className="w-10 h-10 bg-[#009245] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-300">
                      <span className="text-white">🔗</span>
                    </button>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-gray-400">
                  <span>👀</span>
                  <span>۱۲۳ بازدید</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Related Posts */}
      <section className="bg-[#151515] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 font-morabba text-center">
              مطالب مرتبط
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedPosts.map((post, index) => (
                <div key={index} className="bg-[#2a2a2a] rounded-lg overflow-hidden hover:bg-[#333] transition-colors duration-300 cursor-pointer">
                  <div className="h-48 bg-gray-700 flex items-center justify-center">
                    <span className="text-4xl">📰</span>
                  </div>
                  <div className="p-6">
                    <h3 className="text-white font-bold mb-2 font-yekan">{post.title}</h3>
                    <p className="text-gray-400 text-sm">{post.date}</p>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="text-center mt-12">
              <button className="bg-transparent border-2 border-[#009245] text-[#009245] hover:bg-[#009245] hover:text-white px-8 py-3 rounded-lg transition-all duration-300">
                مشاهده همه مطالب
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
