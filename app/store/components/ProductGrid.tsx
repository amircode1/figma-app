import React from "react";
import ProductCard from "../../components/ProductCard";

interface Product {
  image: string;
  title: string;
  price: string;
}

interface ProductGridProps {
  products: Product[];
  count?: number;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, count = 12 }) => (
  <div className="w-full max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 py-10 px-2 md:px-0">
    {products.slice(0, count).map((product, idx) => (
      <ProductCard key={idx} image={product.image} title={product.title} price={product.price} />
    ))}
  </div>
);

export default ProductGrid;
