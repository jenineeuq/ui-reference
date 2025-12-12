"use client";

import { componentRegistry } from "@/lib/component-registry";
import {
  Wallet, Coins, ArrowRightLeft, TrendingUp, BarChart3, MessageSquare,
  Code, Image, Bot, Table, PieChart, LineChart, FormInput, ToggleLeft,
  Navigation, Bell, Layout, User, MousePointer, ShoppingCart, Globe,
  CreditCard, Network, Fuel, List, Clock, Layers, BookOpen, Vote,
  Play, Terminal, Wand2, Database, Calendar, Upload, Type, Hash,
  CheckSquare, Radio, SlidersHorizontal, FileText, Menu, PanelLeft, Bookmark,
  ChevronRight, Search, AlertCircle, MessageCircle, PanelRight, HelpCircle,
  Loader, Square, Maximize, GripVertical, ChevronLeft, Grid, UserCircle,
  Tag, X, Clock3, Copy, QrCode, Inbox, AlertTriangle, ChevronDown,
  Settings, LogOut, Heart, ShoppingBag, Receipt, DollarSign, Map, MapPin, Waypoints
} from "lucide-react";

interface ComponentPreviewProps {
  componentId: string;
}

// Map component IDs to their icons and colors
const componentConfig: Record<string, { icon: React.ElementType; gradient: string; bgColor: string }> = {
  // Web3 - Wallet
  "connect-wallet-button": { icon: Wallet, gradient: "from-purple-500 to-indigo-600", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "network-switcher": { icon: Network, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "gas-button": { icon: Fuel, gradient: "from-orange-500 to-red-500", bgColor: "bg-orange-100 dark:bg-orange-900/30" },

  // Web3 - Tokens
  "token-input": { icon: Coins, gradient: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-100 dark:bg-yellow-900/30" },
  "token-list": { icon: List, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "token-pair": { icon: Layers, gradient: "from-pink-500 to-rose-500", bgColor: "bg-pink-100 dark:bg-pink-900/30" },

  // Web3 - Transactions
  "tx-progress-modal": { icon: Loader, gradient: "from-blue-500 to-purple-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "tx-toast": { icon: Bell, gradient: "from-green-500 to-teal-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "tx-history-list": { icon: Clock, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },

  // Web3 - DeFi
  "swap-card": { icon: ArrowRightLeft, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "stake-card": { icon: TrendingUp, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "lending-metrics": { icon: BarChart3, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "position-card": { icon: Wallet, gradient: "from-violet-500 to-purple-500", bgColor: "bg-violet-100 dark:bg-violet-900/30" },

  // Web3 - Perps Trading
  "trading-interface": { icon: BarChart3, gradient: "from-emerald-500 to-green-600", bgColor: "bg-emerald-100 dark:bg-emerald-900/30" },
  "trading-chart": { icon: LineChart, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "order-book": { icon: BookOpen, gradient: "from-red-500 to-green-500", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "order-form": { icon: FormInput, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "positions-table": { icon: Table, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "trade-history": { icon: Clock, gradient: "from-amber-500 to-orange-500", bgColor: "bg-amber-100 dark:bg-amber-900/30" },

  // Web3 - Prediction Markets
  "market-card": { icon: HelpCircle, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "bet-panel": { icon: DollarSign, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "odds-display": { icon: TrendingUp, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "market-chart": { icon: LineChart, gradient: "from-violet-500 to-purple-500", bgColor: "bg-violet-100 dark:bg-violet-900/30" },
  "positions-list": { icon: List, gradient: "from-teal-500 to-cyan-500", bgColor: "bg-teal-100 dark:bg-teal-900/30" },
  "resolution-banner": { icon: AlertCircle, gradient: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-100 dark:bg-yellow-900/30" },

  // Web3 - NFT
  "nft-card": { icon: Image, gradient: "from-pink-500 to-purple-500", bgColor: "bg-pink-100 dark:bg-pink-900/30" },
  "nft-detail": { icon: Maximize, gradient: "from-violet-500 to-indigo-500", bgColor: "bg-violet-100 dark:bg-violet-900/30" },
  "nft-grid": { icon: Grid, gradient: "from-fuchsia-500 to-pink-500", bgColor: "bg-fuchsia-100 dark:bg-fuchsia-900/30" },

  // Web3 - Bridge
  "bridge-card": { icon: ArrowRightLeft, gradient: "from-cyan-500 to-blue-500", bgColor: "bg-cyan-100 dark:bg-cyan-900/30" },
  "bridge-progress": { icon: Loader, gradient: "from-green-500 to-teal-500", bgColor: "bg-green-100 dark:bg-green-900/30" },

  // Web3 - Governance
  "proposal-card": { icon: FileText, gradient: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "vote-panel": { icon: Vote, gradient: "from-purple-500 to-violet-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },

  // AI - Chat
  "chat-interface": { icon: MessageSquare, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "chat-message": { icon: MessageCircle, gradient: "from-green-500 to-teal-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "streaming-text": { icon: Type, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },

  // AI - Code
  "code-block": { icon: Code, gradient: "from-slate-600 to-gray-700", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "code-diff": { icon: Code, gradient: "from-red-500 to-green-500", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "terminal-output": { icon: Terminal, gradient: "from-gray-700 to-black", bgColor: "bg-gray-100 dark:bg-gray-900/30" },

  // AI - Generation
  "image-generator": { icon: Wand2, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "audio-player": { icon: Play, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },

  // AI - Agents
  "agent-panel": { icon: Bot, gradient: "from-violet-500 to-purple-500", bgColor: "bg-violet-100 dark:bg-violet-900/30" },
  "tool-call-card": { icon: Settings, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },

  // Data - Tables
  "data-table": { icon: Table, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "virtualized-list": { icon: List, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },

  // Data - Charts
  "line-chart": { icon: LineChart, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "bar-chart": { icon: BarChart3, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "pie-chart": { icon: PieChart, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "candlestick-chart": { icon: BarChart3, gradient: "from-red-500 to-green-500", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "sparkline": { icon: TrendingUp, gradient: "from-cyan-500 to-blue-500", bgColor: "bg-cyan-100 dark:bg-cyan-900/30" },

  // Data - Stats
  "stat-card": { icon: TrendingUp, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "progress-gauge": { icon: Loader, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },

  // Forms - Inputs
  "input": { icon: FormInput, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "textarea": { icon: Type, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "select": { icon: ChevronDown, gradient: "from-purple-500 to-violet-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "multi-select": { icon: CheckSquare, gradient: "from-green-500 to-teal-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "date-picker": { icon: Calendar, gradient: "from-orange-500 to-red-500", bgColor: "bg-orange-100 dark:bg-orange-900/30" },
  "file-upload": { icon: Upload, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "rich-text-editor": { icon: FileText, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "otp-input": { icon: Hash, gradient: "from-pink-500 to-rose-500", bgColor: "bg-pink-100 dark:bg-pink-900/30" },

  // Forms - Controls
  "checkbox": { icon: CheckSquare, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "radio-group": { icon: Radio, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "switch": { icon: ToggleLeft, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "slider": { icon: SlidersHorizontal, gradient: "from-cyan-500 to-blue-500", bgColor: "bg-cyan-100 dark:bg-cyan-900/30" },

  // Forms - Structure
  "form": { icon: FileText, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "multi-step-form": { icon: Layers, gradient: "from-purple-500 to-violet-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "multi-step-form-dialog": { icon: PanelRight, gradient: "from-indigo-500 to-blue-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "field-array": { icon: List, gradient: "from-green-500 to-teal-500", bgColor: "bg-green-100 dark:bg-green-900/30" },

  // Navigation
  "navbar": { icon: Navigation, gradient: "from-slate-600 to-gray-700", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "sidebar": { icon: PanelLeft, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "tabs": { icon: Bookmark, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "breadcrumbs": { icon: ChevronRight, gradient: "from-gray-500 to-slate-600", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "pagination": { icon: ChevronLeft, gradient: "from-purple-500 to-violet-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "command-palette": { icon: Search, gradient: "from-slate-600 to-gray-700", bgColor: "bg-slate-100 dark:bg-slate-900/30" },

  // Feedback
  "toast": { icon: Bell, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "alert": { icon: AlertCircle, gradient: "from-yellow-500 to-orange-500", bgColor: "bg-yellow-100 dark:bg-yellow-900/30" },
  "dialog": { icon: Square, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "sheet": { icon: PanelRight, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "popover": { icon: MessageSquare, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "tooltip": { icon: HelpCircle, gradient: "from-gray-500 to-slate-600", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "skeleton": { icon: Loader, gradient: "from-slate-400 to-gray-500", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "progress": { icon: Loader, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },

  // Layout
  "card": { icon: Square, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "accordion": { icon: ChevronDown, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "scroll-area": { icon: Maximize, gradient: "from-gray-500 to-slate-600", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "resizable-panels": { icon: GripVertical, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "carousel": { icon: ChevronLeft, gradient: "from-pink-500 to-rose-500", bgColor: "bg-pink-100 dark:bg-pink-900/30" },
  "masonry": { icon: Grid, gradient: "from-purple-500 to-violet-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },

  // Display
  "avatar": { icon: UserCircle, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "badge": { icon: Tag, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "tag": { icon: X, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "timestamp": { icon: Clock3, gradient: "from-gray-500 to-slate-600", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "copy-button": { icon: Copy, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "qr-code": { icon: QrCode, gradient: "from-slate-600 to-gray-700", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "empty-state": { icon: Inbox, gradient: "from-gray-400 to-slate-500", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "error-state": { icon: AlertTriangle, gradient: "from-red-500 to-rose-500", bgColor: "bg-red-100 dark:bg-red-900/30" },

  // Actions
  "button": { icon: MousePointer, gradient: "from-purple-500 to-indigo-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "dropdown-menu": { icon: Menu, gradient: "from-slate-500 to-gray-600", bgColor: "bg-slate-100 dark:bg-slate-900/30" },
  "context-menu": { icon: Menu, gradient: "from-gray-600 to-slate-700", bgColor: "bg-gray-100 dark:bg-gray-900/30" },
  "action-bar": { icon: Settings, gradient: "from-blue-500 to-indigo-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },

  // Auth
  "auth-card": { icon: User, gradient: "from-indigo-500 to-purple-500", bgColor: "bg-indigo-100 dark:bg-indigo-900/30" },
  "user-menu": { icon: UserCircle, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },

  // Commerce
  "product-card": { icon: ShoppingBag, gradient: "from-pink-500 to-rose-500", bgColor: "bg-pink-100 dark:bg-pink-900/30" },
  "cart-drawer": { icon: ShoppingCart, gradient: "from-orange-500 to-red-500", bgColor: "bg-orange-100 dark:bg-orange-900/30" },
  "checkout-form": { icon: CreditCard, gradient: "from-green-500 to-emerald-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
  "pricing-table": { icon: Receipt, gradient: "from-violet-500 to-purple-500", bgColor: "bg-violet-100 dark:bg-violet-900/30" },

  // 3D & Interactive
  "interactive-globe": { icon: Globe, gradient: "from-blue-500 to-cyan-500", bgColor: "bg-blue-100 dark:bg-blue-900/30" },
  "globe-marker": { icon: MapPin, gradient: "from-red-500 to-rose-500", bgColor: "bg-red-100 dark:bg-red-900/30" },
  "globe-arc": { icon: Waypoints, gradient: "from-purple-500 to-pink-500", bgColor: "bg-purple-100 dark:bg-purple-900/30" },
  "world-map": { icon: Map, gradient: "from-green-500 to-teal-500", bgColor: "bg-green-100 dark:bg-green-900/30" },
};

export default function ComponentPreview({ componentId }: ComponentPreviewProps) {
  const config = componentConfig[componentId] || {
    icon: Square,
    gradient: "from-gray-500 to-slate-600",
    bgColor: "bg-gray-100 dark:bg-gray-900/30"
  };

  const Icon = config.icon;
  const component = componentRegistry.find(c => c.id === componentId);

  return (
    <div className="flex flex-col items-center justify-center gap-6">
      {/* 3D Style Component Preview */}
      <div className={`relative ${config.bgColor} rounded-3xl p-8 shadow-2xl`}>
        {/* Floating 3D effect layers */}
        <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-white/50 to-transparent dark:from-white/10" />
        <div className="absolute -inset-1 rounded-3xl bg-gradient-to-br opacity-20 blur-xl" style={{ background: `linear-gradient(135deg, var(--tw-gradient-stops))` }} />

        {/* Main icon container with 3D effect */}
        <div className="relative">
          <div
            className={`w-32 h-32 rounded-2xl bg-gradient-to-br ${config.gradient} flex items-center justify-center shadow-xl transform hover:scale-105 transition-transform duration-300`}
            style={{
              boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255, 255, 255, 0.1) inset'
            }}
          >
            {/* Inner highlight */}
            <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-white/30 to-transparent" />

            {/* Icon */}
            <Icon className="w-16 h-16 text-white relative z-10 drop-shadow-lg" strokeWidth={1.5} />
          </div>

          {/* Shadow */}
          <div
            className={`absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-4 bg-gradient-to-r ${config.gradient} opacity-30 blur-xl rounded-full`}
          />
        </div>
      </div>

      {/* Component Label */}
      <div className="text-center">
        <h3 className="text-lg font-bold text-foreground">{component?.name || componentId}</h3>
        <p className="text-sm text-muted-foreground">3D Illustration Style</p>
      </div>
    </div>
  );
}
