"use client";

export default function CardNeumorphic() {
  return (
    <div
      className="w-64 p-6 rounded-2xl"
      style={{
        background: "#e0e5ec",
        boxShadow:
          "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)",
      }}
    >
      <div
        className="w-12 h-12 rounded-lg mb-4 flex items-center justify-center"
        style={{
          background: "#e0e5ec",
          boxShadow:
            "inset 4px 4px 8px rgba(163, 177, 198, 0.4), inset -4px -4px 8px rgba(255, 255, 255, 0.5)",
        }}
      >
        <span className="text-xl">✨</span>
      </div>
      <h3 className="text-lg font-bold mb-2 text-gray-700">Soft UI Card</h3>
      <p className="text-sm text-gray-600">
        Neumorphic design with embossed appearance and unified color palette.
      </p>
    </div>
  );
}
