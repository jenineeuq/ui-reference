"use client";

export default function AvatarNeon() {
  return (
    <div className="relative w-20 h-20 animate-pulse">
      {/* Neon glow ring */}
      <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse" />

      {/* Avatar container */}
      <div className="relative w-full h-full rounded-full border-2 border-cyan-400 bg-gray-900 flex items-center justify-center overflow-hidden"
        style={{
          boxShadow: '0 0 20px rgba(34, 211, 238, 0.6), inset 0 0 20px rgba(34, 211, 238, 0.1)'
        }}
      >
        {/* Avatar content */}
        <div className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center">
          <span className="text-white font-bold text-xl" style={{
            textShadow: '0 0 10px rgba(34, 211, 238, 0.8)'
          }}>
            JD
          </span>
        </div>
      </div>

      {/* Additional glow effect */}
      <div className="absolute inset-0 rounded-full border border-cyan-400/50" style={{
        boxShadow: '0 0 15px rgba(34, 211, 238, 0.4)'
      }} />
    </div>
  );
}
