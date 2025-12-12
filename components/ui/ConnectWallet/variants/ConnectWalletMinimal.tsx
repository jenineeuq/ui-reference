"use client";

import { Copy } from "lucide-react";

export default function ConnectWalletMinimal() {
  const address = "0x1234...5678";

  return (
    <div className="flex items-center gap-3 px-4 py-2 bg-muted rounded-lg hover:bg-muted/80 transition-colors">
      <div className="w-8 h-8 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full" />
      <span className="font-mono text-sm">{address}</span>
      <button className="p-1 hover:bg-background rounded transition-colors">
        <Copy className="w-4 h-4" />
      </button>
    </div>
  );
}
