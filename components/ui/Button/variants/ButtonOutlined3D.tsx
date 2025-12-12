"use client";

export default function ButtonOutlined3D() {
  return (
    <button className="px-6 py-3 bg-transparent text-purple-600 dark:text-purple-400 font-semibold border-2 border-purple-600 dark:border-purple-400 rounded-lg transition-all duration-300 hover:scale-105 hover:rotate-2 active:rotate-0"
      style={{
        transform: "perspective(500px)",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "perspective(500px) rotateX(10deg) rotateY(-5deg) scale(1.05)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "perspective(500px) rotateX(0deg) rotateY(0deg) scale(1)";
      }}
    >
      3D Outlined
    </button>
  );
}
