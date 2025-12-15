"use client";

import { useState, useEffect } from "react";
import {
  X, Check, AlertCircle, Info, AlertTriangle, HelpCircle,
  Loader2, ChevronDown
} from "lucide-react";

// Toast Preview
export function ToastPreview() {
  const [toasts, setToasts] = useState([
    { id: 1, type: "success", message: "Changes saved successfully!" },
    { id: 2, type: "error", message: "Something went wrong" },
  ]);

  const removeToast = (id: number) => {
    setToasts(toasts.filter(t => t.id !== id));
  };

  const addToast = () => {
    const types = ["success", "error", "warning", "info"];
    const messages = [
      "Action completed!",
      "Error occurred",
      "Please review",
      "New notification"
    ];
    const type = types[Math.floor(Math.random() * types.length)];
    setToasts([...toasts, {
      id: Date.now(),
      type,
      message: messages[types.indexOf(type)]
    }]);
  };

  const icons: Record<string, React.ReactNode> = {
    success: <Check className="w-4 h-4" />,
    error: <X className="w-4 h-4" />,
    warning: <AlertTriangle className="w-4 h-4" />,
    info: <Info className="w-4 h-4" />,
  };

  const colors: Record<string, string> = {
    success: "bg-green-500",
    error: "bg-red-500",
    warning: "bg-yellow-500",
    info: "bg-blue-500",
  };

  return (
    <div className="space-y-3">
      <button
        onClick={addToast}
        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90"
      >
        Show Toast
      </button>
      <div className="space-y-2">
        {toasts.map((toast) => (
          <div
            key={toast.id}
            className="flex items-center gap-3 px-4 py-3 bg-background border border-border rounded-xl shadow-lg animate-in slide-in-from-right"
          >
            <div className={`w-6 h-6 rounded-full ${colors[toast.type]} flex items-center justify-center text-white`}>
              {icons[toast.type]}
            </div>
            <span className="flex-1 text-sm text-foreground">{toast.message}</span>
            <button
              onClick={() => removeToast(toast.id)}
              className="text-muted-foreground hover:text-foreground"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// Alert Preview
export function AlertPreview() {
  const alerts = [
    { type: "info", icon: Info, title: "Information", message: "This is an informational alert.", color: "blue" },
    { type: "success", icon: Check, title: "Success", message: "Your changes have been saved.", color: "green" },
    { type: "warning", icon: AlertTriangle, title: "Warning", message: "Please review before continuing.", color: "yellow" },
    { type: "error", icon: AlertCircle, title: "Error", message: "Something went wrong. Please try again.", color: "red" },
  ];

  const colorClasses: Record<string, string> = {
    blue: "bg-blue-50 dark:bg-blue-900/20 border-blue-200 dark:border-blue-800 text-blue-800 dark:text-blue-200",
    green: "bg-green-50 dark:bg-green-900/20 border-green-200 dark:border-green-800 text-green-800 dark:text-green-200",
    yellow: "bg-yellow-50 dark:bg-yellow-900/20 border-yellow-200 dark:border-yellow-800 text-yellow-800 dark:text-yellow-200",
    red: "bg-red-50 dark:bg-red-900/20 border-red-200 dark:border-red-800 text-red-800 dark:text-red-200",
  };

  return (
    <div className="w-full max-w-md space-y-3">
      {alerts.slice(0, 2).map((alert) => (
        <div key={alert.type} className={`flex gap-3 p-4 rounded-xl border ${colorClasses[alert.color]}`}>
          <alert.icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
          <div>
            <h4 className="font-medium text-sm">{alert.title}</h4>
            <p className="text-sm opacity-90 mt-0.5">{alert.message}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

// Dialog Preview
export function DialogPreview() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative min-h-[250px]">
      <button
        onClick={() => setOpen(true)}
        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90"
      >
        Open Dialog
      </button>

      {open && (
        <>
          <div className="absolute inset-0 bg-black/50 rounded-xl" onClick={() => setOpen(false)} />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-background border border-border rounded-xl shadow-xl p-6">
            <h3 className="text-lg font-semibold text-foreground">Confirm Action</h3>
            <p className="text-sm text-muted-foreground mt-2">
              Are you sure you want to proceed? This action cannot be undone.
            </p>
            <div className="flex gap-2 mt-4">
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors"
              >
                Cancel
              </button>
              <button
                onClick={() => setOpen(false)}
                className="flex-1 py-2 bg-primary text-white rounded-lg text-sm hover:bg-primary/90 transition-colors"
              >
                Confirm
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

// Sheet Preview
export function SheetPreview() {
  const [open, setOpen] = useState(true);

  return (
    <div className="relative min-h-[300px] overflow-hidden rounded-xl border border-border">
      <div className="p-4">
        <button
          onClick={() => setOpen(true)}
          className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90"
        >
          Open Sheet
        </button>
      </div>

      {/* Sheet */}
      <div
        className={`absolute top-0 right-0 h-full w-64 bg-background border-l border-border shadow-xl transition-transform duration-300 ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="p-4 border-b border-border flex items-center justify-between">
          <h3 className="font-semibold text-foreground">Settings</h3>
          <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
            <X className="w-4 h-4" />
          </button>
        </div>
        <div className="p-4 space-y-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Theme</label>
            <select className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-foreground">Language</label>
            <select className="w-full px-3 py-2 rounded-lg border border-border bg-background text-sm">
              <option>English</option>
              <option>Spanish</option>
              <option>French</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

// Popover Preview
export function PopoverPreview() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90"
      >
        Click me
      </button>

      {open && (
        <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-background border border-border rounded-xl shadow-xl p-4 z-10">
          <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-background border-l border-t border-border rotate-45" />
          <h4 className="font-medium text-foreground">Popover Title</h4>
          <p className="text-sm text-muted-foreground mt-1">
            This is a popover with some helpful information.
          </p>
          <button
            onClick={() => setOpen(false)}
            className="mt-3 w-full py-1.5 bg-muted rounded-lg text-sm hover:bg-muted/80"
          >
            Got it
          </button>
        </div>
      )}
    </div>
  );
}

// Tooltip Preview
export function TooltipPreview() {
  const [activeTooltip, setActiveTooltip] = useState<string | null>(null);

  const buttons = [
    { id: "edit", label: "Edit", tooltip: "Edit this item" },
    { id: "delete", label: "Delete", tooltip: "Delete this item" },
    { id: "share", label: "Share", tooltip: "Share with others" },
  ];

  return (
    <div className="flex gap-2">
      {buttons.map((btn) => (
        <div key={btn.id} className="relative">
          <button
            onMouseEnter={() => setActiveTooltip(btn.id)}
            onMouseLeave={() => setActiveTooltip(null)}
            className="px-4 py-2 border border-border rounded-lg text-sm hover:bg-muted transition-colors"
          >
            {btn.label}
          </button>
          {activeTooltip === btn.id && (
            <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-foreground text-background text-xs rounded whitespace-nowrap">
              {btn.tooltip}
              <div className="absolute top-full left-1/2 -translate-x-1/2 border-4 border-transparent border-t-foreground" />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Skeleton Preview
export function SkeletonPreview() {
  return (
    <div className="w-full max-w-sm space-y-4">
      {/* Card skeleton */}
      <div className="p-4 border border-border rounded-xl space-y-3">
        {/* Avatar + name */}
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-muted animate-pulse" />
          <div className="space-y-2 flex-1">
            <div className="h-4 w-24 bg-muted rounded animate-pulse" />
            <div className="h-3 w-16 bg-muted rounded animate-pulse" />
          </div>
        </div>
        {/* Content */}
        <div className="space-y-2">
          <div className="h-4 w-full bg-muted rounded animate-pulse" />
          <div className="h-4 w-4/5 bg-muted rounded animate-pulse" />
          <div className="h-4 w-3/5 bg-muted rounded animate-pulse" />
        </div>
        {/* Image */}
        <div className="h-32 w-full bg-muted rounded-lg animate-pulse" />
      </div>
    </div>
  );
}

// Progress Preview
export function ProgressPreview() {
  const [progress, setProgress] = useState(65);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) return 0;
        return prev + 5;
      });
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm space-y-6">
      {/* Linear progress */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span className="text-foreground">Uploading...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <div className="h-2 bg-muted rounded-full overflow-hidden">
          <div
            className="h-full bg-primary rounded-full transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      {/* Circular progress */}
      <div className="flex items-center gap-4">
        <div className="relative w-16 h-16">
          <svg className="w-full h-full -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              className="text-muted"
            />
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="4"
              fill="none"
              strokeDasharray={`${progress * 1.76} 176`}
              className="text-primary transition-all duration-300"
            />
          </svg>
          <span className="absolute inset-0 flex items-center justify-center text-sm font-medium">
            {progress}%
          </span>
        </div>

        {/* Spinner */}
        <div className="flex items-center gap-2">
          <Loader2 className="w-6 h-6 text-primary animate-spin" />
          <span className="text-sm text-muted-foreground">Loading...</span>
        </div>
      </div>
    </div>
  );
}
