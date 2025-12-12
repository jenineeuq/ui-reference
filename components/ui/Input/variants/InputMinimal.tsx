"use client";

import { useState } from "react";

export default function InputMinimal() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <input
      type="text"
      placeholder="Enter text..."
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      className="w-64 px-0 py-2 bg-transparent border-0 border-b-2 border-gray-300 dark:border-gray-600 focus:border-primary focus:outline-none transition-all duration-200"
      style={{
        borderBottomWidth: isFocused ? "3px" : "2px",
      }}
    />
  );
}
