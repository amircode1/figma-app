import React from "react";
import ProductCard from "../../components/ProductCard";
import { type Product } from "../../lib/api";

interface ProductGridProps {
  products: Product[];
  count?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, count = 12 }) => (
  <div className="w-full max-w-7xl mx-auto grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 md:gap-6 py-6 sm:py-8 lg:py-10 px-4 sm:px-6 lg:px-8">
    {products.slice(0, count).map((product, idx) => (
      <ProductCard
        key={idx}
        id={product.id}
        image={product.image}
        title={product.title}
        price={String(product.price)}
      />
    ))}
  </div>
);

export default ProductGrid;
