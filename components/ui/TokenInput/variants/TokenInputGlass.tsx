"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TokenInputGlass() {
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full max-w-md p-5 rounded-xl backdrop-blur-md bg-white/10 dark:bg-black/10 border border-white/20">
      <div className="flex items-center justify-between mb-3">
        <span className="text-sm font-medium text-white/80">You Pay</span>
        <span className="text-sm text-white/60">Balance: 10.5</span>
      </div>

      <div className="flex items-center gap-4 mb-3">
        {/* Token Selector - Glass */}
        <button className="flex items-center gap-2 px-4 py-2 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 hover:bg-white/30 transition-all">
          <div className="w-7 h-7 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500" />
          <span className="font-bold text-white">ETH</span>
          <ChevronDown className="w-4 h-4 text-white" />
        </button>

        {/* Amount Input */}
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          className="flex-1 text-3xl font-bold bg-transparent outline-none text-white placeholder:text-white/40"
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-white/60">≈ $0.00 USD</span>
        <button className="px-3 py-1 text-sm font-bold text-cyan-400 hover:text-cyan-300 transition-colors">
          MAX
        </button>
      </div>
    </div>
  );
}
