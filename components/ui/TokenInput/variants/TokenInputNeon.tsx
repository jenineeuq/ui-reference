"use client";

import { ChevronDown, Zap } from "lucide-react";
import { useState } from "react";

export default function TokenInputNeon() {
  const [amount, setAmount] = useState("");

  return (
    <div
      className="w-full max-w-md p-5 rounded-xl bg-black border-2 border-cyan-400"
      style={{
        boxShadow: '0 0 30px rgba(34, 211, 238, 0.3), inset 0 0 30px rgba(34, 211, 238, 0.05)'
      }}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <Zap className="w-4 h-4 text-cyan-400" style={{ filter: 'drop-shadow(0 0 4px rgba(34, 211, 238, 0.8))' }} />
          <span className="text-sm font-bold text-cyan-400" style={{ textShadow: '0 0 10px rgba(34, 211, 238, 0.8)' }}>
            SWAP TOKENS
          </span>
        </div>
        <span className="text-xs text-cyan-400/60">BAL: 10.5</span>
      </div>

      <div className="flex items-center gap-3 mb-3">
        {/* Token Selector */}
        <button
          className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-900 border border-cyan-400 hover:bg-gray-800 transition-all"
          style={{
            boxShadow: '0 0 15px rgba(34, 211, 238, 0.2)'
          }}
        >
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 animate-pulse" />
          <span className="font-bold text-cyan-400">ETH</span>
          <ChevronDown className="w-4 h-4 text-cyan-400" />
        </button>

        {/* Amount Input */}
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          className="flex-1 text-3xl font-bold bg-transparent outline-none text-cyan-400 placeholder:text-cyan-400/30"
          style={{
            textShadow: '0 0 10px rgba(34, 211, 238, 0.5)'
          }}
        />
      </div>

      <div className="flex items-center justify-between">
        <span className="text-sm text-cyan-400/70">≈ $0.00</span>
        <button
          className="px-3 py-1 text-sm font-bold text-cyan-400 border border-cyan-400 rounded hover:bg-cyan-400 hover:text-black transition-all"
          style={{
            boxShadow: '0 0 10px rgba(34, 211, 238, 0.3)'
          }}
        >
          MAX
        </button>
      </div>
    </div>
  );
}
