export default function Loading() {
  return (
    <div className="min-h-screen bg-[#151515] flex items-center justify-center">
      <div className="text-center">
        <div className="relative mb-8">
          {/* Coffee Cup Animation */}
          <div className="w-16 h-16 mx-auto mb-4">
            <div className="w-full h-full border-4 border-[#00C16A] border-t-transparent rounded-full animate-spin"></div>
          </div>
          
          {/* Coffee Steam Animation */}
          <div className="flex justify-center space-x-1">
            <div className="w-1 h-8 bg-[#00C16A] rounded-full animate-pulse" style={{ animationDelay: '0s' }}></div>
            <div className="w-1 h-6 bg-[#00C16A] rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-1 h-8 bg-[#00C16A] rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
          </div>
        </div>
        
        <h2 className="text-xl font-semibold text-white mb-2 font-morabba">
          در حال دم کردن...
        </h2>
        
        <p className="text-gray-400 font-yekan">
          لطفاً صبر کنید، صفحه در حال بارگذاری است
        </p>
      </div>
    </div>
  );
}
