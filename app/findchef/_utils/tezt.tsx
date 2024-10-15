"use client";
import { useState, useEffect } from "react";
import { Search, Heart, Check, ChevronsUpDown, X, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { cn } from "@/lib/utils";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"; // Import a Sheet component for sidebar

const locations = [
  { value: "new-york", label: "New York" },
  { value: "london", label: "London" },
  { value: "paris", label: "Paris" },
  { value: "tokyo", label: "Tokyo" },
  { value: "berlin", label: "Berlin" },
];
const categories = [
  { value: "italian", label: "Italian" },
  { value: "american", label: "American" },
  { value: "korean", label: "Korean" },
  { value: "mediterranean", label: "Mediterranean" },
  { value: "puerto rico", label: "Puerto Rico" },
  { value: "dim sum", label: "Dim Sum" },
  { value: "french", label: "French" },
  { value: "mexican", label: "Mexican" },
  { value: "southern", label: "Southern" },
];
export default function AccommodationBooking() {
  const [open, setOpen] = useState(false);
  const [opencat, setOpenCat] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const [submittedQuery, setSubmittedQuery] = useState<string>("");

  useEffect(() => {
    // Parse URL parameters on component mount
    const urlParams = new URLSearchParams(window.location.search);
    const categoriesParam = urlParams.get("categories");
    const locationParam = urlParams.get("location");
    const searchParam = urlParams.get("search");

    if (categoriesParam) {
      setSelectedCategories(categoriesParam.split(","));
    }
    if (locationParam) {
      setSelectedLocation(locationParam);
    }
    if (searchParam) {
      setSearchQuery(searchParam);
      setSubmittedQuery(searchParam);
    }
  }, []);

  useEffect(() => {
    const url = new URL(window.location.href);
    if (selectedCategories.length > 0) {
      url.searchParams.set("categories", selectedCategories.join(","));
    } else {
      url.searchParams.delete("categories");
    }
    if (selectedLocation) {
      url.searchParams.set("location", selectedLocation);
    } else {
      url.searchParams.delete("location");
    }
    if (submittedQuery) {
      url.searchParams.set("search", submittedQuery);
    } else {
      url.searchParams.delete("search");
    }
    window.history.pushState({}, "", url);
  }, [selectedCategories, selectedLocation, submittedQuery]);

  const handleSearch = () => {
    setSubmittedQuery(searchQuery);
  };

  const toggleCategory = (category: string) => {
    setSelectedCategories((prevCategories) =>
      prevCategories.includes(category)
        ? prevCategories.filter((cat) => cat !== category)
        : [...prevCategories, category]
    );
  };

  const clearAll = () => {
    setSelectedCategories([]);
    setSelectedLocation(null);
    setSearchQuery("");
    setSubmittedQuery("");
    const url = new URL(window.location.href);
    url.searchParams.delete("categories");
    url.searchParams.delete("location");
    url.searchParams.delete("search");
    window.history.pushState({}, "", url);
  };

  return (
    <div>
      <div className="flex justify-end items-center space-x-4 rounded-md pb-8">
        <Button
          variant="outline"
          onClick={clearAll}
          className="h-12 rounded-full"
        >
          Clear All
        </Button>
        <div className="block md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" className="h-12 rounded-full">
                <Filter className="mr-2 h-4 w-4" />
                Filters
              </Button>
            </SheetTrigger>
            <SheetContent>
              {/* Place the filter content here for mobile view */}
              <div className="flex flex-col space-y-4">
                {/* Categories Filter */}
                <Popover open={opencat} onOpenChange={setOpenCat}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={opencat}
                      className="w-full h-12 justify-between rounded-full overflow-hidden"
                    >
                      {selectedCategories.length > 0
                        ? selectedCategories
                            .map(
                              (category) =>
                                categories.find((cat) => cat.value === category)
                                  ?.label
                            )
                            .join(", ")
                        : "Select Your Categories"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search categories..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No categories found.</CommandEmpty>
                        <CommandGroup>
                          {categories.map((category) => (
                            <CommandItem
                              key={category.value}
                              value={category.value}
                              onSelect={() => toggleCategory(category.value)}
                            >
                              {category.label}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selectedCategories.includes(category.value)
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {/* Location Filter */}
                <Popover open={open} onOpenChange={setOpen}>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      role="combobox"
                      aria-expanded={open}
                      className="w-full h-12 justify-between rounded-full"
                    >
                      {selectedLocation
                        ? locations.find(
                            (location) => location.value === selectedLocation
                          )?.label
                        : "Select Your Location"}
                      <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-full p-0">
                    <Command>
                      <CommandInput
                        placeholder="Search location..."
                        className="h-9"
                      />
                      <CommandList>
                        <CommandEmpty>No location found.</CommandEmpty>
                        <CommandGroup>
                          {locations.map((location) => (
                            <CommandItem
                              key={location.value}
                              value={location.value}
                              onSelect={(currentValue) => {
                                setSelectedLocation(
                                  currentValue === selectedLocation
                                    ? null
                                    : currentValue
                                );
                                setOpen(false);
                              }}
                            >
                              {location.label}
                              <Check
                                className={cn(
                                  "ml-auto h-4 w-4",
                                  selectedLocation === location.value
                                    ? "opacity-100"
                                    : "opacity-0"
                                )}
                              />
                            </CommandItem>
                          ))}
                        </CommandGroup>
                      </CommandList>
                    </Command>
                  </PopoverContent>
                </Popover>
                {/* Search Input */}
                <div className="relative">
                  <Input
                    type="text"
                    placeholder="Search food"
                    className="rounded-full w-full"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <Button
                    size="icon"
                    className="absolute top-[4px] right-1 rounded-full"
                    onClick={handleSearch}
                  >
                    <Search className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
        <div className="hidden md:flex space-x-4">
          <Popover open={opencat} onOpenChange={setOpenCat}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={opencat}
                className="w-[250px] h-12 justify-between rounded-full overflow-hidden"
              >
                {selectedCategories.length > 0
                  ? selectedCategories
                      .map(
                        (category) =>
                          categories.find((cat) => cat.value === category)
                            ?.label
                      )
                      .join(", ")
                  : "Select Your Categories"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search categories..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No categories found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        key={category.value}
                        value={category.value}
                        onSelect={() => toggleCategory(category.value)}
                      >
                        {category.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedCategories.includes(category.value)
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <Popover open={open} onOpenChange={setOpen}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={open}
                className="w-[250px] h-12 justify-between rounded-full"
              >
                {selectedLocation
                  ? locations.find(
                      (location) => location.value === selectedLocation
                    )?.label
                  : "Select Your Location"}
                <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search location..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No location found.</CommandEmpty>
                  <CommandGroup>
                    {locations.map((location) => (
                      <CommandItem
                        key={location.value}
                        value={location.value}
                        onSelect={(currentValue) => {
                          setSelectedLocation(
                            currentValue === selectedLocation
                              ? null
                              : currentValue
                          );
                          setOpen(false);
                        }}
                      >
                        {location.label}
                        <Check
                          className={cn(
                            "ml-auto h-4 w-4",
                            selectedLocation === location.value
                              ? "opacity-100"
                              : "opacity-0"
                          )}
                        />
                      </CommandItem>
                    ))}
                  </CommandGroup>
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          <div className="relative">
            <Input
              type="text"
              placeholder="Search food"
              className="rounded-full w-80"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              size="icon"
              className="absolute top-[4px] right-1 rounded-full"
              onClick={handleSearch}
            >
              <Search className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-end pb-8">
        {selectedCategories.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {selectedCategories.map((category) => {
              const categoryLabel = categories.find(
                (cat) => cat.value === category
              )?.label;
              return (
                <Badge
                  key={category}
                  variant="secondary"
                  className="flex items-center space-x-2"
                >
                  <span>{categoryLabel}</span>
                  <button
                    onClick={() => toggleCategory(category)}
                    className="focus:outline-none"
                  >
                    <X className="h-4 w-4" />
                  </button>
                </Badge>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
}
