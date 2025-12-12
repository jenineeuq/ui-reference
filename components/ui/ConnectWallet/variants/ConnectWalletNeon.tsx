"use client";

export default function ConnectWalletNeon() {
  return (
    <div
      className="flex items-center gap-3 px-4 py-3 bg-black border-2 border-cyan-400 rounded-lg"
      style={{
        boxShadow: "0 0 30px rgba(34, 211, 238, 0.5)",
      }}
    >
      {/* Hexagon avatar */}
      <div
        className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-500 flex items-center justify-center text-white font-bold"
        style={{
          clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
          boxShadow: "0 0 20px rgba(34, 211, 238, 0.6)",
        }}
      >
        W
      </div>

      <div className="flex-1">
        <div
          className="text-sm font-mono text-cyan-400"
          style={{ textShadow: "0 0 10px #22d3ee" }}
        >
          0x1234...5678
        </div>
        <div className="text-xs text-green-400">● CONNECTED</div>
      </div>
    </div>
  );
}
