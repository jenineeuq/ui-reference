"use client";

import { TrendingUp } from "lucide-react";

export default function CardDashboard() {
  return (
    <div className="w-64 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
      {/* Header */}
      <div className="px-5 py-4 border-b border-gray-200 dark:border-gray-700 flex items-center justify-between">
        <h3 className="font-semibold text-gray-700 dark:text-gray-200">Revenue</h3>
        <TrendingUp className="w-5 h-5 text-green-600" />
      </div>

      {/* Content */}
      <div className="px-5 py-4 space-y-3">
        <div className="text-3xl font-bold text-gray-900 dark:text-white">$12,426</div>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium rounded">
            +12.5%
          </span>
          <span className="text-sm text-gray-500">vs last month</span>
        </div>
      </div>
    </div>
  );
}
