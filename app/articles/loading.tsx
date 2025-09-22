import { Card, CardContent } from "@/components/ui/card"

export default function ArticlesLoading() {
  return (
    <div className="min-h-screen bg-[#F8F8F5]">
      <section className="relative py-16 sm:py-20 bg-gradient-to-br from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <div className="h-12 bg-white/20 rounded-lg mb-6 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-lg mb-4 animate-pulse"></div>
            <div className="h-6 bg-white/10 rounded-lg w-3/4 mx-auto animate-pulse"></div>
          </div>
        </div>
      </section>

      <section className="py-12 bg-white border-b">
        <div className="container mx-auto px-4">
          <div className="space-y-6">
            <div className="h-12 bg-gray-200 rounded-lg max-w-md mx-auto animate-pulse"></div>
            <div className="flex flex-wrap justify-center gap-4">
              {Array.from({ length: 5 }).map((_, i) => (
                <div key={i} className="h-10 w-24 bg-gray-200 rounded-lg animate-pulse"></div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {Array.from({ length: 6 }).map((_, i) => (
              <Card key={i} className="overflow-hidden">
                <div className="h-48 bg-gray-200 animate-pulse"></div>
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-3">
                    <div className="h-4 w-20 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-16 bg-gray-200 rounded animate-pulse"></div>
                    <div className="h-4 w-12 bg-gray-200 rounded animate-pulse"></div>
                  </div>
                  <div className="h-6 bg-gray-200 rounded mb-3 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-2 animate-pulse"></div>
                  <div className="h-4 bg-gray-200 rounded mb-4 w-3/4 animate-pulse"></div>
                  <div className="h-10 bg-gray-200 rounded animate-pulse"></div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
