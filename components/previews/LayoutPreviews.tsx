"use client";

import { useState } from "react";
import {
  ChevronDown, ChevronLeft, ChevronRight, GripVertical,
  MoreHorizontal, Heart, MessageCircle, Share, Image
} from "lucide-react";

// Card Preview
export function CardPreview() {
  return (
    <div className="w-full max-w-sm bg-background border border-border rounded-xl overflow-hidden">
      {/* Image */}
      <div className="h-40 bg-gradient-to-br from-purple-400 via-pink-400 to-blue-400 flex items-center justify-center">
        <Image className="w-12 h-12 text-white/30" />
      </div>

      {/* Content */}
      <div className="p-4 space-y-3">
        <div>
          <h3 className="font-semibold">Card Title</h3>
          <p className="text-sm text-muted-foreground mt-1">
            This is a description of the card content. It can contain multiple lines of text.
          </p>
        </div>

        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex items-center gap-3">
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <Heart className="w-4 h-4" />
              <span>24</span>
            </button>
            <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
              <MessageCircle className="w-4 h-4" />
              <span>8</span>
            </button>
          </div>
          <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">
            <Share className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

// Accordion Preview
export function AccordionPreview() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const items = [
    { title: "What is your refund policy?", content: "We offer a 30-day money back guarantee. If you're not satisfied with our product, contact us for a full refund." },
    { title: "How do I change my password?", content: "Go to Settings > Security > Change Password. You'll need to enter your current password and then your new password twice." },
    { title: "Do you offer discounts?", content: "Yes! We offer student discounts, annual subscription discounts, and occasional promotional offers. Check our pricing page for current deals." },
  ];

  return (
    <div className="w-full max-w-md border border-border rounded-xl overflow-hidden divide-y divide-border">
      {items.map((item, i) => (
        <div key={i}>
          <button
            onClick={() => setOpenIndex(openIndex === i ? null : i)}
            className="w-full flex items-center justify-between px-4 py-3 text-left hover:bg-muted/50 transition-colors"
          >
            <span className="font-medium text-sm">{item.title}</span>
            <ChevronDown className={`w-4 h-4 text-muted-foreground transition-transform ${openIndex === i ? "rotate-180" : ""}`} />
          </button>
          {openIndex === i && (
            <div className="px-4 pb-3 text-sm text-muted-foreground">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// ScrollArea Preview
export function ScrollAreaPreview() {
  const items = Array.from({ length: 20 }, (_, i) => `Item ${i + 1}`);

  return (
    <div className="w-full max-w-xs">
      <div className="text-sm font-medium mb-2">Scrollable Content</div>
      <div className="h-48 overflow-auto border border-border rounded-xl">
        <div className="p-2 space-y-1">
          {items.map((item, i) => (
            <div
              key={i}
              className="px-3 py-2 rounded-lg hover:bg-muted text-sm cursor-pointer"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// ResizablePanels Preview
export function ResizablePanelsPreview() {
  const [leftWidth, setLeftWidth] = useState(40);

  return (
    <div className="w-full max-w-md h-48 flex border border-border rounded-xl overflow-hidden">
      {/* Left panel */}
      <div style={{ width: `${leftWidth}%` }} className="bg-muted/30 p-3">
        <div className="text-xs font-medium text-muted-foreground mb-2">Sidebar</div>
        <div className="space-y-1">
          {["Dashboard", "Projects", "Settings"].map((item) => (
            <div key={item} className="px-2 py-1 text-sm rounded hover:bg-muted cursor-pointer">
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* Resizer */}
      <div
        className="w-1 bg-border hover:bg-primary cursor-col-resize flex items-center justify-center group"
        onMouseDown={(e) => {
          const startX = e.clientX;
          const startWidth = leftWidth;
          const onMove = (e: MouseEvent) => {
            const diff = ((e.clientX - startX) / 400) * 100;
            setLeftWidth(Math.min(70, Math.max(20, startWidth + diff)));
          };
          const onUp = () => {
            document.removeEventListener("mousemove", onMove);
            document.removeEventListener("mouseup", onUp);
          };
          document.addEventListener("mousemove", onMove);
          document.addEventListener("mouseup", onUp);
        }}
      >
        <GripVertical className="w-3 h-3 text-muted-foreground group-hover:text-primary" />
      </div>

      {/* Right panel */}
      <div className="flex-1 p-3">
        <div className="text-xs font-medium text-muted-foreground mb-2">Content</div>
        <div className="text-sm text-muted-foreground">
          Drag the handle to resize panels
        </div>
      </div>
    </div>
  );
}

// Carousel Preview
export function CarouselPreview() {
  const [current, setCurrent] = useState(0);
  const slides = [
    { bg: "from-purple-400 to-pink-400" },
    { bg: "from-blue-400 to-cyan-400" },
    { bg: "from-green-400 to-emerald-400" },
    { bg: "from-orange-400 to-red-400" },
  ];

  const next = () => setCurrent((current + 1) % slides.length);
  const prev = () => setCurrent((current - 1 + slides.length) % slides.length);

  return (
    <div className="w-full max-w-sm">
      <div className="relative">
        {/* Slides */}
        <div className="overflow-hidden rounded-xl">
          <div
            className="flex transition-transform duration-300"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {slides.map((slide, i) => (
              <div
                key={i}
                className={`w-full flex-shrink-0 aspect-video bg-gradient-to-br ${slide.bg} flex items-center justify-center`}
              >
                <span className="text-white font-semibold">Slide {i + 1}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation */}
        <button
          onClick={prev}
          className="absolute left-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 rounded-full text-white hover:bg-black/70"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>
        <button
          onClick={next}
          className="absolute right-2 top-1/2 -translate-y-1/2 p-1.5 bg-black/50 rounded-full text-white hover:bg-black/70"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

      {/* Dots */}
      <div className="flex justify-center gap-1.5 mt-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={`w-2 h-2 rounded-full transition-colors ${
              i === current ? "bg-primary" : "bg-muted"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

// Masonry Preview
export function MasonryPreview() {
  const items = [
    { height: 80, color: "from-purple-400 to-pink-400" },
    { height: 120, color: "from-blue-400 to-cyan-400" },
    { height: 60, color: "from-green-400 to-emerald-400" },
    { height: 100, color: "from-orange-400 to-red-400" },
    { height: 90, color: "from-violet-400 to-purple-400" },
    { height: 70, color: "from-teal-400 to-cyan-400" },
  ];

  return (
    <div className="w-full max-w-sm">
      <div className="text-sm font-medium mb-2">Masonry Grid</div>
      <div className="columns-2 gap-2 space-y-2">
        {items.map((item, i) => (
          <div
            key={i}
            className={`bg-gradient-to-br ${item.color} rounded-xl flex items-center justify-center break-inside-avoid`}
            style={{ height: item.height }}
          >
            <span className="text-white text-xs font-medium">{i + 1}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
