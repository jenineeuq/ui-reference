"use client";

import { Settings } from "lucide-react";

export default function ConnectWalletEnterprise() {
  return (
    <div className="flex items-center gap-3 px-4 py-2.5 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-sm">
      <div className="flex items-center gap-2">
        <div className="w-2 h-2 bg-green-500 rounded-full" />
        <span className="font-mono text-sm">0x1234...5678</span>
      </div>
      <div className="text-sm text-gray-600 dark:text-gray-400">
        $1,234.56
      </div>
      <button className="p-1.5 hover:bg-gray-100 dark:hover:bg-gray-700 rounded transition-colors">
        <Settings className="w-4 h-4" />
      </button>
    </div>
  );
}
