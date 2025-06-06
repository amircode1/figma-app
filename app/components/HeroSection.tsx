"use client";

import React from 'react';
import Image from 'next/image';
import bg from '../../public/imagebg.png';

export default function HeroSection() {
  return (
      <div className="relative bg-[#151515] h-[80vh] min-h-[400px]">
        <Image src={bg.src} alt="Coffee Beans Background" fill className='bg-[#151515] mask-y-from-80% mask-y-to-90% brightness-[0.7]' />
        <section className="min-h-[80vh] flex items-center justify-end overflow-hidden absolute top-0 left-0 w-full h-full">
          {/* Main content */}
          <div className="container mx-auto px-6 text-start relative z-10">
            <div className="max-w-2xl">
              <h1 className="hero-title text-xl md:text-3xl font-bold text-white mb-6 font-morabba animate-fade-in-up">
                طعم‌ های خاص طبیعی قهوه‌های ویژه
              </h1>
              <p className="text-lg md:text-xl text-gray-300 mb-8 pl-32 font-yekan leading-relaxed animate-fade-in-up" style={{animationDelay: '0.2s'}}>
                با گارنیک کافی، به راحتی بهترین قهوه‌های تازه و تجهیزات قهوه‌سازی را تهیه کنید و تجربه قهوه‌ای شگفت‌انگیز را در خانه یا محل کار خود داشته باشید.
              </p>
              <button className="bg-[#009245] hover:bg-[#007a3a] text-white font-bold py-4 px-8 rounded-4xl text-lg transition-all duration-300 transform hover:scale-105 font-yekan animate-fade-in-up" style={{animationDelay: '0.4s'}}>
                مطالعه محصولات
              </button>
            </div>
          </div>
        </section>
      </div>
  );
}
