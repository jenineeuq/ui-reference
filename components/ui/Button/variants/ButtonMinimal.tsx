"use client";

import { useState } from "react";

export default function ButtonMinimal() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <button
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="px-6 py-2.5 bg-transparent hover:bg-muted/50 text-foreground font-medium rounded-md transition-all duration-200 ease-out active:scale-95"
    >
      Click me
    </button>
  );
}
