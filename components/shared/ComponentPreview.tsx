"use client";

import { componentRegistry } from "@/lib/component-registry";

// Form Previews
import {
  InputPreview,
  TextareaPreview,
  SelectPreview,
  MultiSelectPreview,
  DatePickerPreview,
  FileUploadPreview,
  RichTextEditorPreview,
  OtpInputPreview,
  CheckboxPreview,
  RadioGroupPreview,
  SwitchPreview,
  SliderPreview,
  FormPreview,
  MultiStepFormPreview,
  MultiStepFormDialogPreview,
  FieldArrayPreview,
} from "@/components/previews/FormsPreviews";

// Navigation Previews
import {
  NavbarPreview,
  SidebarPreview,
  TabsPreview,
  BreadcrumbsPreview,
  PaginationPreview,
  CommandPalettePreview,
} from "@/components/previews/NavigationPreviews";

// Feedback Previews
import {
  ToastPreview,
  AlertPreview,
  DialogPreview,
  SheetPreview,
  PopoverPreview,
  TooltipPreview,
  SkeletonPreview,
  ProgressPreview,
} from "@/components/previews/FeedbackPreviews";

// Actions Previews
import {
  ButtonPreview,
  DropdownMenuPreview,
  ContextMenuPreview,
  ActionBarPreview,
} from "@/components/previews/ActionsPreviews";

// Web3 Previews
import {
  ConnectWalletButtonPreview,
  NetworkSwitcherPreview,
  GasButtonPreview,
  TokenInputPreview,
  TokenListPreview,
  TokenPairPreview,
  TxProgressModalPreview,
  TxToastPreview,
  TxHistoryListPreview,
  SwapCardPreview,
  StakeCardPreview,
  LendingMetricsPreview,
  PositionCardPreview,
  TradingInterfacePreview,
  TradingChartPreview,
  OrderBookPreview,
  OrderFormPreview,
  PositionsTablePreview,
  TradeHistoryPreview,
  MarketCardPreview,
  BetPanelPreview,
  OddsDisplayPreview,
  MarketChartPreview,
  PredictionPositionsListPreview,
  ResolutionBannerPreview,
  NftCardPreview,
  NftDetailPreview,
  NftGridPreview,
  BridgeCardPreview,
  BridgeProgressPreview,
  ProposalCardPreview,
  VotePanelPreview,
} from "@/components/previews/Web3Previews";

// AI Previews
import {
  ChatInterfacePreview,
  ChatMessagePreview,
  StreamingTextPreview,
  CodeBlockPreview,
  CodeDiffPreview,
  TerminalOutputPreview,
  ImageGeneratorPreview,
  AudioPlayerPreview,
  AgentPanelPreview,
  ToolCallCardPreview,
} from "@/components/previews/AIPreviews";

// Data Previews
import {
  DataTablePreview,
  VirtualizedListPreview,
  LineChartPreview,
  BarChartPreview,
  PieChartPreview,
  CandlestickChartPreview,
  SparklinePreview,
  StatCardPreview,
  ProgressGaugePreview,
} from "@/components/previews/DataPreviews";

// Layout Previews
import {
  CardPreview,
  AccordionPreview,
  ScrollAreaPreview,
  ResizablePanelsPreview,
  CarouselPreview,
  MasonryPreview,
} from "@/components/previews/LayoutPreviews";

// Display Previews
import {
  AvatarPreview,
  BadgePreview,
  TagPreview,
  TimestampPreview,
  CopyButtonPreview,
  QRCodePreview,
  EmptyStatePreview,
  ErrorStatePreview,
} from "@/components/previews/DisplayPreviews";

// Auth Previews
import {
  AuthCardPreview,
  UserMenuPreview,
} from "@/components/previews/AuthPreviews";

// Commerce Previews
import {
  ProductCardPreview,
  CartDrawerPreview,
  CheckoutFormPreview,
  PricingTablePreview,
} from "@/components/previews/CommercePreviews";

// Interactive Previews
import {
  InteractiveGlobePreview,
  GlobeMarkerPreview,
  GlobeArcPreview,
  WorldMapPreview,
} from "@/components/previews/InteractivePreviews";

interface ComponentPreviewProps {
  componentId: string;
}

// Map component IDs to their preview components
const previewComponents: Record<string, React.ComponentType> = {
  // Forms - Inputs
  "input": InputPreview,
  "textarea": TextareaPreview,
  "select": SelectPreview,
  "multi-select": MultiSelectPreview,
  "date-picker": DatePickerPreview,
  "file-upload": FileUploadPreview,
  "rich-text-editor": RichTextEditorPreview,
  "otp-input": OtpInputPreview,

  // Forms - Controls
  "checkbox": CheckboxPreview,
  "radio-group": RadioGroupPreview,
  "switch": SwitchPreview,
  "slider": SliderPreview,

  // Forms - Structure
  "form": FormPreview,
  "multi-step-form": MultiStepFormPreview,
  "multi-step-form-dialog": MultiStepFormDialogPreview,
  "field-array": FieldArrayPreview,

  // Navigation
  "navbar": NavbarPreview,
  "sidebar": SidebarPreview,
  "tabs": TabsPreview,
  "breadcrumbs": BreadcrumbsPreview,
  "pagination": PaginationPreview,
  "command-palette": CommandPalettePreview,

  // Feedback
  "toast": ToastPreview,
  "alert": AlertPreview,
  "dialog": DialogPreview,
  "sheet": SheetPreview,
  "popover": PopoverPreview,
  "tooltip": TooltipPreview,
  "skeleton": SkeletonPreview,
  "progress": ProgressPreview,

  // Actions
  "button": ButtonPreview,
  "dropdown-menu": DropdownMenuPreview,
  "context-menu": ContextMenuPreview,
  "action-bar": ActionBarPreview,

  // Web3 - Wallet
  "connect-wallet-button": ConnectWalletButtonPreview,
  "network-switcher": NetworkSwitcherPreview,
  "gas-button": GasButtonPreview,

  // Web3 - Tokens
  "token-input": TokenInputPreview,
  "token-list": TokenListPreview,
  "token-pair": TokenPairPreview,

  // Web3 - Transactions
  "tx-progress-modal": TxProgressModalPreview,
  "tx-toast": TxToastPreview,
  "tx-history-list": TxHistoryListPreview,

  // Web3 - DeFi
  "swap-card": SwapCardPreview,
  "stake-card": StakeCardPreview,
  "lending-metrics": LendingMetricsPreview,
  "position-card": PositionCardPreview,

  // Web3 - Perps Trading
  "trading-interface": TradingInterfacePreview,
  "trading-chart": TradingChartPreview,
  "order-book": OrderBookPreview,
  "order-form": OrderFormPreview,
  "positions-table": PositionsTablePreview,
  "trade-history": TradeHistoryPreview,

  // Web3 - Prediction Markets
  "market-card": MarketCardPreview,
  "bet-panel": BetPanelPreview,
  "odds-display": OddsDisplayPreview,
  "market-chart": MarketChartPreview,
  "positions-list": PredictionPositionsListPreview,
  "resolution-banner": ResolutionBannerPreview,

  // Web3 - NFT
  "nft-card": NftCardPreview,
  "nft-detail": NftDetailPreview,
  "nft-grid": NftGridPreview,

  // Web3 - Bridge
  "bridge-card": BridgeCardPreview,
  "bridge-progress": BridgeProgressPreview,

  // Web3 - Governance
  "proposal-card": ProposalCardPreview,
  "vote-panel": VotePanelPreview,

  // AI - Chat
  "chat-interface": ChatInterfacePreview,
  "chat-message": ChatMessagePreview,
  "streaming-text": StreamingTextPreview,

  // AI - Code
  "code-block": CodeBlockPreview,
  "code-diff": CodeDiffPreview,
  "terminal-output": TerminalOutputPreview,

  // AI - Generation
  "image-generator": ImageGeneratorPreview,
  "audio-player": AudioPlayerPreview,

  // AI - Agents
  "agent-panel": AgentPanelPreview,
  "tool-call-card": ToolCallCardPreview,

  // Data - Tables
  "data-table": DataTablePreview,
  "virtualized-list": VirtualizedListPreview,

  // Data - Charts
  "line-chart": LineChartPreview,
  "bar-chart": BarChartPreview,
  "pie-chart": PieChartPreview,
  "candlestick-chart": CandlestickChartPreview,
  "sparkline": SparklinePreview,

  // Data - Stats
  "stat-card": StatCardPreview,
  "progress-gauge": ProgressGaugePreview,

  // Layout
  "card": CardPreview,
  "accordion": AccordionPreview,
  "scroll-area": ScrollAreaPreview,
  "resizable-panels": ResizablePanelsPreview,
  "carousel": CarouselPreview,
  "masonry": MasonryPreview,

  // Display
  "avatar": AvatarPreview,
  "badge": BadgePreview,
  "tag": TagPreview,
  "timestamp": TimestampPreview,
  "copy-button": CopyButtonPreview,
  "qr-code": QRCodePreview,
  "empty-state": EmptyStatePreview,
  "error-state": ErrorStatePreview,

  // Auth
  "auth-card": AuthCardPreview,
  "user-menu": UserMenuPreview,

  // Commerce
  "product-card": ProductCardPreview,
  "cart-drawer": CartDrawerPreview,
  "checkout-form": CheckoutFormPreview,
  "pricing-table": PricingTablePreview,

  // 3D & Interactive
  "interactive-globe": InteractiveGlobePreview,
  "globe-marker": GlobeMarkerPreview,
  "globe-arc": GlobeArcPreview,
  "world-map": WorldMapPreview,
};

// Fallback placeholder for components not yet implemented
function PlaceholderPreview({ componentId }: { componentId: string }) {
  const component = componentRegistry.find(c => c.id === componentId);

  return (
    <div className="flex flex-col items-center justify-center p-8 text-center">
      <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center mb-4 shadow-lg">
        <span className="text-2xl text-white font-bold">
          {component?.name?.charAt(0) || "?"}
        </span>
      </div>
      <h3 className="text-lg font-semibold text-foreground">{component?.name || componentId}</h3>
      <p className="text-sm text-muted-foreground mt-1">Preview coming soon</p>
    </div>
  );
}

export default function ComponentPreview({ componentId }: ComponentPreviewProps) {
  const PreviewComponent = previewComponents[componentId];

  if (PreviewComponent) {
    return (
      <div className="flex items-center justify-center p-6">
        <PreviewComponent />
      </div>
    );
  }

  return <PlaceholderPreview componentId={componentId} />;
}
