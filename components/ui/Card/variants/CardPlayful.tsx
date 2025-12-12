"use client";

export default function CardPlayful() {
  return (
    <div className="w-64 p-6 bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 dark:from-pink-900/30 dark:via-purple-900/30 dark:to-blue-900/30 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
      {/* Decorative element */}
      <div className="relative w-14 h-14 bg-gradient-to-br from-pink-400 to-purple-500 rounded-2xl mb-4 flex items-center justify-center transform rotate-3">
        <span className="text-2xl">🎨</span>
      </div>

      <h3 className="text-lg font-bold mb-2 bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
        Playful Card
      </h3>
      <p className="text-sm text-gray-700 dark:text-gray-300">
        Colorful gradients, rounded corners, and bouncy animations for a friendly vibe!
      </p>
    </div>
  );
}
