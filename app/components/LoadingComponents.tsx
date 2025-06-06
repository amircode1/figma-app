import React from 'react';

export default function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#009245]"></div>
    </div>
  );
}

export function LoadingCard() {
  return (
    <div className="bg-[#2a2a2a] rounded-lg p-6 animate-pulse">
      <div className="bg-gray-600 h-48 rounded-lg mb-4"></div>
      <div className="bg-gray-600 h-4 rounded mb-2"></div>
      <div className="bg-gray-600 h-4 rounded w-2/3 mb-4"></div>
      <div className="bg-gray-600 h-10 rounded"></div>
    </div>
  );
}
