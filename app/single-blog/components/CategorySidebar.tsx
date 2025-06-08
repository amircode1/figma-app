"use client";

import React, { useState } from 'react';
import Image from 'next/image';

const categories = [
  { label: 'قهوه', icon: '/icon/coffee-beans.svg' },
  { label: 'پودرهای فوری', icon: '/icon/coffee-mug.svg' },
  { label: 'اسپرسوساز', icon: '/icon/coffee-maker.svg' },
  { label: 'آسیاب قهوه', icon: '/icon/coffee-grinder.svg' },
  { label: 'تجهیزات قهوه', icon: '/icon/coffee-filter.svg' },
  { label: 'ابزار دمی', icon: '/icon/coffee-builder.svg' },
  { label: 'بار سرد', icon: '/icon/cup.svg' },
];

export default function CategorySidebar() {
  const [activeIndex, setActiveIndex] = useState(1); // Default: 'پودرهای فوری'

  return (
    <div className="bg-black rounded-2xl p-6 mb-4">
      <h3 className="text-lg font-bold text-white mb-6 font-morabba text-center">دسته بندی محصولات</h3>
      <ul className="space-y-2 text-right font-yekan">
        {categories.map(({ label, icon }, idx) => (
          <li
            key={label}
            onClick={() => setActiveIndex(idx)}
            className={`flex items-center justify-between px-4 py-2 rounded-xl cursor-pointer transition text-white/80 hover:text-white select-none ${
              activeIndex === idx ? 'bg-gradient-to-l from-[#232323] to-[#232323] border border-[#fff2] shadow-md text-white' : ''
            }`}
          >
            <span>{label}</span>
            <Image src={icon} alt={label} width={20} height={20} />
          </li>
        ))}
      </ul>
    </div>
  );
}
