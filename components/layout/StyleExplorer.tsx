"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Code, X, Info } from "lucide-react";
import type { Component, StyleVariant } from "@/lib/component-registry";
import ComponentPreview from "@/components/shared/ComponentPreview";

interface StyleExplorerProps {
  component: Component;
  variants: StyleVariant[];
}

export default function StyleExplorer({ component, variants }: StyleExplorerProps) {
  const [selectedVariant, setSelectedVariant] = useState<StyleVariant | null>(null);

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {variants.map((variant, index) => (
          <motion.div
            key={variant.id}
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.05 }}
            onClick={() => setSelectedVariant(variant)}
            className="group cursor-pointer"
          >
            <div className="h-full rounded-xl border border-border bg-background hover:border-primary/50 hover:shadow-2xl transition-all duration-300 overflow-hidden">
              {/* Preview Area */}
              <div className="bg-gradient-to-br from-muted/30 to-muted/10 p-8 min-h-[280px] flex items-center justify-center relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                    backgroundSize: '20px 20px'
                  }} />
                </div>

                {/* Component Preview */}
                <div className="relative z-10">
                  <ComponentPreview
                    componentId={component.id}
                    variantId={variant.id}
                  />
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground text-sm font-medium">
                    <Code className="w-4 h-4" />
                    View Details
                  </button>
                </div>
              </div>

              {/* Info Area */}
              <div className="p-4 space-y-2">
                <h3 className="font-bold text-lg group-hover:text-primary transition-colors">
                  {variant.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {variant.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {variant.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full bg-primary/10 text-primary text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedVariant && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedVariant(null)}
            className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-background rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden flex flex-col"
            >
              {/* Header */}
              <div className="p-6 border-b border-border flex items-start justify-between">
                <div>
                  <h2 className="text-2xl font-bold">{selectedVariant.name}</h2>
                  <p className="text-muted-foreground mt-1">
                    {selectedVariant.description}
                  </p>
                </div>
                <button
                  onClick={() => setSelectedVariant(null)}
                  className="p-2 hover:bg-muted rounded-lg transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6 space-y-6">
                {/* Live Preview */}
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Info className="w-4 h-4" />
                    Live Preview
                  </h3>
                  <div className="bg-gradient-to-br from-muted/30 to-muted/10 rounded-xl p-12 flex items-center justify-center border border-border relative overflow-hidden">
                    <div className="absolute inset-0 opacity-5">
                      <div className="absolute inset-0" style={{
                        backgroundImage: 'radial-gradient(circle, currentColor 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }} />
                    </div>
                    <div className="relative z-10 scale-110">
                      <ComponentPreview
                        componentId={component.id}
                        variantId={selectedVariant.id}
                      />
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="space-y-3">
                  <h3 className="font-semibold">Style Tags</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedVariant.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1.5 rounded-full bg-primary/10 text-primary font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Implementation Hint */}
                <div className="space-y-3">
                  <h3 className="font-semibold flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    Implementation Guide
                  </h3>
                  <div className="bg-muted rounded-lg p-4">
                    <p className="text-sm font-mono leading-relaxed">
                      {selectedVariant.implementation}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
