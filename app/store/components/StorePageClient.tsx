"use client";

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import FilterBar from './FilterBar';
import ProductGrid from './ProductGrid';
import DescriptionSection from './DescriptionSection';
import { getProducts, type Product } from '../../lib/api';

export default function StorePageClient() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeView, setActiveView] = useState<'grid' | 'list'>('grid');

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const fetchedProducts = await getProducts();
        setProducts(fetchedProducts);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const handleGridView = () => setActiveView('grid');
  const handleListView = () => setActiveView('list');

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        <div className="text-white text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#151515]">
      {/* Hero Section */}
      <section className="relative h-96 bg-gradient-to-r from-[#232323] to-[#151515] flex items-center justify-center">
        <Image 
          src="/store-assets/image.png" 
          alt="Store Hero" 
          fill 
          className="bg-[#151515] mask-t-from-0% brightness-[0.7]" 
          priority
        />
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative text-center text-white z-10">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">فروشگاه</h1>
          <p className="text-lg md:text-xl opacity-90">بهترین محصولات قهوه را انتخاب کنید</p>
        </div>
      </section>

      {/* Filter and Products */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <FilterBar onGrid={handleGridView} onList={handleListView} activeView={activeView} />
        
        {activeView === 'grid' ? (
          <ProductGrid products={products} count={12} />
        ) : (
          <div className="space-y-4">
            {products.slice(0, 12).map((product, idx) => (
              <div key={idx} className="bg-[#232323] rounded-lg p-4 flex items-center space-x-4 space-x-reverse">
                <Image 
                  src={product.image} 
                  alt={product.title} 
                  width={100} 
                  height={100} 
                  className="object-cover rounded"
                />
                <div className="flex-1 text-right">
                  <h3 className="text-white font-semibold text-lg">{product.title}</h3>
                  <p className="text-[#00C16A] font-bold text-xl mt-2">{String(product.price)}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      <DescriptionSection />
    </div>
  );
}
