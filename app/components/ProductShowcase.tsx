"use client";

import React from "react";
import dataRaw from '../data.json';
import ProductSlider from './ProductSlider';
const data = dataRaw as {
  products: { image: string; title: string; price: string }[];
  machines: { image: string; title: string; price: string }[];
  coffeeStuff: { image: string; title: string; price: string }[];
};

export default function ProductShowcase() {
  return (
    <>
      <ProductSlider
        title="پیشنهاد قهوه برای هر ذائقه و سلیقه"
        products={data.products}
      />
      <ProductSlider
        title="لذت قهوه در خانه با دستگاه های اسپرسوساز"
        products={data.machines}
      />
      <ProductSlider
        title="از جوشوندن آب تا نوشیدن قهوه هر چی که لازم داری"
        products={data.coffeeStuff}
      />
    </>
  );
}
