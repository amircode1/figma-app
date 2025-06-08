'use client'

import { useState, useEffect } from 'react';
import { ChevronUpIcon } from '@heroicons/react/24/outline';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);

    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 bg-[#00C16A] hover:bg-[#00A555] text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 group"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-6 h-6 transform group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
