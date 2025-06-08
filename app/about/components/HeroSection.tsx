"use client";

import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { getAboutPageData, type AboutPageData } from "../../lib/api";

const HeroSection: FC = () => {
  const [heroData, setHeroData] = useState<AboutPageData["hero"] | null>(null);

  useEffect(() => {
    const loadHeroData = async () => {
      const data = await getAboutPageData();
      setHeroData(data.hero);
    };
    loadHeroData();
  }, []);
  if (!heroData) {
    return (
      <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-[#151515]">
        <div className="text-white text-sm sm:text-base">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-[50vh] sm:h-[60vh] lg:h-[70vh] flex items-center justify-center bg-[#151515] mask-t-from-50% brightness-[0.8]">
      <Image
        src={heroData.backgroundImage}
        alt={heroData.title}
        fill
        className="object-cover object-center opacity-70"
        priority
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-4 sm:px-6">
        <h1 className="text-white font-morabba text-2xl sm:text-3xl md:text-4xl lg:text-5xl mb-2 text-center max-w-4xl leading-tight">
          {heroData.title}
        </h1>
        <span className="text-[#C6A15B] font-yekan text-base sm:text-lg md:text-xl text-center">
          {heroData.subtitle}
        </span>
      </div>
    </section>
  );
};

export default HeroSection;
