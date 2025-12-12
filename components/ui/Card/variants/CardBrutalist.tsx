"use client";

export default function CardBrutalist() {
  return (
    <div
      className="w-64 p-6 bg-yellow-200 border-4 border-black rounded-none transition-transform duration-100 hover:translate-x-[-4px] hover:translate-y-[-4px]"
      style={{
        boxShadow: "8px 8px 0 black",
      }}
    >
      <div className="w-12 h-12 bg-black mb-4" />
      <h3 className="text-xl font-black uppercase mb-2">BRUTAL CARD</h3>
      <p className="text-sm font-bold">
        Heavy borders, offset shadow, bold typography. High contrast design.
      </p>
    </div>
  );
}
