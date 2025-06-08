"use client";

import React, { useState, useEffect } from "react";
import { getCoffeeProducts, getMachines, getCoffeeStuff, Product, api } from '../lib/api';
import ProductSlider from './ProductSlider';

export default function ProductShowcase() {  const [coffeeProducts, setCoffeeProducts] = useState<Product[]>([]);
  const [machines, setMachines] = useState<Product[]>([]);
  const [coffeeStuff, setCoffeeStuff] = useState<Product[]>([]);
  const [sliderTitles, setSliderTitles] = useState<Record<string, { title: string }> | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [coffeeDta, machinesData, coffeeStuffData, titlesData] = await Promise.all([
          getCoffeeProducts(),
          getMachines(), 
          getCoffeeStuff(),
          api.getProductSliderTitles()
        ]);
        
        setCoffeeProducts(coffeeDta);
        setMachines(machinesData);
        setCoffeeStuff(coffeeStuffData);
        setSliderTitles(titlesData);
      } catch (error) {
        console.error('Error fetching product data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading || !sliderTitles) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-white">در حال بارگذاری...</div>
      </div>
    );
  }

  return (
    <>
      <ProductSlider
        title={sliderTitles.coffee.title}
        products={coffeeProducts}
      />
      <ProductSlider
        title={sliderTitles.machines.title}
        products={machines}
      />
      <ProductSlider
        title={sliderTitles.coffeeStuff.title}
        products={coffeeStuff}
      />
    </>
  );
}
