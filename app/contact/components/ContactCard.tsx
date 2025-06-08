import Image from "next/image";
import { FC } from "react";

interface ContactCardProps {
  icon: string;
  title: string;
  content: string[];
  alt: string;
}

const ContactCard: FC<ContactCardProps> = ({ icon, title, content, alt }) => {
  return (
    <div className="bg-[#2a2a2a] rounded-lg p-4 sm:p-6 flex flex-col items-center text-center hover:bg-[#333] transition-colors duration-300">
      <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-[#111] flex items-center justify-center mb-3 sm:mb-4 border border-yellow-400">
        <Image
          src={`/icon/${icon}.svg`}
          className="sepia"
          alt={alt}
          width={20}
          height={20}
        />
      </div>
      <h3 className="text-white font-bold mb-2 text-sm sm:text-base lg:text-lg">
        {title}
      </h3>
      {content.map((text, index) => (
        <p
          key={index}
          className="text-gray-300 text-xs sm:text-sm leading-relaxed"
        >
          {text}
        </p>
      ))}
    </div>
  );
};

export default ContactCard;
