"use client";

export default function ButtonGradient() {
  return (
    <button className="relative px-6 py-3 rounded-lg font-bold text-white overflow-hidden group">
      {/* Gradient background */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 transition-all duration-300 group-hover:scale-105" />

      {/* Animated gradient overlay */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        }}
      />

      {/* Button text */}
      <span className="relative z-10 drop-shadow-md">Vibrant Gradient</span>

      {/* Glow effect */}
      <div className="absolute inset-0 rounded-lg blur-md opacity-50 group-hover:opacity-75 transition-opacity duration-300 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500" style={{ zIndex: -1 }} />
    </button>
  );
}
