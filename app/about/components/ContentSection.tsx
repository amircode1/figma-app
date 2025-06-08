"use client";

import Image from "next/image";
import { FC, useState, useEffect } from "react";
import { getAboutPageData, type AboutPageData } from "../../lib/api";

const ContentSection: FC = () => {
  const [aboutData, setAboutData] = useState<AboutPageData | null>(null);

  useEffect(() => {
    const loadAboutData = async () => {
      const data = await getAboutPageData();
      setAboutData(data);
    };
    loadAboutData();
  }, []);

  if (!aboutData) {
    return (
      <section className="py-16 bg-[#151515]">
        <div className="container mx-auto px-6">
          <div className="text-center text-white">Loading...</div>
        </div>
      </section>
    );
  }
  return (
    <section className="py-8 sm:py-12 lg:py-16 bg-[#151515]">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 items-center mb-16 sm:mb-20 lg:mb-28">
          <div className="text-right order-2 lg:order-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-morabba leading-tight">
              {aboutData.story.title}
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 text-gray-300 leading-6 sm:leading-7">
              <p className="text-xs sm:text-sm text-gray-400 mb-1 sm:mb-2">
                {aboutData.story.subtitle}
              </p>
              {aboutData.story.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="mt-4 sm:mt-6 flex items-start justify-start gap-3 sm:gap-4 text-right">
              <Image
                src={aboutData.story.quote.icon}
                alt="quote icon"
                width={32}
                height={32}
                className="text-yellow-300 w-8 h-8 sm:w-10 sm:h-10"
              />
              <div className="border-r-2 border-yellow-300 pr-3 sm:pr-4">
                <p className="text-yellow-300 font-semibold text-xs sm:text-sm">
                  {aboutData.story.quote.text}
                </p>
                <p className="text-gray-400 text-xs mt-1">
                  {aboutData.story.quote.author}
                </p>
              </div>
            </div>
          </div>
          <div className="relative order-1 lg:order-1">
            <Image
              src={aboutData.story.image}
              alt="قهوه گارنیک"
              width={500}
              height={400}
              className="rounded-lg w-full h-auto"
              priority
            />
          </div>
        </div>
        {/* Specialty Coffee Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 items-center mb-12 sm:mb-16 lg:mb-20">
          <div className="text-right">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-3 sm:mb-4 font-morabba leading-tight">
              {aboutData.vision.title}
            </h2>
            <div className="flex flex-col gap-3 sm:gap-4 text-gray-300">
              {aboutData.vision.content.map((paragraph, index) => (
                <p key={index} className="leading-relaxed text-sm sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
          <div className="flex flex-col sm:flex-row flex-wrap gap-3 sm:gap-4">
            {aboutData.vision.images.map((image, index) => (
              <Image
                key={index}
                src={image}
                alt={`تصویر ${index + 1}`}
                width={240}
                height={200}
                className={`rounded-2xl sm:rounded-3xl w-full sm:w-auto h-auto sm:h-[150px] lg:h-[200px] object-cover ${
                  index === 0 ? "sm:pt-4 lg:pt-8" : "sm:pb-4 lg:pb-8"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentSection;
