"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { api, type Category as CategoryType } from '../lib/api';

export default function Category() {
  const [categoryData, setCategoryData] = useState<{ title: string; items: CategoryType[] } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getCategories();
      setCategoryData(data);
    };
    fetchData();
  }, []);

  if (!categoryData) return null;	return (
		<section className="w-full flex flex-col items-center">
			<h2 className="text-white text-lg font-yekan mb-4">{categoryData.title}</h2>
			<div className="flex flex-row gap-4 justify-center w-full">
				{categoryData.items.map((cat) => (
          <div
            key={cat.id}
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
