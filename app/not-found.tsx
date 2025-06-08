import Link from 'next/link';
import Image from 'next/image';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <Image 
            src="/icon/coffee-mug.svg" 
            alt="Coffee Cup" 
            width={120} 
            height={120} 
            className="mx-auto opacity-50"
          />
        </div>
        
        <h1 className="text-6xl font-bold text-white mb-4 font-morabba">404</h1>
        
        <h2 className="text-2xl font-semibold text-[#00C16A] mb-4 font-morabba">
          صفحه‌ای که دنبالش می‌گردید پیدا نشد!
        </h2>
        
        <p className="text-gray-400 mb-8 font-yekan text-lg">
          متأسفانه صفحه‌ای که به دنبالش هستید وجود ندارد یا حذف شده است.
          <br />
          می‌تونید به صفحه اصلی برگردید و قهوه‌های خوشمزمون رو ببینید!
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/"
            className="bg-[#00C16A] hover:bg-[#00A555] text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-yekan"
          >
            بازگشت به صفحه اصلی
          </Link>
          
          <Link 
            href="/store"
            className="bg-transparent border-2 border-[#00C16A] text-[#00C16A] hover:bg-[#00C16A] hover:text-white font-bold py-3 px-6 rounded-lg transition-colors duration-300 font-yekan"
          >
            مشاهده فروشگاه
          </Link>
        </div>
        
        <div className="mt-12">
          <p className="text-gray-500 text-sm font-yekan">
            نیاز به کمک دارید؟ 
            <Link href="/contact" className="text-[#00C16A] hover:underline mr-1">
              با ما تماس بگیرید
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
