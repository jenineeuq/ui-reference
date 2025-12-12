"use client";

import { useState } from "react";

export default function ButtonBrutalist() {
  const [isPressed, setIsPressed] = useState(false);

  return (
    <button
      onMouseDown={() => setIsPressed(true)}
      onMouseUp={() => setIsPressed(false)}
      onMouseLeave={() => setIsPressed(false)}
      className="px-6 py-3 bg-yellow-300 text-black font-black text-lg uppercase border-4 border-black rounded-none transition-transform duration-100 hover:translate-x-[-2px] hover:translate-y-[-2px]"
      style={{
        boxShadow: isPressed ? "2px 2px 0 black" : "6px 6px 0 black",
        transform: isPressed ? "translate(4px, 4px)" : "translate(0, 0)",
      }}
    >
      BOLD!
    </button>
  );
}
