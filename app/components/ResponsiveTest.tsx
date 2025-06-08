"use client";

import React, { useState, useEffect } from "react";

interface ResponsiveTestProps {
  showInProduction?: boolean;
}

const ResponsiveTest: React.FC<ResponsiveTestProps> = ({
  showInProduction = false,
}) => {
  const [currentBreakpoint, setCurrentBreakpoint] = useState<string>("");
  const [screenSize, setScreenSize] = useState<{
    width: number;
    height: number;
  }>({ width: 0, height: 0 });
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (!showInProduction && process.env.NODE_ENV === "production") {
      return;
    }

    const updateBreakpoint = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;

      setScreenSize({ width, height });

      if (width < 640) {
        setCurrentBreakpoint("Mobile");
      } else if (width < 768) {
        setCurrentBreakpoint("Small Tablet");
      } else if (width < 1024) {
        setCurrentBreakpoint("Large Tablet");
      } else if (width < 1280) {
        setCurrentBreakpoint("Desktop");
      } else {
        setCurrentBreakpoint("Large Desktop");
      }
    };

    updateBreakpoint();
    window.addEventListener("resize", updateBreakpoint);

    return () => {
      window.removeEventListener("resize", updateBreakpoint);
    };
  }, [showInProduction]);

  // Show/hide with keyboard shortcut (Ctrl/Cmd + Shift + R)
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === "R") {
        setIsVisible(!isVisible);
      }
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, [isVisible]);

  if (process.env.NODE_ENV === "production" && !showInProduction) {
    return null;
  }

  return (
    <>
      {/* Toggle Button */}
      <button
        onClick={() => setIsVisible(!isVisible)}
        className="fixed bottom-4 right-4 z-[100] bg-blue-600 text-white p-2 rounded-full shadow-lg hover:bg-blue-700 transition-colors"
        title="Toggle Responsive Info (Ctrl+Shift+R)"
        type="button"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
        </svg>
      </button>

      {/* Responsive Info Panel */}
      {isVisible && (
        <div className="fixed top-4 right-4 z-[100] bg-black/90 text-white p-4 rounded-lg shadow-xl backdrop-blur-sm max-w-sm">
          <div className="flex justify-between items-center mb-3">
            <h3 className="text-lg font-bold">Responsive Debug</h3>
            <button
              onClick={() => setIsVisible(false)}
              className="text-gray-300 hover:text-white"
              type="button"
            >
              ✕
            </button>
          </div>

          <div className="space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Breakpoint:</span>
              <span className="font-mono text-green-400">
                {currentBreakpoint}
              </span>
            </div>

            <div className="flex justify-between">
              <span>Screen Size:</span>
              <span className="font-mono text-blue-400">
                {screenSize.width} × {screenSize.height}
              </span>
            </div>

            <div className="border-t border-gray-600 pt-2 mt-2">
              <div className="text-xs text-gray-300 space-y-1">
                <div>• Mobile: &lt; 640px</div>
                <div>• Small Tablet: 640-767px</div>
                <div>• Large Tablet: 768-1023px</div>
                <div>• Desktop: 1024-1279px</div>
                <div>• Large Desktop: ≥ 1280px</div>
              </div>
            </div>

            {/* Current Tailwind classes indicator */}
            <div className="border-t border-gray-600 pt-2 mt-2">
              <div className="text-xs text-gray-300">
                <div>Active Tailwind prefixes:</div>
                <div className="flex flex-wrap gap-1 mt-1">
                  <span className="block sm:hidden bg-red-600 px-1 rounded text-xs">
                    base
                  </span>
                  <span className="hidden sm:block md:hidden bg-yellow-600 px-1 rounded text-xs">
                    sm:
                  </span>
                  <span className="hidden md:block lg:hidden bg-blue-600 px-1 rounded text-xs">
                    md:
                  </span>
                  <span className="hidden lg:block xl:hidden bg-green-600 px-1 rounded text-xs">
                    lg:
                  </span>
                  <span className="hidden xl:block bg-purple-600 px-1 rounded text-xs">
                    xl:
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ResponsiveTest;
