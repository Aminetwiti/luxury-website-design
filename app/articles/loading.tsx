export default function ArticlesLoading() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Section Skeleton */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-white/20 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Articles Section Skeleton */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filters Skeleton */}
            <div className="mb-12 space-y-6">
              <div className="h-12 bg-gray-200 rounded-lg max-w-md animate-pulse"></div>
              <div className="flex flex-wrap gap-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="h-8 w-20 bg-gray-200 rounded-full animate-pulse"></div>
                ))}
              </div>
            </div>

            {/* Results Count Skeleton */}
            <div className="mb-8">
              <div className="h-4 w-32 bg-gray-200 rounded animate-pulse"></div>
            </div>

            {/* Articles Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-lg shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6 space-y-4">
                    <div className="flex gap-4">
                      <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                    </div>
                    <div className="h-6 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-6 bg-gray-200 rounded w-3/4 animate-pulse"></div>
                    <div className="space-y-2">
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-2/3 animate-pulse"></div>
                    </div>
                    <div className="h-4 w-24 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
