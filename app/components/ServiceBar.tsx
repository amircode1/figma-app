"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { getServices, type Service } from "../lib/api";

export default function ServiceBar() {
  const [services, setServices] = useState<Service[]>([]);

  useEffect(() => {
    const loadServices = async () => {
      const data = await getServices();
      setServices(data);
    };
    loadServices();
  }, []);

  return (
    <div className="w-full flex justify-center items-center py-8 bg-[#151515]">
      <div className="w-full max-w-7xl rounded-2xl bg-[#0B6B2A] flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-6 md:gap-0">
        {services.map((service, idx) => (
          <div key={idx} className="flex flex-col items-center md:flex-col md:items-center gap-2 md:gap-3 flex-1 text-center text-sm">
            <span className="flex justify-center items-center">
              <Image src={service.icon} alt="icon" width={60} height={60} className="object-contain" />
            </span>
            <span className="text-white font-yekan text-sm md:text-base">{service.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
