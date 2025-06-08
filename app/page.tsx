"use client";

import React, { useState, useEffect } from "react";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import GiftSection from "./components/GiftSection";
import Category from "./components/Category";
import StorySection from "./components/StorySection";
import Footer from "./components/Footer";
import ServiceBar from "./components/ServiceBar";
import ProductSlider from "./components/ProductSlider";
import BlogSlider from "./components/BlogSection";
import { getCoffeeProducts, getMachines, getCoffeeStuff, type Product } from "./lib/api";

export default function Home() {
  const [coffeeProducts, setCoffeeProducts] = useState<Product[]>([]);
  const [machines, setMachines] = useState<Product[]>([]);
  const [coffeeStuff, setCoffeeStuff] = useState<Product[]>([]);

  useEffect(() => {
    const loadData = async () => {
      const [coffeeData, machineData, stuffData] = await Promise.all([
        getCoffeeProducts(),
        getMachines(),
        getCoffeeStuff(),
      ]);
      setCoffeeProducts(coffeeData);
      setMachines(machineData);
      setCoffeeStuff(stuffData);
    };
    loadData();
  }, []);

  return (
    <main className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      <HeroSection />
      <Category />
      <ProductSlider
        title="پیشنهاد قهوه برای هر ذائقه و سلیقه"
        products={coffeeProducts}
      />
      <GiftSection />
      <ProductSlider
        title="لذت قهوه در خانه با دستگاه های اسپرسوساز"
        products={machines}
      />
      <StorySection />
      <ProductSlider
        title="از جوشوندن آب تا نوشیدن قهوه هر چی که لازم داری"
        products={coffeeStuff}
      />
      <BlogSlider/>
      <ServiceBar />
      <Footer />
    </main>
  );
}
