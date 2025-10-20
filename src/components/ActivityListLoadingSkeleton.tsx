import React from 'react';

const ActivityListLoadingSkeleton = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header Skeleton */}
        <div className="mb-6">
          <div className="w-64 h-8 bg-gray-200 rounded relative overflow-hidden mb-4">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
          </div>
        </div>

        {/* Search and Filter Skeleton */}
        <div className="flex gap-4 mb-6">
          <div className="flex-1 h-12 bg-white border border-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer opacity-20"></div>
          </div>
          <div className="w-48 h-12 bg-white border border-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer opacity-20"></div>
          </div>
          <div className="w-48 h-12 bg-white border border-gray-200 rounded-lg relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer opacity-20"></div>
          </div>
        </div>

        {/* List Items */}
        <div className="space-y-4">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-sm p-6 border border-gray-100">
              <div className="flex justify-between items-start">
                {/* Left Content */}
                <div className="flex-1 space-y-4">
                  {/* Title */}
                  <div className="w-3/4 h-7 bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                  </div>

                  {/* Date and Location Row */}
                  <div className="flex gap-8">
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                      </div>
                      <div className="w-32 h-4 bg-gray-200 rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 bg-gray-200 rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                      </div>
                      <div className="w-40 h-4 bg-gray-200 rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                      </div>
                    </div>
                  </div>

                  {/* Participants */}
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 bg-gray-200 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Description */}
                  <div className="space-y-2">
                    <div className="w-full h-4 bg-gray-200 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Organizer Tag */}
                  <div className="w-48 h-5 bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                  </div>
                </div>

                {/* Right Button */}
                <div className="w-32 h-10 bg-gray-200 rounded-lg relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              </div>
            </div>
          ))}
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

export default ActivityListLoadingSkeleton;