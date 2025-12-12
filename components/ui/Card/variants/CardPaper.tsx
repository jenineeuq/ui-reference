"use client";

export default function CardPaper() {
  return (
    <div
      className="w-64 p-6 rounded-sm relative"
      style={{
        background: "linear-gradient(135deg, #faf9f6 0%, #f5f3ed 100%)",
        boxShadow:
          "0 1px 3px rgba(0,0,0,0.12), 0 1px 2px rgba(0,0,0,0.08), 0 10px 20px rgba(0,0,0,0.05)",
      }}
    >
      {/* Paper texture overlay */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none rounded-sm"
        style={{
          backgroundImage: "url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAIklEQVQYV2NkQAX/GZH4/1EFQHpYBbgqYAoQ7YBsgHQCABBeEQcFbZGJAAAAAElFTkSuQmCC)",
          backgroundRepeat: "repeat",
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        <div className="w-10 h-10 bg-amber-100 border border-amber-200 rounded mb-3 shadow-sm" />
        <h3 className="text-lg font-serif font-bold mb-2 text-gray-800">
          Paper Card
        </h3>
        <p className="text-sm text-gray-700 leading-relaxed">
          Realistic paper texture with warm tones and layered shadow for depth.
        </p>
      </div>
    </div>
  );
}
