"use client";

export default function ButtonNeon() {
  return (
    <button className="relative px-6 py-3 bg-black text-cyan-400 font-bold rounded-lg border-2 border-cyan-400 overflow-hidden group">
      {/* Neon glow effect */}
      <div
        className="absolute inset-0 opacity-50 group-hover:opacity-100 transition-opacity duration-300 blur-sm"
        style={{
          boxShadow: "0 0 20px #22d3ee, inset 0 0 20px #22d3ee",
        }}
      />

      {/* Scan line animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="h-full w-full bg-gradient-to-b from-transparent via-cyan-400/20 to-transparent animate-slide-in" />
      </div>

      {/* Text with glow */}
      <span
        className="relative z-10"
        style={{
          textShadow: "0 0 10px #22d3ee, 0 0 20px #22d3ee",
        }}
      >
        NEON GLOW
      </span>
    </button>
  );
}
