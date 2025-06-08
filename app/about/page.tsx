import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: "درباره ما",
  description: "داستان کافه قهوه فارسی، ماموریت ما، تیم ما و تعهد ما به ارائه بهترین قهوه‌های اسپشیال. آشنایی با تاریخچه و اهداف ما.",
  keywords: ["درباره ما", "تاریخچه کافه", "تیم قهوه فارسی", "ماموریت ما", "قهوه اسپشیال"],
  openGraph: {
    title: "درباره ما - کافه قهوه فارسی",
    description: "داستان کافه قهوه فارسی، ماموریت ما، تیم ما و تعهد ما به ارائه بهترین قهوه‌های اسپشیال.",
    type: 'website',
  },
};

// About Us Page - Responsive, accessible, and ready for Figma design integration
import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';

// Import modular components
import HeroSection from './components/HeroSection';
import ContentSection from './components/ContentSection';
import TeamSection from './components/TeamSection';

export default function AboutUsPage() {
  return (
    <main aria-label="About Us Page" className="bg-[#151515] min-h-screen font-yekan">
      <Header />
      
      {/* Hero Section */}
      <HeroSection />
      
      {/* Content Section - Story and Coffee Expertise */}
      <ContentSection />
      
      {/* Team Section */}
      <TeamSection />

      <Footer />
    </main>
  );
}
