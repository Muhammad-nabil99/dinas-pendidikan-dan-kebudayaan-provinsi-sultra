function DetailLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Skeleton */}

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Breadcrumb */}

        {/* Article Title */}
        <div className="mb-6 mt-20"></div>

        {/* Article Metadata */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-gray-200 rounded animate-pulse"></div>
              <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
            </div>
          </div>
          <div className="flex gap-3">
            <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
            <div className="h-8 bg-gray-200 rounded w-20 animate-pulse"></div>
          </div>
        </div>

        {/* Featured Image */}
        <div className="mb-8">
          <div className="w-full h-96 bg-gray-200 rounded-lg animate-pulse"></div>
        </div>

        {/* Article Content */}
        <div className="space-y-4 mb-8">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/5 animate-pulse"></div>
        </div>

        {/* Update Info */}
        <div className="flex items-center justify-between py-4 border-t border-b">
          <div className="h-3 bg-gray-200 rounded w-40 animate-pulse"></div>
          <div className="h-8 bg-gray-200 rounded w-32 animate-pulse"></div>
        </div>

        {/* Related Articles Section */}
        <div className="mt-12">
          <div className="h-6 bg-gray-200 rounded w-32 animate-pulse mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg shadow-sm p-4">
                <div className="w-full h-40 bg-gray-200 rounded animate-pulse mb-3"></div>
                <div className="h-4 bg-gray-200 rounded w-full animate-pulse mb-2"></div>
                <div className="h-4 bg-gray-200 rounded w-3/4 animate-pulse"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
export default DetailLoadingSkeleton;
