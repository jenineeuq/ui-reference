"use client";

import { Star, Package, ShoppingCart } from "lucide-react";

export default function ProductCardEnterprise() {
  return (
    <div className="w-72 bg-background border border-border rounded-lg overflow-hidden">
      {/* Product Image */}
      <div className="relative aspect-video bg-muted flex items-center justify-center">
        <div className="w-24 h-24 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-lg" />
        <span className="absolute top-2 right-2 px-2 py-1 bg-green-500 text-white text-xs font-bold rounded">
          In Stock
        </span>
      </div>

      {/* Product Details */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-bold text-lg text-foreground line-clamp-2">
            Enterprise Product Suite
          </h3>
          <p className="text-sm text-muted-foreground mt-1">SKU: EPR-12345</p>
        </div>

        {/* Rating */}
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star
                key={star}
                className={`w-4 h-4 ${star <= 4 ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
              />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">(124)</span>
        </div>

        {/* Price */}
        <div className="flex items-baseline gap-2">
          <span className="text-2xl font-bold text-foreground">$299.99</span>
          <span className="text-sm text-muted-foreground line-through">$399.99</span>
        </div>

        {/* Actions */}
        <div className="grid grid-cols-2 gap-2">
          <button className="px-4 py-2 border border-border rounded-md hover:bg-muted transition-colors text-sm font-medium">
            Details
          </button>
          <button className="flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity text-sm font-medium">
            <ShoppingCart className="w-4 h-4" />
            Add
          </button>
        </div>
      </div>
    </div>
  );
}
