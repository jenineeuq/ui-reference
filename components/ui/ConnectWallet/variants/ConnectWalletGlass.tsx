"use client";

import { Wallet, ChevronDown } from "lucide-react";

export default function ConnectWalletGlass() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 backdrop-blur-xl bg-white/10 border border-white/20 rounded-xl shadow-lg">
      <div className="w-10 h-10 bg-gradient-to-br from-blue-400 to-purple-500 rounded-full flex items-center justify-center">
        <Wallet className="w-5 h-5 text-white" />
      </div>
      <div className="flex-1">
        <div className="text-sm font-medium text-white">0x1234...5678</div>
        <div className="text-xs text-white/70">2.45 ETH</div>
      </div>
      <ChevronDown className="w-4 h-4 text-white/70" />
    </div>
  );
}
