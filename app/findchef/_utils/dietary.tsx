"use client";

import * as React from "react";
import { Carrot, Leaf, Milk, Wheat, Beef, Nut, Orbit, X } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

interface DietaryRestriction {
  name: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

interface DietaryPreferencesProps {
  activeFilters: string[];
  setActiveFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const dietaryRestrictions: DietaryRestriction[] = [
  { name: "Vegan", icon: Carrot, description: "No animal products" },
  { name: "Vegetarian", icon: Leaf, description: "No meat products" },

  {
    name: "Gluten-Free",
    icon: Wheat,
    description: "No gluten-containing grains",
  },
  { name: "Keto", icon: Orbit, description: "Low carb, high fat" },
  { name: "Paleo", icon: Beef, description: "Natural unprocessed foods" },
  { name: "Nut-Free", icon: Nut, description: "No nuts or nut products" },
  { name: "Organic", icon: Leaf, description: "Certified organic ingredients" },
  {
    name: "Halal",
    icon: Leaf,
    description: "Permissible according to Islamic law",
  },
  { name: "Dairy-Free", icon: Milk, description: "No dairy products" },
  {
    name: "Kosher",
    icon: Leaf,
    description: "Prepared according to Jewish dietary law",
  },
];

export default function DietaryPreferences({
  activeFilters,
  setActiveFilters,
}: DietaryPreferencesProps) {
  const toggleFilter = (name: string) => {
    setActiveFilters((prev) =>
      prev.includes(name)
        ? prev.filter((filter) => filter !== name)
        : [...prev, name]
    );
  };

  const clearFilters = () => {
    setActiveFilters([]);
  };

  return (
    <div className="w-fu max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl 2xl:max-w-2xl mx-auto">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent className="-ml-1 sm:-ml-2 md:-ml-4">
          {dietaryRestrictions.map((restriction) => (
            <CarouselItem
              key={restriction.name}
              className="pl-1 sm:pl-2 md:pl-4 basis-1/3 sm:basis-1/4 md:basis-1/5 lg:basis-1/5"
            >
              <button
                onClick={() => toggleFilter(restriction.name)}
                className="w-full focus:outline-none"
                aria-label={`Toggle ${restriction.name} filter`}
              >
                <div className="flex flex-col items-center gap-1 sm:gap-2 p-1 sm:p-2">
                  <div
                    className={`rounded-full border-2 p-2 sm:p-3 md:p-4 transition-colors ${
                      activeFilters.includes(restriction.name)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary"
                    }`}
                  >
                    <restriction.icon className="h-4 w-4 sm:h-4 sm:w-4 md:h-5 md:w-5" />
                  </div>
                  <span className="text-xs  font-medium text-center line-clamp-2">
                    {restriction.name}
                  </span>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="left-0 text-primary top-1/2 -translate-y-1/2 -translate-x-1/2 absolute md:left-0 md:-translate-x-1/2 md:flex" />
        <CarouselNext className="right-0 top-1/2 -translate-y-1/2 text-primary translate-x-1/2 absolute md:right-0 md:translate-x-1/2 md:flex" />
      </Carousel>

      <div className="mt-2 sm:mt-4">
        <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
          {/* <h2 className="text-sm sm:text-base font-semibold">
            Active Filters:
          </h2> */}
          {/* {activeFilters.length > 0 && (
            <Button
              variant="outline"
              size="sm"
              onClick={clearFilters}
              className="text-xs sm:text-sm h-7 sm:h-9"
            >
              <X className="h-3 w-3 sm:h-4 sm:w-4 mr-1 sm:mr-2" />
              Clear All
            </Button>
          )} */}
        </div>
        <div className="flex flex-wrap gap-1 sm:gap-2">
          {activeFilters.length > 0 &&
            activeFilters.map((filter) => (
              <Badge
                key={filter}
                variant="secondary"
                className="px-2 py-1 text-xs sm:text-sm"
              >
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-1 hover:text-destructive focus:outline-none"
                  aria-label={`Remove ${filter} filter`}
                >
                  <X className="h-2 w-2 sm:h-3 sm:w-3" />
                </button>
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
