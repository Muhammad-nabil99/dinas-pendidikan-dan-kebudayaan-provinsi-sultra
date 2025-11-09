import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { FileText, Search, PenTool, Ban, BookOpen } from "lucide-react";

const PPIDSkeleton = () => {
  return (
    <main className="min-h-screen bg-background">
      {/* Header Section - Skeleton */}
      <section className="relative py-20 text-white bg-cover bg-center bg-gray-300">
        <div className="absolute inset-0 bg-blue-900/70"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center mb-6">
            <div className="w-32 h-10 bg-white/20 rounded-md relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 animate-shimmer"></div>
            </div>
          </div>
          <div className="text-center">
            <div className="inline-flex items-center px-3 sm:px-4 py-1.5 sm:py-2 bg-white/10 rounded-full mb-3 sm:mb-4">
              <BookOpen className="w-6 h-6" />
              <div className="w-12 h-4 bg-white/20 rounded ml-2 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 animate-shimmer"></div>
              </div>
            </div>
            <div className="w-96 h-12 bg-white/20 rounded mx-auto mb-3 sm:mb-4 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/20 via-white/30 to-white/20 animate-shimmer"></div>
            </div>
            <div className="w-80 h-6 bg-white/10 rounded mx-auto relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-white/20 to-white/10 animate-shimmer"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto">
          <div className="space-y-6">
            {/* Tabs Skeleton */}
            <div className="flex flex-wrap gap-2 mb-6">
              {[1, 2, 3, 4, 5].map((i) => (
                <div key={i} className="flex items-center gap-2 px-4 py-2 bg-gray-200 rounded-lg relative overflow-hidden">
                  <div className="w-6 h-6 bg-gray-300 rounded"></div>
                  <div className="w-24 h-4 bg-gray-300 rounded"></div>
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>
              ))}
            </div>

            {/* Content Card Skeleton */}
            <Card className="shadow-elegant">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <div className="w-6 h-6 bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                  </div>
                  <div className="w-48 h-6 bg-gray-200 rounded relative overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                  </div>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="w-64 h-4 bg-gray-200 rounded mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>

                {/* Search Input Skeleton */}
                <div className="w-full h-10 bg-gray-200 rounded mb-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                </div>

                {/* Table Skeleton */}
                <div className="space-y-3">
                  {/* Table Header */}
                  <div className="flex justify-between items-center py-2 border-b">
                    <div className="w-32 h-4 bg-gray-200 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    </div>
                    <div className="w-24 h-4 bg-gray-200 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    </div>
                    <div className="w-20 h-4 bg-gray-200 rounded relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                    </div>
                  </div>

                  {/* Table Rows */}
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="flex justify-between items-center py-3 border-b">
                      <div className="flex-1">
                        <div className="w-3/4 h-4 bg-gray-200 rounded mb-1 relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                        </div>
                        <div className="w-1/2 h-3 bg-gray-200 rounded relative overflow-hidden">
                          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                        </div>
                      </div>
                      <div className="w-16 h-4 bg-gray-200 rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                      </div>
                      <div className="w-20 h-8 bg-gray-200 rounded relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 animate-shimmer"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <style>{`
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
    </main>
  );
};

export default PPIDSkeleton;
