"use client";

import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";

export default function ProductCardGlass() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-64 relative rounded-xl overflow-hidden group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-pink-500/20" />

      {/* Product Image */}
      <div className="relative aspect-square bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl shadow-2xl" />
        </div>

        {/* Overlay on Hover */}
        {isHovered && (
          <div className="absolute inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center gap-3 transition-all">
            <button className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all">
              <Heart className="w-5 h-5 text-white" />
            </button>
            <button className="p-3 rounded-full bg-white/20 backdrop-blur-md border border-white/30 hover:bg-white/30 transition-all">
              <ShoppingCart className="w-5 h-5 text-white" />
            </button>
          </div>
        )}
      </div>

      {/* Glass Panel */}
      <div className="relative backdrop-blur-md bg-white/10 dark:bg-black/10 border-t border-white/20 p-4">
        <h3 className="font-bold text-foreground">Premium Product</h3>
        <p className="text-2xl font-bold text-foreground mt-1">$149.99</p>
      </div>
    </div>
  );
}
