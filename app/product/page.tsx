// Single Product Page - Responsive, accessible, and ready for Figma design integration
"use client";

import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedWeight, setSelectedWeight] = useState('250');
  const [activeTab, setActiveTab] = useState('description');

  // Placeholder product data (replace with real data or props as needed)
  const product = {
    name: 'دانه قهوه عربیکا اتیوپی یرگاچف',
    price: '۲۱۲,۰۰۰',
    originalPrice: '۲۵۰,۰۰۰',
    discount: '۱۵',
    img: '/store-assets/coffee-bag-2.png',
    rating: 4.8,
    reviewCount: 127,
    inStock: true,
    description: `این قهوه از بهترین مزارع اتیوپی برداشت شده و دارای طعم گلی و مرکباتی است. مناسب برای اسپرسو و قهوه دمی. دانه‌های این قهوه با دقت فراوان برشته شده‌اند تا بهترین عطر و طعم را ارائه دهند.

این قهوه دارای نت‌های طعمی پیچیده‌ای است که شامل طعم‌های گلی، مرکباتی و میوه‌ای می‌شود. اسیدیته متعادل و بادی متوسط آن، این قهوه را به گزینه‌ای عالی برای روش‌های مختلف دم‌آوری تبدیل کرده است.`,
    features: [
      'وزن: ۲۵۰ گرم',
      'نوع: عربیکا',
      'مبدا: اتیوپی یرگاچف',
      'درجه برشت: مدیوم',
      'اسیدیته: متوسط تا بالا',
      'بادی: متوسط',
      'روش پردازش: شسته شده'
    ],
    weights: [
      { value: '250', label: '۲۵۰ گرم', price: '۲۱۲,۰۰۰' },
      { value: '500', label: '۵۰۰ گرم', price: '۴۰۰,۰۰۰' },
      { value: '1000', label: '۱ کیلوگرم', price: '۷۵۰,۰۰۰' }
    ]
  };

  const relatedProducts = [
    {
      name: 'قهوه ترک مدیوم',
      price: '۹۸,۰۰۰ تومان',
      img: '/store-assets/coffee-bag-1.png',
    },
    {
      name: 'دانه قهوه عربیکا برزیل',
      price: '۱۳۳,۰۰۰ تومان',
      img: '/store-assets/coffee-bag-3.png',
    },
    {
      name: 'قهوه ترکیبی پرکافئین',
      price: '۸۸,۰۰۰ تومان',
      img: '/store-assets/coffee-bag-4.png',
    }
  ];

  const handleAddToCart = () => {
    alert(`${product.name} - ${quantity} عدد به سبد خرید اضافه شد`);
  };

  return (
    <main className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      
      {/* Breadcrumb */}
      <section className="bg-[#1a1a1a] py-4">
        <div className="container mx-auto px-6">
          <nav className="text-sm text-gray-400">
            <span>صفحه اصلی</span>
            <span className="mx-2">/</span>
            <span>انواع قهوه</span>
            <span className="mx-2">/</span>
            <span className="text-[#009245]">{product.name}</span>
          </nav>
        </div>
      </section>

      {/* Product Section */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            
            {/* Product Images */}
            <div className="space-y-4">
              <div className="relative bg-[#2a2a2a] rounded-lg p-8 h-96 flex items-center justify-center">
                <div className="text-8xl">☕</div>
                {product.discount && (
                  <span className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                    {product.discount}% تخفیف
                  </span>
                )}
              </div>
              
              {/* Thumbnail Images */}
              <div className="flex gap-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-20 h-20 bg-[#2a2a2a] rounded-lg flex items-center justify-center cursor-pointer hover:bg-[#333] transition-colors">
                    <span className="text-2xl">☕</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Product Info */}
            <div className="space-y-6">
              <div>
                <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 font-morabba">
                  {product.name}
                </h1>
                
                {/* Rating */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <span key={star} className={`text-lg ${star <= Math.floor(product.rating) ? 'text-yellow-400' : 'text-gray-600'}`}>
                        ⭐
                      </span>
                    ))}
                    <span className="text-white mr-2">{product.rating}</span>
                  </div>
                  <span className="text-gray-400">({product.reviewCount} نظر)</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-3xl font-bold text-[#009245] font-morabba">
                    {selectedWeight === '250' ? product.price : 
                     selectedWeight === '500' ? '۴۰۰,۰۰۰' : '۷۵۰,۰۰۰'} تومان
                  </span>
                  {product.originalPrice && (
                    <span className="text-xl text-gray-500 line-through">
                      {product.originalPrice} تومان
                    </span>
                  )}
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2 mb-6">
                  <span className={`w-3 h-3 rounded-full ${product.inStock ? 'bg-green-500' : 'bg-red-500'}`}></span>
                  <span className={product.inStock ? 'text-green-400' : 'text-red-400'}>
                    {product.inStock ? 'موجود در انبار' : 'ناموجود'}
                  </span>
                </div>
              </div>

              {/* Weight Selection */}
              <div>
                <h3 className="text-white font-bold mb-3">انتخاب وزن:</h3>
                <div className="flex gap-3">
                  {product.weights.map((weight) => (
                    <button
                      key={weight.value}
                      onClick={() => setSelectedWeight(weight.value)}
                      className={`px-4 py-2 rounded-lg border transition-all duration-300 ${
                        selectedWeight === weight.value
                          ? 'border-[#009245] bg-[#009245] text-white'
                          : 'border-gray-600 bg-[#2a2a2a] text-gray-300 hover:border-[#009245]'
                      }`}
                    >
                      {weight.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Quantity */}
              <div>
                <h3 className="text-white font-bold mb-3">تعداد:</h3>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-10 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#333] transition-colors"
                  >
                    -
                  </button>
                  <span className="text-white font-bold text-lg min-w-[3rem] text-center">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-10 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#333] transition-colors"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Add to Cart */}
              <div className="flex gap-4">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock}
                  className="flex-1 bg-[#009245] hover:bg-[#007a3a] disabled:bg-gray-600 disabled:cursor-not-allowed text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 transform hover:scale-105"
                >
                  افزودن به سبد خرید
                </button>
                <button className="w-12 h-12 bg-[#2a2a2a] text-white rounded-lg hover:bg-[#333] transition-colors flex items-center justify-center">
                  ❤️
                </button>
              </div>

              {/* Features */}
              <div className="bg-[#2a2a2a] rounded-lg p-6">
                <h3 className="text-white font-bold mb-4">ویژگی‌های محصول:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2 text-gray-300">
                      <span className="text-[#009245]">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Details Tabs */}
      <section className="bg-[#151515] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-600 mb-8">
              {[
                { id: 'description', label: 'توضیحات' },
                { id: 'specifications', label: 'مشخصات' },
                { id: 'reviews', label: 'نظرات' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-6 py-3 font-bold transition-colors ${
                    activeTab === tab.id
                      ? 'text-[#009245] border-b-2 border-[#009245]'
                      : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="text-gray-300">
              {activeTab === 'description' && (
                <div className="space-y-4">
                  <h3 className="text-xl font-bold text-white mb-4">درباره این محصول</h3>
                  <p className="leading-relaxed">{product.description}</p>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-[#2a2a2a] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">مشخصات فنی</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>نوع دانه:</span>
                        <span className="text-white">عربیکا</span>
                      </div>
                      <div className="flex justify-between">
                        <span>منطقه:</span>
                        <span className="text-white">یرگاچف، اتیوپی</span>
                      </div>
                      <div className="flex justify-between">
                        <span>ارتفاع کشت:</span>
                        <span className="text-white">۱۷۰۰-۲۲۰۰ متر</span>
                      </div>
                      <div className="flex justify-between">
                        <span>روش پردازش:</span>
                        <span className="text-white">شسته شده</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-[#2a2a2a] rounded-lg p-6">
                    <h3 className="text-xl font-bold text-white mb-4">پروفایل طعم</h3>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span>اسیدیته:</span>
                        <span className="text-white">متوسط تا بالا</span>
                      </div>
                      <div className="flex justify-between">
                        <span>بادی:</span>
                        <span className="text-white">متوسط</span>
                      </div>
                      <div className="flex justify-between">
                        <span>طعم:</span>
                        <span className="text-white">گلی، مرکباتی</span>
                      </div>
                      <div className="flex justify-between">
                        <span>عطر:</span>
                        <span className="text-white">گلی، میوه‌ای</span>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="text-xl font-bold text-white">نظرات مشتریان</h3>
                    <button className="bg-[#009245] hover:bg-[#007a3a] text-white px-4 py-2 rounded-lg transition-colors">
                      ثبت نظر
                    </button>
                  </div>
                  
                  {/* Sample Reviews */}
                  {[
                    { name: 'احمد رضایی', rating: 5, comment: 'قهوه فوق‌العاده‌ای با طعم بی‌نظیر', date: '۱۴۰۳/۰۳/۱۰' },
                    { name: 'فاطمه احمدی', rating: 4, comment: 'کیفیت عالی و ارسال سریع', date: '۱۴۰۳/۰۳/۰۸' }
                  ].map((review, index) => (
                    <div key={index} className="bg-[#2a2a2a] rounded-lg p-6">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 bg-[#009245] rounded-full flex items-center justify-center">
                            <span className="text-white text-sm">👤</span>
                          </div>
                          <span className="text-white font-bold">{review.name}</span>
                        </div>
                        <span className="text-gray-400 text-sm">{review.date}</span>
                      </div>
                      
                      <div className="flex items-center gap-2 mb-3">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span key={star} className={`${star <= review.rating ? 'text-yellow-400' : 'text-gray-600'}`}>
                            ⭐
                          </span>
                        ))}
                      </div>
                      
                      <p className="text-gray-300">{review.comment}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      <section className="bg-[#1a1a1a] py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-8 font-morabba text-center">
              محصولات مرتبط
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProducts.map((relatedProduct, index) => (
                <div key={index} className="bg-[#2a2a2a] rounded-lg p-6 hover:bg-[#333] transition-all duration-300 transform hover:scale-105 cursor-pointer">
                  <div className="h-48 bg-gray-700 rounded-lg mb-4 flex items-center justify-center">
                    <span className="text-4xl">☕</span>
                  </div>
                  <h3 className="text-white font-bold mb-2 font-yekan">{relatedProduct.name}</h3>
                  <p className="text-[#009245] font-bold">{relatedProduct.price}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
