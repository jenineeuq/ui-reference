"use client";

export default function BadgeStatusDot() {
  return (
    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-medium">
      <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
      Online
    </span>
  );
}
