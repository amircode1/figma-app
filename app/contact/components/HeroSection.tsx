import Image from 'next/image';
import { FC } from 'react';

interface HeroSectionProps {
  title: string;
  subtitle: string;
}

const HeroSection: FC<HeroSectionProps> = ({ title, subtitle }) => {
  return (
    <section className="relative w-full h-72 md:h-96 flex items-center justify-center bg-[#151515] mask-t-from-50% brightness-[0.8]">
      <Image 
        src="/store-assets/image.png" 
        alt={title} 
        fill 
        className="object-cover object-center opacity-70" 
        priority 
      />
      <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
        <h1 className="text-white font-morabba text-4xl md:text-5xl mb-2">{title}</h1>
        <span className="text-[#C6A15B] font-yekan text-lg">{subtitle}</span>
      </div>
    </section>
  );
};

export default HeroSection;
