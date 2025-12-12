"use client";

import { Heart, Star } from "lucide-react";

export default function ProductCardPlayful() {
  return (
    <div className="w-64 bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl overflow-hidden transform hover:rotate-1 hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl border-4 border-white dark:border-gray-700">
      {/* Wishlist Badge */}
      <div className="relative">
        <button className="absolute top-4 right-4 z-10 p-2 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:scale-110 transition-transform">
          <Heart className="w-5 h-5 text-pink-500" />
        </button>

        {/* Product Image */}
        <div className="aspect-square bg-gradient-to-br from-yellow-200 to-pink-200 dark:from-purple-600 dark:to-pink-600 flex items-center justify-center p-8">
          <div className="w-full h-full bg-white dark:bg-gray-700 rounded-2xl shadow-2xl flex items-center justify-center text-4xl">
            🎨
          </div>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-5 space-y-3">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              className="w-4 h-4 fill-yellow-400 text-yellow-400"
            />
          ))}
        </div>

        <h3 className="font-bold text-lg text-foreground">Fun Art Kit</h3>

        <div className="flex items-center justify-between">
          <span className="text-2xl font-black bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            $49.99
          </span>
          <button className="px-6 py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold rounded-full hover:shadow-lg transform hover:scale-105 transition-all">
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
