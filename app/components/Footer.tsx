"use client";

import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#151515] text-[#fff] pt-12 pb-4">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          {/* About/Brand */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            <div className="flex items-center gap-2 mb-2">
              <Image src="/store-assets/header-logo.png" alt="Logo" width={56} height={50} />
              <span className="text-[#00C16A] font-bold text-xl font-morabba">گارنیک کافی</span>
            </div>
            <p className="text-sm leading-relaxed font-yekan text-right">
              فروشگاه اینترنتی گارنیک کافی، در زمینه برشته کاری قهوه و فروش قهوه بصورت عمده و خرده فروشی، انواع پودرهای فوری، دستگاه های اسپرسو ساز خانگی و انواع تجهیزات وابسته فعالیت دارد. امکان مراجعه حضوری و بازدید از محصولات، در دفتر فروشگاه برای کلیه عزیزان از ساعت ۱۰ صبح الی ۹ بعد از ظهر فعال می باشد.
            </p>
            <div className="flex gap-3 mt-2">
              <a href="#" className="footer-icon" aria-label="آپارات">
                <Image src="/icon/apart.svg" alt="Aparat" width={20} height={20} className="footer-icon-img" />
              </a>
              <a href="#" className="footer-icon" aria-label="اینستاگرام">
                <Image src="/icon/instagram.svg" alt="Instagram" width={20} height={20} className="footer-icon-img" />
              </a>
              <a href="#" className="footer-icon" aria-label="فیسبوک">
                <Image src="/icon/facebook.svg" alt="Facebook" width={20} height={20} className="footer-icon-img" />
              </a>
              <a href="#" className="footer-icon" aria-label="یوتیوب">
                <Image src="/icon/youtube.svg" alt="YouTube" width={20} height={20} className="footer-icon-img" />
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-2 text-right">
            <h3 className="text-[#00C16A] font-bold text-lg mb-3 font-yekan">اطلاعات تماس</h3>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icon/call.svg" alt="phone" width={18} height={18} />
              <span className="text-sm">021-77919928</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icon/call2.svg" alt="mobile" width={18} height={18} />
              <span className="text-sm">09121443071</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icon/call2.svg" alt="mobile" width={18} height={18} />
              <span className="text-sm">09129417812</span>
            </div>
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icon/eamil.svg" alt="email" width={18} height={18} />
              <span className="text-sm">info@garneekcoffee.com</span>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <Image src="/icon/gps.svg" alt="address" width={18} height={18} />
              <span className="text-sm">تهران - پایین تر از میدان سپاه - جنب کوچه فروردین - پلاک ۶۰ واحد ۱۴</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 text-right">
            <h3 className="text-[#00C16A] font-bold text-lg mb-3 font-yekan">لینک های سریع</h3>
            <ul className="space-y-2 font-yekan">
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">وبلاگ</a></li>
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">درباره ما</a></li>
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">تماس با ما</a></li>
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">چشم انداز گارنیک</a></li>
            </ul>
          </div>

          {/* Help & Services */}
          <div className="lg:col-span-1 text-right">
            <h3 className="text-[#00C16A] font-bold text-lg mb-3 font-yekan">راهنمایی و خدمات</h3>
            <ul className="space-y-2 font-yekan">
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">نحوه ارسال سفارشات</a></li>
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">سیاست حفظ حریم خصوصی</a></li>
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">سوالات متداول</a></li>
              <li><a href="#" className="text-sm hover:text-[#00C16A] transition">پیگیری سفارش</a></li>
            </ul>
          </div>
        </div>

        {/* Payment & Trust Badges */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 border-t border-[#222] pt-8 mb-4">
          <div className="flex gap-6">
            <Image src="/brands/zarinPall.png" alt="زرین پال" width={70} height={40} />
            <Image src="/brands/enamad.png" alt="ساماندهی" width={70} height={40} />
            <Image src="/brands/IDPay.png" alt="IDPay" width={70} height={40} />
          </div>
          <div className="text-center text-gray-400 text-sm pt-2 font-yekan">
            کپی رایت 2022 - تمام حقوق برای وب سایت یکتا تیم محفوظ است.
          </div>
        </div>
        {/* Copyright */}
      </div>
      <style jsx global>{`
  .footer-icon {
    width: 36px;
    height: 36px;
    background: #232323;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s, color 0.2s;
  }
  .footer-icon-img {
    transition: filter 0.2s;
    /* Gold color for static state */
    filter: invert(54%) sepia(38%) saturate(743%) hue-rotate(16deg) brightness(95%) contrast(90%);
  }
  .footer-icon:hover {
    background: #C6A15B;
  }
  .footer-icon:hover .footer-icon-img {
    /* Black icon on hover */
    filter: none;
  }
`}</style>
    </footer>
  );
}
