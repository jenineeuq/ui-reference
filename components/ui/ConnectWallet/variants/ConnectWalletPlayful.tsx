"use client";

export default function ConnectWalletPlayful() {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-gradient-to-r from-pink-100 to-purple-100 dark:from-pink-900/30 dark:to-purple-900/30 rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all">
      <div className="w-10 h-10 bg-gradient-to-br from-pink-400 to-purple-500 rounded-full flex items-center justify-center text-xl">
        🦄
      </div>
      <div>
        <div className="text-sm font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
          My Wallet
        </div>
        <div className="text-xs text-gray-600 dark:text-gray-400">
          0x1234...5678
        </div>
      </div>
    </div>
  );
}
