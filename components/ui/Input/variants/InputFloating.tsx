"use client";

import { useState } from "react";

export default function InputFloating() {
  const [value, setValue] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const isFloating = isFocused || value.length > 0;

  return (
    <div className="relative w-64">
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className="w-full px-4 pt-6 pb-2 border-2 border-gray-300 dark:border-gray-600 rounded-lg bg-white dark:bg-gray-800 focus:border-primary focus:outline-none transition-all"
      />
      <label
        className={`absolute left-4 text-gray-500 transition-all duration-200 pointer-events-none ${
          isFloating
            ? "top-1.5 text-xs text-primary"
            : "top-4 text-base"
        }`}
      >
        Username
      </label>
    </div>
  );
}
