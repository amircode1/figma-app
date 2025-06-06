"use client";
import Image from "next/image";
import dataRaw from "../data.json";

const data = dataRaw as {
  services: { icon: string; text: string }[];
};

export default function ServiceBar() {
  return (
    <div className="w-full flex justify-center items-center py-8 bg-[#151515]">
      <div className="w-full max-w-7xl rounded-2xl bg-[#0B6B2A] flex flex-col md:flex-row items-center justify-between px-6 py-6 gap-6 md:gap-0">
        {data.services.map((service: { icon: string; text: string }, idx: number) => (
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
