"use client";

import { ArrowRight, Check } from "lucide-react";
import { useState } from "react";

export default function CheckoutFormGlass() {
  const [step, setStep] = useState(1);

  return (
    <div className="w-full max-w-3xl mx-auto">
      {/* Glass Card */}
      <div className="backdrop-blur-xl bg-white/10 dark:bg-black/10 border border-white/20 rounded-2xl overflow-hidden shadow-2xl">
        {/* Progress Bar */}
        <div className="relative h-2 bg-white/10">
          <div
            className="absolute left-0 top-0 h-full bg-gradient-to-r from-purple-500 to-pink-500 transition-all duration-500"
            style={{ width: `${(step / 3) * 100}%` }}
          />
        </div>

        {/* Content */}
        <div className="p-8">
          {/* Steps */}
          <div className="flex justify-between mb-8">
            {['Shipping', 'Payment', 'Confirm'].map((label, index) => (
              <div key={label} className="flex items-center">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold backdrop-blur-sm transition-all ${
                    index + 1 <= step
                      ? 'bg-gradient-to-br from-purple-500 to-pink-500 text-white'
                      : 'bg-white/20 text-white/50'
                  }`}
                >
                  {index + 1 < step ? <Check className="w-6 h-6" /> : index + 1}
                </div>
                <span className="ml-2 text-sm font-medium text-white/80">{label}</span>
              </div>
            ))}
          </div>

          {/* Form */}
          <div className="space-y-4 mb-6">
            <input
              type="text"
              placeholder="Full Name"
              className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="text"
              placeholder="Street Address"
              className="w-full px-4 py-3 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
            />
            <div className="grid grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="City"
                className="px-4 py-3 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
              <input
                type="text"
                placeholder="ZIP Code"
                className="px-4 py-3 rounded-lg backdrop-blur-sm bg-white/20 border border-white/30 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>
          </div>

          {/* Continue Button */}
          <button
            onClick={() => setStep(Math.min(3, step + 1))}
            className="w-full flex items-center justify-center gap-2 px-6 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-pink-500 text-white font-bold shadow-lg hover:shadow-xl transform hover:scale-[1.02] transition-all"
          >
            {step === 3 ? 'Complete Order' : 'Continue'}
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
