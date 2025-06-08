"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { getFooterData, type FooterData } from "../lib/api";

export default function Footer() {
  const [footerData, setFooterData] = useState<FooterData | null>(null);

  useEffect(() => {
    const loadFooterData = async () => {
      const data = await getFooterData();
      setFooterData(data);
    };
    loadFooterData();
  }, []);

  if (!footerData) {
    return (
      <footer className="bg-[#151515] text-[#fff] pt-12 pb-4">
        <div className="container mx-auto px-6">
          <div className="text-center py-20">
            <div className="text-white">Loading...</div>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-[#151515] text-[#fff] pt-8 sm:pt-12 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-8 sm:mb-10">
          {/* About/Brand */}
          <div className="lg:col-span-1 flex flex-col gap-3 sm:gap-4 text-center sm:text-right">
            <div className="flex items-center gap-2 mb-2 justify-center sm:justify-start">
              <Image
                src={footerData.brand.logo}
                alt="Logo"
                width={45}
                height={40}
                className="sm:w-[56px] sm:h-[50px]"
              />
              <span className="text-[#00C16A] font-bold text-lg sm:text-xl font-morabba">
                {footerData.brand.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm leading-relaxed font-yekan text-center sm:text-right">
              {footerData.brand.description}
            </p>
            <div className="flex gap-3 mt-2 justify-center sm:justify-start">
              {footerData.socialMedia.map((social, index) => (
                <Link
                  key={index}
                  href={social.url}
                  className="footer-icon"
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={social.icon}
                    alt={social.name}
                    width={20}
                    height={20}
                    className="footer-icon-img"
                  />
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 flex flex-col gap-2 text-right">
            <h3 className="text-[#00C16A] font-bold text-lg mb-3 font-yekan">
              {footerData.contact.title}
            </h3>
            {footerData.contact.phones.map((phone, index) => (
              <div key={index} className="flex items-center gap-2 mb-1">
                <Image
                  src="/icon/call2.svg"
                  alt="phone"
                  width={18}
                  height={18}
                />
                <span className="text-sm">{phone}</span>
              </div>
            ))}
            <div className="flex items-center gap-2 mb-1">
              <Image src="/icon/email.svg" alt="email" width={18} height={18} />
              <span className="text-sm">{footerData.contact.email}</span>
            </div>
            <div className="flex items-start gap-2 mb-1">
              <Image src="/icon/gps.svg" alt="address" width={18} height={18} />
              <span className="text-sm">{footerData.contact.address}</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1 text-right">
            <h3 className="text-[#00C16A] font-bold text-lg mb-3 font-yekan">
              {footerData.quickLinks.title}
            </h3>{" "}
            <ul className="space-y-2 font-yekan">
              {footerData.quickLinks.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-sm hover:text-[#00C16A] transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Help & Services */}
          <div className="lg:col-span-1 text-right">
            <h3 className="text-[#00C16A] font-bold text-lg mb-3 font-yekan">
              {footerData.services.title}
            </h3>{" "}
            <ul className="space-y-2 font-yekan">
              {footerData.services.links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.url}
                    className="text-sm hover:text-[#00C16A] transition"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Payment & Trust Badges */}
        <div className="flex flex-col md:flex-row-reverse justify-between items-center gap-6 border-t border-[#222] pt-8 mb-4">
          <div className="flex gap-6">
            {footerData.paymentBrands.map((brand, index) => (
              <Image
                key={index}
                src={brand.image}
                alt={brand.name}
                width={70}
                height={40}
              />
            ))}
          </div>
          <div className="text-center text-gray-400 text-sm pt-2 font-yekan">
            {footerData.copyright}
          </div>
        </div>
        {/* Copyright */}
      </div>
      <style jsx global>{`
        .footer-icon {
          width: 36px;
          height: 36px;
          background: #232323;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.2s, color 0.2s;
        }
        .footer-icon-img {
          transition: filter 0.2s;
          /* Gold color for static state */
          filter: invert(54%) sepia(38%) saturate(743%) hue-rotate(16deg)
            brightness(95%) contrast(90%);
        }
        .footer-icon:hover {
          background: #c6a15b;
        }
        .footer-icon:hover .footer-icon-img {
          /* Black icon on hover */
          filter: none;
        }
      `}</style>
    </footer>
  );
}
