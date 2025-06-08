import Image from 'next/image';
import { FC } from 'react';

interface ContactCardProps {
  icon: string;
  title: string;
  content: string[];
  alt: string;
}

const ContactCard: FC<ContactCardProps> = ({ icon, title, content, alt }) => {
  return (
    <div className="bg-[#2a2a2a] rounded-lg p-6 flex flex-col items-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#111] flex items-center justify-center mb-4 border border-yellow-400">
        <Image src={`/icon/${icon}.svg`} className="sepia" alt={alt} width={24} height={24} />
      </div>
      <h3 className="text-white font-bold mb-2">{title}</h3>
      {content.map((text, index) => (
        <p key={index} className="text-gray-300 text-sm">{text}</p>
      ))}
    </div>
  );
};

export default ContactCard;
