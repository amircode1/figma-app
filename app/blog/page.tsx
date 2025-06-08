import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BlogPageClient from './components/BlogPageClient';

export const metadata: Metadata = {
  title: "بلاگ",
  description: "آخرین مقالات، اخبار و آموزش‌های دنیای قهوه. تکنیک‌های دم‌آوری، معرفی انواع قهوه و راهنمای خرید.",
  keywords: ["بلاگ قهوه", "مقالات قهوه", "آموزش قهوه", "دم آوری قهوه", "انواع قهوه", "اخبار قهوه"],
  openGraph: {
    title: "بلاگ - کافه قهوه فارسی",
    description: "آخرین مقالات، اخبار و آموزش‌های دنیای قهوه. تکنیک‌های دم‌آوری، معرفی انواع قهوه و راهنمای خرید.",
    type: 'website',
  },
};

export default function BlogPage() {
  return (
    <>
      <Header />
      <BlogPageClient />
      <Footer />
    </>
  );
}