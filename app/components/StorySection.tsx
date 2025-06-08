"use client";
import React, { useState, useEffect } from 'react';
import Image from "next/image";
import { api, type StoryData } from '../lib/api';

export default function StorySection() {
  const [storyData, setStoryData] = useState<StoryData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getStoryData();
      setStoryData(data);
    };
    fetchData();
  }, []);

  if (!storyData) return null;
  return (
    <section className="bg-[#151515] py-16">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">          {/* Text Content */}
          <div className="order-2 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 font-morabba text-right">
              {storyData.title}
            </h2>
            <p className="text-gray-300 text-base md:text-lg mb-8 leading-8 font-yekan text-right">
              {storyData.content}
            </p>
          </div>
          {/* Image + Button */}
          <div className="order-1 md:order-1 flex flex-col items-center md:items-end rounded-2xl">
            <div className="relative w-full max-w-[600px]">
              <Image
                src={storyData.image}
                alt="Coffee Story"
                width={600}
                height={500}
                className="w-full h-auto rounded-4xl"
                priority
              />
              {/* Overlay Button */}
              <button className="absolute bottom-[-30px] left-0 flex items-center px-5 py-3 w-[400px] h-[84px] rounded-full bg-white/10 backdrop-blur-lg border border-white/20 shadow-md hover:bg-white/20 transition-all font-yekan text-white text-sm">
                <span className="flex items-center justify-center w-15 h-15 rounded-full bg-[#00C16A]">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="8,5 19,12 8,19" />
                  </svg>
                </span>
                <span className="mr-6 text-xl">{storyData.cta.text}</span>
              </button>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
