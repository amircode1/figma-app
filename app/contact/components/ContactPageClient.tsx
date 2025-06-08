"use client";

import { useState, useEffect } from 'react';
import ContactCard from './ContactCard';
import ContactForm from './ContactForm';
import GoogleMap from './GoogleMap';
import HeroSection from './HeroSection';
import { getContactPageData, ContactPageData } from '../../lib/api';

export default function ContactPageClient() {
  const [contactData, setContactData] = useState<ContactPageData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchContactData = async () => {
      try {
        const data = await getContactPageData();
        setContactData(data);
      } catch (error) {
        console.error('Error fetching contact data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchContactData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        <div className="text-white text-xl">در حال بارگذاری...</div>
      </div>
    );
  }

  if (!contactData) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#151515]">
        <div className="text-white text-xl">خطا در بارگذاری اطلاعات</div>
      </div>
    );
  }

  return (
    <main className="bg-[#151515] min-h-screen font-yekan" dir="rtl">
      {/* Hero Section */}
      <HeroSection 
        title="تماس با ما" 
        subtitle="برای هر گونه سوال و درخواست با ما در تماس باشید" 
      />      {/* Contact Information Cards */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {contactData.cards.map((card, index) => (
          <ContactCard 
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
            alt={card.alt}
          />
        ))}
      </section>

      {/* Contact Form and Map */}
      <section className="max-w-6xl mx-auto py-16 px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Google Map */}
        <div className="bg-[#232323] rounded-lg p-8">
          <h2 className="text-2xl font-bold text-white mb-6 text-right">موقعیت ما</h2>
          <GoogleMap />
        </div>
        {/* Contact Form */}
          <ContactForm />

      </section>
    </main>
  );
}
