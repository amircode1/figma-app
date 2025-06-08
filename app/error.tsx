'use client'

import { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Application error:', error);
  }, [error]);

  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="mb-8">
          <Image 
            src="/icon/coffee-beans.svg" 
            alt="Coffee Beans" 
            width={120} 
            height={120} 
            className="mx-auto opacity-50"
          />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-4 font-morabba">
          اوه نه! مشکلی پیش آمده
        </h1>
        
        <p className="text-gray-400 mb-8 font-yekan text-lg">
          متأسفانه در بارگذاری این صفحه مشکلی پیش آمده است.
          <br />
          لطفاً دوباره تلاش کنید یا به صفحه اصلی برگردید.
        </p>
        
        {process.env.NODE_ENV === 'development' && (
          <div className="bg-red-900/20 border border-red-500 rounded-lg p-4 mb-6 text-left">
            <p className="text-red-400 text-sm font-mono">
              Error: {error.message}
            </p>
            {error.digest && (
              <p className="text-red-400 text-xs font-mono mt-2">
                Digest: {error.digest}
              </p>
            )}
          </div>
        )}
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={reset}
            className="bg-[#00C16A] hover:bg-[#00A555] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-yekan"
          >
            تلاش مجدد
          </button>
          
          <Link 
            href="/"
            className="bg-transparent border-2 border-[#00C16A] text-[#00C16A] hover:bg-[#00C16A] hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-yekan"
          >
            بازگشت به خانه
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500 text-sm font-yekan">
            اگر مشکل ادامه داشت، لطفاً 
            <Link href="/contact" className="text-[#00C16A] hover:underline mr-1">
              با پشتیبانی تماس بگیرید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
