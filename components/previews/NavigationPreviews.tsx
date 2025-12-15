"use client";

import { useState } from "react";
import {
  Home, Settings, User, Bell, Search, Menu, X, ChevronRight,
  ChevronLeft, LayoutDashboard, FileText, Users, BarChart3,
  Mail, Calendar, HelpCircle, LogOut, Command, File, Folder
} from "lucide-react";

// Navbar Preview
export function NavbarPreview() {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="w-full max-w-lg">
      <nav className="bg-background border border-border rounded-xl px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
              <span className="text-white font-bold text-sm">A</span>
            </div>
            <span className="font-semibold text-foreground">Acme</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-6">
            {["Home", "Products", "About", "Contact"].map((item, i) => (
              <button
                key={item}
                className={`text-sm transition-colors ${i === 0 ? "text-primary font-medium" : "text-muted-foreground hover:text-foreground"}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2">
            <button className="p-2 hover:bg-muted rounded-lg transition-colors">
              <Search className="w-4 h-4 text-muted-foreground" />
            </button>
            <button className="p-2 hover:bg-muted rounded-lg transition-colors relative">
              <Bell className="w-4 h-4 text-muted-foreground" />
              <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
            </button>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden p-2 hover:bg-muted rounded-lg"
            >
              {mobileOpen ? <X className="w-4 h-4" /> : <Menu className="w-4 h-4" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-3 pt-3 border-t border-border space-y-1">
            {["Home", "Products", "About", "Contact"].map((item) => (
              <button key={item} className="w-full text-left px-3 py-2 text-sm rounded-lg hover:bg-muted">
                {item}
              </button>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

// Sidebar Preview
export function SidebarPreview() {
  const [active, setActive] = useState("dashboard");
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: "dashboard", icon: LayoutDashboard, label: "Dashboard" },
    { id: "projects", icon: Folder, label: "Projects" },
    { id: "analytics", icon: BarChart3, label: "Analytics" },
    { id: "team", icon: Users, label: "Team" },
    { id: "settings", icon: Settings, label: "Settings" },
  ];

  return (
    <div className={`bg-background border border-border rounded-xl transition-all ${collapsed ? "w-16" : "w-56"}`}>
      {/* Header */}
      <div className="p-3 border-b border-border flex items-center justify-between">
        {!collapsed && (
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500" />
            <span className="font-semibold text-sm">Workspace</span>
          </div>
        )}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="p-1.5 hover:bg-muted rounded-lg transition-colors"
        >
          {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
        </button>
      </div>

      {/* Menu */}
      <div className="p-2 space-y-1">
        {menuItems.map((item) => (
          <button
            key={item.id}
            onClick={() => setActive(item.id)}
            className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-colors ${
              active === item.id
                ? "bg-primary/10 text-primary"
                : "text-muted-foreground hover:bg-muted hover:text-foreground"
            }`}
          >
            <item.icon className="w-4 h-4 flex-shrink-0" />
            {!collapsed && <span className="text-sm">{item.label}</span>}
          </button>
        ))}
      </div>

      {/* Footer */}
      <div className="p-2 border-t border-border mt-2">
        <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
          <LogOut className="w-4 h-4 flex-shrink-0" />
          {!collapsed && <span className="text-sm">Logout</span>}
        </button>
      </div>
    </div>
  );
}

// Tabs Preview
export function TabsPreview() {
  const [active, setActive] = useState("overview");
  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "analytics", label: "Analytics" },
    { id: "reports", label: "Reports" },
    { id: "settings", label: "Settings" },
  ];

  return (
    <div className="w-full max-w-md">
      {/* Tab List */}
      <div className="flex border-b border-border">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActive(tab.id)}
            className={`px-4 py-2.5 text-sm font-medium transition-colors relative ${
              active === tab.id
                ? "text-primary"
                : "text-muted-foreground hover:text-foreground"
            }`}
          >
            {tab.label}
            {active === tab.id && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary rounded-full" />
            )}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div className="p-4 bg-muted/30 rounded-b-xl">
        <h3 className="font-medium text-foreground mb-2 capitalize">{active}</h3>
        <p className="text-sm text-muted-foreground">
          This is the {active} tab content. Click other tabs to switch views.
        </p>
      </div>
    </div>
  );
}

// Breadcrumbs Preview
export function BreadcrumbsPreview() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Projects", href: "#" },
    { label: "Website Redesign", href: "#" },
    { label: "Tasks", href: "#", current: true },
  ];

  return (
    <nav className="flex items-center gap-1 text-sm">
      {items.map((item, index) => (
        <div key={item.label} className="flex items-center gap-1">
          {index > 0 && <ChevronRight className="w-4 h-4 text-muted-foreground" />}
          <button
            className={`px-2 py-1 rounded-md transition-colors ${
              item.current
                ? "text-foreground font-medium"
                : "text-muted-foreground hover:text-foreground hover:bg-muted"
            }`}
          >
            {item.label}
          </button>
        </div>
      ))}
    </nav>
  );
}

// Pagination Preview
export function PaginationPreview() {
  const [current, setCurrent] = useState(3);
  const total = 10;

  const pages = [1, 2, 3, 4, 5, "...", total];

  return (
    <div className="flex items-center gap-1">
      <button
        onClick={() => setCurrent(Math.max(1, current - 1))}
        disabled={current === 1}
        className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronLeft className="w-4 h-4" />
      </button>

      {pages.map((page, i) => (
        <button
          key={i}
          onClick={() => typeof page === "number" && setCurrent(page)}
          disabled={page === "..."}
          className={`w-9 h-9 rounded-lg text-sm font-medium transition-colors ${
            current === page
              ? "bg-primary text-white"
              : page === "..."
              ? "cursor-default"
              : "hover:bg-muted"
          }`}
        >
          {page}
        </button>
      ))}

      <button
        onClick={() => setCurrent(Math.min(total, current + 1))}
        disabled={current === total}
        className="p-2 rounded-lg border border-border hover:bg-muted disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
      >
        <ChevronRight className="w-4 h-4" />
      </button>
    </div>
  );
}

// CommandPalette Preview
export function CommandPalettePreview() {
  const [open, setOpen] = useState(true);
  const [search, setSearch] = useState("");

  const commands = [
    { icon: Home, label: "Go to Home", shortcut: "G H" },
    { icon: FileText, label: "New Document", shortcut: "⌘ N" },
    { icon: Search, label: "Search Files", shortcut: "⌘ P" },
    { icon: Settings, label: "Open Settings", shortcut: "⌘ ," },
    { icon: User, label: "View Profile", shortcut: "G P" },
  ];

  const filtered = commands.filter(c =>
    c.label.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-lg border border-border hover:bg-muted text-sm text-muted-foreground"
      >
        <Command className="w-4 h-4" />
        <span>Command Menu</span>
        <kbd className="ml-4 px-1.5 py-0.5 bg-muted rounded text-xs">⌘K</kbd>
      </button>

      {open && (
        <div className="absolute top-full left-0 mt-2 w-80 bg-background border border-border rounded-xl shadow-xl overflow-hidden z-50">
          {/* Search */}
          <div className="flex items-center gap-2 px-3 py-2 border-b border-border">
            <Search className="w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Type a command or search..."
              className="flex-1 bg-transparent text-sm focus:outline-none"
              autoFocus
            />
            <button onClick={() => setOpen(false)} className="p-1 hover:bg-muted rounded">
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          </div>

          {/* Results */}
          <div className="p-1 max-h-64 overflow-auto">
            {filtered.length > 0 ? (
              filtered.map((cmd, i) => (
                <button
                  key={cmd.label}
                  className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors ${i === 0 ? "bg-muted" : ""}`}
                >
                  <cmd.icon className="w-4 h-4 text-muted-foreground" />
                  <span className="flex-1 text-left">{cmd.label}</span>
                  <kbd className="px-1.5 py-0.5 bg-muted rounded text-xs text-muted-foreground">{cmd.shortcut}</kbd>
                </button>
              ))
            ) : (
              <div className="px-3 py-6 text-center text-sm text-muted-foreground">
                No results found
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
