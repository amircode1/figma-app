// Store Page - Responsive, accessible, and ready for Figma design integration
import React from 'react';
import Image from 'next/image';
import dataRaw from '../data.json';
import Header from '../components/Header';
import Footer from '../components/Footer';
import FilterBar from './components/FilterBar';
import ProductGrid from './components/ProductGrid';
import DescriptionSection from './components/DescriptionSection';

const data = dataRaw as {
  products: { image: string; title: string; price: string }[];
};

export default function StorePage() {
  return (
    <main className="bg-black min-h-screen flex flex-col">
      <Header />
      {/* Banner */}
      <div className="relative w-full h-72 md:h-96 flex items-end justify-center bg-[#151515] mask-y-from-80% mask-y-to-90% brightness-[0.7]">
        <Image src="/store-assets/image.png" alt="Store Hero" fill className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
        <div className="relative z-50 w-full flex flex-col items-center pb-20">
          <h1 className="text-white text-3xl md:text-4xl font-morabba font-bold mb-2">روبوستا</h1>
          <div className="text-[#C6A15B] font-yekan text-sm flex gap-2">
            <span>خانه</span>
            <span>/</span>
            <span>محصولات قهوه</span>
            <span>/</span>
            <span>روبوستا</span>
          </div>
        </div>
      </div>

      {/* Filter bar */}
      <FilterBar />

      {/* Product grid */}
      <ProductGrid products={data.products.concat(data.products)} count={12} />

      {/* Description section */}
      <DescriptionSection />

      <Footer />
    </main>
  );
}
