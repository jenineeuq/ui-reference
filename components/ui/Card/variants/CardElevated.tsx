"use client";

export default function CardElevated() {
  return (
    <div className="w-64 p-6 bg-white dark:bg-gray-800 rounded-xl shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300">
      <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-4" />
      <h3 className="text-lg font-bold mb-2">Elevated Card</h3>
      <p className="text-sm text-gray-600 dark:text-gray-300">
        Floating appearance with multi-layer shadows and smooth hover animation.
      </p>
    </div>
  );
}
