"use client";

import dynamic from "next/dynamic";

// Import all component variants dynamically
const ButtonMinimal = dynamic(() => import("@/components/ui/Button/variants/ButtonMinimal"));
const ButtonGlass = dynamic(() => import("@/components/ui/Button/variants/ButtonGlass"));
const ButtonNeumorphic = dynamic(() => import("@/components/ui/Button/variants/ButtonNeumorphic"));
const ButtonGradient = dynamic(() => import("@/components/ui/Button/variants/ButtonGradient"));
const ButtonBrutalist = dynamic(() => import("@/components/ui/Button/variants/ButtonBrutalist"));
const ButtonEnterprise = dynamic(() => import("@/components/ui/Button/variants/ButtonEnterprise"));
const ButtonNeon = dynamic(() => import("@/components/ui/Button/variants/ButtonNeon"));
const ButtonPill = dynamic(() => import("@/components/ui/Button/variants/ButtonPill"));
const ButtonOutlined3D = dynamic(() => import("@/components/ui/Button/variants/ButtonOutlined3D"));
const ButtonMonochrome = dynamic(() => import("@/components/ui/Button/variants/ButtonMonochrome"));

const CardFlatMinimal = dynamic(() => import("@/components/ui/Card/variants/CardFlatMinimal"));
const CardElevated = dynamic(() => import("@/components/ui/Card/variants/CardElevated"));
const CardGlass = dynamic(() => import("@/components/ui/Card/variants/CardGlass"));
const CardNeumorphic = dynamic(() => import("@/components/ui/Card/variants/CardNeumorphic"));
const CardGradientBorder = dynamic(() => import("@/components/ui/Card/variants/CardGradientBorder"));
const CardBrutalist = dynamic(() => import("@/components/ui/Card/variants/CardBrutalist"));
const CardDashboard = dynamic(() => import("@/components/ui/Card/variants/CardDashboard"));
const CardPlayful = dynamic(() => import("@/components/ui/Card/variants/CardPlayful"));
const CardNeon = dynamic(() => import("@/components/ui/Card/variants/CardNeon"));
const CardPaper = dynamic(() => import("@/components/ui/Card/variants/CardPaper"));

const InputMinimal = dynamic(() => import("@/components/ui/Input/variants/InputMinimal"));
const InputGlass = dynamic(() => import("@/components/ui/Input/variants/InputGlass"));
const InputNeumorphic = dynamic(() => import("@/components/ui/Input/variants/InputNeumorphic"));
const InputGradient = dynamic(() => import("@/components/ui/Input/variants/InputGradient"));
const InputBrutalist = dynamic(() => import("@/components/ui/Input/variants/InputBrutalist"));
const InputEnterprise = dynamic(() => import("@/components/ui/Input/variants/InputEnterprise"));
const InputFloating = dynamic(() => import("@/components/ui/Input/variants/InputFloating"));
const InputPill = dynamic(() => import("@/components/ui/Input/variants/InputPill"));
const InputNeon = dynamic(() => import("@/components/ui/Input/variants/InputNeon"));

const ConnectWalletMinimal = dynamic(() => import("@/components/ui/ConnectWallet/variants/ConnectWalletMinimal"));
const ConnectWalletGlass = dynamic(() => import("@/components/ui/ConnectWallet/variants/ConnectWalletGlass"));
const ConnectWalletNeon = dynamic(() => import("@/components/ui/ConnectWallet/variants/ConnectWalletNeon"));
const ConnectWalletEnterprise = dynamic(() => import("@/components/ui/ConnectWallet/variants/ConnectWalletEnterprise"));
const ConnectWalletPlayful = dynamic(() => import("@/components/ui/ConnectWallet/variants/ConnectWalletPlayful"));

const ProductCardMinimal = dynamic(() => import("@/components/ui/ProductCard/variants/ProductCardMinimal"));
const ProductCardGlass = dynamic(() => import("@/components/ui/ProductCard/variants/ProductCardGlass"));
const ProductCardEnterprise = dynamic(() => import("@/components/ui/ProductCard/variants/ProductCardEnterprise"));
const ProductCardPlayful = dynamic(() => import("@/components/ui/ProductCard/variants/ProductCardPlayful"));
const ProductCardBrutalist = dynamic(() => import("@/components/ui/ProductCard/variants/ProductCardBrutalist"));

const AvatarMinimal = dynamic(() => import("@/components/ui/Avatar/variants/AvatarMinimal"));
const AvatarGlass = dynamic(() => import("@/components/ui/Avatar/variants/AvatarGlass"));
const AvatarStatus = dynamic(() => import("@/components/ui/Avatar/variants/AvatarStatus"));
const AvatarHexagon = dynamic(() => import("@/components/ui/Avatar/variants/AvatarHexagon"));
const AvatarNeon = dynamic(() => import("@/components/ui/Avatar/variants/AvatarNeon"));
const AvatarNeumorphic = dynamic(() => import("@/components/ui/Avatar/variants/AvatarNeumorphic"));

const BadgeMinimal = dynamic(() => import("@/components/ui/Badge/variants/BadgeMinimal"));
const BadgeGradient = dynamic(() => import("@/components/ui/Badge/variants/BadgeGradient"));
const BadgeOutlined = dynamic(() => import("@/components/ui/Badge/variants/BadgeOutlined"));
const BadgeNeon = dynamic(() => import("@/components/ui/Badge/variants/BadgeNeon"));
const BadgeStatusDot = dynamic(() => import("@/components/ui/Badge/variants/BadgeStatusDot"));

const TokenInputMinimal = dynamic(() => import("@/components/ui/TokenInput/variants/TokenInputMinimal"));
const TokenInputGlass = dynamic(() => import("@/components/ui/TokenInput/variants/TokenInputGlass"));
const TokenInputEnterprise = dynamic(() => import("@/components/ui/TokenInput/variants/TokenInputEnterprise"));
const TokenInputNeon = dynamic(() => import("@/components/ui/TokenInput/variants/TokenInputNeon"));

const CheckoutFormMinimal = dynamic(() => import("@/components/ui/CheckoutForm/variants/CheckoutFormMinimal"));
const CheckoutFormEnterprise = dynamic(() => import("@/components/ui/CheckoutForm/variants/CheckoutFormEnterprise"));
const CheckoutFormGlass = dynamic(() => import("@/components/ui/CheckoutForm/variants/CheckoutFormGlass"));
const CheckoutFormPlayful = dynamic(() => import("@/components/ui/CheckoutForm/variants/CheckoutFormPlayful"));

interface ComponentPreviewProps {
  componentId: string;
  variantId: string;
}

export default function ComponentPreview({ componentId, variantId }: ComponentPreviewProps) {
  const key = `${componentId}-${variantId}`;

  // Button variants
  if (componentId === "button") {
    switch (variantId) {
      case "minimal": return <ButtonMinimal />;
      case "glassmorphic": return <ButtonGlass />;
      case "neumorphic": return <ButtonNeumorphic />;
      case "gradient": return <ButtonGradient />;
      case "brutalist": return <ButtonBrutalist />;
      case "enterprise": return <ButtonEnterprise />;
      case "neon": return <ButtonNeon />;
      case "pill": return <ButtonPill />;
      case "outlined-3d": return <ButtonOutlined3D />;
      case "monochrome": return <ButtonMonochrome />;
    }
  }

  // Card variants
  if (componentId === "card") {
    switch (variantId) {
      case "flat-minimal": return <CardFlatMinimal />;
      case "elevated": return <CardElevated />;
      case "glass-card": return <CardGlass />;
      case "neumorphic-card": return <CardNeumorphic />;
      case "gradient-border": return <CardGradientBorder />;
      case "brutalist-card": return <CardBrutalist />;
      case "dashboard-card": return <CardDashboard />;
      case "playful-card": return <CardPlayful />;
      case "neon-card": return <CardNeon />;
      case "paper-card": return <CardPaper />;
    }
  }

  // Input variants
  if (componentId === "input") {
    switch (variantId) {
      case "minimal-input": return <InputMinimal />;
      case "glass-input": return <InputGlass />;
      case "neumorphic-input": return <InputNeumorphic />;
      case "gradient-input": return <InputGradient />;
      case "brutalist-input": return <InputBrutalist />;
      case "enterprise-input": return <InputEnterprise />;
      case "floating-label": return <InputFloating />;
      case "pill-input": return <InputPill />;
      case "neon-input": return <InputNeon />;
    }
  }

  // ConnectWallet variants
  if (componentId === "connect-wallet") {
    switch (variantId) {
      case "minimal-wallet": return <ConnectWalletMinimal />;
      case "glass-wallet": return <ConnectWalletGlass />;
      case "neon-wallet": return <ConnectWalletNeon />;
      case "enterprise-wallet": return <ConnectWalletEnterprise />;
      case "playful-wallet": return <ConnectWalletPlayful />;
    }
  }

  // ProductCard variants
  if (componentId === "product-card") {
    switch (variantId) {
      case "minimal-product": return <ProductCardMinimal />;
      case "glass-product": return <ProductCardGlass />;
      case "enterprise-product": return <ProductCardEnterprise />;
      case "playful-product": return <ProductCardPlayful />;
      case "brutalist-product": return <ProductCardBrutalist />;
    }
  }

  // Avatar variants
  if (componentId === "avatar") {
    switch (variantId) {
      case "minimal-avatar": return <AvatarMinimal />;
      case "glass-avatar": return <AvatarGlass />;
      case "status-avatar": return <AvatarStatus />;
      case "hexagon-avatar": return <AvatarHexagon />;
      case "neon-avatar": return <AvatarNeon />;
      case "neumorphic-avatar": return <AvatarNeumorphic />;
    }
  }

  // Badge variants
  if (componentId === "badge") {
    switch (variantId) {
      case "minimal-badge": return <BadgeMinimal />;
      case "gradient-badge": return <BadgeGradient />;
      case "outlined-badge": return <BadgeOutlined />;
      case "neon-badge": return <BadgeNeon />;
      case "status-dot-badge": return <BadgeStatusDot />;
    }
  }

  // TokenInput variants
  if (componentId === "token-input") {
    switch (variantId) {
      case "minimal-token": return <TokenInputMinimal />;
      case "glass-token": return <TokenInputGlass />;
      case "enterprise-token": return <TokenInputEnterprise />;
      case "neon-token": return <TokenInputNeon />;
    }
  }

  // CheckoutForm variants
  if (componentId === "checkout-form") {
    switch (variantId) {
      case "minimal-checkout": return <CheckoutFormMinimal />;
      case "enterprise-checkout": return <CheckoutFormEnterprise />;
      case "glass-checkout": return <CheckoutFormGlass />;
      case "playful-checkout": return <CheckoutFormPlayful />;
    }
  }

  return (
    <div className="text-sm text-muted-foreground">
      Preview not available
    </div>
  );
}
