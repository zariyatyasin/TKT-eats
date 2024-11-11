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

const dietaryRestrictions: DietaryRestriction[] = [
  { name: "Vegan", icon: Carrot, description: "No animal products" },
  { name: "Vegetarian", icon: Leaf, description: "No meat products" },
  { name: "Lactose Free", icon: Milk, description: "No dairy products" },
  {
    name: "Gluten Free",
    icon: Wheat,
    description: "No gluten-containing grains",
  },
  { name: "Keto", icon: Orbit, description: "Low carb, high fat" },
  { name: "Paleo", icon: Beef, description: "Natural unprocessed foods" },
  { name: "Nut Free", icon: Nut, description: "No nuts or nut products" },
  { name: "Organic", icon: Leaf, description: "Certified organic ingredients" },
];

export default function DietaryRestrictionFilter() {
  const [activeFilters, setActiveFilters] = React.useState<string[]>([]);

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
    <div className="mx-auto px-10 mb-4 space-y-4">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        className="w-full"
      >
        <CarouselContent>
          {dietaryRestrictions.map((restriction) => (
            <CarouselItem
              key={restriction.name}
              className="basis-1/3 md:basis-1/5"
            >
              <button
                onClick={() => toggleFilter(restriction.name)}
                className="w-full focus:outline-none"
              >
                <div className="flex flex-col items-center gap-2 p-2">
                  <div
                    className={`rounded-full border-2 p-4 transition-colors ${
                      activeFilters.includes(restriction.name)
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-primary"
                    }`}
                  >
                    <restriction.icon className="h-4 w-4" />
                  </div>
                  <span className="text-xs font-medium text-center">
                    {restriction.name}
                  </span>
                </div>
              </button>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>

      <div className=" ">
        <div className="flex justify-end items-center">
          {/* {activeFilters.length > 0 && (
            <Button variant="outline" size="sm" onClick={clearFilters}>
              <X className="h-4 w-4 mr-2" />
              Clear All
            </Button>
          )} */}
        </div>
        <div className="flex flex-wrap gap-2">
          {activeFilters.length > 0 &&
            activeFilters.map((filter) => (
              <Badge key={filter} variant="secondary" className="px-2 py-1">
                {filter}
                <button
                  onClick={() => toggleFilter(filter)}
                  className="ml-1 hover:text-destructive focus:outline-none"
                  aria-label={`Remove ${filter} filter`}
                >
                  <X className="h-3 w-3" />
                </button>
              </Badge>
            ))}
        </div>
      </div>
    </div>
  );
}
