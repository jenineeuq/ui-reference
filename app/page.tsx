"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Search, Filter } from "lucide-react";
import { componentRegistry, categories, styleTags } from "@/lib/component-registry";

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filteredComponents = componentRegistry.filter((component) => {
    const matchesSearch =
      component.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      component.description.toLowerCase().includes(searchQuery.toLowerCase());

    const matchesCategory =
      selectedCategory === "All" || component.category === selectedCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center space-y-4 py-12"
      >
        <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
          UI Component Style Explorer
        </h1>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Discover and explore multiple design variations for every component.
          From minimal to brutalist, glassmorphic to neumorphic.
        </p>
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
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary transition-all"
          />
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-2 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Component Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredComponents.map((component, index) => (
          <motion.div
            key={component.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
          >
            <Link href={`/component/${component.id}`}>
              <div className="group h-full p-6 rounded-xl border border-border bg-background hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                <div className="space-y-3">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                      {component.name}
                    </h3>
                    <span className="px-2 py-1 rounded-md bg-muted text-xs font-medium">
                      {component.category}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {component.description}
                  </p>

                  <div className="flex items-center gap-2 pt-2">
                    <span className="text-xs text-muted-foreground">
                      {component.variants.length} style variants
                    </span>
                    <div className="flex-1 h-px bg-border" />
                  </div>

                  {/* Preview of style tags */}
                  <div className="flex flex-wrap gap-1">
                    {component.variants
                      .slice(0, 3)
                      .flatMap((v) => v.tags)
                      .filter((tag, idx, arr) => arr.indexOf(tag) === idx)
                      .slice(0, 4)
                      .map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {filteredComponents.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">No components found matching your criteria.</p>
        </div>
      )}
    </div>
  );
}
