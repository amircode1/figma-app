import type { Metadata } from "next";
import "./globals.css";
import ScrollToTop from "./components/ScrollToTop";
import ResponsiveTest from "./components/ResponsiveTest";
import { robotoCondensed, radioCanada, notoKufiArabic } from "./fonts";

export const metadata: Metadata = {
  title: {
    default: "کافه قهوه فارسی - بهترین قهوه‌های اسپشیال",
    template: "%s | کافه قهوه فارسی",
  },
  description:
    "بهترین قهوه‌های اسپشیال، ماشین‌های قهوه و لوازم جانبی قهوه. با کیفیت بالا و طعم منحصر به فرد.",
  keywords: [
    "قهوه",
    "قهوه اسپشیال",
    "ماشین قهوه",
    "کافه",
    "قهوه فارسی",
    "specialty coffee",
  ],
  authors: [{ name: "کافه قهوه فارسی" }],
  creator: "کافه قهوه فارسی",
  publisher: "کافه قهوه فارسی",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://coffee-shop-farsi.com"),
  alternates: {
    canonical: "/",
    languages: {
      "fa-IR": "/",
    },
  },
  openGraph: {
    title: "کافه قهوه فارسی - بهترین قهوه‌های اسپشیال",
    description:
      "بهترین قهوه‌های اسپشیال، ماشین‌های قهوه و لوازم جانبی قهوه. با کیفیت بالا و طعم منحصر به فرد.",
    url: "/",
    siteName: "کافه قهوه فارسی",
    locale: "fa_IR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "کافه قهوه فارسی - بهترین قهوه‌های اسپشیال",
    description:
      "بهترین قهوه‌های اسپشیال، ماشین‌های قهوه و لوازم جانبی قهوه. با کیفیت بالا و طعم منحصر به فرد.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fa"
      dir="rtl"
      className={`${robotoCondensed.variable} ${radioCanada.variable} ${notoKufiArabic.variable}`}
    >
      <body className="antialiased">
        {children}
        <ScrollToTop />
        <ResponsiveTest />
      </body>
    </html>
  );
}
