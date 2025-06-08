"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from 'next/image';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { getBlogs, type Blog } from '../lib/api';

export default function BlogSlider() {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [refsReady, setRefsReady] = useState(false);
  const [blogs, setBlogs] = useState<Blog[]>([]);

  useEffect(() => {
    const loadBlogs = async () => {
      const data = await getBlogs();
      setBlogs(data);
    };
    loadBlogs();
  }, []);

  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setRefsReady(true);
    }
  }, [prevRef.current, nextRef.current]);

  return (
    <section className="py-10 px-4 bg-[#151515] text-white max-w-7xl mx-auto">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-2">
          {/* Swiper navigation buttons */}
          <button ref={nextRef} className="group w-8 h-8 rounded-xs bg-[#232323] text-white hover:bg-[#2c2c2c] flex items-center justify-center border border-[#333] transition-colors duration-200" aria-label="بعدی">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"><polyline className="stroke-yellow-600" points="9 18 15 12 9 6"></polyline></svg>
          </button>
          <button ref={prevRef} className="group w-8 h-8 rounded-xs bg-[#232323] text-white hover:bg-[#2c2c2c] flex items-center justify-center border border-[#333] transition-colors duration-200" aria-label="قبلی">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"><polyline className="stroke-yellow-600" points="15 18 9 12 15 6"></polyline></svg>
          </button>
        </div>
        <h2 className="text-2xl font-bold">نوشته‌های گارنیک کافی</h2>
        <button className="text-[#C6A15B] hover:text-white transition-colors font-yekan border border-[#C6A15B] hover:bg-[#C6A15B] px-4 py-2 rounded-lg ml-4" style={{minWidth:'120px'}}>
          مشاهده محصولات
        </button>
      </div>

      {refsReady && (
        <Swiper
          modules={[Navigation]}
          spaceBetween={24}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}          navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
          className="blog-swiper"
          onInit={swiper => {
            // @ts-expect-error - Swiper navigation params type issue
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-expect-error - Swiper navigation params type issue
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {blogs.map((item) => (
            <SwiperSlide key={item.id}>              <div className="rounded-2xl overflow-hidden bg-[#151515] shadow-lg">
                <div className="relative">
                  <Image src={item.image} alt={item.title} width={400} height={224} className="w-full h-56 object-cover" />
                  <span className="absolute top-3 left-3 bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:bg-white/20 transition-all text-white px-3 py-1 text-xs font-yekan rounded-full">
                    {item.date}
                  </span>
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-[17px] mb-1">{item.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{item.description}</p>
                  <a href="#" className="text-green-500 text-sm font-semibold hover:underline">
                    مطالعه بیشتر
                  </a>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </section>
  );
}
