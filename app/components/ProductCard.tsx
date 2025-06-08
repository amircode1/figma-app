"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  price,
}) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Link href={`/store/product/${id}`} className="block w-full">
      {" "}
      <div
        className={`relative bg-[#181818] border border-[#333] rounded-2xl p-3 sm:p-4 lg:p-6 flex flex-col items-center justify-center text-center transition-all duration-200 w-full group hover:shadow-lg hover:border-[#C6A15B] hover:bg-[radial-gradient(at_0%_100%,_rgba(24,24,27,0.4),_rgba(198,161,91,0.08))]`}
      >
        {/* Button group */}
        <div
          className={`
          absolute left-2 top-2 flex flex-col gap-1 sm:gap-2 z-10
          opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
          transition-opacity
        `}
        >
          <button className="w-6 h-6 sm:w-8 sm:h-8 bg-[#232323] rounded-full flex items-center justify-center border border-[#333] mb-1 hover:bg-[#333] transition">
            <Image
              src="/icon/shopping-cart.svg"
              alt="Cart"
              width={14}
              height={14}
              className="sm:w-[18px] sm:h-[18px]"
              style={{
                filter:
                  "invert(74%) sepia(60%) saturate(600%) hue-rotate(8deg) brightness(1.1)",
              }}
            />
          </button>
          <button className="w-6 h-6 sm:w-8 sm:h-8 bg-[#232323] rounded-full flex items-center justify-center border border-[#333] mb-1 hover:bg-[#333] transition">
            <Image
              src="/icon/heart.svg"
              alt="Favorite"
              width={14}
              height={14}
              className="sm:w-[18px] sm:h-[18px]"
              style={{
                filter:
                  "invert(74%) sepia(60%) saturate(600%) hue-rotate(8deg) brightness(1.1)",
              }}
            />
          </button>
          <button className="w-6 h-6 sm:w-8 sm:h-8 bg-[#232323] rounded-full flex items-center justify-center border border-[#333] hover:bg-[#333] transition">
            <Image
              src="/icon/search.svg"
              alt="Search"
              width={14}
              height={14}
              className="sm:w-[18px] sm:h-[18px]"
              style={{
                filter:
                  "invert(74%) sepia(60%) saturate(600%) hue-rotate(8deg) brightness(1.1)",
              }}
            />
          </button>
        </div>
        {/* Product image */}
        <div className="mb-3 sm:mb-4 flex items-center justify-center h-[150px] sm:h-[180px] lg:h-[200px]">
          {" "}
          {!imageError ? (
            <Image
              src={image}
              alt={title}
              width={180}
              height={180}
              className="object-contain pl-3 sm:pl-5 lg:pl-7 w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px]"
              onError={() => setImageError(true)}
              loading="lazy"
              sizes="(max-width: 640px) 120px, (max-width: 1024px) 150px, 180px"
            />
          ) : (
            <div className="w-[120px] h-[120px] sm:w-[150px] sm:h-[150px] lg:w-[180px] lg:h-[180px] flex items-center justify-center bg-gray-700 rounded-xl">
              <span className="text-3xl sm:text-4xl lg:text-6xl">☕</span>
            </div>
          )}
        </div>
        <h3 className="text-white text-sm sm:text-base lg:text-lg font-yekan mb-2 sm:mb-3 mt-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">
          {title}
        </h3>
        <span className="text-[#00C16A] text-base sm:text-lg font-yekan font-bold block mt-1 sm:mt-2">
          {price}
        </span>
      </div>
    </Link>
  );
};

export default ProductCard;
