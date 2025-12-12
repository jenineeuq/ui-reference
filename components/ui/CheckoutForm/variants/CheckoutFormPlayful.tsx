"use client";

import { Heart, Sparkles } from "lucide-react";
import { useState } from "react";

export default function CheckoutFormPlayful() {
  const [step, setStep] = useState(1);
  const steps = [
    { id: 1, emoji: '📦', label: 'Shipping' },
    { id: 2, emoji: '💳', label: 'Payment' },
    { id: 3, emoji: '✨', label: 'Done!' }
  ];

  return (
    <div className="w-full max-w-2xl mx-auto">
      <div className="bg-gradient-to-br from-pink-50 to-purple-50 dark:from-gray-900 dark:to-gray-800 rounded-3xl p-8 shadow-xl border-4 border-white dark:border-gray-700">
        {/* Fun Progress */}
        <div className="flex items-center justify-center gap-4 mb-8">
          {steps.map(({ id, emoji, label }) => (
            <div key={id} className="flex flex-col items-center">
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center text-3xl transition-all transform ${
                  step >= id
                    ? 'bg-gradient-to-br from-purple-500 to-pink-500 scale-110 rotate-12'
                    : 'bg-white dark:bg-gray-800 scale-100'
                } shadow-lg`}
              >
                {emoji}
              </div>
              <span className="text-xs font-bold mt-2">{label}</span>
            </div>
          ))}
        </div>

        {/* Encouraging Message */}
        <div className="text-center mb-6 p-4 bg-white dark:bg-gray-800 rounded-2xl">
          <div className="flex items-center justify-center gap-2 text-purple-600 dark:text-purple-400 font-bold">
            <Sparkles className="w-5 h-5" />
            <span>You're almost there! Just a few more details 🎉</span>
          </div>
        </div>

        {/* Form */}
        <div className="space-y-4 mb-6">
          <input
            type="text"
            placeholder="Your awesome name ✏️"
            className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
          />
          <input
            type="email"
            placeholder="Email (we'll send you happy updates! 📧)"
            className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
          />
          <input
            type="text"
            placeholder="Where should we deliver? 🏠"
            className="w-full px-4 py-3 rounded-2xl border-2 border-purple-200 dark:border-purple-800 bg-white dark:bg-gray-800 focus:outline-none focus:ring-4 focus:ring-purple-300 transition-all"
          />
        </div>

        {/* Fun Button */}
        <button
          onClick={() => setStep(Math.min(3, step + 1))}
          className="w-full px-6 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 text-white font-black text-lg rounded-2xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all flex items-center justify-center gap-2"
        >
          {step === 3 ? '🎊 Place My Order!' : '✨ Continue The Magic'}
        </button>

        {/* Footer Message */}
        <div className="text-center mt-4 text-sm text-muted-foreground flex items-center justify-center gap-1">
          Made with <Heart className="w-4 h-4 text-red-500 fill-red-500" /> for you
        </div>
      </div>
    </div>
  );
}
