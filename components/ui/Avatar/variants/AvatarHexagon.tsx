"use client";

export default function AvatarHexagon() {
  return (
    <div className="relative w-20 h-20">
      {/* Hexagon shape using clip-path */}
      <div
        className="w-full h-full bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center"
        style={{
          clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
        }}
      >
        <div
          className="w-[calc(100%-4px)] h-[calc(100%-4px)] bg-background flex items-center justify-center"
          style={{
            clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
          }}
        >
          {/* Avatar Image or Initials */}
          <div
            className="w-[calc(100%-2px)] h-[calc(100%-2px)] bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center text-white font-bold text-lg"
            style={{
              clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
            }}
          >
            JD
          </div>
        </div>
      </div>
    </div>
  );
}
