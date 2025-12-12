"use client";

import { ShoppingCart } from "lucide-react";

export default function ProductCardMinimal() {
  return (
    <div className="w-64 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
      {/* Product Image */}
      <div className="relative aspect-square bg-gray-100 dark:bg-gray-800">
        <div className="absolute inset-0 flex items-center justify-center text-gray-400">
          <div className="w-24 h-24 bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg" />
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-1">Product Name</h3>
        <p className="text-xl font-bold text-foreground">$99.99</p>
        <button className="w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}
