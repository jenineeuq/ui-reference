export interface StyleVariant {
  id: string;
  name: string;
  description: string;
  tags: string[];
  implementation: string;
}

export interface Component {
  id: string;
  name: string;
  category: string;
  description: string;
  variants: StyleVariant[];
}

export const componentRegistry: Component[] = [
  {
    id: "button",
    name: "Button",
    category: "Basic",
    description: "Interactive button component with various styles",
    variants: [
      {
        id: "minimal",
        name: "Minimal Ghost",
        description: "Clean, borderless button with subtle hover state. Perfect for secondary actions.",
        tags: ["minimal", "flat", "professional"],
        implementation: "Tailwind: bg-transparent hover:bg-muted transition-colors. No borders, subtle opacity change."
      },
      {
        id: "glassmorphic",
        name: "3D Glassmorphism",
        description: "Frosted glass effect with backdrop blur, soft shadows, and depth. Futuristic aesthetic.",
        tags: ["3d", "futuristic", "glassmorphism"],
        implementation: "backdrop-filter: blur(10px), rgba background, box-shadow for depth, border with opacity."
      },
      {
        id: "neumorphic",
        name: "Neumorphic Soft UI",
        description: "Soft shadows creating embossed/debossed effect. Unified color scheme with depth.",
        tags: ["3d", "neumorphic", "soft"],
        implementation: "box-shadow: dual shadows (dark + light), same-color background, subtle rounded corners."
      },
      {
        id: "gradient",
        name: "Vibrant Gradient",
        description: "Bold multi-color gradient with animated hover effect. Eye-catching and modern.",
        tags: ["colorful", "gradient", "playful"],
        implementation: "background: linear-gradient(135deg, colors), hover:brightness-110, transition-all."
      },
      {
        id: "brutalist",
        name: "Brutalist Bold",
        description: "Thick black borders, sharp corners, high contrast. Bold typography with no subtle effects.",
        tags: ["brutalist", "bold", "experimental"],
        implementation: "border: 3px solid black, box-shadow: 4px 4px 0 black, font-weight: 900, transform on hover."
      },
      {
        id: "enterprise",
        name: "Enterprise Dashboard",
        description: "Professional, subdued colors. Clear hierarchy with consistent spacing.",
        tags: ["professional", "minimal", "enterprise"],
        implementation: "Muted blues/grays, 1px border, subtle shadow, clear padding, medium font-weight."
      },
      {
        id: "neon",
        name: "Neon Glow",
        description: "Glowing borders and text with neon colors. Cyberpunk aesthetic with animated pulse.",
        tags: ["futuristic", "colorful", "experimental"],
        implementation: "box-shadow: 0 0 20px color, text-shadow: glow effect, border-color matches glow, animation: pulse."
      },
      {
        id: "pill",
        name: "Soft Pill",
        description: "Fully rounded, pastel colors, friendly and approachable. Gentle shadows.",
        tags: ["soft", "friendly", "minimal"],
        implementation: "border-radius: 9999px, soft pastel background, small padding, subtle hover lift."
      },
      {
        id: "outlined-3d",
        name: "3D Outlined",
        description: "Outline style with 3D perspective transform on hover. Playful interaction.",
        tags: ["3d", "playful", "outlined"],
        implementation: "border: 2px solid, transparent bg, transform: perspective + rotateX on hover, transition: transform."
      },
      {
        id: "monochrome",
        name: "Monochrome Minimalist",
        description: "Black and white only. High contrast, no colors. Ultra-minimal aesthetic.",
        tags: ["minimal", "monochrome", "flat"],
        implementation: "background: white, color: black, border: 1px solid black, hover: invert colors."
      }
    ]
  },
  {
    id: "card",
    name: "Card",
    category: "Display",
    description: "Container component for grouping related content",
    variants: [
      {
        id: "flat-minimal",
        name: "Flat Minimal",
        description: "Clean white card with subtle border. No shadows, maximum clarity.",
        tags: ["minimal", "flat", "professional"],
        implementation: "bg-white, border: 1px solid gray-200, rounded-lg, padding, no shadow."
      },
      {
        id: "elevated",
        name: "Elevated Shadow",
        description: "Floating card with multi-layer shadow. Depth through shadow gradation.",
        tags: ["3d", "professional", "soft"],
        implementation: "box-shadow: 0 20px 60px rgba(0,0,0,0.1), hover: translateY(-4px), transition: all."
      },
      {
        id: "glass-card",
        name: "Glassmorphic Card",
        description: "Translucent frosted glass effect. Works on colorful backgrounds.",
        tags: ["glassmorphism", "futuristic", "3d"],
        implementation: "backdrop-filter: blur(20px), background: rgba(255,255,255,0.1), border: 1px rgba white."
      },
      {
        id: "neumorphic-card",
        name: "Neumorphic Soft Card",
        description: "Soft embossed appearance. Unified color scheme with subtle depth.",
        tags: ["neumorphic", "3d", "soft"],
        implementation: "background: #e0e5ec, box-shadow: dual (light + dark), rounded corners, same-tone elements."
      },
      {
        id: "gradient-border",
        name: "Gradient Border Card",
        description: "Animated gradient border with clean interior. Modern and vibrant.",
        tags: ["gradient", "colorful", "futuristic"],
        implementation: "Position: relative, ::before pseudo for gradient border, padding compensation, border-radius."
      },
      {
        id: "brutalist-card",
        name: "Brutalist Grid Card",
        description: "Thick borders, sharp corners, offset shadow. Grid-based internal layout.",
        tags: ["brutalist", "bold", "experimental"],
        implementation: "border: 4px solid black, box-shadow: 8px 8px 0 black, no border-radius, bold typography."
      },
      {
        id: "dashboard-card",
        name: "Dashboard Analytics",
        description: "Enterprise dashboard style. Header with icon, stats grid, subtle borders.",
        tags: ["professional", "enterprise", "minimal"],
        implementation: "Muted colors, clear sections, border-bottom on header, flex layout, subtle hover."
      },
      {
        id: "playful-card",
        name: "Playful Illustrated",
        description: "Colorful with illustrations/icons. Rounded corners, vibrant gradients.",
        tags: ["playful", "colorful", "friendly"],
        implementation: "border-radius: 24px, gradient background, decorative SVG elements, soft shadows."
      },
      {
        id: "neon-card",
        name: "Neon Cyber Card",
        description: "Dark background with neon accents. Glowing borders and typography.",
        tags: ["futuristic", "neon", "experimental"],
        implementation: "bg-black, border: neon color, box-shadow: 0 0 30px neon, text-shadow on headers."
      },
      {
        id: "paper-card",
        name: "Paper Skeuomorphic",
        description: "Realistic paper texture and shadow. Subtle grain and warm tone.",
        tags: ["3d", "skeuomorphic", "soft"],
        implementation: "background: paper texture/gradient, box-shadow: layered realistic shadow, subtle borders."
      }
    ]
  },
  {
    id: "input",
    name: "Input",
    category: "Forms",
    description: "Text input field with various styling approaches",
    variants: [
      {
        id: "minimal-input",
        name: "Minimal Underline",
        description: "Bottom border only. Focus animates border width and color.",
        tags: ["minimal", "flat", "professional"],
        implementation: "border-bottom: 2px solid gray, focus: border-primary + width expand, transition: all."
      },
      {
        id: "glass-input",
        name: "Glassmorphic Input",
        description: "Translucent with backdrop blur. Subtle glow on focus.",
        tags: ["glassmorphism", "futuristic", "3d"],
        implementation: "backdrop-filter: blur, rgba background, border: rgba white, focus: box-shadow glow."
      },
      {
        id: "neumorphic-input",
        name: "Neumorphic Inset",
        description: "Appears pressed into surface. Inner shadow creates depth.",
        tags: ["neumorphic", "3d", "soft"],
        implementation: "box-shadow: inset shadows (dark + light), same-tone background, subtle border."
      },
      {
        id: "gradient-input",
        name: "Gradient Border Input",
        description: "Animated gradient border on focus. Clean white interior.",
        tags: ["gradient", "colorful", "futuristic"],
        implementation: "Pseudo-element for gradient border, focus: animate gradient position, padding compensation."
      },
      {
        id: "brutalist-input",
        name: "Brutalist Thick Border",
        description: "Heavy black border, offset shadow. Bold monospace font.",
        tags: ["brutalist", "bold", "experimental"],
        implementation: "border: 3px solid black, box-shadow: 4px 4px 0 black, font-family: monospace, font-weight: bold."
      },
      {
        id: "enterprise-input",
        name: "Enterprise Form Input",
        description: "Professional form field. Clear label, helper text, validation states.",
        tags: ["professional", "enterprise", "minimal"],
        implementation: "Gray border, focus: blue border, padding, placeholder, helper text below, error state."
      },
      {
        id: "floating-label",
        name: "Floating Label",
        description: "Label animates up on focus/fill. Modern form UX pattern.",
        tags: ["professional", "minimal", "friendly"],
        implementation: "Absolute positioned label, focus/filled: translateY + scale, transition: transform."
      },
      {
        id: "pill-input",
        name: "Soft Pill Input",
        description: "Fully rounded, soft pastel background. Gentle and approachable.",
        tags: ["soft", "friendly", "minimal"],
        implementation: "border-radius: 9999px, bg-gray-50, padding-x: large, focus: subtle shadow, no border."
      },
      {
        id: "neon-input",
        name: "Neon Glow Input",
        description: "Dark background with neon border. Glows intensely on focus.",
        tags: ["futuristic", "neon", "experimental"],
        implementation: "bg-black, border: neon color, focus: box-shadow: 0 0 40px neon-color, text: neon color."
      }
    ]
  },
  {
    id: "connect-wallet",
    name: "ConnectWallet",
    category: "Web3",
    description: "Web3 wallet connection button with address display and controls",
    variants: [
      {
        id: "minimal-wallet",
        name: "Minimal Crypto",
        description: "Clean text-based connection. Truncated address with copy icon.",
        tags: ["minimal", "professional"],
        implementation: "Subtle bg, truncated address (0x1234...5678), hover: show full, icon button for copy."
      },
      {
        id: "glass-wallet",
        name: "Web3 Glass",
        description: "Glassmorphic wallet widget. Avatar, balance, network indicator.",
        tags: ["glassmorphism", "futuristic"],
        implementation: "Glass effect, flex layout, avatar + text + balance, dropdown menu, network badge."
      },
      {
        id: "neon-wallet",
        name: "Cyber Neon Wallet",
        description: "Dark theme with neon accents. Animated connection state.",
        tags: ["futuristic", "neon"],
        implementation: "Dark bg, neon green/blue accents, pulse animation when connected, hexagon avatar frame."
      },
      {
        id: "enterprise-wallet",
        name: "Dashboard Wallet",
        description: "Professional dashboard integration. Clear status indicators.",
        tags: ["professional", "enterprise"],
        implementation: "Muted colors, status dot (green=connected), balance with currency, settings dropdown."
      },
      {
        id: "playful-wallet",
        name: "Friendly Wallet",
        description: "Colorful and approachable. Illustrated avatar, rounded design.",
        tags: ["playful", "friendly"],
        implementation: "Bright gradient, rounded-full avatar, emoji network icons, soft shadows, bouncy hover."
      }
    ]
  },
  {
    id: "token-input",
    name: "TokenInput",
    category: "Web3",
    description: "Token amount input with selector and balance display",
    variants: [
      {
        id: "minimal-token",
        name: "Minimal Swap Input",
        description: "Clean swap interface. Token selector + amount input.",
        tags: ["minimal", "professional"],
        implementation: "Flex layout, large number input, token button (icon + symbol), balance text, MAX button."
      },
      {
        id: "glass-token",
        name: "Glass Token Field",
        description: "Glassmorphic token input with USD conversion display.",
        tags: ["glassmorphism", "futuristic"],
        implementation: "Glass container, token icon + input, USD value below, balance indicator, blur effect."
      },
      {
        id: "enterprise-token",
        name: "Pro Trading Input",
        description: "Professional trading interface. Detailed balance and conversion.",
        tags: ["professional", "enterprise"],
        implementation: "Border, sections (token/amount/usd), validation states, clear labels, percentage buttons (25/50/75/100)."
      },
      {
        id: "neon-token",
        name: "Neon Swap Field",
        description: "Dark cyberpunk aesthetic. Neon token icons and borders.",
        tags: ["futuristic", "neon"],
        implementation: "Dark bg, neon borders on focus, glowing token icons, animated USD conversion."
      }
    ]
  },
  {
    id: "product-card",
    name: "ProductCard",
    category: "Commerce",
    description: "E-commerce product display card",
    variants: [
      {
        id: "minimal-product",
        name: "Minimal Product",
        description: "Clean product grid item. Image, title, price, simple add button.",
        tags: ["minimal", "professional"],
        implementation: "White bg, image (aspect-ratio), title, price (bold), subtle add to cart button, hover: shadow."
      },
      {
        id: "glass-product",
        name: "Glass Product Showcase",
        description: "Floating glassmorphic card. Hover reveals details overlay.",
        tags: ["glassmorphism", "futuristic"],
        implementation: "Glass container, image overlay on hover (blur), action buttons appear, wishlist icon."
      },
      {
        id: "enterprise-product",
        name: "Enterprise Catalog",
        description: "Detailed product information. Specs, rating, stock status.",
        tags: ["professional", "enterprise"],
        implementation: "Grid layout, all info visible, rating stars, stock badge, detailed CTA, border."
      },
      {
        id: "playful-product",
        name: "Fun Shop Card",
        description: "Colorful with illustrations. Tilts on hover, bouncy interactions.",
        tags: ["playful", "colorful"],
        implementation: "Gradient border, rounded corners, transform: rotate on hover, emoji badges, colorful CTA."
      },
      {
        id: "brutalist-product",
        name: "Brutalist Shop",
        description: "Heavy borders, offset shadow. Bold typography, high contrast.",
        tags: ["brutalist", "bold"],
        implementation: "Thick black border, box-shadow offset, bold product name, transform on hover."
      }
    ]
  },
  {
    id: "avatar",
    name: "Avatar",
    category: "Display",
    description: "User profile image with fallback and status indicators",
    variants: [
      {
        id: "minimal-avatar",
        name: "Minimal Circle",
        description: "Simple circular avatar. Initials fallback on solid background.",
        tags: ["minimal", "professional"],
        implementation: "border-radius: 50%, bg-gradient for fallback, centered initials, subtle border."
      },
      {
        id: "glass-avatar",
        name: "Glass Avatar Ring",
        description: "Glassmorphic ring border. Frosted background for initials.",
        tags: ["glassmorphism", "futuristic"],
        implementation: "Double container: outer glass ring, inner image/initials, backdrop-filter."
      },
      {
        id: "status-avatar",
        name: "Status Indicator Avatar",
        description: "Avatar with online/offline status dot. Multiple sizes.",
        tags: ["professional", "minimal"],
        implementation: "Position relative, ::after pseudo for status dot (absolute bottom-right), ring on dot."
      },
      {
        id: "hexagon-avatar",
        name: "Hexagon Frame",
        description: "Geometric hexagonal clip-path. Futuristic sci-fi aesthetic.",
        tags: ["futuristic", "experimental"],
        implementation: "clip-path: polygon (hexagon coordinates), border via box-shadow or outline."
      },
      {
        id: "neon-avatar",
        name: "Neon Ring Avatar",
        description: "Glowing neon ring around avatar. Pulsing animation.",
        tags: ["futuristic", "neon"],
        implementation: "box-shadow: 0 0 30px neon-color, border: neon, animation: pulse, dark bg."
      },
      {
        id: "neumorphic-avatar",
        name: "Soft UI Avatar",
        description: "Embossed neumorphic style. Subtle 3D depth effect.",
        tags: ["neumorphic", "3d", "soft"],
        implementation: "Dual box-shadow (inner/outer), same-tone border, soft background."
      }
    ]
  },
  {
    id: "badge",
    name: "Badge",
    category: "Display",
    description: "Label component for status, categories, and tags",
    variants: [
      {
        id: "minimal-badge",
        name: "Minimal Pill Badge",
        description: "Small rounded pill. Muted background, subtle text.",
        tags: ["minimal", "professional"],
        implementation: "Small padding, rounded-full, bg-gray-100, text-xs, inline-flex."
      },
      {
        id: "gradient-badge",
        name: "Gradient Badge",
        description: "Vibrant gradient background. Eye-catching labels.",
        tags: ["gradient", "colorful"],
        implementation: "background: linear-gradient, white text, rounded-full, small shadow."
      },
      {
        id: "outlined-badge",
        name: "Outlined Badge",
        description: "Border only, transparent background. Clean and minimal.",
        tags: ["minimal", "outlined"],
        implementation: "border: 1px solid, transparent bg, colored text + border, rounded."
      },
      {
        id: "neon-badge",
        name: "Neon Glow Badge",
        description: "Dark badge with glowing border and text. Cyberpunk style.",
        tags: ["futuristic", "neon"],
        implementation: "bg-black, border + text-shadow: neon glow, small, rounded."
      },
      {
        id: "status-dot-badge",
        name: "Dot Status Badge",
        description: "Text with leading colored dot. For online/offline/busy states.",
        tags: ["professional", "minimal"],
        implementation: "Flex, ::before dot element, gap, text color matches dot, subtle."
      }
    ]
  },
  {
    id: "checkout-form",
    name: "CheckoutForm",
    category: "Commerce",
    description: "Multi-step checkout form with validation and payment",
    variants: [
      {
        id: "minimal-checkout",
        name: "Minimal Checkout Flow",
        description: "Clean step-by-step form. Progress indicator at top.",
        tags: ["minimal", "professional"],
        implementation: "Stepper component (dots/lines), single column form, section headers, clear CTAs."
      },
      {
        id: "enterprise-checkout",
        name: "Enterprise Checkout",
        description: "Two-column layout. Form + order summary sidebar. Detailed validation.",
        tags: ["professional", "enterprise"],
        implementation: "Grid layout, sticky summary, validation messages, step tabs, save progress."
      },
      {
        id: "glass-checkout",
        name: "Glass Checkout",
        description: "Glassmorphic checkout wizard. Floating panels with blur effect.",
        tags: ["glassmorphism", "futuristic"],
        implementation: "Glass cards for each step, animated transitions, backdrop-filter, soft shadows."
      },
      {
        id: "playful-checkout",
        name: "Friendly Checkout",
        description: "Illustrated progress steps. Encouraging microcopy and emojis.",
        tags: ["playful", "friendly"],
        implementation: "Colorful step icons, rounded design, success animations, friendly button labels."
      }
    ]
  }
];

export const categories = [
  "All",
  "Basic",
  "Forms",
  "Display",
  "Web3",
  "Commerce"
];

export const styleTags = [
  "minimal",
  "glassmorphism",
  "neumorphic",
  "gradient",
  "3d",
  "brutalist",
  "professional",
  "enterprise",
  "futuristic",
  "neon",
  "playful",
  "friendly",
  "soft",
  "colorful",
  "experimental",
  "flat",
  "outlined",
  "monochrome",
  "bold"
];
