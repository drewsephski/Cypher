// Copyright (c) 2025 Bytedance Ltd. and/or its affiliates
// SPDX-License-Identifier: MIT

import { Zap, Code2, Eye, Palette, Smartphone, Globe, Database, Sparkles } from "lucide-react";

import { BentoCard } from "@/components/bento-grid";
import { SectionHeader } from "@/components/section-header";

const featureIcons = [
  { id: "instant-generation", icon: Zap },
  { id: "live-preview", icon: Eye },
  { id: "custom-styling", icon: Palette },
  { id: "responsive-design", icon: Smartphone },
  { id: "framework-integration", icon: Code2 },
  { id: "component-library", icon: Database },
  { id: "ai-optimization", icon: Sparkles },
  { id: "export-ready", icon: Globe },
];

const features = [
  {
    title: "Instant Generation",
    description: "Generate components from React in seconds"
  },
  {
    title: "Live Preview",
    description: "Preview production ready code in real-time"
  },
  {
    title: "Custom Styling",
    description: "Apply themes and colors to match your design"
  },
  {
    title: "Responsive Design",
    description: "Create components that work across all devices"
  },
  {
    title: "Framework",
    description: "Built for Next.js, React, and TypeScript"
  },
  {
    title: "Components",
    description: "Access pre-built components"
  },
  {
    title: "AI Optimization",
    description: "Optimize performance and accessibility with AI"
  },
  {
    title: "Export Ready",
    description: "Export clean code with TypeScript types"
  }
];

export function CaseStudySection() {
  return (
    <section className="relative container flex flex-col items-center justify-center py-10">
      <SectionHeader
        anchor="features"
        title="Features"
        description="Powerful capabilities for modern component development"
      />
      <div className="grid w-full max-w-6xl grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {features.map((feature, index) => {
          const iconData = featureIcons[index];
          return (
            <div key={feature.title} className="w-full">
              <BentoCard
                {...{
                  Icon: iconData?.icon ?? Zap,
                  name: feature.title,
                  description: feature.description,
                  href: `/chat?feature=${iconData?.id}`,
                  cta: "Try this feature",
                  className: "w-full h-full min-h-[200px]",
                }}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
}