"use client";

export default function InputBrutalist() {
  return (
    <input
      type="text"
      placeholder="BRUTAL INPUT"
      className="w-64 px-4 py-3 bg-white border-4 border-black rounded-none font-bold placeholder-gray-600 focus:outline-none transition-transform duration-100 focus:translate-x-[-2px] focus:translate-y-[-2px]"
      style={{
        boxShadow: "4px 4px 0 black",
      }}
    />
  );
}
