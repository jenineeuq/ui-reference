"use client";

import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function TokenInputMinimal() {
  const [amount, setAmount] = useState("");

  return (
    <div className="w-full max-w-md p-4 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-lg">
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm text-muted-foreground">Amount</span>
        <span className="text-sm text-muted-foreground">Balance: 10.5 ETH</span>
      </div>

      <div className="flex items-center gap-3">
        {/* Token Selector */}
        <button className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted transition-colors">
          <div className="w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500" />
          <span className="font-semibold">ETH</span>
          <ChevronDown className="w-4 h-4" />
        </button>

        {/* Amount Input */}
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          placeholder="0.0"
          className="flex-1 text-2xl font-semibold bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
        />

        {/* MAX Button */}
        <button className="px-3 py-1 text-sm font-medium text-primary hover:bg-primary/10 rounded-md transition-colors">
          MAX
        </button>
      </div>

      <div className="mt-2 text-sm text-muted-foreground">
        ≈ $0.00 USD
      </div>
    </div>
  );
}
