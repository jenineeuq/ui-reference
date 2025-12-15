"use client";

import { useState } from "react";
import {
  User, Check, X, Copy, Clock, AlertTriangle, Inbox,
  RefreshCw, Plus
} from "lucide-react";

// Avatar Preview
export function AvatarPreview() {
  const avatars = [
    { size: "sm", name: "JD" },
    { size: "md", name: "AS" },
    { size: "lg", name: "BW" },
  ];

  return (
    <div className="space-y-4">
      {/* Single avatars */}
      <div className="flex items-center gap-4">
        {/* With image */}
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <User className="w-6 h-6 text-white" />
        </div>
        {/* With initials */}
        <div className="w-12 h-12 rounded-full bg-blue-500 flex items-center justify-center">
          <span className="text-white font-medium">JD</span>
        </div>
        {/* With status */}
        <div className="relative">
          <div className="w-12 h-12 rounded-full bg-green-500 flex items-center justify-center">
            <span className="text-white font-medium">AS</span>
          </div>
          <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-400 rounded-full border-2 border-background" />
        </div>
      </div>

      {/* Avatar group */}
      <div className="flex -space-x-3">
        {["bg-purple-500", "bg-blue-500", "bg-green-500", "bg-orange-500"].map((bg, i) => (
          <div
            key={i}
            className={`w-10 h-10 rounded-full ${bg} flex items-center justify-center border-2 border-background`}
          >
            <span className="text-white text-sm font-medium">{String.fromCharCode(65 + i)}</span>
          </div>
        ))}
        <div className="w-10 h-10 rounded-full bg-muted flex items-center justify-center border-2 border-background">
          <span className="text-muted-foreground text-xs font-medium">+5</span>
        </div>
      </div>
    </div>
  );
}

// Badge Preview
export function BadgePreview() {
  const badges = [
    { label: "New", variant: "default" },
    { label: "Success", variant: "success" },
    { label: "Warning", variant: "warning" },
    { label: "Error", variant: "error" },
    { label: "Info", variant: "info" },
  ];

  const variantClasses: Record<string, string> = {
    default: "bg-primary text-white",
    success: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400",
    warning: "bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400",
    error: "bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400",
    info: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400",
  };

  return (
    <div className="space-y-3">
      {/* Basic badges */}
      <div className="flex flex-wrap gap-2">
        {badges.map((badge) => (
          <span
            key={badge.variant}
            className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${variantClasses[badge.variant]}`}
          >
            {badge.label}
          </span>
        ))}
      </div>

      {/* Badges with icons */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400">
          <Check className="w-3 h-3" />
          Verified
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-yellow-100 text-yellow-600 dark:bg-yellow-900/30 dark:text-yellow-400">
          <Clock className="w-3 h-3" />
          Pending
        </span>
      </div>

      {/* Dot badges */}
      <div className="flex flex-wrap gap-2">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs bg-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
          Active
        </span>
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-xs bg-muted">
          <span className="w-1.5 h-1.5 rounded-full bg-red-500" />
          Offline
        </span>
      </div>
    </div>
  );
}

// Tag Preview
export function TagPreview() {
  const [tags, setTags] = useState(["React", "TypeScript", "Tailwind", "Next.js"]);

  const removeTag = (tag: string) => {
    setTags(tags.filter(t => t !== tag));
  };

  const addTag = () => {
    const newTags = ["Vue", "Angular", "Svelte", "Node.js"];
    const available = newTags.filter(t => !tags.includes(t));
    if (available.length > 0) {
      setTags([...tags, available[0]]);
    }
  };

  return (
    <div className="space-y-3">
      {/* Removable tags */}
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg bg-muted text-sm"
          >
            {tag}
            <button
              onClick={() => removeTag(tag)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-3 h-3" />
            </button>
          </span>
        ))}
        <button
          onClick={addTag}
          className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg border border-dashed border-border text-sm text-muted-foreground hover:text-foreground hover:border-foreground"
        >
          <Plus className="w-3 h-3" />
          Add
        </button>
      </div>

      {/* Colored tags */}
      <div className="flex flex-wrap gap-2">
        {[
          { label: "Design", color: "bg-purple-100 text-purple-600 dark:bg-purple-900/30 dark:text-purple-400" },
          { label: "Development", color: "bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400" },
          { label: "Marketing", color: "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400" },
        ].map((tag) => (
          <span key={tag.label} className={`px-2.5 py-1 rounded-lg text-sm ${tag.color}`}>
            {tag.label}
          </span>
        ))}
      </div>
    </div>
  );
}

// Timestamp Preview
export function TimestampPreview() {
  return (
    <div className="space-y-3">
      <div className="flex items-center gap-3 text-sm">
        <Clock className="w-4 h-4 text-muted-foreground" />
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Relative:</span>
            <span>5 minutes ago</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">Absolute:</span>
            <span>Dec 13, 2024 at 2:30 PM</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">ISO:</span>
            <span className="font-mono text-xs">2024-12-13T14:30:00Z</span>
          </div>
        </div>
      </div>

      {/* Timeline style */}
      <div className="space-y-2">
        {[
          { time: "2 min ago", event: "User logged in" },
          { time: "1 hour ago", event: "File uploaded" },
          { time: "Yesterday", event: "Account created" },
        ].map((item, i) => (
          <div key={i} className="flex items-center gap-3 text-sm">
            <span className="text-xs text-muted-foreground w-20">{item.time}</span>
            <div className="w-2 h-2 rounded-full bg-primary" />
            <span>{item.event}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// CopyButton Preview
export function CopyButtonPreview() {
  const [copied, setCopied] = useState<string | null>(null);

  const copyText = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopied(id);
    setTimeout(() => setCopied(null), 2000);
  };

  return (
    <div className="space-y-3">
      {/* Inline copy */}
      <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
        <code className="text-sm flex-1 font-mono">npm install @acme/ui</code>
        <button
          onClick={() => copyText("npm install @acme/ui", "npm")}
          className="p-1.5 hover:bg-background rounded transition-colors"
        >
          {copied === "npm" ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Address copy */}
      <div className="flex items-center gap-2 px-3 py-2 bg-muted rounded-lg">
        <span className="text-sm flex-1 font-mono">0x1234...5678</span>
        <button
          onClick={() => copyText("0x1234567890abcdef", "address")}
          className="p-1.5 hover:bg-background rounded transition-colors"
        >
          {copied === "address" ? (
            <Check className="w-4 h-4 text-green-500" />
          ) : (
            <Copy className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* Copy button standalone */}
      <button
        onClick={() => copyText("https://example.com/share/abc123", "link")}
        className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm"
      >
        {copied === "link" ? (
          <>
            <Check className="w-4 h-4 text-green-500" />
            Copied!
          </>
        ) : (
          <>
            <Copy className="w-4 h-4" />
            Copy Link
          </>
        )}
      </button>
    </div>
  );
}

// QRCode Preview
export function QRCodePreview() {
  // Simple QR code pattern (visual representation)
  const pattern = [
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,0,0,1,0,1,1,1,0,1],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,1,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,1],
    [1,1,1,1,1,1,1,0,1,0,1,1,1,1,1,1,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,0,1,0,1,1,1,1,0,1,1,0,1,0,1,0,1],
    [0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,1,1,0,1,0,1,0,1],
    [1,0,1,1,1,0,1,0,0,1,0,1,0,1,0,1,0],
    [1,0,1,1,1,0,1,0,1,0,1,0,1,0,1,0,1],
    [1,0,0,0,0,0,1,0,0,0,0,0,1,0,0,1,0],
    [1,1,1,1,1,1,1,0,1,0,1,0,1,0,1,0,1],
  ];

  return (
    <div className="space-y-4">
      <div className="p-4 bg-white rounded-xl inline-block">
        <div className="grid gap-0.5" style={{ gridTemplateColumns: `repeat(${pattern[0].length}, 1fr)` }}>
          {pattern.flat().map((cell, i) => (
            <div
              key={i}
              className={`w-2 h-2 ${cell ? "bg-black" : "bg-white"}`}
            />
          ))}
        </div>
      </div>

      <div className="text-sm text-muted-foreground">
        Scan to open link
      </div>
    </div>
  );
}

// EmptyState Preview
export function EmptyStatePreview() {
  return (
    <div className="w-full max-w-sm p-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-muted flex items-center justify-center">
        <Inbox className="w-8 h-8 text-muted-foreground" />
      </div>
      <h3 className="font-semibold text-lg mb-1">No items yet</h3>
      <p className="text-sm text-muted-foreground mb-4">
        Get started by creating your first item.
      </p>
      <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
        Create Item
      </button>
    </div>
  );
}

// ErrorState Preview
export function ErrorStatePreview() {
  return (
    <div className="w-full max-w-sm p-8 text-center">
      <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
        <AlertTriangle className="w-8 h-8 text-red-500" />
      </div>
      <h3 className="font-semibold text-lg mb-1">Something went wrong</h3>
      <p className="text-sm text-muted-foreground mb-4">
        We couldn't load this content. Please try again.
      </p>
      <button className="inline-flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted">
        <RefreshCw className="w-4 h-4" />
        Try Again
      </button>
    </div>
  );
}
