import React from 'react';
import Image from 'next/image';

export default function Header() {
  return (
    <header className="w-full bg-transparent absolute top-0 left-0 z-50">
      {/* Top Row */}
      <div className="flex flex-row-reverse items-center justify-between px-10 pt-4 pb-1">
        {/* Left: Login & Icons */}
        <div className="flex flex-row-reverse items-center gap-6">
          <a href="#" className="text-white text-base font-yekan font-bold hover:text-[#009245] transition">ورود / ثبت نام</a>
          <div className="flex flex-row-reverse gap-4 items-center pl-6">
            {/* Cart */}
            <div className="relative">
              <Image src="/icon/shopping-cart.svg" alt="cart" width={22} height={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FF6A] rounded-full border-2" />
            </div>
            {/* Heart */}
            <div className="relative">
              <Image src="/icon/heart.svg" alt="heart" width={22} height={22} />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FF6A] rounded-full border-2" />
            </div>
            {/* Search */}
            <div>
              <Image src="/icon/search.svg" alt="search" width={22} height={22} />
            </div>
          </div>
        </div>
        {/* Center: Logo */}
        <div className="flex flex-col items-center">
          <Image src="/store-assets/header-logo.png" alt="Logo" width={56} height={50} />
        </div>
        {/* Right: Order & Phone */}
        <div className="flex flex-row-reverse items-center gap-6">
          <div className="flex flex-row-reverse items-center gap-2 text-white text-base font-yekan">
            <Image src="/icon/truck.svg" alt="truck" width={22} height={22} />
            <span>پیگیری سفارش</span>
          </div>
          <div className="flex flex-row-reverse items-center gap-2 text-white text-base font-yekan">
            <Image src="/icon/call.svg" alt="call" width={22} height={22} />
            <span>0935 4848 349</span>
          </div>
        </div>
      </div>
      {/* Bottom Row: Navigation */}
      <nav className="w-full flex flex-row items-center justify-center gap-2 px-10 pb-2">
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">انواع قهوه <span className="text-xs">▼</span></a>
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">اسپرسو ساز <span className="text-xs">▼</span></a>
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">آسیاب قهوه <span className="text-xs">▼</span></a>
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">ابزار دم آوری <span className="text-xs">▼</span></a>
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">پودرهای فوری <span className="text-xs">▼</span></a>
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">تجهیزات قهوه <span className="text-xs">▼</span></a>
        <a href="#" className="text-white text-base font-yekan px-3 py-1 hover:text-[#009245] transition flex items-center gap-1">بار سرد</a>
      </nav>
    </header>
  );
}
