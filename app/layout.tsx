import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "کافه قهوه فارسی",
  description: "بهترین قهوه‌های اسپشیال و محصولات قهوه",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Noto+Kufi+Arabic:wght@100..900&family=Radio+Canada:ital,wght@0,300..700;1,300..700&family=Roboto+Condensed:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
