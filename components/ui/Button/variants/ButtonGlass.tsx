"use client";

export default function ButtonGlass() {
  return (
    <button className="relative px-6 py-3 rounded-lg font-medium text-white overflow-hidden group">
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-white/5 backdrop-blur-md border border-white/20 rounded-lg group-hover:bg-white/30 transition-all duration-300" />

      {/* Shine effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
      </div>

      {/* Button text */}
      <span className="relative z-10 drop-shadow-lg">Glassmorphic</span>

      {/* Shadow */}
      <div className="absolute inset-0 rounded-lg shadow-xl group-hover:shadow-2xl transition-shadow duration-300" />
    </button>
  );
}
