"use client";

import { useMemo, useState } from "react";

import {
  RESOURCE_CATEGORIES,
  RESOURCES,
  ResourceCategory,
} from "@/data/resources";
import ResourceCard from "@/components/resources/ResourceCard";
import { Button } from "@/components/ui/button";

type FilterKey = "All" | ResourceCategory;

export default function ResourceFilter() {
  const [activeCategory, setActiveCategory] = useState<FilterKey>("All");

  const filteredResources = useMemo(() => {
    if (activeCategory === "All") {
      return RESOURCES;
    }

    return RESOURCES.filter((resource) => resource.category === activeCategory);
  }, [activeCategory]);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-2" role="group" aria-label="Filter resources">
        <Button
          variant={activeCategory === "All" ? "default" : "outline"}
          onClick={() => setActiveCategory("All")}
        >
          All
        </Button>
        {RESOURCE_CATEGORIES.map((category) => (
          <Button
            key={category}
            variant={activeCategory === category ? "default" : "outline"}
            onClick={() => setActiveCategory(category)}
          >
            {category}
          </Button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        {filteredResources.map((resource) => (
          <ResourceCard key={resource.slug} item={resource} />
        ))}
      </div>
    </div>
  );
}

