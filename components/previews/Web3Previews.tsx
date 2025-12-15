"use client";

import { useState, useEffect } from "react";
import {
  Wallet, ChevronDown, Check, Copy, ExternalLink, ArrowDownUp,
  TrendingUp, TrendingDown, Clock, AlertCircle, CheckCircle,
  Loader2, Image, ArrowRight, ThumbsUp, ThumbsDown, X, Fuel,
  BarChart3, RefreshCw
} from "lucide-react";

// ===== WALLET =====

// ConnectWalletButton Preview
export function ConnectWalletButtonPreview() {
  const [connected, setConnected] = useState(false);
  const [connecting, setConnecting] = useState(false);

  const handleConnect = () => {
    setConnecting(true);
    setTimeout(() => {
      setConnecting(false);
      setConnected(true);
    }, 1500);
  };

  if (connected) {
    return (
      <div className="flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-xl">
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
        <div className="text-left">
          <div className="text-sm font-medium text-foreground">0x1234...5678</div>
          <div className="text-xs text-muted-foreground">2.45 ETH</div>
        </div>
        <button onClick={() => setConnected(false)} className="ml-2 p-1 hover:bg-muted rounded">
          <X className="w-4 h-4 text-muted-foreground" />
        </button>
      </div>
    );
  }

  return (
    <button
      onClick={handleConnect}
      disabled={connecting}
      className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-xl font-medium hover:opacity-90 disabled:opacity-70 transition-all"
    >
      {connecting ? (
        <>
          <Loader2 className="w-5 h-5 animate-spin" />
          Connecting...
        </>
      ) : (
        <>
          <Wallet className="w-5 h-5" />
          Connect Wallet
        </>
      )}
    </button>
  );
}

// NetworkSwitcher Preview
export function NetworkSwitcherPreview() {
  const [open, setOpen] = useState(false);
  const [network, setNetwork] = useState({ name: "Ethereum", icon: "🔷", color: "bg-blue-500" });

  const networks = [
    { name: "Ethereum", icon: "🔷", color: "bg-blue-500" },
    { name: "Polygon", icon: "🟣", color: "bg-purple-500" },
    { name: "Arbitrum", icon: "🔵", color: "bg-blue-400" },
    { name: "Optimism", icon: "🔴", color: "bg-red-500" },
    { name: "Base", icon: "🔷", color: "bg-blue-600" },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2.5 bg-background border border-border rounded-xl hover:bg-muted transition-colors"
      >
        <div className={`w-5 h-5 rounded-full ${network.color} flex items-center justify-center text-xs`}>
          {network.icon}
        </div>
        <span className="font-medium text-sm">{network.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-xl shadow-xl p-1 z-20">
            {networks.map((n) => (
              <button
                key={n.name}
                onClick={() => { setNetwork(n); setOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm transition-colors ${
                  network.name === n.name ? "bg-primary/10 text-primary" : "hover:bg-muted"
                }`}
              >
                <div className={`w-5 h-5 rounded-full ${n.color} flex items-center justify-center text-xs`}>
                  {n.icon}
                </div>
                <span>{n.name}</span>
                {network.name === n.name && <Check className="w-4 h-4 ml-auto" />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// GasButton Preview
export function GasButtonPreview() {
  const [speed, setSpeed] = useState("standard");
  const [open, setOpen] = useState(false);

  const options = [
    { id: "slow", label: "Slow", gwei: "12", time: "~10 min", price: "$0.52" },
    { id: "standard", label: "Standard", gwei: "15", time: "~3 min", price: "$0.65" },
    { id: "fast", label: "Fast", gwei: "20", time: "~30 sec", price: "$0.87" },
  ];

  const current = options.find(o => o.id === speed)!;

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 bg-background border border-border rounded-xl hover:bg-muted transition-colors"
      >
        <Fuel className="w-4 h-4 text-orange-500" />
        <span className="text-sm font-medium">{current.gwei} Gwei</span>
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 w-56 bg-background border border-border rounded-xl shadow-xl p-2 z-20">
            <div className="text-xs text-muted-foreground px-2 mb-2">Gas Price</div>
            {options.map((opt) => (
              <button
                key={opt.id}
                onClick={() => { setSpeed(opt.id); setOpen(false); }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-lg text-sm transition-colors ${
                  speed === opt.id ? "bg-primary/10" : "hover:bg-muted"
                }`}
              >
                <div>
                  <div className="font-medium">{opt.label}</div>
                  <div className="text-xs text-muted-foreground">{opt.time}</div>
                </div>
                <div className="text-right">
                  <div className="font-medium">{opt.gwei} Gwei</div>
                  <div className="text-xs text-muted-foreground">{opt.price}</div>
                </div>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ===== TOKENS =====

// TokenInput Preview
export function TokenInputPreview() {
  const [amount, setAmount] = useState("0.5");
  const [open, setOpen] = useState(false);
  const [token, setToken] = useState({ symbol: "ETH", name: "Ethereum", balance: "2.45", icon: "🔷" });

  const tokens = [
    { symbol: "ETH", name: "Ethereum", balance: "2.45", icon: "🔷" },
    { symbol: "USDC", name: "USD Coin", balance: "1,250.00", icon: "💵" },
    { symbol: "WBTC", name: "Wrapped BTC", balance: "0.085", icon: "🟠" },
  ];

  return (
    <div className="w-full max-w-sm p-4 bg-muted/50 rounded-xl space-y-2">
      <div className="flex justify-between text-sm">
        <span className="text-muted-foreground">You pay</span>
        <span className="text-muted-foreground">Balance: {token.balance}</span>
      </div>
      <div className="flex items-center gap-2">
        <input
          type="text"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="flex-1 bg-transparent text-2xl font-medium focus:outline-none"
          placeholder="0.0"
        />
        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3 py-2 bg-background rounded-xl border border-border hover:bg-muted"
          >
            <span className="text-lg">{token.icon}</span>
            <span className="font-medium">{token.symbol}</span>
            <ChevronDown className="w-4 h-4" />
          </button>
          {open && (
            <div className="absolute top-full right-0 mt-1 w-48 bg-background border border-border rounded-xl shadow-xl p-1 z-10">
              {tokens.map((t) => (
                <button
                  key={t.symbol}
                  onClick={() => { setToken(t); setOpen(false); }}
                  className="w-full flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-muted"
                >
                  <span className="text-lg">{t.icon}</span>
                  <div className="text-left flex-1">
                    <div className="font-medium text-sm">{t.symbol}</div>
                    <div className="text-xs text-muted-foreground">{t.name}</div>
                  </div>
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between text-sm text-muted-foreground">
        <span>≈ $1,625.50</span>
        <button className="text-primary hover:underline">MAX</button>
      </div>
    </div>
  );
}

// TokenList Preview
export function TokenListPreview() {
  const tokens = [
    { symbol: "ETH", name: "Ethereum", balance: "2.4523", value: "$7,982.45", change: "+5.2%", positive: true, icon: "🔷" },
    { symbol: "USDC", name: "USD Coin", balance: "1,250.00", value: "$1,250.00", change: "0.0%", positive: true, icon: "💵" },
    { symbol: "WBTC", name: "Wrapped BTC", balance: "0.0852", value: "$3,652.18", change: "-2.1%", positive: false, icon: "🟠" },
    { symbol: "LINK", name: "Chainlink", balance: "45.5", value: "$682.50", change: "+8.4%", positive: true, icon: "🔗" },
  ];

  return (
    <div className="w-full max-w-sm border border-border rounded-xl overflow-hidden">
      <div className="px-4 py-3 bg-muted/50 border-b border-border">
        <span className="font-medium text-sm">Your Tokens</span>
      </div>
      <div className="divide-y divide-border">
        {tokens.map((token) => (
          <div key={token.symbol} className="flex items-center gap-3 px-4 py-3 hover:bg-muted/50 transition-colors cursor-pointer">
            <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-xl">
              {token.icon}
            </div>
            <div className="flex-1">
              <div className="font-medium text-sm">{token.symbol}</div>
              <div className="text-xs text-muted-foreground">{token.name}</div>
            </div>
            <div className="text-right">
              <div className="font-medium text-sm">{token.value}</div>
              <div className={`text-xs ${token.positive ? "text-green-500" : "text-red-500"}`}>
                {token.change}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// TokenPair Preview
export function TokenPairPreview() {
  return (
    <div className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl">
      <div className="flex -space-x-2">
        <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-lg border-2 border-background z-10">
          🔷
        </div>
        <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-lg border-2 border-background">
          💵
        </div>
      </div>
      <div className="flex-1">
        <div className="font-medium">ETH / USDC</div>
        <div className="text-sm text-muted-foreground">Uniswap V3</div>
      </div>
      <div className="text-right">
        <div className="font-medium text-green-500">+24.5%</div>
        <div className="text-xs text-muted-foreground">APR</div>
      </div>
    </div>
  );
}

// ===== TRANSACTIONS =====

// TxProgressModal Preview
export function TxProgressModalPreview() {
  const [step, setStep] = useState(2);

  const steps = [
    { label: "Approve", status: "complete" },
    { label: "Confirm", status: "current" },
    { label: "Complete", status: "pending" },
  ];

  return (
    <div className="w-full max-w-sm p-6 bg-background border border-border rounded-xl text-center">
      <Loader2 className="w-12 h-12 mx-auto mb-4 text-primary animate-spin" />
      <h3 className="font-semibold text-lg mb-1">Confirming Transaction</h3>
      <p className="text-sm text-muted-foreground mb-6">Please wait while we process your transaction</p>

      <div className="flex justify-between mb-6">
        {steps.map((s, i) => (
          <div key={s.label} className="flex flex-col items-center gap-1">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
              i < step ? "bg-green-500 text-white" :
              i === step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
            }`}>
              {i < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            <span className="text-xs text-muted-foreground">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="text-xs text-muted-foreground">
        View on <span className="text-primary cursor-pointer">Etherscan</span>
      </div>
    </div>
  );
}

// TxToast Preview
export function TxToastPreview() {
  const txs = [
    { status: "success", message: "Swap completed", hash: "0x1234...5678" },
    { status: "pending", message: "Transaction pending", hash: "0xabcd...efgh" },
  ];

  return (
    <div className="space-y-2">
      {txs.map((tx, i) => (
        <div key={i} className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl">
          {tx.status === "success" ? (
            <CheckCircle className="w-5 h-5 text-green-500" />
          ) : (
            <Loader2 className="w-5 h-5 text-primary animate-spin" />
          )}
          <div className="flex-1">
            <div className="text-sm font-medium">{tx.message}</div>
            <div className="text-xs text-muted-foreground">{tx.hash}</div>
          </div>
          <ExternalLink className="w-4 h-4 text-muted-foreground cursor-pointer hover:text-foreground" />
        </div>
      ))}
    </div>
  );
}

// TxHistoryList Preview
export function TxHistoryListPreview() {
  const txs = [
    { type: "Swap", from: "ETH", to: "USDC", amount: "0.5 ETH", time: "2 min ago", status: "success" },
    { type: "Send", from: "USDC", to: "", amount: "100 USDC", time: "1 hour ago", status: "success" },
    { type: "Approve", from: "WBTC", to: "", amount: "Unlimited", time: "3 hours ago", status: "success" },
  ];

  return (
    <div className="w-full max-w-sm border border-border rounded-xl">
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <span className="font-medium text-sm">Recent Transactions</span>
        <button className="text-xs text-primary">View all</button>
      </div>
      <div className="divide-y divide-border">
        {txs.map((tx, i) => (
          <div key={i} className="flex items-center gap-3 px-4 py-3">
            <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center">
              <ArrowDownUp className="w-4 h-4" />
            </div>
            <div className="flex-1">
              <div className="text-sm font-medium">
                {tx.type} {tx.from} {tx.to && `→ ${tx.to}`}
              </div>
              <div className="text-xs text-muted-foreground">{tx.time}</div>
            </div>
            <div className="text-right">
              <div className="text-sm">{tx.amount}</div>
              <div className="text-xs text-green-500">Completed</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== DEFI =====

// SwapCard Preview
export function SwapCardPreview() {
  const [fromAmount, setFromAmount] = useState("1.0");
  const [toAmount] = useState("3,250.00");

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-3">
      <div className="flex justify-between items-center mb-2">
        <span className="font-semibold">Swap</span>
        <button className="p-1.5 hover:bg-muted rounded-lg">
          <RefreshCw className="w-4 h-4" />
        </button>
      </div>

      {/* From */}
      <div className="p-3 bg-muted/50 rounded-xl">
        <div className="flex justify-between text-sm text-muted-foreground mb-1">
          <span>From</span>
          <span>Balance: 2.45</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={fromAmount}
            onChange={(e) => setFromAmount(e.target.value)}
            className="flex-1 bg-transparent text-xl font-medium focus:outline-none"
          />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg">
            <span>🔷</span>
            <span className="font-medium">ETH</span>
          </div>
        </div>
      </div>

      {/* Swap button */}
      <div className="flex justify-center -my-1">
        <button className="p-2 bg-muted rounded-full hover:bg-muted/80">
          <ArrowDownUp className="w-4 h-4" />
        </button>
      </div>

      {/* To */}
      <div className="p-3 bg-muted/50 rounded-xl">
        <div className="flex justify-between text-sm text-muted-foreground mb-1">
          <span>To</span>
          <span>Balance: 1,250.00</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={toAmount}
            readOnly
            className="flex-1 bg-transparent text-xl font-medium focus:outline-none"
          />
          <div className="flex items-center gap-2 px-3 py-1.5 bg-background rounded-lg">
            <span>💵</span>
            <span className="font-medium">USDC</span>
          </div>
        </div>
      </div>

      <button className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90">
        Swap
      </button>
    </div>
  );
}

// StakeCard Preview
export function StakeCardPreview() {
  const [amount, setAmount] = useState("1.0");

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold">Stake ETH</span>
        <span className="text-sm text-green-500 font-medium">4.5% APY</span>
      </div>

      <div className="p-3 bg-muted/50 rounded-xl">
        <div className="flex justify-between text-sm text-muted-foreground mb-1">
          <span>Amount</span>
          <span>Available: 2.45 ETH</span>
        </div>
        <div className="flex items-center gap-2">
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-xl font-medium focus:outline-none"
          />
          <span className="font-medium text-muted-foreground">ETH</span>
        </div>
      </div>

      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">You will receive</span>
          <span className="font-medium">0.98 stETH</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Exchange rate</span>
          <span>1 ETH = 0.98 stETH</span>
        </div>
      </div>

      <button className="w-full py-3 bg-primary text-white rounded-xl font-medium hover:bg-primary/90">
        Stake
      </button>
    </div>
  );
}

// LendingMetrics Preview
export function LendingMetricsPreview() {
  return (
    <div className="w-full max-w-md grid grid-cols-2 gap-3">
      {[
        { label: "Total Supply", value: "$12.5M", change: "+5.2%" },
        { label: "Total Borrow", value: "$8.2M", change: "+3.1%" },
        { label: "Supply APY", value: "4.25%", change: "+0.5%" },
        { label: "Borrow APY", value: "6.75%", change: "-0.2%" },
      ].map((metric) => (
        <div key={metric.label} className="p-4 bg-background border border-border rounded-xl">
          <div className="text-sm text-muted-foreground mb-1">{metric.label}</div>
          <div className="text-xl font-semibold">{metric.value}</div>
          <div className={`text-xs ${metric.change.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
            {metric.change}
          </div>
        </div>
      ))}
    </div>
  );
}

// PositionCard Preview
export function PositionCardPreview() {
  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-3">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex -space-x-2">
            <div className="w-8 h-8 rounded-full bg-blue-500 flex items-center justify-center text-sm border-2 border-background">🔷</div>
            <div className="w-8 h-8 rounded-full bg-green-500 flex items-center justify-center text-sm border-2 border-background">💵</div>
          </div>
          <span className="font-medium">ETH-USDC</span>
        </div>
        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full">
          Active
        </span>
      </div>

      <div className="grid grid-cols-2 gap-3">
        <div>
          <div className="text-xs text-muted-foreground">Value</div>
          <div className="font-medium">$5,234.50</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">PnL</div>
          <div className="font-medium text-green-500">+$423.20 (+8.8%)</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">APR</div>
          <div className="font-medium">24.5%</div>
        </div>
        <div>
          <div className="text-xs text-muted-foreground">Range</div>
          <div className="font-medium">$2,800 - $3,500</div>
        </div>
      </div>

      <div className="flex gap-2">
        <button className="flex-1 py-2 border border-border rounded-lg text-sm hover:bg-muted">
          Manage
        </button>
        <button className="flex-1 py-2 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600">
          Close
        </button>
      </div>
    </div>
  );
}

// ===== PERPS TRADING =====

// TradingInterface Preview
export function TradingInterfacePreview() {
  const [side, setSide] = useState<"long" | "short">("long");

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-4">
      {/* Side selector */}
      <div className="grid grid-cols-2 gap-1 p-1 bg-muted rounded-lg">
        <button
          onClick={() => setSide("long")}
          className={`py-2 rounded-md text-sm font-medium transition-colors ${
            side === "long" ? "bg-green-500 text-white" : "text-muted-foreground"
          }`}
        >
          Long
        </button>
        <button
          onClick={() => setSide("short")}
          className={`py-2 rounded-md text-sm font-medium transition-colors ${
            side === "short" ? "bg-red-500 text-white" : "text-muted-foreground"
          }`}
        >
          Short
        </button>
      </div>

      {/* Size input */}
      <div className="p-3 bg-muted/50 rounded-xl">
        <div className="text-sm text-muted-foreground mb-1">Size</div>
        <div className="flex items-center gap-2">
          <input
            defaultValue="1000"
            className="flex-1 bg-transparent text-xl font-medium focus:outline-none"
          />
          <span className="font-medium">USDC</span>
        </div>
      </div>

      {/* Leverage slider */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">Leverage</span>
          <span className="font-medium">10x</span>
        </div>
        <input type="range" min="1" max="50" defaultValue="10" className="w-full" />
        <div className="flex justify-between text-xs text-muted-foreground">
          <span>1x</span>
          <span>50x</span>
        </div>
      </div>

      {/* Details */}
      <div className="space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Entry Price</span>
          <span>$3,245.50</span>
        </div>
        <div className="flex justify-between">
          <span className="text-muted-foreground">Liq. Price</span>
          <span className="text-red-500">$2,920.95</span>
        </div>
      </div>

      <button className={`w-full py-3 rounded-xl font-medium text-white ${
        side === "long" ? "bg-green-500 hover:bg-green-600" : "bg-red-500 hover:bg-red-600"
      }`}>
        {side === "long" ? "Open Long" : "Open Short"}
      </button>
    </div>
  );
}

// TradingChart Preview
export function TradingChartPreview() {
  return (
    <div className="w-full max-w-md p-4 bg-background border border-border rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <div>
          <span className="font-semibold">ETH/USD</span>
          <span className="ml-2 text-green-500">$3,245.50 (+2.4%)</span>
        </div>
        <div className="flex gap-1">
          {["1H", "4H", "1D", "1W"].map((tf) => (
            <button key={tf} className={`px-2 py-1 text-xs rounded ${tf === "1D" ? "bg-primary text-white" : "hover:bg-muted"}`}>
              {tf}
            </button>
          ))}
        </div>
      </div>
      {/* Simplified chart representation */}
      <div className="h-32 flex items-end gap-1">
        {[40, 60, 45, 70, 55, 80, 65, 75, 85, 70, 90, 85].map((h, i) => (
          <div
            key={i}
            className={`flex-1 rounded-t ${i >= 8 ? "bg-green-500" : "bg-red-500"}`}
            style={{ height: `${h}%` }}
          />
        ))}
      </div>
    </div>
  );
}

// OrderBook Preview
export function OrderBookPreview() {
  const asks = [
    { price: "3,248.50", size: "12.5", total: "40,606" },
    { price: "3,247.00", size: "8.2", total: "26,625" },
    { price: "3,246.50", size: "5.8", total: "18,830" },
  ];
  const bids = [
    { price: "3,245.00", size: "10.2", total: "33,099" },
    { price: "3,244.50", size: "15.6", total: "50,614" },
    { price: "3,243.00", size: "7.8", total: "25,295" },
  ];

  return (
    <div className="w-full max-w-xs bg-background border border-border rounded-xl overflow-hidden">
      <div className="px-3 py-2 bg-muted/50 border-b border-border text-sm font-medium">
        Order Book
      </div>
      <div className="p-2 text-xs">
        <div className="grid grid-cols-3 text-muted-foreground mb-1 px-1">
          <span>Price</span>
          <span className="text-right">Size</span>
          <span className="text-right">Total</span>
        </div>
        {/* Asks */}
        {asks.map((ask, i) => (
          <div key={i} className="grid grid-cols-3 px-1 py-0.5 text-red-500">
            <span>{ask.price}</span>
            <span className="text-right">{ask.size}</span>
            <span className="text-right">{ask.total}</span>
          </div>
        ))}
        {/* Spread */}
        <div className="text-center py-1 text-muted-foreground">
          Spread: $1.50 (0.05%)
        </div>
        {/* Bids */}
        {bids.map((bid, i) => (
          <div key={i} className="grid grid-cols-3 px-1 py-0.5 text-green-500">
            <span>{bid.price}</span>
            <span className="text-right">{bid.size}</span>
            <span className="text-right">{bid.total}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// OrderForm Preview
export function OrderFormPreview() {
  const [type, setType] = useState("limit");

  return (
    <div className="w-full max-w-xs p-4 bg-background border border-border rounded-xl space-y-3">
      <div className="flex gap-1 p-1 bg-muted rounded-lg">
        {["limit", "market", "stop"].map((t) => (
          <button
            key={t}
            onClick={() => setType(t)}
            className={`flex-1 py-1.5 text-xs rounded capitalize ${
              type === t ? "bg-background shadow" : "text-muted-foreground"
            }`}
          >
            {t}
          </button>
        ))}
      </div>

      <div className="space-y-2">
        <div className="p-2 bg-muted/50 rounded-lg">
          <div className="text-xs text-muted-foreground">Price</div>
          <input defaultValue="3,245.00" className="w-full bg-transparent font-medium focus:outline-none" />
        </div>
        <div className="p-2 bg-muted/50 rounded-lg">
          <div className="text-xs text-muted-foreground">Amount</div>
          <input defaultValue="0.5" className="w-full bg-transparent font-medium focus:outline-none" />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-2">
        <button className="py-2 bg-green-500 text-white rounded-lg text-sm font-medium">Buy</button>
        <button className="py-2 bg-red-500 text-white rounded-lg text-sm font-medium">Sell</button>
      </div>
    </div>
  );
}

// PositionsTable Preview
export function PositionsTablePreview() {
  const positions = [
    { pair: "ETH/USD", side: "Long", size: "$5,000", pnl: "+$245", pnlPercent: "+4.9%", entry: "$3,200" },
    { pair: "BTC/USD", side: "Short", size: "$3,000", pnl: "-$120", pnlPercent: "-4.0%", entry: "$42,500" },
  ];

  return (
    <div className="w-full max-w-lg border border-border rounded-xl overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            <th className="px-3 py-2 text-left font-medium">Pair</th>
            <th className="px-3 py-2 text-left font-medium">Side</th>
            <th className="px-3 py-2 text-right font-medium">Size</th>
            <th className="px-3 py-2 text-right font-medium">PnL</th>
            <th className="px-3 py-2 text-right font-medium">Actions</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {positions.map((pos, i) => (
            <tr key={i} className="hover:bg-muted/30">
              <td className="px-3 py-2 font-medium">{pos.pair}</td>
              <td className={`px-3 py-2 ${pos.side === "Long" ? "text-green-500" : "text-red-500"}`}>{pos.side}</td>
              <td className="px-3 py-2 text-right">{pos.size}</td>
              <td className={`px-3 py-2 text-right ${pos.pnl.startsWith("+") ? "text-green-500" : "text-red-500"}`}>
                {pos.pnl} ({pos.pnlPercent})
              </td>
              <td className="px-3 py-2 text-right">
                <button className="px-2 py-1 text-xs bg-muted rounded hover:bg-muted/80">Close</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// TradeHistory Preview
export function TradeHistoryPreview() {
  const trades = [
    { pair: "ETH/USD", side: "Buy", price: "$3,245", amount: "0.5 ETH", time: "2 min ago" },
    { pair: "ETH/USD", side: "Sell", price: "$3,280", amount: "0.3 ETH", time: "15 min ago" },
    { pair: "BTC/USD", side: "Buy", price: "$42,500", amount: "0.1 BTC", time: "1 hour ago" },
  ];

  return (
    <div className="w-full max-w-sm border border-border rounded-xl">
      <div className="px-4 py-2 bg-muted/50 border-b border-border font-medium text-sm">
        Trade History
      </div>
      <div className="divide-y divide-border">
        {trades.map((trade, i) => (
          <div key={i} className="px-4 py-2 flex items-center justify-between text-sm">
            <div>
              <span className={trade.side === "Buy" ? "text-green-500" : "text-red-500"}>{trade.side}</span>
              <span className="text-muted-foreground ml-1">{trade.pair}</span>
            </div>
            <div className="text-right">
              <div>{trade.amount}</div>
              <div className="text-xs text-muted-foreground">{trade.time}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ===== PREDICTION MARKETS =====

// MarketCard Preview
export function MarketCardPreview() {
  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-3">
      <div className="flex items-start justify-between">
        <h3 className="font-medium text-sm pr-2">Will ETH reach $5,000 by end of 2024?</h3>
        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400 text-xs rounded-full shrink-0">
          Live
        </span>
      </div>

      <div className="flex gap-2">
        <div className="flex-1 p-3 bg-green-50 dark:bg-green-900/20 rounded-lg text-center">
          <div className="text-green-600 dark:text-green-400 font-semibold">68%</div>
          <div className="text-xs text-muted-foreground">Yes</div>
        </div>
        <div className="flex-1 p-3 bg-red-50 dark:bg-red-900/20 rounded-lg text-center">
          <div className="text-red-600 dark:text-red-400 font-semibold">32%</div>
          <div className="text-xs text-muted-foreground">No</div>
        </div>
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>Volume: $1.2M</span>
        <span>Ends: Dec 31, 2024</span>
      </div>
    </div>
  );
}

// BetPanel Preview
export function BetPanelPreview() {
  const [outcome, setOutcome] = useState<"yes" | "no">("yes");
  const [amount, setAmount] = useState("100");

  return (
    <div className="w-full max-w-xs p-4 bg-background border border-border rounded-xl space-y-4">
      <h3 className="font-medium">Place Your Bet</h3>

      <div className="grid grid-cols-2 gap-2">
        <button
          onClick={() => setOutcome("yes")}
          className={`py-3 rounded-lg font-medium ${
            outcome === "yes" ? "bg-green-500 text-white" : "bg-muted hover:bg-muted/80"
          }`}
        >
          Yes (68¢)
        </button>
        <button
          onClick={() => setOutcome("no")}
          className={`py-3 rounded-lg font-medium ${
            outcome === "no" ? "bg-red-500 text-white" : "bg-muted hover:bg-muted/80"
          }`}
        >
          No (32¢)
        </button>
      </div>

      <div className="p-3 bg-muted/50 rounded-lg">
        <div className="text-xs text-muted-foreground mb-1">Amount</div>
        <div className="flex items-center gap-2">
          <span className="text-muted-foreground">$</span>
          <input
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className="flex-1 bg-transparent text-lg font-medium focus:outline-none"
          />
        </div>
      </div>

      <div className="text-sm space-y-1">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Potential return</span>
          <span className="font-medium text-green-500">$147.06</span>
        </div>
      </div>

      <button className={`w-full py-3 rounded-xl font-medium text-white ${
        outcome === "yes" ? "bg-green-500" : "bg-red-500"
      }`}>
        Buy {outcome === "yes" ? "Yes" : "No"}
      </button>
    </div>
  );
}

// OddsDisplay Preview
export function OddsDisplayPreview() {
  return (
    <div className="flex items-center gap-4 p-4 bg-background border border-border rounded-xl">
      <div className="text-center">
        <div className="text-2xl font-bold text-green-500">68%</div>
        <div className="text-xs text-muted-foreground">Yes</div>
      </div>
      <div className="flex-1 h-3 bg-muted rounded-full overflow-hidden flex">
        <div className="h-full bg-green-500" style={{ width: "68%" }} />
        <div className="h-full bg-red-500" style={{ width: "32%" }} />
      </div>
      <div className="text-center">
        <div className="text-2xl font-bold text-red-500">32%</div>
        <div className="text-xs text-muted-foreground">No</div>
      </div>
    </div>
  );
}

// MarketChart Preview
export function MarketChartPreview() {
  return (
    <div className="w-full max-w-md p-4 bg-background border border-border rounded-xl">
      <div className="flex justify-between items-center mb-4">
        <span className="font-medium">Price History</span>
        <span className="text-green-500 text-sm">68¢ (+12%)</span>
      </div>
      <div className="h-24 flex items-end gap-0.5">
        {[50, 52, 48, 55, 58, 54, 60, 62, 58, 65, 68, 66, 70, 68].map((h, i) => (
          <div key={i} className="flex-1 bg-green-500/50 rounded-t" style={{ height: `${h}%` }} />
        ))}
      </div>
    </div>
  );
}

// PositionsList Preview (Prediction Markets)
export function PredictionPositionsListPreview() {
  const positions = [
    { market: "ETH to $5K?", outcome: "Yes", shares: 150, avgPrice: "0.55", value: "$102" },
    { market: "BTC ETF Approved?", outcome: "No", shares: 200, avgPrice: "0.40", value: "$120" },
  ];

  return (
    <div className="w-full max-w-sm border border-border rounded-xl">
      <div className="px-4 py-2 bg-muted/50 border-b border-border font-medium text-sm">
        Your Positions
      </div>
      <div className="divide-y divide-border">
        {positions.map((pos, i) => (
          <div key={i} className="px-4 py-3 space-y-1">
            <div className="flex justify-between">
              <span className="font-medium text-sm">{pos.market}</span>
              <span className={pos.outcome === "Yes" ? "text-green-500" : "text-red-500"}>
                {pos.outcome}
              </span>
            </div>
            <div className="flex justify-between text-xs text-muted-foreground">
              <span>{pos.shares} shares @ {pos.avgPrice}</span>
              <span className="font-medium text-foreground">{pos.value}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ResolutionBanner Preview
export function ResolutionBannerPreview() {
  return (
    <div className="w-full max-w-md p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
      <div className="flex items-center gap-3">
        <CheckCircle className="w-6 h-6 text-green-500" />
        <div className="flex-1">
          <h4 className="font-medium text-green-800 dark:text-green-200">Market Resolved</h4>
          <p className="text-sm text-green-600 dark:text-green-400">
            The outcome was <strong>Yes</strong>. Winning positions can now claim their rewards.
          </p>
        </div>
        <button className="px-4 py-2 bg-green-500 text-white rounded-lg text-sm font-medium">
          Claim
        </button>
      </div>
    </div>
  );
}

// ===== NFT =====

// NftCard Preview
export function NftCardPreview() {
  return (
    <div className="w-48 bg-background border border-border rounded-xl overflow-hidden hover:shadow-lg transition-shadow">
      <div className="aspect-square bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center">
        <Image className="w-12 h-12 text-white/50" />
      </div>
      <div className="p-3 space-y-2">
        <div className="font-medium text-sm">Cosmic Dream #1234</div>
        <div className="flex items-center justify-between">
          <div>
            <div className="text-xs text-muted-foreground">Price</div>
            <div className="font-medium text-sm">0.5 ETH</div>
          </div>
          <button className="px-3 py-1.5 bg-primary text-white text-xs rounded-lg">
            Buy
          </button>
        </div>
      </div>
    </div>
  );
}

// NftDetail Preview
export function NftDetailPreview() {
  return (
    <div className="w-full max-w-sm bg-background border border-border rounded-xl overflow-hidden">
      <div className="aspect-video bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center">
        <Image className="w-16 h-16 text-white/50" />
      </div>
      <div className="p-4 space-y-4">
        <div>
          <h3 className="font-semibold text-lg">Cosmic Dream #1234</h3>
          <p className="text-sm text-muted-foreground">By Artist Name</p>
        </div>

        <div className="grid grid-cols-2 gap-3 text-sm">
          <div className="p-2 bg-muted/50 rounded-lg">
            <div className="text-xs text-muted-foreground">Price</div>
            <div className="font-medium">0.5 ETH</div>
          </div>
          <div className="p-2 bg-muted/50 rounded-lg">
            <div className="text-xs text-muted-foreground">Last Sale</div>
            <div className="font-medium">0.3 ETH</div>
          </div>
        </div>

        <button className="w-full py-3 bg-primary text-white rounded-xl font-medium">
          Buy Now
        </button>
      </div>
    </div>
  );
}

// NftGrid Preview
export function NftGridPreview() {
  return (
    <div className="grid grid-cols-3 gap-2">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <div key={i} className="aspect-square rounded-lg bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center hover:scale-105 transition-transform cursor-pointer">
          <Image className="w-6 h-6 text-white/50" />
        </div>
      ))}
    </div>
  );
}

// ===== BRIDGE =====

// BridgeCard Preview
export function BridgeCardPreview() {
  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-4">
      <h3 className="font-semibold">Bridge Assets</h3>

      {/* From chain */}
      <div className="p-3 bg-muted/50 rounded-xl space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-muted-foreground">From</span>
          <span>Balance: 2.45 ETH</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg">
            <span>🔷</span>
            <span className="font-medium">Ethereum</span>
          </div>
          <input defaultValue="1.0" className="flex-1 bg-transparent text-right text-lg font-medium focus:outline-none" />
        </div>
      </div>

      <div className="flex justify-center">
        <button className="p-2 bg-muted rounded-full">
          <ArrowDownUp className="w-4 h-4" />
        </button>
      </div>

      {/* To chain */}
      <div className="p-3 bg-muted/50 rounded-xl space-y-2">
        <div className="text-sm text-muted-foreground">To</div>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2 px-3 py-2 bg-background rounded-lg">
            <span>🔵</span>
            <span className="font-medium">Arbitrum</span>
          </div>
          <span className="flex-1 text-right text-lg font-medium">~0.998</span>
        </div>
      </div>

      <div className="text-xs text-muted-foreground space-y-1">
        <div className="flex justify-between">
          <span>Estimated time</span>
          <span>~10 minutes</span>
        </div>
        <div className="flex justify-between">
          <span>Bridge fee</span>
          <span>0.002 ETH</span>
        </div>
      </div>

      <button className="w-full py-3 bg-primary text-white rounded-xl font-medium">
        Bridge
      </button>
    </div>
  );
}

// BridgeProgress Preview
export function BridgeProgressPreview() {
  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl space-y-4">
      <div className="flex items-center justify-between">
        <h3 className="font-semibold">Bridge in Progress</h3>
        <Loader2 className="w-5 h-5 animate-spin text-primary" />
      </div>

      <div className="flex items-center gap-3">
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white">
            <Check className="w-5 h-5" />
          </div>
          <span className="text-xs mt-1">Ethereum</span>
        </div>
        <div className="flex-1 h-1 bg-muted rounded relative overflow-hidden">
          <div className="absolute inset-y-0 left-0 w-2/3 bg-primary rounded animate-pulse" />
        </div>
        <div className="flex flex-col items-center">
          <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center">
            <Loader2 className="w-5 h-5 animate-spin" />
          </div>
          <span className="text-xs mt-1">Arbitrum</span>
        </div>
      </div>

      <div className="text-center">
        <div className="font-medium">1.0 ETH</div>
        <div className="text-sm text-muted-foreground">Estimated arrival: ~8 minutes</div>
      </div>
    </div>
  );
}

// ===== GOVERNANCE =====

// ProposalCard Preview
export function ProposalCardPreview() {
  return (
    <div className="w-full max-w-md p-4 bg-background border border-border rounded-xl space-y-3">
      <div className="flex items-start justify-between">
        <div>
          <span className="text-xs text-muted-foreground">Proposal #42</span>
          <h3 className="font-medium">Increase Staking Rewards by 2%</h3>
        </div>
        <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-600 text-xs rounded-full">
          Active
        </span>
      </div>

      <p className="text-sm text-muted-foreground">
        This proposal aims to increase the annual staking rewards from 4% to 6% to incentivize long-term holders.
      </p>

      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>For (68%)</span>
          <span>Against (32%)</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden flex">
          <div className="h-full bg-green-500" style={{ width: "68%" }} />
          <div className="h-full bg-red-500" style={{ width: "32%" }} />
        </div>
      </div>

      <div className="flex justify-between text-xs text-muted-foreground">
        <span>1.2M votes</span>
        <span>Ends in 2 days</span>
      </div>
    </div>
  );
}

// VotePanel Preview
export function VotePanelPreview() {
  const [vote, setVote] = useState<"for" | "against" | null>(null);

  return (
    <div className="w-full max-w-xs p-4 bg-background border border-border rounded-xl space-y-4">
      <h3 className="font-semibold">Cast Your Vote</h3>

      <div className="space-y-2">
        <button
          onClick={() => setVote("for")}
          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors ${
            vote === "for" ? "border-green-500 bg-green-50 dark:bg-green-900/20" : "border-border hover:bg-muted"
          }`}
        >
          <ThumbsUp className={`w-5 h-5 ${vote === "for" ? "text-green-500" : ""}`} />
          <span className="font-medium">Vote For</span>
        </button>
        <button
          onClick={() => setVote("against")}
          className={`w-full flex items-center gap-3 p-3 rounded-xl border transition-colors ${
            vote === "against" ? "border-red-500 bg-red-50 dark:bg-red-900/20" : "border-border hover:bg-muted"
          }`}
        >
          <ThumbsDown className={`w-5 h-5 ${vote === "against" ? "text-red-500" : ""}`} />
          <span className="font-medium">Vote Against</span>
        </button>
      </div>

      <div className="text-sm text-muted-foreground">
        Voting power: <span className="font-medium text-foreground">1,250 tokens</span>
      </div>

      <button
        disabled={!vote}
        className="w-full py-3 bg-primary text-white rounded-xl font-medium disabled:opacity-50"
      >
        Submit Vote
      </button>
    </div>
  );
}
