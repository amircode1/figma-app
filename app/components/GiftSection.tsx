"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { api, type GiftData } from '../lib/api';

export default function GiftSection() {
  const [giftData, setGiftData] = useState<GiftData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getGiftData();
      setGiftData(data);
    };
    fetchData();
  }, []);

  if (!giftData) return null;
  return (
    <section className="flex justify-center items-center py-36 bg-[#151515]">
      <div className="relative w-full max-w-6xl rounded-3xl bg-[#009245] flex items-center min-h-[220px] px-0 md:px-0 overflow-visible" style={{boxShadow: '0 4px 32px 0 rgba(0,0,0,0.10)'}}>        {/* Floating gift box and beans */}
        <div className="absolute left-49 top-[-75px] z-40">
          <Image src={giftData.images.beans} alt="Coffee Beans" width={240} height={100} priority />
        </div>
        {/* French press mug */}
        <div className="absolute left-50 bottom-[65px] z-50">
          <Image src={giftData.images.mug} alt="French Press" width={110} height={110} priority />
        </div>
        <div className="absolute left-20 bottom-[0px] z-60">
            <Image src={giftData.images.coffee} alt="Coffee Beans" width={264} height={264} />
        </div>
        <div className="absolute left-[-40px] top-[-150px] z-30">
          <Image src={giftData.images.box} alt="Gift Box" width={525} height={386} priority />
        </div>
        {/* Main green box content */}
        <div className="flex-1 flex flex-col justify-center items-start pr-10 py-10">
          <h3 className="text-white text-sm md:text-xl font-morabba font-bold mb-3">{giftData.title}</h3>
          <p className="text-white/90 text-xs md:text-lg font-yekan mb-5 leading-8 max-w-xl">{giftData.description}</p>
          <button className="bg-black text-white rounded-xl px-6 py-2 font-yekan text-base hover:bg-[#232323] transition">{giftData.cta.text}</button>
        </div>
      </div>
    </section>
  );
}
