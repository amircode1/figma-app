import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import StorePageClient from './components/StorePageClient';

export const metadata: Metadata = {
  title: "فروشگاه",
  description: "تمامی محصولات قهوه، ماشین‌های قهوه و لوازم جانبی قهوه را در فروشگاه ما بیابید. قهوه‌های اسپشیال با کیفیت بالا.",
  keywords: ["فروشگاه قهوه", "خرید قهوه", "ماشین قهوه", "قهوه اسپشیال", "فروش آنلاین قهوه"],
  openGraph: {
    title: "فروشگاه - کافه قهوه فارسی",
    description: "تمامی محصولات قهوه، ماشین‌های قهوه و لوازم جانبی قهوه را در فروشگاه ما بیابید.",
    type: 'website',
  },
};

// Store Page - Responsive, accessible, and ready for Figma design integration
export default function StorePage() {
  return (
    <>
      <Header />
      <StorePageClient />
      <Footer />
    </>
  );
}