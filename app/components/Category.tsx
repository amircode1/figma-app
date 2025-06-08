"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { api, type Category as CategoryType } from "../lib/api";

export default function Category() {
  const [categoryData, setCategoryData] = useState<{
    title: string;
    items: CategoryType[];
  } | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getCategories();
      setCategoryData(data);
    };
    fetchData();
  }, []);

  if (!categoryData) return null;
  return (
    <section className="w-full flex flex-col items-center px-4 sm:px-6 lg:px-8">
      <h2 className="text-white text-lg sm:text-xl lg:text-2xl font-yekan mb-4 sm:mb-6 lg:mb-8 text-center">
        {categoryData.title}
      </h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-3 sm:gap-4 lg:gap-6 w-full max-w-7xl">
        {categoryData.items.map((cat) => (
          <div
            key={cat.id}
            className={
              "flex flex-col items-center justify-center bg-[#191919] border border-[#333] rounded-2xl w-full aspect-square min-h-[120px] sm:min-h-[140px] lg:min-h-[150px] duration-200 cursor-pointer transition-all hover:bg-[radial-gradient(at_0%_100%,_rgba(24,24,27,0.4),_rgba(255,255,255,0.1))] hover:shadow-lg p-3 sm:p-4 lg:p-6"
            }
          >
            <Image
              src={`/icon/${cat.icon}`}
              alt={cat.label || "icon"}
              width={48}
              height={48}
              className="mb-2 w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
            <span className="text-white text-xs sm:text-sm lg:text-base font-yekan mt-2 text-center leading-tight">
              {cat.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
