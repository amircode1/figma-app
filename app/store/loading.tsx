export default function StoreLoading() {
  return (
    <div className="bg-[#151515] min-h-screen">
      {/* Header Skeleton */}
      <div className="h-20 bg-[#1a1a1a] animate-pulse"></div>
      
      {/* Hero Skeleton */}
      <div className="h-64 bg-gradient-to-r from-[#1a1a1a] to-[#252525] animate-pulse"></div>
      
      {/* Filter Bar Skeleton */}
      <div className="container mx-auto px-4 py-8">
        <div className="flex gap-4 mb-8">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="h-10 w-24 bg-[#2a2a2a] rounded animate-pulse"></div>
          ))}
        </div>
        
        {/* Products Grid Skeleton */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-lg p-4 animate-pulse">
              <div className="h-48 bg-[#2a2a2a] rounded mb-4"></div>
              <div className="h-4 bg-[#2a2a2a] rounded mb-2"></div>
              <div className="h-3 bg-[#2a2a2a] rounded w-3/4 mb-3"></div>
              <div className="h-6 bg-[#2a2a2a] rounded w-1/2"></div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
