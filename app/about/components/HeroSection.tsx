"use client";

import Image from 'next/image';
import { FC, useState, useEffect } from 'react';
import { getAboutPageData, type AboutPageData } from '../../lib/api';

const HeroSection: FC = () => {
  const [heroData, setHeroData] = useState<AboutPageData['hero'] | null>(null);

  useEffect(() => {
    const loadHeroData = async () => {
      const data = await getAboutPageData();
      setHeroData(data.hero);
    };
    loadHeroData();
  }, []);

  if (!heroData) {
    return (
      <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-[#151515]">
        <div className="text-white">Loading...</div>
      </section>
    );
  }

  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-[#151515] mask-t-from-50% brightness-[0.8]">
        <Image src={heroData.backgroundImage} alt={heroData.title} fill className="object-cover object-center opacity-70" priority />
        <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
          <h1 className="text-white font-morabba text-4xl md:text-5xl mb-2">{heroData.title}</h1>
          <span className="text-[#C6A15B] font-yekan text-lg">{heroData.subtitle}</span>
        </div>
    </section>
  );
};

export default HeroSection;