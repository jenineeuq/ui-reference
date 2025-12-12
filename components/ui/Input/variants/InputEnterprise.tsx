"use client";

export default function InputEnterprise() {
  return (
    <div className="w-64 space-y-1.5">
      <label className="text-sm font-medium text-gray-700 dark:text-gray-300">
        Email Address
      </label>
      <input
        type="email"
        placeholder="you@example.com"
        className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
      />
      <p className="text-xs text-gray-500">We'll never share your email.</p>
    </div>
  );
}
