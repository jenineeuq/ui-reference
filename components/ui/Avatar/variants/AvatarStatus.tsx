"use client";

export default function AvatarStatus() {
  return (
    <div className="relative w-12 h-12">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-green-400 to-blue-500 flex items-center justify-center text-white font-semibold">
        JD
      </div>

      {/* Status indicator */}
      <div className="absolute bottom-0 right-0 w-4 h-4 bg-green-500 rounded-full border-2 border-white dark:border-gray-900" />
    </div>
  );
}
