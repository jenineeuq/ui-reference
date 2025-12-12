"use client";

export default function CardNeon() {
  return (
    <div
      className="w-64 p-6 bg-black border-2 border-cyan-400 rounded-lg relative overflow-hidden"
      style={{
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.5), inset 0 0 30px rgba(34, 211, 238, 0.1)",
      }}
    >
      {/* Scan lines */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        <div className="h-full w-full" style={{
          backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #22d3ee 2px, #22d3ee 4px)",
        }} />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <div
          className="w-12 h-12 border-2 border-pink-500 rounded-lg mb-4"
          style={{
            boxShadow: "0 0 20px rgba(236, 72, 153, 0.6)",
          }}
        />
        <h3
          className="text-lg font-bold mb-2 text-cyan-400"
          style={{
            textShadow: "0 0 10px #22d3ee",
          }}
        >
          NEON CYBER
        </h3>
        <p className="text-sm text-cyan-100">
          Dark cyberpunk aesthetic with glowing neon borders and atmospheric effects.
        </p>
      </div>
    </div>
  );
}
