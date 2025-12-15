"use client";

import { useState } from "react";
import {
  User, Mail, Lock, Eye, EyeOff, Github, Chrome, LogOut,
  Settings, HelpCircle, CreditCard, ChevronRight
} from "lucide-react";

// AuthCard Preview
export function AuthCardPreview() {
  const [mode, setMode] = useState<"login" | "signup">("login");
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full max-w-sm p-6 bg-background border border-border rounded-xl">
      {/* Header */}
      <div className="text-center mb-6">
        <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white font-bold text-xl">A</span>
        </div>
        <h2 className="text-xl font-semibold">
          {mode === "login" ? "Welcome back" : "Create an account"}
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          {mode === "login"
            ? "Sign in to continue to your account"
            : "Enter your details to get started"}
        </p>
      </div>

      {/* Social login */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">
          <Chrome className="w-4 h-4" />
          Google
        </button>
        <button className="flex items-center justify-center gap-2 px-4 py-2 border border-border rounded-lg hover:bg-muted text-sm">
          <Github className="w-4 h-4" />
          GitHub
        </button>
      </div>

      <div className="relative my-4">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-border" />
        </div>
        <div className="relative flex justify-center text-xs">
          <span className="bg-background px-2 text-muted-foreground">or continue with</span>
        </div>
      </div>

      {/* Form */}
      <div className="space-y-3">
        {mode === "signup" && (
          <div className="relative">
            <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
            <input
              type="text"
              placeholder="Full name"
              className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
            />
          </div>
        )}
        <div className="relative">
          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="email"
            placeholder="Email address"
            className="w-full pl-10 pr-4 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
        </div>
        <div className="relative">
          <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type={showPassword ? "text" : "password"}
            placeholder="Password"
            className="w-full pl-10 pr-10 py-2 border border-border rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/50"
          />
          <button
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
          >
            {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
          </button>
        </div>

        {mode === "login" && (
          <div className="flex justify-end">
            <button className="text-xs text-primary hover:underline">
              Forgot password?
            </button>
          </div>
        )}

        <button className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
          {mode === "login" ? "Sign in" : "Create account"}
        </button>
      </div>

      {/* Footer */}
      <p className="text-center text-sm text-muted-foreground mt-4">
        {mode === "login" ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          onClick={() => setMode(mode === "login" ? "signup" : "login")}
          className="text-primary hover:underline"
        >
          {mode === "login" ? "Sign up" : "Sign in"}
        </button>
      </p>
    </div>
  );
}

// UserMenu Preview
export function UserMenuPreview() {
  const [open, setOpen] = useState(false);

  const menuItems = [
    { icon: User, label: "Profile", href: "#" },
    { icon: Settings, label: "Settings", href: "#" },
    { icon: CreditCard, label: "Billing", href: "#" },
    { icon: HelpCircle, label: "Help & Support", href: "#" },
    { divider: true },
    { icon: LogOut, label: "Log out", href: "#", danger: true },
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-3 px-3 py-2 rounded-xl border border-border hover:bg-muted transition-colors"
      >
        <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center">
          <span className="text-white text-sm font-medium">JD</span>
        </div>
        <div className="text-left hidden sm:block">
          <div className="text-sm font-medium">John Doe</div>
          <div className="text-xs text-muted-foreground">john@example.com</div>
        </div>
        <ChevronRight className={`w-4 h-4 text-muted-foreground transition-transform ${open ? "rotate-90" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full right-0 mt-2 w-56 bg-background border border-border rounded-xl shadow-xl p-1 z-20">
            {/* User info */}
            <div className="px-3 py-2 border-b border-border mb-1">
              <div className="font-medium text-sm">John Doe</div>
              <div className="text-xs text-muted-foreground">john@example.com</div>
            </div>

            {menuItems.map((item, i) =>
              item.divider ? (
                <div key={i} className="h-px bg-border my-1" />
              ) : (
                <button
                  key={i}
                  onClick={() => setOpen(false)}
                  className={`w-full flex items-center gap-2 px-3 py-2 rounded-lg text-sm hover:bg-muted transition-colors ${
                    item.danger ? "text-red-500" : ""
                  }`}
                >
                  {item.icon && <item.icon className="w-4 h-4" />}
                  <span>{item.label}</span>
                </button>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
}
