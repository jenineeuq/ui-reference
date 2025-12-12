"use client";

export default function InputGradient() {
  return (
    <div className="relative w-64">
      {/* Gradient border */}
      <div
        className="absolute inset-0 rounded-lg p-[2px] bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"
        style={{ margin: "-2px" }}
      />

      <input
        type="text"
        placeholder="Gradient border input..."
        className="relative w-full px-4 py-3 bg-white dark:bg-gray-900 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500/50 transition-all"
      />
    </div>
  );
}
