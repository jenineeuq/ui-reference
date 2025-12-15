"use client";

import { useState } from "react";
import {
  ShoppingCart, Heart, Star, Plus, Minus, X, CreditCard,
  Truck, Shield, Check, Image
} from "lucide-react";

// ProductCard Preview
export function ProductCardPreview() {
  const [liked, setLiked] = useState(false);

  return (
    <div className="w-56 bg-background border border-border rounded-xl overflow-hidden group">
      {/* Image */}
      <div className="relative aspect-square bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-800 dark:to-slate-900">
        <Image className="w-12 h-12 text-muted-foreground absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
        <button
          onClick={() => setLiked(!liked)}
          className="absolute top-2 right-2 p-2 bg-white/80 dark:bg-black/50 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
        >
          <Heart className={`w-4 h-4 ${liked ? "fill-red-500 text-red-500" : ""}`} />
        </button>
        <span className="absolute top-2 left-2 px-2 py-0.5 bg-red-500 text-white text-xs rounded-full">
          -20%
        </span>
      </div>

      {/* Content */}
      <div className="p-4 space-y-2">
        <div className="flex items-center gap-1">
          {[1, 2, 3, 4, 5].map((i) => (
            <Star key={i} className={`w-3 h-3 ${i <= 4 ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}`} />
          ))}
          <span className="text-xs text-muted-foreground ml-1">(128)</span>
        </div>
        <h3 className="font-medium text-sm line-clamp-1">Premium Wireless Headphones</h3>
        <div className="flex items-center gap-2">
          <span className="font-bold">$79.99</span>
          <span className="text-sm text-muted-foreground line-through">$99.99</span>
        </div>
        <button className="w-full flex items-center justify-center gap-2 py-2 bg-primary text-white rounded-lg text-sm font-medium hover:bg-primary/90">
          <ShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
}

// CartDrawer Preview
export function CartDrawerPreview() {
  const [items, setItems] = useState([
    { id: 1, name: "Wireless Headphones", price: 79.99, qty: 1 },
    { id: 2, name: "USB-C Cable", price: 12.99, qty: 2 },
  ]);

  const updateQty = (id: number, delta: number) => {
    setItems(items.map(item =>
      item.id === id ? { ...item, qty: Math.max(1, item.qty + delta) } : item
    ));
  };

  const removeItem = (id: number) => {
    setItems(items.filter(item => item.id !== id));
  };

  const total = items.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="w-80 bg-background border border-border rounded-xl">
      {/* Header */}
      <div className="px-4 py-3 border-b border-border flex items-center justify-between">
        <h3 className="font-semibold">Shopping Cart</h3>
        <span className="text-sm text-muted-foreground">{items.length} items</span>
      </div>

      {/* Items */}
      <div className="p-4 space-y-3 max-h-60 overflow-auto">
        {items.map((item) => (
          <div key={item.id} className="flex gap-3">
            <div className="w-16 h-16 rounded-lg bg-muted flex items-center justify-center shrink-0">
              <Image className="w-6 h-6 text-muted-foreground" />
            </div>
            <div className="flex-1 min-w-0">
              <h4 className="font-medium text-sm truncate">{item.name}</h4>
              <div className="text-sm text-muted-foreground">${item.price.toFixed(2)}</div>
              <div className="flex items-center gap-2 mt-1">
                <button onClick={() => updateQty(item.id, -1)} className="p-0.5 hover:bg-muted rounded">
                  <Minus className="w-3 h-3" />
                </button>
                <span className="text-sm w-6 text-center">{item.qty}</span>
                <button onClick={() => updateQty(item.id, 1)} className="p-0.5 hover:bg-muted rounded">
                  <Plus className="w-3 h-3" />
                </button>
              </div>
            </div>
            <button onClick={() => removeItem(item.id)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-border space-y-3">
        <div className="flex justify-between">
          <span className="text-muted-foreground">Subtotal</span>
          <span className="font-semibold">${total.toFixed(2)}</span>
        </div>
        <button className="w-full py-2.5 bg-primary text-white rounded-lg text-sm font-medium">
          Checkout
        </button>
      </div>
    </div>
  );
}

// CheckoutForm Preview
export function CheckoutFormPreview() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-md p-4 bg-background border border-border rounded-xl space-y-4">
      {/* Progress */}
      <div className="flex items-center justify-between mb-2">
        {["Shipping", "Payment", "Review"].map((s, i) => (
          <div key={s} className="flex items-center">
            <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
              i + 1 <= step ? "bg-primary text-white" : "bg-muted text-muted-foreground"
            }`}>
              {i + 1 < step ? <Check className="w-4 h-4" /> : i + 1}
            </div>
            {i < 2 && <div className={`w-12 h-0.5 mx-1 ${i + 1 < step ? "bg-primary" : "bg-muted"}`} />}
          </div>
        ))}
      </div>

      {/* Form content */}
      {step === 1 && (
        <div className="space-y-3">
          <h3 className="font-semibold">Shipping Address</h3>
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="First name" className="px-3 py-2 border border-border rounded-lg text-sm" />
            <input placeholder="Last name" className="px-3 py-2 border border-border rounded-lg text-sm" />
          </div>
          <input placeholder="Address" className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="City" className="px-3 py-2 border border-border rounded-lg text-sm" />
            <input placeholder="ZIP" className="px-3 py-2 border border-border rounded-lg text-sm" />
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-3">
          <h3 className="font-semibold">Payment Method</h3>
          <div className="p-3 border border-primary bg-primary/5 rounded-lg flex items-center gap-3">
            <CreditCard className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">Credit Card</span>
          </div>
          <input placeholder="Card number" className="w-full px-3 py-2 border border-border rounded-lg text-sm" />
          <div className="grid grid-cols-2 gap-2">
            <input placeholder="MM/YY" className="px-3 py-2 border border-border rounded-lg text-sm" />
            <input placeholder="CVC" className="px-3 py-2 border border-border rounded-lg text-sm" />
          </div>
        </div>
      )}

      {step === 3 && (
        <div className="space-y-3">
          <h3 className="font-semibold">Order Summary</h3>
          <div className="p-3 bg-muted rounded-lg space-y-2 text-sm">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>$105.97</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>$9.99</span>
            </div>
            <div className="flex justify-between font-semibold pt-2 border-t border-border">
              <span>Total</span>
              <span>$115.96</span>
            </div>
          </div>
        </div>
      )}

      {/* Actions */}
      <div className="flex gap-2">
        {step > 1 && (
          <button onClick={() => setStep(step - 1)} className="flex-1 py-2 border border-border rounded-lg text-sm">
            Back
          </button>
        )}
        <button
          onClick={() => setStep(Math.min(step + 1, 3))}
          className="flex-1 py-2 bg-primary text-white rounded-lg text-sm font-medium"
        >
          {step === 3 ? "Place Order" : "Continue"}
        </button>
      </div>

      {/* Trust badges */}
      <div className="flex items-center justify-center gap-4 pt-2 text-xs text-muted-foreground">
        <span className="flex items-center gap-1">
          <Shield className="w-3 h-3" /> Secure
        </span>
        <span className="flex items-center gap-1">
          <Truck className="w-3 h-3" /> Free shipping
        </span>
      </div>
    </div>
  );
}

// PricingTable Preview
export function PricingTablePreview() {
  const [annual, setAnnual] = useState(true);

  const plans = [
    {
      name: "Starter",
      price: annual ? 9 : 12,
      features: ["5 projects", "10GB storage", "Email support"],
      popular: false,
    },
    {
      name: "Pro",
      price: annual ? 29 : 39,
      features: ["Unlimited projects", "100GB storage", "Priority support", "Analytics"],
      popular: true,
    },
    {
      name: "Enterprise",
      price: annual ? 99 : 129,
      features: ["Everything in Pro", "Custom integrations", "Dedicated support", "SLA"],
      popular: false,
    },
  ];

  return (
    <div className="space-y-4">
      {/* Toggle */}
      <div className="flex items-center justify-center gap-3">
        <span className={`text-sm ${!annual ? "text-foreground" : "text-muted-foreground"}`}>Monthly</span>
        <button
          onClick={() => setAnnual(!annual)}
          className={`relative w-12 h-6 rounded-full transition-colors ${annual ? "bg-primary" : "bg-muted"}`}
        >
          <div className={`absolute top-1 w-4 h-4 rounded-full bg-white shadow transition-transform ${annual ? "translate-x-7" : "translate-x-1"}`} />
        </button>
        <span className={`text-sm ${annual ? "text-foreground" : "text-muted-foreground"}`}>
          Annual <span className="text-green-500 text-xs">-20%</span>
        </span>
      </div>

      {/* Plans */}
      <div className="flex gap-3">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`flex-1 p-4 rounded-xl border ${
              plan.popular ? "border-primary bg-primary/5" : "border-border"
            }`}
          >
            {plan.popular && (
              <span className="text-xs text-primary font-medium">Most Popular</span>
            )}
            <h3 className="font-semibold mt-1">{plan.name}</h3>
            <div className="mt-2">
              <span className="text-2xl font-bold">${plan.price}</span>
              <span className="text-muted-foreground text-sm">/mo</span>
            </div>
            <ul className="mt-3 space-y-1.5">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <Check className="w-4 h-4 text-green-500" />
                  {feature}
                </li>
              ))}
            </ul>
            <button
              className={`w-full mt-4 py-2 rounded-lg text-sm font-medium ${
                plan.popular
                  ? "bg-primary text-white"
                  : "border border-border hover:bg-muted"
              }`}
            >
              Get Started
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
