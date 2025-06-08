"use client";

import React, { useRef, useState, useEffect } from "react";
import Link from 'next/link';
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import ProductCard from "./ProductCard";

interface Product {
  id: string;
  image: string;
  title: string;
  price: string | number;
}

interface ProductSliderProps {
  title: string;
  products: Product[];
  buttonLabel?: string;
  buttonHref?: string;
  className?: string;
}

const ProductSlider: React.FC<ProductSliderProps> = ({
  title,
  products,
  buttonLabel = "مشاهده محصولات",
  buttonHref = "#",
  className = "",
}) => {
  const prevRef = useRef<HTMLButtonElement | null>(null);
  const nextRef = useRef<HTMLButtonElement | null>(null);
  const [refsReady, setRefsReady] = useState(false);
  useEffect(() => {
    if (prevRef.current && nextRef.current) {
      setRefsReady(true);
    }
  }, []);

  return (
    <section className={`bg-[#151515] py-16 static ${className}`}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between mb-6 relative">
          <div className="flex items-center gap-2">
            <button ref={nextRef} className="group w-8 h-8 rounded-xs bg-[#232323] text-white hover:bg-[#2c2c2c] flex items-center justify-center border border-[#333] transition-colors duration-200" aria-label="بعدی">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"><polyline className="stroke-yellow-600" points="9 18 15 12 9 6"></polyline></svg>
            </button>
            <button ref={prevRef} className="group w-8 h-8 rounded-xs bg-[#232323] text-white hover:bg-[#2c2c2c] flex items-center justify-center border border-[#333] transition-colors duration-200" aria-label="قبلی">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="group-hover:stroke-white"><polyline className="stroke-yellow-600" points="15 18 9 12 15 6"></polyline></svg>
            </button>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-white font-morabba text-center">
            {title}
          </h2>          <Link href={buttonHref} className="text-[#C6A15B] hover:text-white transition-colors font-yekan border border-[#C6A15B] hover:bg-[#C6A15B] px-4 py-2 rounded-lg ml-4 min-w-[120px] text-center">
            {buttonLabel}
          </Link>
        </div>
        {refsReady && (
          <Swiper
            modules={[Navigation, Pagination]}
            spaceBetween={20}
            slidesPerView={1}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 4 },
            }}
            navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}            pagination={{ clickable: true }}
            className="pt-2"
            onInit={swiper => {
              // @ts-expect-error - Swiper navigation params type issue
              swiper.params.navigation.prevEl = prevRef.current;
              // @ts-expect-error - Swiper navigation params type issue
              swiper.params.navigation.nextEl = nextRef.current;
              swiper.navigation.init();
              swiper.navigation.update();
            }}
          >            {products.map((product, index) => (
              <SwiperSlide key={index}>                <ProductCard
                  id={product.id}
                  image={product.image}
                  title={product.title}
                  price={typeof product.price === 'number' ? product.price.toString() : product.price}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </section>
  );
};

export default ProductSlider;
