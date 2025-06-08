"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface ProductCardProps {
  id: string;
  image: string;
  title: string;
  price: string;
}

const ProductCard: React.FC<ProductCardProps> = ({ id, image, title, price }) => {
  const [imageError, setImageError] = useState(false);
  return (
    <Link href={`/store/product/${id}`} className="block">
      <div
        className={`relative bg-[#181818] border border-[#333] rounded-2xl p-6 flex flex-col items-center justify-center text-center transition-all duration-200 w-full max-w-xs mx-auto group hover:shadow-lg hover:border-[#C6A15B] hover:bg-[radial-gradient(at_0%_100%,_rgba(24,24,27,0.4),_rgba(198,161,91,0.08))]`}
      >
      {/* Button group */}
      <div
        className={`
          absolute left-2 top-2 flex flex-col gap-2 z-10
          opacity-0 group-hover:opacity-100 pointer-events-none group-hover:pointer-events-auto
          transition-opacity
        `}
      >
        <button className="w-8 h-8 bg-[#232323] rounded-full flex items-center justify-center border border-[#333] mb-1 hover:bg-[#333] transition">
          <Image
            src="/icon/shopping-cart.svg"
            alt="Cart"
            width={18}
            height={18}
            style={{ filter: "invert(74%) sepia(60%) saturate(600%) hue-rotate(8deg) brightness(1.1)" }}
          />
        </button>
        <button className="w-8 h-8 bg-[#232323] rounded-full flex items-center justify-center border border-[#333] mb-1 hover:bg-[#333] transition">
          <Image
            src="/icon/heart.svg"
            alt="Favorite"
            width={18}
            height={18}
            style={{ filter: "invert(74%) sepia(60%) saturate(600%) hue-rotate(8deg) brightness(1.1)" }}
          />
        </button>
        <button className="w-8 h-8 bg-[#232323] rounded-full flex items-center justify-center border border-[#333] hover:bg-[#333] transition">
          <Image
            src="/icon/search.svg"
            alt="Search"
            width={18}
            height={18}
            style={{ filter: "invert(74%) sepia(60%) saturate(600%) hue-rotate(8deg) brightness(1.1)" }}
          />
        </button>
      </div>
      {/* Product image */}
      <div className="mb-4 flex items-center justify-center h-[200px]">
        {!imageError ? (
          <Image
            src={image}
            alt={title}
            width={180}
            height={180}
            className="object-contain pl-7"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-[180px] h-[180px] flex items-center justify-center bg-gray-700 rounded-xl">
            <span className="text-6xl">☕</span>
          </div>
        )}
      </div>
      <h3 className="text-white text-lg font-yekan mb-3 mt-2 whitespace-nowrap overflow-hidden text-ellipsis w-full">
        {title}
      </h3>      <span className="text-[#00C16A] text-lg font-yekan font-bold block mt-2">{price}</span>
      </div>
    </Link>
  );
};

export default ProductCard;