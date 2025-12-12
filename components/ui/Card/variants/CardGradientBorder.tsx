"use client";

export default function CardGradientBorder() {
  return (
    <div className="relative w-64 p-6 rounded-xl bg-white dark:bg-gray-900">
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-xl p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 -z-10"
        style={{ margin: "-2px" }}
      >
        <div className="w-full h-full bg-white dark:bg-gray-900 rounded-xl" />
      </div>

      {/* Animated gradient background */}
      <div className="absolute inset-0 rounded-xl opacity-0 hover:opacity-100 transition-opacity duration-500 -z-20 bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-blue-500/10" />

      {/* Content */}
      <div className="relative">
        <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg mb-3" />
        <h3 className="text-lg font-bold mb-2">Gradient Border</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          Vibrant animated gradient border with clean white interior.
        </p>
      </div>
    </div>
  );
}
