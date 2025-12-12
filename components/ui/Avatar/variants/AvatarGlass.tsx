"use client";

export default function AvatarGlass() {
  return (
    <div className="relative w-12 h-12">
      {/* Outer glass ring */}
      <div className="absolute inset-0 rounded-full backdrop-blur-md bg-white/20 border border-white/30 shadow-lg" />

      {/* Inner avatar */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center text-white font-bold text-sm">
        JD
      </div>
    </div>
  );
}
