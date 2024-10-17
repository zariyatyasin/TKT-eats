"use client";

import * as React from "react";
import { useRouter, useSearchParams } from "next/navigation";
import {
  Search,
  X,
  CheckCheck,
  ChevronDownIcon,
  MapIcon,
  MapPin,
} from "lucide-react";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const categories = [
  { value: "american", label: "American" },
  { value: "italian", label: "Italian" },
  { value: "mediterranean", label: "Mediterranean" },
  { value: "french", label: "French" },
  { value: "asian", label: "Asian" },
  { value: "hawaiian", label: "Hawaiian" },
  { value: "seafood", label: "Seafood" },
  { value: "southern", label: "Southern" },
  { value: "mexican", label: "Mexican" },
  { value: "vegan-vegetarian", label: "Vegan & Vegetarian" },
  { value: "caribbean", label: "Caribbean" },
  { value: "cajun", label: "Cajun" },
  { value: "fusion", label: "Fusion" },
];

const locations = [
  { value: "FL", label: "Florida" },
  { value: "TX", label: "Texas" },
  { value: "CT", label: "Connecticut" },
  { value: "CO", label: "Colorado" },
  { value: "TN", label: "Tennessee" },
  { value: "PA", label: "Pennsylvania" },
  { value: "IL", label: "Illinois" },
];
export default function Component() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [searchTerm, setSearchTerm] = React.useState(
    searchParams.get("search") || ""
  );
  const [selectedCategories, setSelectedCategories] = React.useState<string[]>(
    searchParams.get("categories")?.split(",").filter(Boolean) || []
  );

  const [isOpen, setIsOpen] = React.useState(false);
  const [location, setLocation] = React.useState(
    searchParams.get("location") || ""
  );
  const [openCategories, setOpenCategories] = React.useState(false);

  const cn = (...classes: string[]) => classes.filter(Boolean).join(" ");

  const updateURL = React.useCallback(() => {
    const params = new URLSearchParams();
    if (searchTerm) params.set("search", searchTerm);
    if (selectedCategories.length)
      params.set("categories", selectedCategories.join(","));
    if (location) params.set("location", location);

    const currentPath = window.location.pathname; // Get the current pathname
    router.push(`${currentPath}?${params.toString()}`, { scroll: false });
  }, [searchTerm, selectedCategories, location, router]);

  React.useEffect(() => {
    updateURL();
  }, [searchTerm, selectedCategories, location, updateURL]);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    updateURL();
  };

  const clearAll = () => {
    setSearchTerm("");
    setSelectedCategories([]);
    setLocation("");
    router.push("", { scroll: false });
  };

  const dropdownRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="container mx-auto p-4 space-y-4">
      <form
        onSubmit={handleSearch}
        className="flex flex-col md:flex-row gap-4 justify-end"
      >
        <div className="relative">
          <Input
            type="text"
            placeholder="Search for Food, Location, Cuisine, or Chef Name"
            className="w-ful md:w-96 pr-10 placeholder:text-xs"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button
            type="submit"
            size="icon"
            className="absolute right-1 top-1 bg-[#B5D56A] hover:bg-[#9EBE5C]"
            onClick={() => handleSearch}
          >
            <Search className="h-4 w-4" />
          </Button>
        </div>

        <div className="hidden md:flex gap-2 w-full md:w-auto">
          <Popover open={openCategories} onOpenChange={setOpenCategories}>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                role="combobox"
                aria-expanded={openCategories}
                className="w-full h-12 md:w-[200px] justify-between"
              >
                {selectedCategories.length > 0
                  ? `${selectedCategories.length} selected`
                  : "Select Cuisine"}
                <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full md:w-[200px] p-0">
              <Command>
                <CommandInput
                  placeholder="Search categories..."
                  className="h-9"
                />
                <CommandList>
                  <CommandEmpty>No category found.</CommandEmpty>
                  <CommandGroup>
                    {categories.map((category) => (
                      <CommandItem
                        key={category.value}
                        onSelect={() => {
                          setSelectedCategories((prev) =>
                            prev.includes(category.value)
                              ? prev.filter((item) => item !== category.value)
                              : [...prev, category.value]
                          );
                        }}
                      >
                        {category.label}
                        <CheckIcon
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
          <Select value={location} onValueChange={setLocation}>
            <SelectTrigger className="w-full h-12 md:w-[200px]">
              <SelectValue placeholder="Select Location" />
            </SelectTrigger>
            <SelectContent>
              {locations.map((loc) => (
                <SelectItem key={loc.value} value={loc.value}>
                  {loc.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
        <div className="flex gap-4">
          <Button
            variant="outline"
            onClick={clearAll}
            className="w-full md:h-12 md:w-auto"
          >
            Clear All
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="outline"
                className="w-full md:w-auto flex md:hidden"
              >
                Filter
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle>Filter Chefs</SheetTitle>
                <SheetDescription>
                  Use the options below to filter chefs.
                </SheetDescription>
              </SheetHeader>
              <div
                className="space-y-4 gap-2 w-full md:w-auto"
                ref={dropdownRef}
              >
                <div className="relative">
                  <div
                    className="flex items-center justify-between cursor-pointer border rounded px-3 py-2"
                    onClick={() => setIsOpen((prev) => !prev)}
                  >
                    <span>Select Cuisine...</span>
                    <ChevronDownIcon
                      className={`h-4 w-4 transition-transform ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </div>

                  {isOpen && (
                    <div className="absolute mt-2 bg-white border rounded shadow-lg z-10 w-full">
                      <Command>
                        <CommandInput
                          placeholder="Search categories..."
                          className="h-9"
                        />
                        <CommandList>
                          <CommandEmpty>No category found.</CommandEmpty>
                          <CommandGroup>
                            {categories.map((category) => (
                              <CommandItem
                                key={category.value}
                                onSelect={() => {
                                  setSelectedCategories((prev) =>
                                    prev.includes(category.value)
                                      ? prev.filter(
                                          (item) => item !== category.value
                                        )
                                      : [...prev, category.value]
                                  );
                                }}
                              >
                                {category.label}
                                <CheckIcon
                                  className={`ml-auto h-4 w-4 transition-opacity ${
                                    selectedCategories.includes(category.value)
                                      ? "opacity-100"
                                      : "opacity-0"
                                  }`}
                                />
                              </CommandItem>
                            ))}
                          </CommandGroup>
                        </CommandList>
                      </Command>
                    </div>
                  )}
                </div>

                <Select value={location} onValueChange={setLocation}>
                  <SelectTrigger className="w-full h-12 md:w-[200px]">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    {locations.map((loc) => (
                      <SelectItem key={loc.value} value={loc.value}>
                        {loc.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </form>

      <div className="flex flex-wrap gap-2">
        {selectedCategories.map((category) => (
          <span
            key={category}
            className="flex items-center bg-gray-200 rounded-full px-3 py-1 text-sm"
          >
            {categories.find((c) => c.value === category)?.label}
            <X
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() =>
                setSelectedCategories((prev) =>
                  prev.filter((c) => c !== category)
                )
              }
            />
          </span>
        ))}
        {location && (
          <span className="flex items-center gap-1 bg-gray-200 rounded-full px-3 py-1 text-sm">
            <span>
              <MapPin className=" h-4 w-4" />
            </span>{" "}
            {locations.find((loc) => loc.value === location)?.label}
            <X
              className="ml-2 h-4 w-4 cursor-pointer"
              onClick={() => setLocation("")}
            />
          </span>
        )}
      </div>
    </div>
  );
}
