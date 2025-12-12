"use client";

import { Check } from "lucide-react";
import { useState } from "react";

export default function CheckoutFormMinimal() {
  const [step, setStep] = useState(1);
  const steps = ['Shipping', 'Payment', 'Review'];

  return (
    <div className="w-full max-w-2xl mx-auto p-6 bg-background border border-border rounded-lg">
      {/* Progress Indicator */}
      <div className="mb-8">
        <div className="flex items-center justify-between">
          {steps.map((label, index) => (
            <div key={label} className="flex items-center">
              <div className="flex flex-col items-center">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-colors ${
                    index + 1 <= step
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {index + 1 < step ? <Check className="w-5 h-5" /> : index + 1}
                </div>
                <span className="text-xs mt-2 font-medium">{label}</span>
              </div>
              {index < steps.length - 1 && (
                <div
                  className={`h-0.5 w-24 mx-2 transition-colors ${
                    index + 1 < step ? 'bg-primary' : 'bg-border'
                  }`}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Form Content */}
      <div className="space-y-4">
        <h2 className="text-xl font-bold">Shipping Address</h2>
        <input
          type="text"
          placeholder="Full Name"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <input
          type="text"
          placeholder="Address"
          className="w-full px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
        />
        <div className="grid grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="City"
            className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <input
            type="text"
            placeholder="ZIP"
            className="px-4 py-2 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 mt-6">
        <button
          onClick={() => setStep(Math.max(1, step - 1))}
          disabled={step === 1}
          className="px-6 py-2 border border-border rounded-lg hover:bg-muted transition-colors disabled:opacity-50"
        >
          Back
        </button>
        <button
          onClick={() => setStep(Math.min(3, step + 1))}
          className="flex-1 px-6 py-2 bg-primary text-primary-foreground rounded-lg hover:opacity-90 transition-opacity"
        >
          {step === 3 ? 'Place Order' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
