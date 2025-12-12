"use client";

import { ChevronDown, Info } from "lucide-react";
import { useState } from "react";

export default function TokenInputEnterprise() {
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full max-w-lg bg-background border border-border rounded-lg overflow-hidden">
      {/* Header */}
      <div className="px-4 py-3 bg-muted/50 border-b border-border flex items-center justify-between">
        <span className="text-sm font-semibold text-foreground">Swap From</span>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>Balance: 10.5000 ETH</span>
          <Info className="w-3 h-3" />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Token Selector */}
          <button className="flex items-center gap-2 px-3 py-2 border border-border rounded-md hover:bg-muted transition-colors">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600" />
            <div className="text-left">
              <div className="font-semibold text-sm">ETH</div>
              <div className="text-xs text-muted-foreground">Ethereum</div>
            </div>
            <ChevronDown className="w-4 h-4" />
          </button>

          {/* Amount Input */}
          <div className="flex-1">
            <input
              type="text"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="0.00"
              className="w-full text-3xl font-bold bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
            />
            <div className="text-sm text-muted-foreground mt-1">≈ $0.00 USD</div>
          </div>
        </div>

        {/* Quick Amount Buttons */}
        <div className="flex gap-2 mt-4">
          {['25%', '50%', '75%', '100%'].map((percent) => (
            <button
              key={percent}
              className="flex-1 py-1.5 text-xs font-medium border border-border rounded hover:bg-muted transition-colors"
            >
              {percent}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
