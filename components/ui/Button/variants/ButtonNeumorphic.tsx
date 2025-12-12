"use client";

export default function ButtonNeumorphic() {
  return (
    <button
      className="px-6 py-3 rounded-xl font-semibold text-gray-700 dark:text-gray-200 transition-all duration-200 active:shadow-inner"
      style={{
        background: "#e0e5ec",
        boxShadow: "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.boxShadow = "6px 6px 12px rgba(163, 177, 198, 0.6), -6px -6px 12px rgba(255, 255, 255, 0.5)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.boxShadow = "9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)";
      }}
    >
      Soft UI
    </button>
  );
}
