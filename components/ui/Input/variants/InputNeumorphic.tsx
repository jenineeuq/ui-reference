"use client";

export default function InputNeumorphic() {
  return (
    <input
      type="text"
      placeholder="Soft UI input..."
      className="w-64 px-4 py-3 rounded-xl text-gray-700 placeholder-gray-500 focus:outline-none transition-all"
      style={{
        background: "#e0e5ec",
        boxShadow: "inset 6px 6px 10px rgba(163, 177, 198, 0.4), inset -6px -6px 10px rgba(255, 255, 255, 0.5)",
      }}
    />
  );
}
