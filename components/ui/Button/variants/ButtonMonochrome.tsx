"use client";

import { useState } from "react";

export default function ButtonMonochrome() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-6 py-3 font-bold border-2 rounded-md transition-all duration-200"
      style={{
        backgroundColor: isHovered ? "#000" : "#fff",
        color: isHovered ? "#fff" : "#000",
        borderColor: "#000",
      }}
    >
      MINIMAL
    </button>
  );
}
