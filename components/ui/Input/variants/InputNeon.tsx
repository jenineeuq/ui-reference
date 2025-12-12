"use client";

export default function InputNeon() {
  return (
    <input
      type="text"
      placeholder="ENTER TEXT..."
      className="w-64 px-4 py-3 bg-black text-cyan-400 placeholder-cyan-600 border-2 border-cyan-400 rounded-lg focus:outline-none transition-all font-mono"
      style={{
        boxShadow: "0 0 20px rgba(34, 211, 238, 0.3)",
        textShadow: "0 0 5px #22d3ee",
      }}
      onFocus={(e) => {
        e.currentTarget.style.boxShadow = "0 0 40px rgba(34, 211, 238, 0.6)";
      }}
      onBlur={(e) => {
        e.currentTarget.style.boxShadow = "0 0 20px rgba(34, 211, 238, 0.3)";
      }}
    />
  );
}
