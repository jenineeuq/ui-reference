"use client";

export default function CardGlass() {
  return (
    <div className="relative w-64 p-6 rounded-2xl overflow-hidden backdrop-blur-xl border border-white/20 shadow-xl">
      {/* Glass background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 dark:from-white/10 dark:to-white/5" />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-10 h-10 bg-white/30 rounded-lg mb-3 backdrop-blur-sm" />
        <h3 className="text-lg font-bold mb-2 text-white drop-shadow-lg">
          Glass Card
        </h3>
        <p className="text-sm text-white/90">
          Frosted glass effect with translucent background and subtle blur.
        </p>
      </div>
    </div>
  );
}
