export default function BlogLoading() {
  return (
    <div className="bg-[#151515] min-h-screen">
      {/* Header Skeleton */}
      <div className="h-20 bg-[#1a1a1a] animate-pulse"></div>
      
      {/* Hero Skeleton */}
      <div className="h-64 bg-gradient-to-r from-[#1a1a1a] to-[#252525] animate-pulse"></div>
      
      {/* Blog Grid Skeleton */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[...Array(9)].map((_, i) => (
            <div key={i} className="bg-[#1a1a1a] rounded-lg overflow-hidden animate-pulse">
              <div className="h-48 bg-[#2a2a2a]"></div>
              <div className="p-6">
                <div className="h-3 bg-[#2a2a2a] rounded w-1/4 mb-3"></div>
                <div className="h-5 bg-[#2a2a2a] rounded mb-3"></div>
                <div className="h-4 bg-[#2a2a2a] rounded mb-2"></div>
                <div className="h-4 bg-[#2a2a2a] rounded w-3/4 mb-4"></div>
                <div className="h-4 bg-[#2a2a2a] rounded w-1/3"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
