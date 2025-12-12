"use client";

export default function InputGlass() {
  return (
    <div className="relative w-64">
      <input
        type="text"
        placeholder="Glassmorphic input..."
        className="w-full px-4 py-3 rounded-lg text-white placeholder-white/60 border border-white/20 focus:border-white/40 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all backdrop-blur-xl"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
        }}
      />
      <div
        className="absolute inset-0 rounded-lg pointer-events-none"
        style={{
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.1)",
        }}
      />
    </div>
  );
}
