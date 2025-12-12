"use client";

import { CreditCard, Lock, Package, CheckCircle } from "lucide-react";
import { useState } from "react";

export default function CheckoutFormEnterprise() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-6xl mx-auto grid lg:grid-cols-3 gap-6">
      {/* Main Form */}
      <div className="lg:col-span-2 space-y-6">
        {/* Step Tabs */}
        <div className="bg-background border border-border rounded-lg p-1 flex gap-1">
          {[
            { id: 1, label: 'Shipping', icon: Package },
            { id: 2, label: 'Payment', icon: CreditCard },
            { id: 3, label: 'Review', icon: CheckCircle }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setStep(id)}
              className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md font-medium transition-colors ${
                step === id
                  ? 'bg-primary text-primary-foreground'
                  : 'hover:bg-muted'
              }`}
            >
              <Icon className="w-4 h-4" />
              {label}
            </button>
          ))}
        </div>

        {/* Form Card */}
        <div className="bg-background border border-border rounded-lg p-6">
          <h2 className="text-xl font-bold mb-4 flex items-center gap-2">
            <Lock className="w-5 h-5" />
            Shipping Information
          </h2>

          <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">First Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Last Name</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Email Address</label>
              <input
                type="email"
                className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <p className="text-xs text-muted-foreground mt-1">Order confirmation will be sent here</p>
            </div>

            <div>
              <label className="block text-sm font-medium mb-1">Street Address</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
              />
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium mb-1">City</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">State</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">ZIP</label>
                <input
                  type="text"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                />
              </div>
            </div>
          </div>

          <button className="w-full mt-6 px-6 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover:opacity-90 transition-opacity">
            Continue to Payment
          </button>
        </div>
      </div>

      {/* Order Summary Sidebar */}
      <div className="lg:col-span-1">
        <div className="bg-muted/50 border border-border rounded-lg p-6 sticky top-6">
          <h3 className="font-bold text-lg mb-4">Order Summary</h3>

          <div className="space-y-3 mb-4">
            <div className="flex justify-between text-sm">
              <span>Subtotal</span>
              <span className="font-semibold">$299.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Shipping</span>
              <span className="font-semibold">$9.99</span>
            </div>
            <div className="flex justify-between text-sm">
              <span>Tax</span>
              <span className="font-semibold">$24.00</span>
            </div>
            <div className="h-px bg-border" />
            <div className="flex justify-between font-bold text-lg">
              <span>Total</span>
              <span>$333.98</span>
            </div>
          </div>

          <div className="bg-background border border-border rounded-lg p-3 text-sm">
            <div className="flex items-center gap-2 text-green-600 dark:text-green-400 font-medium">
              <CheckCircle className="w-4 h-4" />
              Free returns within 30 days
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
