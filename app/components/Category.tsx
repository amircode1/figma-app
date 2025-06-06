"use client";

import React from 'react';
import Image from 'next/image';

const categories = [
	{ icon: 'cup.svg', label: 'بار سرد' },
	{ icon: 'coffee-builder.svg', label: 'ابزار دم آوری' },
	{ icon: 'coffee-filter.svg', label: 'تجهیزات قهوه' },
	{ icon: 'coffee-grinder.svg', label: 'آسیاب قهوه' },
	{ icon: 'coffee-maker.svg', label: 'اسپرسوساز' },
	{ icon: 'coffee-mug.svg', label: 'پودرهای فوری' },
	{ icon: 'coffee-beans.svg', label: 'قهوه' },
];

export default function Category() {
	return (
		<section className="w-full flex flex-col items-center">
			<h2 className="text-white text-lg font-yekan mb-4">دسته بندی محصولات</h2>
			<div className="flex flex-row gap-4 justify-center w-full">
				{categories.map((cat) => (
          <div
            key={cat.label}
            className={
              'flex flex-col items-center justify-center bg-[#191919] border border-[#333] rounded-2xl w-[150px] h-[150px] duration-200 cursor-pointer transition-all hover:bg-[radial-gradient(at_0%_100%,_rgba(24,24,27,0.4),_rgba(255,255,255,0.1))] hover:shadow-lg'             
            }
          >
            <Image
              src={`/icon/${cat.icon}`}
              alt={cat.label || 'icon'}
              width={48}
              height={48}
              className="mb-2"
            />
            <span className="text-white text-sm font-yekan mt-2">{cat.label}</span>
          </div>
				))}
			</div>
		</section>
	);
}
