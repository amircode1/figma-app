// Contact Us Page - Responsive, accessible, and ready for Figma design integration
"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ContactUsPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    alert('پیام شما با موفقیت ارسال شد!');
  };

  return (
    <main aria-label="Contact Us Page" className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1a1a1a] to-[#2d2d2d] py-20">
        <div className="container mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 font-morabba">
            تماس با ما
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            ما همیشه آماده پاسخگویی به سوالات شما هستیم
          </p>
        </div>
      </section>

      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            
            {/* Contact Form */}
            <div className="bg-[#2a2a2a] rounded-lg p-8">
              <h2 className="text-2xl font-bold text-white mb-6 font-morabba">
                فرم تماس
              </h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">
                      نام و نام خانوادگی *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#009245]"
                      placeholder="نام خود را وارد کنید"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-white text-sm font-bold mb-2">
                      شماره تماس *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#009245]"
                      placeholder="09xxxxxxxxx"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    ایمیل *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#009245]"
                    placeholder="example@email.com"
                  />
                </div>
                
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    موضوع
                  </label>
                  <select
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#009245]"
                  >
                    <option value="">انتخاب موضوع</option>
                    <option value="سفارش">سفارش</option>
                    <option value="شکایت">شکایت</option>
                    <option value="پیشنهاد">پیشنهاد</option>
                    <option value="پشتیبانی">پشتیبانی فنی</option>
                    <option value="همکاری">همکاری</option>
                    <option value="other">سایر موارد</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-white text-sm font-bold mb-2">
                    پیام *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-3 py-2 bg-[#1a1a1a] border border-gray-600 rounded-lg text-white focus:outline-none focus:border-[#009245] resize-none"
                    placeholder="پیام خود را بنویسید..."
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-[#009245] hover:bg-[#007a3a] text-white font-bold py-3 px-4 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  ارسال پیام
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-[#2a2a2a] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-morabba">
                  اطلاعات تماس
                </h2>
                
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📞</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">تلفن</h3>
                      <p className="text-gray-300">۰۲۱-۷۷۶۱۹۹۲۸</p>
                      <p className="text-gray-300">۰۹۱۲۱۴۴۳۰۷۱</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">✉️</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">ایمیل</h3>
                      <p className="text-gray-300">info@garneekcoffee.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">📍</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">آدرس</h3>
                      <p className="text-gray-300">تهران - پایین تر از میدان سپاه - جنب کوچه فروردین - پلاک ۶۰ واحد ۱۴</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center">
                      <span className="text-white text-xl">🕒</span>
                    </div>
                    <div>
                      <h3 className="text-white font-bold">ساعات کاری</h3>
                      <p className="text-gray-300">شنبه تا پنجشنبه: ۹:۰۰ تا ۱۸:۰۰</p>
                      <p className="text-gray-300">جمعه: تعطیل</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* FAQ Section */}
              <div className="bg-[#2a2a2a] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-morabba">
                  سوالات متداول
                </h2>
                
                <div className="space-y-4">
                  <div className="border-b border-gray-600 pb-4">
                    <h3 className="text-white font-bold mb-2">چگونه سفارش دهم؟</h3>
                    <p className="text-gray-300 text-sm">می‌توانید از طریق سایت، تلفن یا پیامک سفارش خود را ثبت کنید.</p>
                  </div>
                  
                  <div className="border-b border-gray-600 pb-4">
                    <h3 className="text-white font-bold mb-2">زمان ارسال چقدر است؟</h3>
                    <p className="text-gray-300 text-sm">ارسال محصولات معمولاً ۱ تا ۳ روز کاری طول می‌کشد.</p>
                  </div>
                  
                  <div>
                    <h3 className="text-white font-bold mb-2">آیا امکان بازگشت کالا وجود دارد؟</h3>
                    <p className="text-gray-300 text-sm">بله، تا ۷ روز پس از خرید امکان بازگشت کالا وجود دارد.</p>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div className="bg-[#2a2a2a] rounded-lg p-8">
                <h2 className="text-2xl font-bold text-white mb-6 font-morabba">
                  ما را دنبال کنید
                </h2>
                
                <div className="flex gap-4">
                  <a href="#" className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-300">
                    <span className="text-white text-xl">📱</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-300">
                    <span className="text-white text-xl">📧</span>
                  </a>
                  <a href="#" className="w-12 h-12 bg-[#009245] rounded-full flex items-center justify-center hover:bg-[#007a3a] transition-colors duration-300">
                    <span className="text-white text-xl">📞</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
