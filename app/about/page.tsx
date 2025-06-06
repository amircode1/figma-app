// About Us Page - Responsive, accessible, and ready for Figma design integration
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function AboutUsPage() {
  return (
    <main aria-label="About Us Page" className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-morabba">
            داستان گارنیک کافی
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            بیش از ۱۰ سال تجربه در زمینه وارد کردن و توزیع بهترین قهوه‌های جهان
          </p>
        </div>
      </section>

      {/* Main About Content */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-morabba">
                ماموریت ما
              </h2>
              <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                گارنیک کافی با هدف ارائه بهترین قهوه‌های جهان به مشتریان ایرانی تأسیس شد. 
                ما معتقدیم که هر فنجان قهوه باید تجربه‌ای منحصر به فرد از طعم و عطر باشد.
              </p>
              <p className="text-gray-300 text-lg mb-8 leading-relaxed">
                تیم ما از متخصصان قهوه تشکیل شده که با دقت فراوان بهترین دانه‌های قهوه را 
                از مزارع مختلف جهان انتخاب و با تکنولوژی‌های نوین برشته می‌کنند.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-[#2a2a2a] rounded-lg">
                  <div className="text-3xl font-bold text-[#009245] mb-2 font-morabba">۱۰+</div>
                  <div className="text-gray-400">سال تجربه</div>
                </div>
                <div className="text-center p-4 bg-[#2a2a2a] rounded-lg">
                  <div className="text-3xl font-bold text-[#009245] mb-2 font-morabba">۱۰۰+</div>
                  <div className="text-gray-400">نوع قهوه</div>
                </div>
                <div className="text-center p-4 bg-[#2a2a2a] rounded-lg">
                  <div className="text-3xl font-bold text-[#009245] mb-2 font-morabba">۵۰۰۰+</div>
                  <div className="text-gray-400">مشتری راضی</div>
                </div>
                <div className="text-center p-4 bg-[#2a2a2a] rounded-lg">
                  <div className="text-3xl font-bold text-[#009245] mb-2 font-morabba">۲۴/۷</div>
                  <div className="text-gray-400">پشتیبانی</div>
                </div>
              </div>
            </div>
            
            {/* Image Content */}
            <div className="relative">
              <div className="bg-gradient-to-br from-[#2a2a2a] to-[#1a1a1a] rounded-2xl p-8 relative overflow-hidden">
                <div className="relative h-80">
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-[#4a4a4a] rounded-xl"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-8xl">☕</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Values Section */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center p-6 bg-[#2a2a2a] rounded-lg">
              <div className="text-4xl mb-4">🌱</div>
              <h3 className="text-xl font-bold text-white mb-3 font-yekan">پایداری</h3>
              <p className="text-gray-400">
                همکاری مستقیم با کشاورزان و حمایت از کشاورزی پایدار
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#2a2a2a] rounded-lg">
              <div className="text-4xl mb-4">⭐</div>
              <h3 className="text-xl font-bold text-white mb-3 font-yekan">کیفیت</h3>
              <p className="text-gray-400">
                انتخاب دقیق بهترین دانه‌ها و کنترل کیفیت در تمام مراحل
              </p>
            </div>
            
            <div className="text-center p-6 bg-[#2a2a2a] rounded-lg">
              <div className="text-4xl mb-4">❤️</div>
              <h3 className="text-xl font-bold text-white mb-3 font-yekan">عشق به قهوه</h3>
              <p className="text-gray-400">
                اشتیاق و تخصص در تمام کاری که انجام می‌دهیم
              </p>
            </div>
          </div>

          {/* Team Section */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-morabba">
              تیم ما
            </h2>
            <p className="text-gray-300 text-lg mb-12 max-w-3xl mx-auto">
              تیم متخصص گارنیک کافی از افراد با تجربه و متعهد تشکیل شده که هر کدام در زمینه خود متخصص هستند
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 bg-[#2a2a2a] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👨‍💼</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-yekan">مدیر برشته کاری</h3>
                <p className="text-gray-400">متخصص برشته کردن قهوه با ۱۵ سال تجربه</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-[#2a2a2a] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">👩‍🔬</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-yekan">متخصص کیفیت</h3>
                <p className="text-gray-400">مسئول کنترل کیفیت و انتخاب دانه‌ها</p>
              </div>
              
              <div className="text-center">
                <div className="w-32 h-32 bg-[#2a2a2a] rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-4xl">🎯</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2 font-yekan">مشاور فروش</h3>
                <p className="text-gray-400">راهنمایی مشتریان در انتخاب بهترین قهوه</p>
              </div>
            </div>
          </div>

          {/* Contact CTA */}
          <div className="text-center bg-[#2a2a2a] p-8 rounded-lg">
            <h2 className="text-2xl font-bold text-white mb-4 font-morabba">
              سوالی دارید؟
            </h2>
            <p className="text-gray-300 mb-6">
              تیم ما آماده پاسخگویی به سوالات شما است
            </p>
            <button className="bg-[#009245] hover:bg-[#007a3a] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
              تماس با ما
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
