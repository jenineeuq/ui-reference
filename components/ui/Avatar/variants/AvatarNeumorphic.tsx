"use client";

export default function AvatarNeumorphic() {
  return (
    <div className="w-20 h-20 rounded-full flex items-center justify-center"
      style={{
        background: '#e0e5ec',
        boxShadow: '9px 9px 16px rgba(163, 177, 198, 0.6), -9px -9px 16px rgba(255, 255, 255, 0.5)'
      }}
    >
      {/* Inner avatar with inset shadow */}
      <div
        className="w-16 h-16 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-400 to-pink-400"
        style={{
          boxShadow: 'inset 4px 4px 8px rgba(163, 177, 198, 0.3), inset -4px -4px 8px rgba(255, 255, 255, 0.3)'
        }}
      >
        <span className="text-white font-bold text-lg">JD</span>
      </div>
    </div>
  );
}
