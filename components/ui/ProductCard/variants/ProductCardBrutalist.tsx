"use client";

export default function ProductCardBrutalist() {
  return (
    <div
      className="w-64 bg-white dark:bg-gray-900 border-4 border-black dark:border-white transition-all hover:translate-x-1 hover:translate-y-1"
      style={{
        boxShadow: '8px 8px 0 black'
      }}
    >
      {/* Product Image */}
      <div className="aspect-square bg-yellow-300 dark:bg-yellow-600 border-b-4 border-black dark:border-white flex items-center justify-center">
        <div className="w-32 h-32 bg-black dark:bg-white" />
      </div>

      {/* Product Info */}
      <div className="p-4 space-y-3">
        <h3 className="font-black text-xl uppercase tracking-tight text-black dark:text-white">
          BOLD PRODUCT
        </h3>

        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-gray-600 dark:text-gray-400">Price</p>
            <p className="text-3xl font-black text-black dark:text-white">$99</p>
          </div>

          <button
            className="px-6 py-3 bg-black dark:bg-white text-white dark:text-black font-black uppercase text-sm border-2 border-black dark:border-white hover:bg-white hover:text-black dark:hover:bg-black dark:hover:text-white transition-colors"
            style={{
              boxShadow: '4px 4px 0 black'
            }}
          >
            BUY
          </button>
        </div>
      </div>
    </div>
  );
}
