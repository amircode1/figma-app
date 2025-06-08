import React from "react";
import ProductCard from "../../components/ProductCard";
import { type Product } from "../../lib/api";

interface ProductGridProps {
  products: Product[];
  count?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, count = 12 }) => (
  <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10 px-2 md:px-0">
    {products.slice(0, count).map((product, idx) => (
      <ProductCard key={idx} id={product.id} image={product.image} title={product.title} price={String(product.price)} />
    ))}
  </div>
);

export default ProductGrid;
