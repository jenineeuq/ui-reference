"use client";

import { useState, useEffect, useRef } from "react";
import { MapPin, Plane } from "lucide-react";

// InteractiveGlobe Preview
export function InteractiveGlobePreview() {
  const [rotation, setRotation] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    if (isDragging) return;
    const interval = setInterval(() => {
      setRotation((r) => (r + 0.5) % 360);
    }, 50);
    return () => clearInterval(interval);
  }, [isDragging]);

  return (
    <div className="relative w-48 h-48">
      {/* Globe */}
      <div
        className="w-full h-full rounded-full bg-gradient-to-br from-blue-400 via-blue-500 to-blue-600 relative overflow-hidden cursor-grab active:cursor-grabbing shadow-2xl"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        style={{ transform: `rotateY(${rotation}deg)` }}
      >
        {/* Continents representation */}
        <div className="absolute inset-0">
          {/* North America */}
          <div
            className="absolute w-16 h-12 bg-green-400/80 rounded-lg"
            style={{
              top: "20%",
              left: `${30 + Math.sin((rotation * Math.PI) / 180) * 20}%`,
              transform: `scale(${0.8 + Math.cos((rotation * Math.PI) / 180) * 0.2})`,
              opacity: Math.cos((rotation * Math.PI) / 180) > -0.3 ? 1 : 0,
            }}
          />
          {/* Europe */}
          <div
            className="absolute w-10 h-8 bg-green-400/80 rounded"
            style={{
              top: "25%",
              left: `${60 + Math.sin((rotation * Math.PI) / 180) * 20}%`,
              transform: `scale(${0.8 + Math.cos(((rotation + 90) * Math.PI) / 180) * 0.2})`,
              opacity: Math.cos(((rotation + 90) * Math.PI) / 180) > -0.3 ? 1 : 0,
            }}
          />
          {/* Africa */}
          <div
            className="absolute w-12 h-16 bg-green-400/80 rounded"
            style={{
              top: "40%",
              left: `${55 + Math.sin((rotation * Math.PI) / 180) * 20}%`,
              transform: `scale(${0.8 + Math.cos(((rotation + 60) * Math.PI) / 180) * 0.2})`,
              opacity: Math.cos(((rotation + 60) * Math.PI) / 180) > -0.3 ? 1 : 0,
            }}
          />
        </div>

        {/* Atmosphere glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute inset-0 rounded-full shadow-inner" style={{ boxShadow: "inset -20px -20px 60px rgba(0,0,0,0.3)" }} />
      </div>

      {/* Shadow */}
      <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/20 rounded-full blur-md" />

      {/* Label */}
      <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-sm text-muted-foreground whitespace-nowrap">
        Drag to rotate
      </div>
    </div>
  );
}

// GlobeMarker Preview
export function GlobeMarkerPreview() {
  const locations = [
    { name: "New York", x: 25, y: 35, active: true },
    { name: "London", x: 48, y: 30, active: false },
    { name: "Tokyo", x: 82, y: 38, active: false },
    { name: "Sydney", x: 85, y: 70, active: false },
  ];

  const [activeMarker, setActiveMarker] = useState<string | null>("New York");

  return (
    <div className="relative w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
      {/* Simple map background */}
      <div className="absolute inset-0 opacity-30">
        <svg viewBox="0 0 100 60" className="w-full h-full">
          {/* Simplified continent shapes */}
          <path d="M10,25 Q15,20 25,22 T35,25 T30,35 T15,35 Z" fill="currentColor" className="text-green-500" />
          <path d="M45,20 Q50,18 55,22 T52,32 T45,30 Z" fill="currentColor" className="text-green-500" />
          <path d="M48,32 Q52,30 55,35 T50,45 T45,40 Z" fill="currentColor" className="text-green-500" />
          <path d="M70,25 Q80,22 90,28 T85,40 T70,35 Z" fill="currentColor" className="text-green-500" />
          <path d="M80,50 Q85,48 88,52 T82,58 Z" fill="currentColor" className="text-green-500" />
        </svg>
      </div>

      {/* Markers */}
      {locations.map((loc) => (
        <div
          key={loc.name}
          className="absolute cursor-pointer group"
          style={{ left: `${loc.x}%`, top: `${loc.y}%` }}
          onClick={() => setActiveMarker(loc.name)}
        >
          {/* Pulse animation for active */}
          {activeMarker === loc.name && (
            <div className="absolute -inset-2 bg-primary/30 rounded-full animate-ping" />
          )}
          {/* Marker */}
          <div className={`relative w-3 h-3 rounded-full ${
            activeMarker === loc.name ? "bg-primary" : "bg-white/70"
          } shadow-lg`}>
            <MapPin className="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-4 text-primary" />
          </div>
          {/* Tooltip */}
          <div className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-1 px-2 py-1 bg-background rounded text-xs whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity ${
            activeMarker === loc.name ? "opacity-100" : ""
          }`}>
            {loc.name}
          </div>
        </div>
      ))}
    </div>
  );
}

// GlobeArc Preview
export function GlobeArcPreview() {
  const [animationProgress, setAnimationProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationProgress((p) => (p + 2) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative w-64 h-40 bg-gradient-to-br from-slate-800 to-slate-900 rounded-xl overflow-hidden">
      <svg viewBox="0 0 100 60" className="w-full h-full">
        {/* Background map */}
        <path d="M10,25 Q15,20 25,22 T35,25 T30,35 T15,35 Z" fill="rgba(34,197,94,0.2)" />
        <path d="M70,25 Q80,22 90,28 T85,40 T70,35 Z" fill="rgba(34,197,94,0.2)" />

        {/* Arc path */}
        <path
          d="M 25 30 Q 50 5 80 32"
          fill="none"
          stroke="rgba(139,92,246,0.3)"
          strokeWidth="1"
          strokeDasharray="2,2"
        />

        {/* Animated arc */}
        <path
          d="M 25 30 Q 50 5 80 32"
          fill="none"
          stroke="rgb(139,92,246)"
          strokeWidth="2"
          strokeLinecap="round"
          strokeDasharray="100"
          strokeDashoffset={100 - animationProgress}
        />

        {/* Start point */}
        <circle cx="25" cy="30" r="3" fill="rgb(34,197,94)" />
        <circle cx="25" cy="30" r="5" fill="none" stroke="rgb(34,197,94)" strokeWidth="1" opacity="0.5" />

        {/* End point */}
        <circle cx="80" cy="32" r="3" fill="rgb(239,68,68)" />
        <circle cx="80" cy="32" r="5" fill="none" stroke="rgb(239,68,68)" strokeWidth="1" opacity="0.5" />

        {/* Plane icon along path */}
        <g transform={`translate(${25 + (80 - 25) * animationProgress / 100}, ${30 - 25 * Math.sin(animationProgress / 100 * Math.PI)})`}>
          <circle r="4" fill="rgb(139,92,246)" />
        </g>
      </svg>

      {/* Labels */}
      <div className="absolute bottom-2 left-4 text-xs text-green-400">New York</div>
      <div className="absolute bottom-2 right-4 text-xs text-red-400">Tokyo</div>

      {/* Flight info */}
      <div className="absolute top-2 left-1/2 -translate-x-1/2 flex items-center gap-2 px-3 py-1 bg-black/50 rounded-full text-xs">
        <Plane className="w-3 h-3 text-primary" />
        <span className="text-white">Flight in progress</span>
      </div>
    </div>
  );
}

// WorldMap Preview
export function WorldMapPreview() {
  const [hoveredRegion, setHoveredRegion] = useState<string | null>(null);

  const regions = [
    { id: "na", name: "North America", path: "M10,20 L35,15 L40,35 L25,40 L10,35 Z", color: "from-blue-500 to-blue-600", value: "$2.4M" },
    { id: "eu", name: "Europe", path: "M45,15 L60,12 L62,30 L48,32 L45,20 Z", color: "from-green-500 to-green-600", value: "$1.8M" },
    { id: "asia", name: "Asia", path: "M62,15 L90,20 L88,45 L60,40 L62,20 Z", color: "from-purple-500 to-purple-600", value: "$3.2M" },
    { id: "sa", name: "South America", path: "M25,42 L35,40 L38,65 L22,62 Z", color: "from-orange-500 to-orange-600", value: "$0.9M" },
    { id: "af", name: "Africa", path: "M48,34 L60,32 L58,60 L45,58 Z", color: "from-red-500 to-red-600", value: "$0.6M" },
    { id: "oc", name: "Oceania", path: "M78,50 L92,48 L90,62 L76,60 Z", color: "from-teal-500 to-teal-600", value: "$0.5M" },
  ];

  return (
    <div className="w-full max-w-md">
      <div className="relative h-48 bg-slate-900 rounded-xl overflow-hidden">
        <svg viewBox="0 0 100 70" className="w-full h-full">
          {regions.map((region) => (
            <g key={region.id}>
              <path
                d={region.path}
                className={`cursor-pointer transition-all duration-200 ${
                  hoveredRegion === region.id
                    ? "fill-primary opacity-100"
                    : "fill-slate-600 opacity-60 hover:opacity-80"
                }`}
                onMouseEnter={() => setHoveredRegion(region.id)}
                onMouseLeave={() => setHoveredRegion(null)}
              />
            </g>
          ))}
        </svg>

        {/* Tooltip */}
        {hoveredRegion && (
          <div className="absolute top-4 right-4 px-3 py-2 bg-background/90 rounded-lg shadow-lg">
            <div className="font-medium text-sm">
              {regions.find(r => r.id === hoveredRegion)?.name}
            </div>
            <div className="text-primary font-bold">
              {regions.find(r => r.id === hoveredRegion)?.value}
            </div>
          </div>
        )}
      </div>

      {/* Legend */}
      <div className="grid grid-cols-3 gap-2 mt-3">
        {regions.slice(0, 3).map((region) => (
          <div
            key={region.id}
            className={`px-2 py-1 rounded text-xs flex items-center gap-1.5 cursor-pointer ${
              hoveredRegion === region.id ? "bg-muted" : ""
            }`}
            onMouseEnter={() => setHoveredRegion(region.id)}
            onMouseLeave={() => setHoveredRegion(null)}
          >
            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${region.color}`} />
            <span className="truncate">{region.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
