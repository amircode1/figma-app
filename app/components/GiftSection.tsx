"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { api, type GiftData } from "../lib/api";

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
    <section className="flex justify-center items-center py-16 md:py-36 bg-[#151515]">
      <div
        className="relative w-full max-w-6xl rounded-3xl bg-[#009245] flex flex-col md:flex-row items-center min-h-[300px] md:min-h-[220px] px-4 md:px-0 overflow-visible"
        style={{ boxShadow: "0 4px 32px 0 rgba(0,0,0,0.10)" }}
      >
        {/* Floating gift box and beans */}
        <div className="absolute left-18 bottom-[40px] md:left-49 md:top-[-75px] z-40">
          <Image
            src={giftData.images.beans}
            alt="Coffee Beans"
            width={120}
            height={50}
            className="md:w-[240px] md:h-[100px]"
            priority
          />
        </div>
        {/* French press mug */}
        <div className="absolute left-[70px] bottom-[30px] md:left-50 md:bottom-[65px] z-50">
          <Image
            src={giftData.images.mug}
            alt="French Press"
            width={60}
            height={60}
            className="md:w-[110px] md:h-[110px]"
            priority
          />
        </div>
        <div className="absolute left-[35px] bottom-[0px] md:left-20 z-60">
          <Image
            src={giftData.images.coffee}
            alt="Coffee Beans"
            width={100}
            height={100}
            className="md:w-[264px] md:h-[264px]"
          />
        </div>
        <div className="absolute left-[10px] bottom-[0px] md:left-[-40px] md:top-[-150px] z-30">
          <Image
            src={giftData.images.box}
            alt="Gift Box"
            width={150}
            height={106}
            className="md:w-[525px] md:h-[386px]"
            priority
          />
        </div>
        {/* Main green box content */}
        <div className="flex-1 flex flex-col justify-center items-start pr-4 md:pr-10 py-6 md:py-10 mt-8 md:mt-0">
          <h3 className="text-white text-lg md:text-xl font-morabba font-bold mb-3">
            {giftData.title}
          </h3>
          <p className="text-white/90 text-sm md:text-lg font-yekan mb-5 leading-6 md:leading-8 max-w-xl">
            {giftData.description}
          </p>
          <button className="bg-black text-white rounded-xl px-4 py-2 md:px-6 font-yekan text-sm md:text-base hover:bg-[#232323] transition">
            {giftData.cta.text}
          </button>
        </div>
      </div>
    </section>
  );
}
