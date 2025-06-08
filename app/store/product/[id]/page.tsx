"use client";

import React, { useState } from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import Header from '../../../components/Header';
import Footer from '../../../components/Footer';
import ProductCard from '../../../components/ProductCard';

export default function ProductSinglePage() {
  const params = useParams();
  const productId = params.id as string;
    const [selectedWeight, setSelectedWeight] = useState('250');
  const [quantity, setQuantity] = useState(1);
  const [selectedImage, setSelectedImage] = useState(0);
  const [showWishlist, setShowWishlist] = useState(false);
  const [activeTab, setActiveTab] = useState('description');  // Product data matching the image exactly
  const product = {
    id: productId,
    title: 'دانه قهوه عربیکا اتیوپی یرگاچف',
    image: '/store-assets/coffee-bag-2.png',
    images: [
      '/store-assets/coffee-bag-2.png',
      '/store-assets/coffee-bag-4.png',
      '/store-assets/coffee-bag-3.png'
    ],
    price: '۲۱۲,۰۰۰',
    originalPrice: '۲۵۰,۰۰۰',
    discount: '۱۵',
    inStock: true,
    rating: 4.8,
    reviewCount: 127,
    weights: [
      { value: '250', label: '۲۵۰ گرم', price: '۲۱۲,۰۰۰' },
      { value: '500', label: '۵۰۰ گرم', price: '۴۰۰,۰۰۰' },
      { value: '1000', label: '۱ کیلوگرم', price: '۷۵۰,۰۰۰' }
    ],
    description: `در مجارتب انواع قهوه‌های مختلف با کیفیت بالا تولید می‌شود. برداران قهوه در این کشور معمولا به صورت مرغوب است. از فرایند مرغوب، دانه‌ها شسته می‌شوند. 
بعضی از بهترین قهوه‌های مرکپیک در Coatepec و Chiapas تولید می‌شوند. دانه‌های قهوه در مزارع ارگانیک، درجه بالا و به رشد تولید ناچیز کمک می‌کنند. صنعت درک و ویژه به رشد تولید ناچیز با قهوه ها، کیفیت در مرکیک، دانه‌هایی بیش از مصرف یک کالای تجاری تولید می‌کند.`,
    specifications: {
      region: 'یرگاچف، اتیوپی',
      altitude: '۱۷۰۰-۲۲۰۰ متر',
      processing: 'شسته شده (Washed)',
      roastLevel: 'مدیوم',
      acidity: 'متوسط رو به بالا',
      body: 'متوسط',
      flavor: 'مرکباتی، گل، توت، عسل',
      aroma: 'گلی، میوه‌ای',
      roastDate: '۱۴۰۴/۰۲/۲۰'
    },
    brewing: {
      espresso: {
        grind: 'ریز',
        ratio: '۱:۲',
        temperature: '۹۰-۹۵ درجه',
        time: '۲۵-۳۰ ثانیه'
      },
      frenchPress: {
        grind: 'درشت',
        ratio: '۱:۱۶',
        temperature: '۹۰-۹۶ درجه',
        time: '۴-۶ دقیقه'
      }
    },
    reviews: [
      {
        id: 1,
        name: 'مهدی رضایی',
        initial: 'م',
        rating: 5,
        date: '۲ هفته پیش',
        verified: true,
        comment: 'طعم این قهوه فوق العاده است. من از طریق اسپرسو ساز و هم با فرنچ پرس امتحانش کردم و در هر دو روش طعم عالی داشت. بسته‌بندی مناسبی داره و تازگی قهوه کاملا حفظ شده بود.'
      },
      {
        id: 2,
        name: 'سارا محمدی',
        initial: 'س',
        rating: 4,
        date: '۱ ماه پیش',
        verified: true,
        comment: 'طعم مرکباتی و گلی این قهوه واقعاً خاصه. کمی اسیدیته بالا داره که اگه دوست نداشته باشید ممکنه اذیت کنه. با موکاپات درستش کردم و خیلی خوشمزه بود.'
      }
    ]
  };

  const handleAddToCart = () => {
    alert(`${quantity} عدد ${product.title} به سبد خرید اضافه شد`);
  };

  const handleQuantityChange = (amount: number) => {
    setQuantity(Math.max(1, quantity + amount));
  };

  return (
    <main className="min-h-screen font-yekan">
        <div className='bg-[#151515] h-28 w-full'>
            <Header />
        </div>        {/* Breadcrumb */}
      {/* Product Section - Matching the image exactly */}
      <section className="bg-[#151515] py-10">
        <div className="container mx-auto px-6">
          {/* Product Title - Mobile Only */}
          <h1 className="text-2xl font-bold text-white mb-6 lg:hidden font-morabba">
            {product.title}
          </h1>

          <div className="flex flex-col lg:flex-row gap-8">
            {/* Left Side - Product Images */}
            <div className="w-full lg:w-1/2">
              <div className="flex flex-col-reverse md:flex-row gap-4">                
              {/* Main Product Image */}                
              <div className="relative bg-[#1a1a1a] rounded-2xl p-4 shadow-sm flex items-center justify-center h-[400px]">
                  <Image
                    src={product.images[selectedImage]}
                    alt={product.title}
                    width={350}
                    height={350}
                    className="object-contain"
                    priority
                  />
                </div>
                
                {/* Thumbnails - Right Side */}
                <div className="flex flex-row md:flex-col gap-3 mb-4 md:mb-0">
                  {product.images.map((img, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`w-20 h-20 rounded-xl flex items-center justify-center ${
                        selectedImage === index 
                          ? 'ring-2 ring-[#00C16A]' 
                          : ''
                      } bg-[#1a1a1a] shadow-sm`}
                    >
                      <Image
                        src={img}
                        alt={`تصویر ${index + 1}`}
                        width={60}
                        height={60}
                        className="object-contain"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Right Side - Product Info */}
            <div className="w-full lg:w-1/2">
            <section className="bg-[#151515] py-4">
              <div className="container">
                <nav className="text-sm text-gray-400 font-yekan flex items-center">
                  <a href="/" className="hover:text-[#00C16A] transition-colors">صفحه اصلی</a>
                  <span className="mx-2">/</span>
                  <a href="/store" className="hover:text-[#00C16A] transition-colors">انواع قهوه</a>
                  <span className="mx-2">/</span>
                  <a href="/store?category=coffee" className="hover:text-[#00C16A] transition-colors">عربیکا</a>
                  <span className="mx-2">/</span>
                  <span className="text-white">دانه قهوه عربیکا اتیوپی یرگاچف</span>
                </nav>
              </div>
            </section>      
              {/* Product Title - Desktop */}              
              <h1 className="hidden lg:block text-3xl font-bold text-white mb-4 font-morabba">
                {product.title}
              </h1>
              
              {/* Price */}
              <div className="mb-6">
                <div className="flex items-center gap-3">
                  <span className="text-xl text-[#00C16A] font-bold">
                    {product.price} تومان
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-gray-500 line-through">
                      {product.originalPrice} تومان
                    </span>
                  )}
                </div>
              </div>
                {/* Product Description */}
              <div className="mb-6">
                <p className="text-gray-400 text-sm leading-relaxed">
                  {product.description}
                </p>
              </div>
                {/* Weight Selection */}
              <div className="mb-6">                
              <h3 className="text-white font-bold mb-3">انتخاب وزن</h3>
                <div className="relative">
                  <select 
                    value={selectedWeight}
                    onChange={(e) => setSelectedWeight(e.target.value)}
                    className="w-full border-b-2 px-4 py-3 text-white appearance-none cursor-pointer bg-[#151515]"
                  >
                    {product.weights.map((weight) => (
                      <option key={weight.value} value={weight.value}>
                        {weight.label}
                      </option>
                    ))}
                  </select>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
                {/* Grind Option (hidden in image but included for completeness) */}
              <div className="mb-6">                
              <h3 className="text-white font-bold mb-3">درجه آسیاب ( نوع دستگاه )</h3>
                <div className="relative">
                  <select 
                    className="w-full border-b-2 px-4 py-3 text-white appearance-none cursor-pointer bg-[#151515]"
                  >
                    <option>بدون آسیاب (دانه)</option>
                    <option>اسپرسوساز</option>
                    <option>موکاپات</option>
                    <option>قهوه ساز</option>
                    <option>فرنچ پرس</option>
                  </select>
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>
              </div>
              
              {/* Quantity and Add to Cart */}
              <div className="flex items-center gap-4">                
                <div className="flex items-center border border-gray-600 rounded-3xl">
                  <button
                    onClick={() => handleQuantityChange(-1)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#2a2a2a] hover:rounded-3xl border-l-2"
                  >
                    -
                  </button>
                  <span className="w-10 text-center text-white">{quantity}</span>
                  <button
                    onClick={() => handleQuantityChange(1)}
                    className="w-10 h-10 flex items-center justify-center text-white hover:bg-[#2a2a2a] hover:rounded-3xl border-r-2"
                  >
                    +
                  </button>
                </div>
                
                <button
                  onClick={handleAddToCart}
                  className="flex-1 bg-[#00C16A] hover:bg-green-700 text-black font-bold py-3 px-6 rounded-lg transition-all"
                >
                  افزودن به سبد خرید
                </button>
                
              </div>                {/* Wishlist Button */}
                <div className="flex items-center gap-4 mt-6 flex-row">
                    <p className="text-base text-gray-400 ">افزودن به علاقه‌مندی‌ها</p>
                    <button 
                    onClick={() => setShowWishlist(!showWishlist)}
                    className={`w-12 h-12 rounded-lg flex items-center justify-center transition-colors ${
                        showWishlist ? ' text-red-500' : ' text-gray-400'
                    }`}
                    title="افزودن به علاقه‌مندی‌ها"
                    >
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
                    </svg>
                    </button>
                </div>
            </div>
          </div>        </div>      
      </section>
      
      {/* Product Detail Tabs */}
      <section className="py-12 bg-[#151515] border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            {/* Tab Navigation */}
            <div className="flex border-b border-gray-700 mb-8">
              <button
                onClick={() => setActiveTab('description')}
                className={`px-6 py-3 font-yekan font-bold text-base transition-colors ${
                  activeTab === 'description'
                    ? 'text-[#00C16A] border-b-2 border-[#00C16A]'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                توضیحات
              </button>
              <button
                onClick={() => setActiveTab('specifications')}
                className={`px-6 py-3 font-yekan font-bold text-base transition-colors ${
                  activeTab === 'specifications'
                    ? 'text-[#00C16A] border-b-2 border-[#00C16A]'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                مشخصات
              </button>
              <button
                onClick={() => setActiveTab('reviews')}
                className={`px-6 py-3 font-yekan font-bold text-base transition-colors ${
                  activeTab === 'reviews'
                    ? 'text-[#00C16A] border-b-2 border-[#00C16A]'
                    : 'text-gray-400 hover:text-gray-300'
                }`}
              >
                نظرات ({product.reviewCount})
              </button>
            </div>
            
            {/* Tab Content */}
            <div className="text-gray-300 font-yekan">
              {/* Description Tab */}
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <p className="leading-relaxed text-justify">
                    {product.description}
                  </p>
                    <div className="mt-6">
                    <h3 className="text-xl text-white font-bold mb-4">نحوه دم کردن</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                      <div className="bg-[#232323] p-6 rounded-lg">
                        <h4 className="flex items-center text-lg text-white font-bold mb-3">
                          <span className="text-[#00C16A] ml-2">☕</span>
                          اسپرسو
                        </h4>
                        <ul className="space-y-2 list-disc list-inside">
                          <li>درجه آسیاب: {product.brewing.espresso.grind}</li>
                          <li>نسبت قهوه به آب: {product.brewing.espresso.ratio}</li>
                          <li>دما: {product.brewing.espresso.temperature}</li>
                          <li>زمان دم: {product.brewing.espresso.time}</li>
                        </ul>
                      </div>
                      <div className="bg-[#232323] p-6 rounded-lg">
                        <h4 className="flex items-center text-lg text-white font-bold mb-3">
                          <span className="text-[#00C16A] ml-2">☕</span>
                          فرنچ پرس
                        </h4>
                        <ul className="space-y-2 list-disc list-inside">
                          <li>درجه آسیاب: {product.brewing.frenchPress.grind}</li>
                          <li>نسبت قهوه به آب: {product.brewing.frenchPress.ratio}</li>
                          <li>دما: {product.brewing.frenchPress.temperature}</li>
                          <li>زمان دم: {product.brewing.frenchPress.time}</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              )}
                {/* Specifications Tab */}
              {activeTab === 'specifications' && (
                <div className="bg-[#232323] rounded-lg p-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 text-sm">منطقه:</h4>
                        <p className="text-white">{product.specifications.region}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">ارتفاع:</h4>
                        <p className="text-white">{product.specifications.altitude}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">فرآوری:</h4>
                        <p className="text-white">{product.specifications.processing}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 text-sm">درجه برشت:</h4>
                        <p className="text-white">{product.specifications.roastLevel}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">اسیدیته:</h4>
                        <p className="text-white">{product.specifications.acidity}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">بدنه:</h4>
                        <p className="text-white">{product.specifications.body}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-4">
                      <div>
                        <h4 className="text-gray-400 text-sm">طعم:</h4>
                        <p className="text-white">{product.specifications.flavor}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">عطر:</h4>
                        <p className="text-white">{product.specifications.aroma}</p>
                      </div>
                      <div>
                        <h4 className="text-gray-400 text-sm">تاریخ برشت:</h4>
                        <p className="text-white">{product.specifications.roastDate}</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
              
              {/* Reviews Tab */}
              {activeTab === 'reviews' && (
                <div className="space-y-6">
                  <div className="flex items-center mb-6">
                    <div className="flex items-center gap-1">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <span key={star} className={`text-2xl ${star <= Math.floor(product.rating) ? 'text-yellow-500' : 'text-gray-600'}`}>
                          ★
                        </span>
                      ))}
                    </div>
                    <div className="mr-4">
                      <p className="text-lg text-white font-bold">{product.rating} از ۵</p>
                      <p className="text-sm text-gray-400">{product.reviewCount} نظر ثبت شده</p>
                    </div>
                  </div>
                    {/* Review Cards */}
                  <div className="space-y-6">
                    {product.reviews.map((review) => (
                      <div key={review.id} className="bg-[#232323] rounded-lg p-6">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center text-white font-bold">
                              {review.initial}
                            </div>
                            <div>
                              <p className="font-bold text-white">{review.name}</p>
                              <div className="flex items-center mt-1">
                                {[1, 2, 3, 4, 5].map((star) => (
                                  <span key={star} className={`text-sm ${star <= review.rating ? 'text-yellow-500' : 'text-gray-600'}`}>
                                    ★
                                  </span>
                                ))}
                                <span className="text-gray-400 text-xs mr-2">{review.date}</span>
                              </div>
                            </div>
                          </div>
                          {review.verified && (
                            <div className="bg-green-900 text-green-400 text-xs px-3 py-1 rounded-full">
                              خرید تایید شده
                            </div>
                          )}
                        </div>
                        <p className="mt-4 text-gray-300">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
      
        {/* Related Products Section */}
      <section className="py-16 bg-[#151515]">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">
            محصولات مرتبطی که شاید دوست داشته باشی
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <ProductCard 
              id="1" 
              image="/store-assets/coffee-bag-2.png" 
              title="قهوه ترک مدیوم" 
              price="۱۸۵,۰۰۰ تومان" 
            />
            
            <ProductCard 
              id="2" 
              image="/store-assets/coffee-bag-4.png" 
              title="دانه قهوه ترکیب لاتین کرفتین" 
              price="۱۸۵,۰۰۰ تومان" 
            />
            
            <ProductCard 
              id="3" 
              image="/store-assets/coffee-bag-1.png" 
              title="دانه قهوه عربیکا برزیل بوم" 
              price="۱۳۳,۰۰۰ تومان" 
            />
            
            <ProductCard 
              id="4" 
              image="/store-assets/coffee-bag-3.png" 
              title="دانه قهوه عربیکا اتیوپی یرگاچف" 
              price="۲۱۲,۰۰۰ تومان" 
            />
          </div>
        </div>
      </section>
      
      <Footer />
    </main>
  );
}
