"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { api, type HeaderData, type AppInfo } from "../lib/api";

export default function Header() {
  const [headerData, setHeaderData] = useState<HeaderData | null>(null);
  const [appInfo, setAppInfo] = useState<AppInfo | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const fetchData = async () => {
      const [header, app] = await Promise.all([
        api.getHeaderData(),
        api.getAppInfo(),
      ]);
      setHeaderData(header);
      setAppInfo(app);
    };
    fetchData();
  }, []);
  // Close mobile menu when route changes
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close mobile menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("keydown", handleEscape);
      // Prevent body scroll when menu is open
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  // Navigation items with proper routing
  const navigationItems = [
    { id: "home", label: "خانه", link: "/", hasDropdown: false },
    {
      id: "coffee-types",
      label: "انواع قهوه",
      link: "/store?category=coffee",
      hasDropdown: true,
    },
    {
      id: "espresso-makers",
      label: "اسپرسو ساز",
      link: "/store?category=machines",
      hasDropdown: true,
    },
    {
      id: "coffee-grinders",
      label: "آسیاب قهوه",
      link: "/store?category=grinders",
      hasDropdown: true,
    },
    {
      id: "brewing-tools",
      label: "ابزار دم آوری",
      link: "/store?category=tools",
      hasDropdown: true,
    },
    {
      id: "cold-drinks",
      label: "بار سرد",
      link: "/store?category=cold",
      hasDropdown: false,
    },
    { id: "blog", label: "بلاگ", link: "/blog", hasDropdown: false },
    { id: "about", label: "درباره ما", link: "/about", hasDropdown: false },
    {
      id: "contact",
      label: "تماس با ما",
      link: "/contact",
      hasDropdown: false,
    },
  ];

  const isActiveLink = (link: string) => {
    if (link === "/" && pathname === "/") return true;
    if (link !== "/" && pathname.startsWith(link.split("?")[0])) return true;
    return false;
  };

  if (!headerData || !appInfo)
    return (
      <header className="w-full bg-black/20 backdrop-blur-sm fixed top-0 left-0 z-50 h-24">
        <div className="flex items-center justify-center h-full">
          <div className="text-white">در حال بارگذاری...</div>
        </div>
      </header>
    );
  return (
    <header
      className={`w-full bg-black/20 backdrop-blur-sm fixed top-0 right-0 z-[99] transition-all duration-300 ${
        isMobileMenuOpen ? "h-[500px] lg:h-auto" : "h-auto"
      }`}
    >
      {/* Top Row - Desktop */}
      <div className="hidden lg:flex flex-row-reverse items-center justify-between px-10 pt-4 pb-1">
        {/* Left: Login & Icons */}
        <div className="flex flex-row-reverse items-center gap-6">
          <Link
            href="/auth"
            className="text-white text-base font-yekan font-bold hover:text-[#009245] transition"
          >
            {headerData.auth.text}
          </Link>
          <div className="flex flex-row-reverse gap-4 items-center pl-6">
            {/* Cart */}
            <button className="relative hover:scale-110 transition-transform">
              <Image
                src="/icon/shopping-cart.svg"
                alt="سبد خرید"
                width={22}
                height={22}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FF6A] rounded-full border-2" />
            </button>
            {/* Wishlist */}
            <button className="relative hover:scale-110 transition-transform">
              <Image
                src="/icon/heart.svg"
                alt="علاقه‌مندی‌ها"
                width={22}
                height={22}
              />
              <span className="absolute -top-1 -right-1 w-2 h-2 bg-[#00FF6A] rounded-full border-2" />
            </button>
            {/* Search */}
            <button className="hover:scale-110 transition-transform">
              <Image
                src="/icon/search.svg"
                alt="جستجو"
                width={22}
                height={22}
              />
            </button>
          </div>
        </div>

        {/* Center: Logo */}
        <div className="flex flex-col items-center">
          <Link href="/" className="hover:scale-105 transition-transform">
            <Image
              src={appInfo.logo}
              alt={appInfo.name}
              width={56}
              height={50}
            />
          </Link>
        </div>

        {/* Right: Order & Phone */}
        <div className="flex flex-row-reverse items-center gap-6">
          <Link
            href="/orders"
            className="flex flex-row-reverse items-center gap-2 text-white text-base font-yekan hover:text-[#009245] transition"
          >
            <Image
              src={headerData.tracking.icon}
              alt="پیگیری سفارش"
              width={22}
              height={22}
            />
            <span>{headerData.tracking.text}</span>
          </Link>
          <a
            href={`tel:${headerData.contact.phone}`}
            className="flex flex-row-reverse items-center gap-2 text-white text-base font-yekan hover:text-[#009245] transition"
          >
            <Image
              src={headerData.contact.icon}
              alt="تماس"
              width={22}
              height={22}
            />
            <span>{headerData.contact.phone}</span>
          </a>{" "}
        </div>
      </div>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between px-4 sm:px-6 py-3 relative z-[99] bg-black/20 backdrop-blur-sm">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors touch-manipulation"
          aria-label="منوی موبایل"
        >
          <div className="w-6 h-6 flex flex-col justify-center">
            <span
              className={`block h-0.5 w-6 bg-white transition-transform duration-300 ${
                isMobileMenuOpen ? "rotate-45 translate-y-1" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white mt-1 transition-opacity duration-300 ${
                isMobileMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block h-0.5 w-6 bg-white mt-1 transition-transform duration-300 ${
                isMobileMenuOpen ? "-rotate-45 -translate-y-1" : ""
              }`}
            ></span>
          </div>
        </button>
        <Link
          href="/"
          className="hover:scale-105 transition-transform touch-manipulation"
        >
          <Image
            src={appInfo.logo}
            alt={appInfo.name}
            width={40}
            height={36}
            className="sm:w-12 sm:h-11"
          />
        </Link>
        <div className="flex items-center gap-2 sm:gap-3">
          <button className="relative hover:scale-110 transition-transform p-2 touch-manipulation">
            <Image
              src="/icon/shopping-cart.svg"
              alt="سبد خرید"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
            <span className="absolute top-1 right-1 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-[#00FF6A] rounded-full"></span>
          </button>
          <button className="hover:scale-110 transition-transform p-2 touch-manipulation">
            <Image
              src="/icon/search.svg"
              alt="جستجو"
              width={20}
              height={20}
              className="sm:w-6 sm:h-6"
            />
          </button>
        </div>
      </div>
      {/* Desktop Navigation */}
      <nav className="hidden lg:flex w-full flex-row items-center justify-center gap-2 px-10 pb-2">
        {navigationItems.map((item) => (
          <Link
            key={item.id}
            href={item.link}
            className={`text-base font-yekan px-3 py-1 transition flex items-center gap-1 ${
              isActiveLink(item.link)
                ? "text-[#009245] font-bold"
                : "text-white hover:text-[#009245]"
            }`}
          >
            {item.label}
            {item.hasDropdown && <span className="text-xs">▼</span>}
          </Link>
        ))}
      </nav>{" "}
      {/* Mobile Navigation Menu */}
      {isMobileMenuOpen && (
        <div
          className="lg:hidden bg-black/95 backdrop-blur-sm animate-in slide-in-from-top-2 fade-in duration-300 flex-1 min-h-[400px]"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {" "}
          <nav
            className="flex flex-col p-4 sm:p-6 space-y-2 sm:space-y-4 h-full overflow-y-auto max-h-[400px]"
            onClick={(e) => e.stopPropagation()}
          >
            {navigationItems.map((item) => (
              <Link
                key={item.id}
                href={item.link}
                className={`text-base sm:text-lg font-yekan py-3 sm:py-4 px-4 sm:px-6 rounded-lg transition flex items-center justify-between touch-manipulation border border-white/20 ${
                  isActiveLink(item.link)
                    ? "text-[#009245] bg-[#009245]/20 font-bold"
                    : "text-white hover:text-[#009245] hover:bg-white/10 active:bg-white/20"
                }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <span>{item.label}</span>
                {item.hasDropdown && <span className="text-sm">◀</span>}
              </Link>
            ))}

            <div className="border-t border-white/30 pt-4 sm:pt-6 mt-4 sm:mt-6">
              <Link
                href="/auth"
                className="text-white text-base sm:text-lg font-yekan py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-white/10 active:bg-white/20 transition flex items-center touch-manipulation border border-white/20"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {headerData.auth.text}
              </Link>
              <a
                href={`tel:${headerData.contact.phone}`}
                className="text-white text-base sm:text-lg font-yekan py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-white/10 active:bg-white/20 transition flex items-center touch-manipulation border border-white/20 mt-2"
              >
                <Image
                  src={headerData.contact.icon}
                  alt="تماس"
                  width={20}
                  height={20}
                  className="ml-3 sm:w-6 sm:h-6"
                />
                {headerData.contact.phone}
              </a>
              <Link
                href="/orders"
                className="text-white text-base sm:text-lg font-yekan py-3 sm:py-4 px-4 sm:px-6 rounded-lg hover:bg-white/10 active:bg-white/20 transition flex items-center touch-manipulation border border-white/20 mt-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Image
                  src={headerData.tracking.icon}
                  alt="پیگیری سفارش"
                  width={20}
                  height={20}
                  className="ml-3 sm:w-6 sm:h-6"
                />
                {headerData.tracking.text}
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
