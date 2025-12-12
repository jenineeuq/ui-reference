"use client";

export default function BadgeNeon() {
  return (
    <span
      className="inline-flex items-center px-3 py-1 rounded-full bg-black border border-cyan-400 text-cyan-400 text-xs font-medium"
      style={{
        boxShadow: '0 0 10px rgba(34, 211, 238, 0.5)',
        textShadow: '0 0 8px rgba(34, 211, 238, 0.8)'
      }}
    >
      Live
    </span>
  );
}
