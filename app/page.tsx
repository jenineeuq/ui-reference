"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Layers, Box } from "lucide-react";
import { componentRegistry, categories, subcategories } from "@/lib/component-registry";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedSubcategory, setSelectedSubcategory] = useState<string | null>(null);

  const filteredComponents = componentRegistry.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;

    const matchesSubcategory =
      !selectedSubcategory || component.subcategory === selectedSubcategory;

    return matchesSearch && matchesCategory && matchesSubcategory;
  });

  const currentSubcategories = selectedCategory !== "All" && subcategories[selectedCategory]
    ? subcategories[selectedCategory]
    : [];

  // Group components by subcategory for display
  const groupedComponents = filteredComponents.reduce((acc, component) => {
    const key = component.subcategory || "General";
    if (!acc[key]) acc[key] = [];
    acc[key].push(component);
    return acc;
  }, {} as Record<string, typeof filteredComponents>);

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 py-12"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20 mb-4">
          <Box className="w-4 h-4 text-purple-500" />
          <span className="text-sm font-medium text-purple-600 dark:text-purple-400">3D Illustration Style</span>
        </div>
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          UI Component Reference
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive library of <span className="font-semibold text-foreground">{componentRegistry.length} UI components</span> in
          beautiful 3D illustration style. Browse, explore, and get inspired.
        </p>
        <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground">
          <span className="flex items-center gap-1">
            <Layers className="w-4 h-4" />
            {categories.length - 1} Categories
          </span>
          <span>•</span>
          <span>{componentRegistry.length} Components</span>
        </div>
      </motion.div>

      {/* Search and Filters */}
      <div className="space-y-4">
        {/* Search Bar */}
        <div className="relative max-w-2xl mx-auto">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => {
                setSelectedCategory(category);
                setSelectedSubcategory(null);
              }}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
              {category !== "All" && (
                <span className="ml-1 opacity-70">
                  ({componentRegistry.filter(c => c.category === category).length})
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Subcategory Filter */}
        {currentSubcategories.length > 0 && (
          <div className="flex flex-wrap gap-2 justify-center">
            <button
              onClick={() => setSelectedSubcategory(null)}
              className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                !selectedSubcategory
                  ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                  : "bg-muted/50 hover:bg-muted"
              }`}
            >
              All {selectedCategory}
            </button>
            {currentSubcategories.map((sub) => (
              <button
                key={sub}
                onClick={() => setSelectedSubcategory(sub)}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${
                  selectedSubcategory === sub
                    ? "bg-purple-500/20 text-purple-600 dark:text-purple-400"
                    : "bg-muted/50 hover:bg-muted"
                }`}
              >
                {sub}
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Component Grid */}
      {Object.entries(groupedComponents).map(([group, components]) => (
        <div key={group} className="space-y-4">
          {selectedCategory !== "All" && Object.keys(groupedComponents).length > 1 && (
            <h2 className="text-lg font-semibold text-muted-foreground border-b border-border pb-2">
              {group}
            </h2>
          )}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {components.map((component, index) => (
              <motion.div
                key={component.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.02 }}
              >
                <Link href={`/component/${component.id}`}>
                  <div className="group h-full p-5 rounded-xl border border-border bg-background hover:shadow-xl hover:border-primary/50 hover:bg-gradient-to-br hover:from-purple-500/5 hover:to-pink-500/5 transition-all duration-300 cursor-pointer">
                    <div className="space-y-3">
                      {/* Component Icon Placeholder */}
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <Box className="w-6 h-6 text-purple-500" />
                      </div>

                      <div>
                        <h3 className="font-bold group-hover:text-primary transition-colors">
                          {component.name}
                        </h3>
                        {component.subcategory && (
                          <span className="text-xs text-muted-foreground">
                            {component.category} / {component.subcategory}
                          </span>
                        )}
                      </div>

                      <p className="text-sm text-muted-foreground line-clamp-2">
                        {component.description}
                      </p>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      ))}

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No components found matching your criteria.</p>
        </div>
      )}

      {/* Stats Footer */}
      <div className="text-center py-8 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Showing {filteredComponents.length} of {componentRegistry.length} components
        </p>
      </div>
    </div>
  );
}
