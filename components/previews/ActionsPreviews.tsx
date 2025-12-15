"use client";

import { useState } from "react";
import {
  ChevronDown, Plus, Edit, Trash2, Copy, Share, Download,
  MoreHorizontal, Settings, User, LogOut, Heart, Star, Flag, Archive
} from "lucide-react";

// Button Preview
export function ButtonPreview() {
  const [loading, setLoading] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setTimeout(() => setLoading(false), 1500);
  };

  return (
    <div className="space-y-4">
      {/* Primary variants */}
      <div className="flex flex-wrap gap-2">
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
          Primary
        </button>
        <button className="px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors">
          Secondary
        </button>
        <button className="px-4 py-2 bg-red-500 text-white rounded-lg text-sm font-medium hover:bg-red-600 transition-colors">
          Destructive
        </button>
        <button className="px-4 py-2 text-primary text-sm font-medium hover:underline">
          Link
        </button>
      </div>

      {/* Sizes */}
      <div className="flex items-center gap-2">
        <button className="px-2.5 py-1 bg-primary text-white rounded text-xs font-medium">
          Small
        </button>
        <button className="px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium">
          Default
        </button>
        <button className="px-6 py-3 bg-primary text-white rounded-xl text-base font-medium">
          Large
        </button>
      </div>

      {/* With icons */}
      <div className="flex gap-2">
        <button className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
          <Plus className="w-4 h-4" />
          Create
        </button>
        <button
          onClick={handleClick}
          disabled={loading}
          className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90 disabled:opacity-70"
        >
          {loading ? (
            <>
              <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              Loading...
            </>
          ) : (
            <>
              <Download className="w-4 h-4" />
              Download
            </>
          )}
        </button>
      </div>
    </div>
  );
}

// DropdownMenu Preview
export function DropdownMenuPreview() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: Edit, label: "Edit", shortcut: "⌘E" },
    { icon: Copy, label: "Duplicate", shortcut: "⌘D" },
    { divider: true },
    { icon: Share, label: "Share", shortcut: "⌘S" },
    { icon: Download, label: "Download" },
    { divider: true },
    { icon: Trash2, label: "Delete", shortcut: "⌘⌫", destructive: true },
  ];

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-2 border border-border rounded-lg text-sm font-medium hover:bg-muted transition-colors"
      >
        Actions
        <ChevronDown className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full left-0 mt-1 w-48 bg-background border border-border rounded-xl shadow-xl p-1 z-20">
            {menuItems.map((item, i) =>
              item.divider ? (
                <div key={i} className="h-px bg-border my-1" />
              ) : (
                <button
                  key={i}
                  onClick={() => setOpen(false)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors ${
                    item.destructive ? "text-red-500" : ""
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span className="flex-1 text-left">{item.label}</span>
                  {item.shortcut && (
                    <span className="text-xs text-muted-foreground">{item.shortcut}</span>
                  )}
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}

// ContextMenu Preview
export function ContextMenuPreview() {
  const [menu, setMenu] = useState<{ x: number; y: number } | null>(null);

  const menuItems = [
    { icon: Edit, label: "Edit" },
    { icon: Copy, label: "Copy" },
    { icon: Star, label: "Add to favorites" },
    { divider: true },
    { icon: Flag, label: "Report" },
    { icon: Archive, label: "Archive" },
    { divider: true },
    { icon: Trash2, label: "Delete", destructive: true },
  ];

  const handleContextMenu = (e: React.MouseEvent) => {
    e.preventDefault();
    const rect = e.currentTarget.getBoundingClientRect();
    setMenu({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <div
      onContextMenu={handleContextMenu}
      onClick={() => setMenu(null)}
      className="relative w-full max-w-sm h-40 border-2 border-dashed border-border rounded-xl flex items-center justify-center cursor-context-menu"
    >
      <p className="text-sm text-muted-foreground">Right-click anywhere</p>

      {menu && (
        <div
          className="absolute w-48 bg-background border border-border rounded-xl shadow-xl p-1 z-20"
          style={{ left: menu.x, top: menu.y }}
        >
          {menuItems.map((item, i) =>
            item.divider ? (
              <div key={i} className="h-px bg-border my-1" />
            ) : (
              <button
                key={i}
                onClick={(e) => { e.stopPropagation(); setMenu(null); }}
                className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors ${
                  item.destructive ? "text-red-500" : ""
                }`}
              >
                {item.icon && <item.icon className="w-4 h-4" />}
                <span>{item.label}</span>
              </button>
            )
          )}
        </div>
      )}
    </div>
  );
}

// ActionBar Preview
export function ActionBarPreview() {
  const [selected, setSelected] = useState([1, 2, 3]);

  const actions = [
    { icon: Edit, label: "Edit" },
    { icon: Copy, label: "Duplicate" },
    { icon: Download, label: "Export" },
    { icon: Archive, label: "Archive" },
    { icon: Trash2, label: "Delete", destructive: true },
  ];

  if (selected.length === 0) {
    return (
      <div className="text-center p-4">
        <p className="text-sm text-muted-foreground mb-2">No items selected</p>
        <button
          onClick={() => setSelected([1, 2, 3])}
          className="px-3 py-1.5 text-sm text-primary hover:underline"
        >
          Select items
        </button>
      </div>
    );
  }

  return (
    <div className="w-full max-w-lg">
      {/* Action bar */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-primary/10 border border-primary/20 rounded-xl">
        <div className="flex items-center gap-3">
          <span className="text-sm font-medium text-primary">
            {selected.length} selected
          </span>
          <button
            onClick={() => setSelected([])}
            className="text-sm text-muted-foreground hover:text-foreground"
          >
            Clear
          </button>
        </div>

        <div className="flex items-center gap-1">
          {actions.map((action, i) => (
            <button
              key={i}
              className={`p-2 rounded-lg hover:bg-background/50 transition-colors ${
                action.destructive ? "text-red-500" : "text-foreground"
              }`}
              title={action.label}
            >
              <action.icon className="w-4 h-4" />
            </button>
          ))}
          <button className="p-2 rounded-lg hover:bg-background/50 text-muted-foreground">
            <MoreHorizontal className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Sample items */}
      <div className="mt-3 space-y-1">
        {[1, 2, 3, 4].map((item) => (
          <div
            key={item}
            onClick={() => {
              if (selected.includes(item)) {
                setSelected(selected.filter(s => s !== item));
              } else {
                setSelected([...selected, item]);
              }
            }}
            className={`flex items-center gap-3 px-3 py-2 rounded-lg cursor-pointer transition-colors ${
              selected.includes(item)
                ? "bg-primary/5 border border-primary/20"
                : "hover:bg-muted"
            }`}
          >
            <div className={`w-4 h-4 rounded border-2 flex items-center justify-center ${
              selected.includes(item) ? "bg-primary border-primary" : "border-border"
            }`}>
              {selected.includes(item) && (
                <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
              )}
            </div>
            <span className="text-sm">Item {item}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
