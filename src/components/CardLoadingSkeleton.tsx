import React from 'react';

const CardLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 - With Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Skeleton */}
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
            </div>
            
            {/* Content Skeleton */}
            <div className="p-4 space-y-4">
              {/* Tag */}
              <div className="w-20 h-6 bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
              </div>
              
              {/* Title */}
              <div className="space-y-2">
                <div className="w-4/5 h-6 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-3/5 h-6 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Description Lines */}
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-2/3 h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="flex justify-between items-center pt-2">
                <div className="w-32 h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-24 h-8 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 2 - With Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Skeleton */}
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
            </div>
            
            {/* Content Skeleton */}
            <div className="p-4 space-y-4">
              {/* Tag */}
              <div className="w-20 h-6 bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
              </div>
              
              {/* Title */}
              <div className="space-y-2">
                <div className="w-4/5 h-6 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-3/5 h-6 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Description Lines */}
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-2/3 h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="flex justify-between items-center pt-2">
                <div className="w-32 h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-24 h-8 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>
          {/* Card 3 - With Image */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            {/* Image Skeleton */}
            <div className="relative h-48 bg-gray-200 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
            </div>
            
            {/* Content Skeleton */}
            <div className="p-4 space-y-4">
              {/* Tag */}
              <div className="w-20 h-6 bg-gray-200 rounded relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
              </div>
              
              {/* Title */}
              <div className="space-y-2">
                <div className="w-4/5 h-6 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-3/5 h-6 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Description Lines */}
              <div className="space-y-2">
                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-2/3 h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
              
              {/* Footer */}
              <div className="flex justify-between items-center pt-2">
                <div className="w-32 h-4 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
                <div className="w-24 h-8 bg-gray-200 rounded relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </div>
  );
};

export default CardLoadingSkeleton;