"use client";

import { useState, useEffect } from "react";
import { ChevronUpIcon } from "@heroicons/react/24/outline";

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

    window.addEventListener("scroll", toggleVisibility);

    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-4 sm:bottom-6 lg:bottom-8 left-4 sm:left-6 lg:left-8 bg-[#00C16A] hover:bg-[#00A555] active:bg-[#009245] text-white p-2.5 sm:p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 z-50 group touch-manipulation"
          aria-label="Scroll to top"
        >
          <ChevronUpIcon className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 transform group-hover:scale-110 transition-transform" />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;
