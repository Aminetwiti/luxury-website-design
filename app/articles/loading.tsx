export default function ArticlesLoading() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      {/* Hero Skeleton */}
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-gray-700 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 bg-gray-700 rounded-lg w-3/4 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* Content Skeleton */}
      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Filters Skeleton */}
            <div className="bg-white rounded-2xl shadow-lg p-6 mb-12">
              <div className="flex flex-col lg:flex-row gap-6">
                <div className="flex-1">
                  <div className="h-12 bg-gray-200 rounded-lg animate-pulse"></div>
                </div>
                <div className="flex gap-2">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="h-10 w-20 bg-gray-200 rounded-lg animate-pulse"></div>
                  ))}
                </div>
              </div>
            </div>

            {/* Articles Grid Skeleton */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                  <div className="h-48 bg-gray-200 animate-pulse"></div>
                  <div className="p-6">
                    <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                    <div className="h-4 bg-gray-200 rounded mb-4 w-3/4 animate-pulse"></div>
                    <div className="flex gap-4 mb-4">
                      <div className="h-4 bg-gray-200 rounded w-20 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-16 animate-pulse"></div>
                      <div className="h-4 bg-gray-200 rounded w-12 animate-pulse"></div>
                    </div>
                    <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
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
