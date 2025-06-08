import type { Metadata } from 'next';
import Header from '../components/Header';
import Footer from '../components/Footer';
import ContactPageClient from './components/ContactPageClient';

export const metadata: Metadata = {
  title: "تماس با ما",
  description: "با کافه قهوه فارسی در تماس باشید. آدرس، شماره تلفن، ایمیل و ساعات کاری ما. فرم تماس برای سوالات و پیشنهادات شما.",
  keywords: ["تماس با ما", "آدرس کافه", "شماره تلفن", "ایمیل", "ساعات کاری", "فرم تماس"],
  openGraph: {
    title: "تماس با ما - کافه قهوه فارسی",
    description: "با کافه قهوه فارسی در تماس باشید. آدرس، شماره تلفن، ایمیل و ساعات کاری ما.",
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <>
      <Header />
      <ContactPageClient />
      <Footer />
    </>
  );
}
