"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowLeft, Filter } from "lucide-react";
import Link from "next/link";
import { componentRegistry } from "@/lib/component-registry";
import StyleExplorer from "@/components/layout/StyleExplorer";

export default function ComponentPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const component = componentRegistry.find((c) => c.id === slug);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  if (!component) {
    return (
      <div className="text-center py-12">
        <h1 className="text-2xl font-bold">Component not found</h1>
        <Link href="/" className="text-primary hover:underline mt-4 inline-block">
          Back to home
        </Link>
      </div>
    );
  }

  const filteredVariants =
    selectedTags.length === 0
      ? component.variants
      : component.variants.filter((variant) =>
          selectedTags.some((tag) => variant.tags.includes(tag))
        );

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  // Get all unique tags from this component's variants
  const componentTags = Array.from(
    new Set(component.variants.flatMap((v) => v.tags))
  );

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Back Button */}
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Back to all components
      </Link>

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="space-y-4"
      >
        <div className="flex items-start justify-between">
          <div>
            <h1 className="text-4xl font-bold">{component.name}</h1>
            <p className="text-lg text-muted-foreground mt-2">
              {component.description}
            </p>
          </div>
          <span className="px-4 py-2 rounded-lg bg-primary/10 text-primary font-medium">
            {component.category}
          </span>
        </div>

        <div className="flex items-center gap-4 text-sm text-muted-foreground">
          <span>{component.variants.length} style variations</span>
          <span>•</span>
          <span>Click any variant to see implementation details</span>
        </div>
      </motion.div>

      {/* Tag Filters */}
      <div className="space-y-3">
        <div className="flex items-center gap-2 text-sm font-medium">
          <Filter className="w-4 h-4" />
          <span>Filter by style:</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {componentTags.map((tag) => (
            <button
              key={tag}
              onClick={() => toggleTag(tag)}
              className={`px-3 py-1.5 rounded-full text-sm font-medium transition-all ${
                selectedTags.includes(tag)
                  ? "bg-primary text-primary-foreground shadow-md"
                  : "bg-muted hover:bg-muted/80"
              }`}
            >
              {tag}
            </button>
          ))}
          {selectedTags.length > 0 && (
            <button
              onClick={() => setSelectedTags([])}
              className="px-3 py-1.5 rounded-full text-sm font-medium bg-red-100 dark:bg-red-900/20 text-red-600 dark:text-red-400 hover:bg-red-200 dark:hover:bg-red-900/30"
            >
              Clear filters
            </button>
          )}
        </div>
      </div>

      {/* Style Variants Grid */}
      <StyleExplorer component={component} variants={filteredVariants} />

      {filteredVariants.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground">
            No variants match the selected filters.
          </p>
        </div>
      )}
    </div>
  );
}
