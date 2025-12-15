"use client";

import { useState } from "react";
import {
  ChevronUp, ChevronDown, ArrowUpDown, Search, MoreHorizontal,
  TrendingUp, TrendingDown
} from "lucide-react";

// ===== TABLES =====

// DataTable Preview
export function DataTablePreview() {
  const [sortCol, setSortCol] = useState("name");
  const [sortDir, setSortDir] = useState<"asc" | "desc">("asc");

  const data = [
    { name: "John Doe", email: "john@example.com", role: "Admin", status: "Active" },
    { name: "Jane Smith", email: "jane@example.com", role: "Editor", status: "Active" },
    { name: "Bob Wilson", email: "bob@example.com", role: "Viewer", status: "Inactive" },
    { name: "Alice Brown", email: "alice@example.com", role: "Editor", status: "Active" },
  ];

  const sortedData = [...data].sort((a, b) => {
    const aVal = a[sortCol as keyof typeof a];
    const bVal = b[sortCol as keyof typeof b];
    return sortDir === "asc" ? aVal.localeCompare(bVal) : bVal.localeCompare(aVal);
  });

  const toggleSort = (col: string) => {
    if (sortCol === col) {
      setSortDir(sortDir === "asc" ? "desc" : "asc");
    } else {
      setSortCol(col);
      setSortDir("asc");
    }
  };

  return (
    <div className="w-full max-w-lg border border-border rounded-xl overflow-hidden">
      {/* Search */}
      <div className="px-4 py-3 border-b border-border">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search..."
            className="w-full pl-9 pr-4 py-2 bg-muted rounded-lg text-sm focus:outline-none"
          />
        </div>
      </div>

      {/* Table */}
      <table className="w-full text-sm">
        <thead className="bg-muted/50">
          <tr>
            {["name", "email", "role", "status"].map((col) => (
              <th
                key={col}
                onClick={() => toggleSort(col)}
                className="px-4 py-3 text-left font-medium cursor-pointer hover:bg-muted"
              >
                <div className="flex items-center gap-1 capitalize">
                  {col}
                  {sortCol === col ? (
                    sortDir === "asc" ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />
                  ) : (
                    <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
                  )}
                </div>
              </th>
            ))}
            <th className="px-4 py-3 w-10"></th>
          </tr>
        </thead>
        <tbody className="divide-y divide-border">
          {sortedData.map((row, i) => (
            <tr key={i} className="hover:bg-muted/30">
              <td className="px-4 py-3 font-medium">{row.name}</td>
              <td className="px-4 py-3 text-muted-foreground">{row.email}</td>
              <td className="px-4 py-3">{row.role}</td>
              <td className="px-4 py-3">
                <span className={`px-2 py-0.5 rounded-full text-xs ${
                  row.status === "Active"
                    ? "bg-green-100 text-green-600 dark:bg-green-900/30 dark:text-green-400"
                    : "bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                }`}>
                  {row.status}
                </span>
              </td>
              <td className="px-4 py-3">
                <button className="p-1 hover:bg-muted rounded">
                  <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// VirtualizedList Preview
export function VirtualizedListPreview() {
  const items = Array.from({ length: 100 }, (_, i) => ({
    id: i + 1,
    name: `Item ${i + 1}`,
    value: Math.floor(Math.random() * 1000),
  }));

  return (
    <div className="w-full max-w-xs">
      <div className="px-3 py-2 bg-muted/50 border border-border rounded-t-xl text-sm font-medium">
        100 items (virtualized)
      </div>
      <div className="h-48 overflow-auto border border-t-0 border-border rounded-b-xl">
        {items.slice(0, 20).map((item) => (
          <div
            key={item.id}
            className="flex items-center justify-between px-4 py-2 border-b border-border last:border-0 hover:bg-muted/30"
          >
            <span className="text-sm">{item.name}</span>
            <span className="text-sm text-muted-foreground">${item.value}</span>
          </div>
        ))}
      </div>
      <div className="text-xs text-muted-foreground mt-2 text-center">
        Scroll to see more items
      </div>
    </div>
  );
}

// ===== CHARTS =====

// LineChart Preview
export function LineChartPreview() {
  const data = [30, 45, 35, 50, 40, 60, 55, 70, 65, 80, 75, 90];
  const max = Math.max(...data);

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">Revenue</span>
        <span className="text-sm text-green-500 flex items-center gap-1">
          <TrendingUp className="w-4 h-4" /> +12.5%
        </span>
      </div>

      <div className="relative h-32">
        {/* Y-axis labels */}
        <div className="absolute left-0 top-0 bottom-0 w-8 flex flex-col justify-between text-xs text-muted-foreground">
          <span>$90k</span>
          <span>$45k</span>
          <span>$0</span>
        </div>

        {/* Chart area */}
        <div className="ml-10 h-full relative">
          {/* Grid lines */}
          {[0, 1, 2].map((i) => (
            <div key={i} className="absolute w-full border-t border-border" style={{ top: `${i * 50}%` }} />
          ))}

          {/* Line */}
          <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
            <polyline
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              points={data.map((d, i) => `${(i / (data.length - 1)) * 100}%,${100 - (d / max) * 100}%`).join(" ")}
            />
            {/* Area under line */}
            <polygon
              fill="hsl(var(--primary) / 0.1)"
              points={`0%,100% ${data.map((d, i) => `${(i / (data.length - 1)) * 100}%,${100 - (d / max) * 100}%`).join(" ")} 100%,100%`}
            />
          </svg>

          {/* Data points */}
          {data.map((d, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-primary rounded-full -translate-x-1/2 -translate-y-1/2"
              style={{
                left: `${(i / (data.length - 1)) * 100}%`,
                top: `${100 - (d / max) * 100}%`,
              }}
            />
          ))}
        </div>
      </div>

      {/* X-axis labels */}
      <div className="ml-10 flex justify-between mt-2 text-xs text-muted-foreground">
        {["Jan", "Mar", "May", "Jul", "Sep", "Nov"].map((m) => (
          <span key={m}>{m}</span>
        ))}
      </div>
    </div>
  );
}

// BarChart Preview
export function BarChartPreview() {
  const data = [
    { label: "Mon", value: 65 },
    { label: "Tue", value: 80 },
    { label: "Wed", value: 45 },
    { label: "Thu", value: 90 },
    { label: "Fri", value: 70 },
    { label: "Sat", value: 55 },
    { label: "Sun", value: 40 },
  ];
  const max = Math.max(...data.map(d => d.value));

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">Weekly Activity</span>
        <span className="text-sm text-muted-foreground">This week</span>
      </div>

      <div className="flex items-end gap-2 h-32">
        {data.map((d, i) => (
          <div key={i} className="flex-1 flex flex-col items-center gap-1">
            <div
              className="w-full bg-primary rounded-t transition-all hover:bg-primary/80"
              style={{ height: `${(d.value / max) * 100}%` }}
            />
            <span className="text-xs text-muted-foreground">{d.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

// PieChart Preview
export function PieChartPreview() {
  const data = [
    { label: "Desktop", value: 45, color: "hsl(var(--primary))" },
    { label: "Mobile", value: 35, color: "hsl(280, 70%, 60%)" },
    { label: "Tablet", value: 20, color: "hsl(200, 70%, 60%)" },
  ];

  // Calculate pie slices
  let currentAngle = 0;
  const slices = data.map((d) => {
    const angle = (d.value / 100) * 360;
    const startAngle = currentAngle;
    currentAngle += angle;
    return { ...d, startAngle, endAngle: currentAngle };
  });

  return (
    <div className="w-full max-w-xs p-4 bg-background border border-border rounded-xl">
      <div className="font-medium mb-4">Traffic Sources</div>

      <div className="flex items-center gap-6">
        {/* Pie chart */}
        <div className="relative w-24 h-24">
          <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
            {slices.map((slice, i) => {
              const startRad = (slice.startAngle * Math.PI) / 180;
              const endRad = (slice.endAngle * Math.PI) / 180;
              const x1 = 50 + 40 * Math.cos(startRad);
              const y1 = 50 + 40 * Math.sin(startRad);
              const x2 = 50 + 40 * Math.cos(endRad);
              const y2 = 50 + 40 * Math.sin(endRad);
              const largeArc = slice.endAngle - slice.startAngle > 180 ? 1 : 0;

              return (
                <path
                  key={i}
                  d={`M 50 50 L ${x1} ${y1} A 40 40 0 ${largeArc} 1 ${x2} ${y2} Z`}
                  fill={slice.color}
                />
              );
            })}
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-12 h-12 rounded-full bg-background" />
          </div>
        </div>

        {/* Legend */}
        <div className="space-y-2">
          {data.map((d, i) => (
            <div key={i} className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: d.color }} />
              <span className="text-sm">{d.label}</span>
              <span className="text-sm text-muted-foreground">{d.value}%</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

// CandlestickChart Preview
export function CandlestickChartPreview() {
  const data = [
    { open: 40, high: 55, low: 35, close: 50 },
    { open: 50, high: 60, low: 45, close: 45 },
    { open: 45, high: 65, low: 40, close: 60 },
    { open: 60, high: 70, low: 55, close: 55 },
    { open: 55, high: 75, low: 50, close: 70 },
    { open: 70, high: 80, low: 60, close: 65 },
    { open: 65, high: 85, low: 60, close: 80 },
    { open: 80, high: 90, low: 70, close: 75 },
  ];

  return (
    <div className="w-full max-w-sm p-4 bg-background border border-border rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">ETH/USD</span>
        <span className="text-green-500 text-sm">$3,245.50</span>
      </div>

      <div className="flex items-end gap-2 h-32">
        {data.map((candle, i) => {
          const isGreen = candle.close >= candle.open;
          const bodyTop = Math.max(candle.open, candle.close);
          const bodyBottom = Math.min(candle.open, candle.close);

          return (
            <div key={i} className="flex-1 flex flex-col items-center relative h-full">
              {/* Wick */}
              <div
                className={`absolute w-px ${isGreen ? "bg-green-500" : "bg-red-500"}`}
                style={{
                  top: `${100 - candle.high}%`,
                  bottom: `${candle.low}%`,
                }}
              />
              {/* Body */}
              <div
                className={`absolute w-full rounded-sm ${isGreen ? "bg-green-500" : "bg-red-500"}`}
                style={{
                  top: `${100 - bodyTop}%`,
                  bottom: `${bodyBottom}%`,
                  minHeight: "4px",
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

// Sparkline Preview
export function SparklinePreview() {
  const data1 = [30, 45, 35, 50, 40, 60, 55, 70];
  const data2 = [60, 55, 65, 50, 45, 40, 35, 30];
  const max1 = Math.max(...data1);
  const max2 = Math.max(...data2);

  const renderSparkline = (data: number[], max: number, color: string) => (
    <svg className="w-24 h-8" preserveAspectRatio="none">
      <polyline
        fill="none"
        stroke={color}
        strokeWidth="2"
        points={data.map((d, i) => `${(i / (data.length - 1)) * 100}%,${100 - (d / max) * 100}%`).join(" ")}
      />
    </svg>
  );

  return (
    <div className="w-full max-w-xs space-y-3">
      <div className="flex items-center justify-between p-3 bg-background border border-border rounded-xl">
        <div>
          <div className="text-sm font-medium">Revenue</div>
          <div className="text-lg font-semibold">$12,543</div>
        </div>
        <div className="flex items-center gap-2">
          {renderSparkline(data1, max1, "rgb(34, 197, 94)")}
          <span className="text-green-500 text-sm flex items-center gap-0.5">
            <TrendingUp className="w-3 h-3" />
            12%
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between p-3 bg-background border border-border rounded-xl">
        <div>
          <div className="text-sm font-medium">Expenses</div>
          <div className="text-lg font-semibold">$8,234</div>
        </div>
        <div className="flex items-center gap-2">
          {renderSparkline(data2, max2, "rgb(239, 68, 68)")}
          <span className="text-red-500 text-sm flex items-center gap-0.5">
            <TrendingDown className="w-3 h-3" />
            8%
          </span>
        </div>
      </div>
    </div>
  );
}

// ===== STATS =====

// StatCard Preview
export function StatCardPreview() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {[
        { label: "Total Revenue", value: "$45,231", change: "+20.1%", positive: true },
        { label: "Active Users", value: "2,350", change: "+15.2%", positive: true },
        { label: "Bounce Rate", value: "24.5%", change: "-4.3%", positive: true },
        { label: "Avg. Session", value: "3m 42s", change: "-2.1%", positive: false },
      ].map((stat, i) => (
        <div key={i} className="p-4 bg-background border border-border rounded-xl">
          <div className="text-sm text-muted-foreground">{stat.label}</div>
          <div className="text-2xl font-semibold mt-1">{stat.value}</div>
          <div className={`text-sm mt-1 flex items-center gap-1 ${stat.positive ? "text-green-500" : "text-red-500"}`}>
            {stat.positive ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
            {stat.change}
          </div>
        </div>
      ))}
    </div>
  );
}

// ProgressGauge Preview
export function ProgressGaugePreview() {
  const value = 73;

  return (
    <div className="w-full max-w-xs p-4 bg-background border border-border rounded-xl">
      <div className="flex items-center justify-between mb-4">
        <span className="font-medium">Completion Rate</span>
        <span className="text-sm text-muted-foreground">73%</span>
      </div>

      {/* Gauge */}
      <div className="relative">
        <svg className="w-full" viewBox="0 0 200 100">
          {/* Background arc */}
          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="hsl(var(--muted))"
            strokeWidth="16"
            strokeLinecap="round"
          />
          {/* Progress arc */}
          <path
            d="M 20 90 A 80 80 0 0 1 180 90"
            fill="none"
            stroke="hsl(var(--primary))"
            strokeWidth="16"
            strokeLinecap="round"
            strokeDasharray={`${value * 2.51} 251`}
          />
        </svg>

        {/* Center text */}
        <div className="absolute inset-0 flex items-center justify-center pt-6">
          <div className="text-center">
            <div className="text-3xl font-bold">{value}%</div>
            <div className="text-xs text-muted-foreground">Target: 100%</div>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-2 text-xs text-muted-foreground">
        <span>0%</span>
        <span>50%</span>
        <span>100%</span>
      </div>
    </div>
  );
}
