"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { api, type HeroData } from "../lib/api";

export default function HeroSection() {
  const [heroData, setHeroData] = useState<HeroData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getHeroData();
      setHeroData(data);
    };
    fetchData();
  }, []);
  if (!heroData) return null;

  return (
    <div className="relative bg-[#151515] h-[60vh] sm:h-[70vh] lg:h-[80vh] min-h-[400px] w-full">
      <Image
        src={heroData.background}
        alt="Coffee Beans Background"
        fill
        className="object-cover bg-[#151515] mask-y-from-80% mask-y-to-90% brightness-[0.7]"
        priority
      />
      <section className="min-h-[60vh] sm:min-h-[70vh] lg:min-h-[80vh] flex items-center justify-end overflow-hidden absolute top-0 left-0 w-full h-full">
        {/* Main content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-start relative z-10 w-full">
          <div className="max-w-2xl">
            <h1 className="hero-title text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6 font-morabba animate-fade-in-up">
              {heroData.title}
            </h1>
            <p
              className="text-base sm:text-lg md:text-xl text-gray-300 mb-6 sm:mb-8 pl-4 sm:pl-16 lg:pl-32 font-yekan leading-relaxed animate-fade-in-up"
              style={{ animationDelay: "0.2s" }}
            >
              {heroData.description}
            </p>
            <button
              className="bg-[#009245] hover:bg-[#007a3a] text-white font-bold py-3 sm:py-4 px-6 sm:px-8 rounded-4xl text-base sm:text-lg transition-all duration-300 transform hover:scale-105 font-yekan animate-fade-in-up touch-manipulation"
              style={{ animationDelay: "0.4s" }}
            >
              {heroData.cta.text}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
