import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerDescription,
  DrawerFooter,
  DrawerClose,
} from "@/components/ui/drawer";
import { useMediaQuery } from "@/components/hooks/use-media-query";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  menuImage: string;
  ingredients: string[];
  dietaryPreferences: string[];
}

interface SelectedItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface MenuProps {
  menu: MenuItem[];
  selectedItems: SelectedItem[];
  handleAddToBooking: (item: MenuItem, quantity: number) => void;
  dietaryFilters: string[];
  setDietaryFilters: React.Dispatch<React.SetStateAction<string[]>>;
}

const dietaryRestrictions: { [key: string]: string } = {
  Vegan: "No animal products",
  Vegetarian: "No meat products",
  "Gluten-Free": "No gluten-containing grains",
  Keto: "Low carb, high fat",
  Paleo: "Natural unprocessed foods",
  "Nut-Free": "No nuts or nut products",
  Organic: "Certified organic ingredients",
  Halal: "Permissible according to Islamic law",
  "Dairy-Free": "No dairy products",
  Kosher: "Prepared according to Jewish dietary law",
};

export default function Menu({
  menu,
  selectedItems,
  handleAddToBooking,
  dietaryFilters,
  setDietaryFilters,
}: MenuProps) {
  const isDesktop = useMediaQuery("(min-width: 768px)");

  // Filter menu items based on dietary filters
  const filteredMenu = menu.filter((item) =>
    dietaryFilters.every((filter) => item.dietaryPreferences.includes(filter))
  );

  const handleDietaryPreferenceClick = (preference: string) => {
    setDietaryFilters((prevFilters) =>
      prevFilters.includes(preference)
        ? prevFilters.filter((filter) => filter !== preference)
        : [...prevFilters, preference]
    );
    window.scrollTo(0, 0);
  };

  return (
    <div className="grid gap-4 mt-4">
      <div className="grid gap-4">
        {filteredMenu.length === 0 ? (
          <div className="text-center text-gray-500">
            No items found matching the selected dietary filters.
          </div>
        ) : (
          filteredMenu.map((item) => (
            <div
              key={item.id}
              className="flex shadow-none border-b pb-2 items-center gap-4"
            >
              <div className="relative">
                <img
                  src={item.menuImage}
                  alt={item.name}
                  width={150}
                  height={150}
                  className="rounded-md"
                  style={{ aspectRatio: "100/100", objectFit: "cover" }}
                />
                {isDesktop ? (
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-[-15px] right-[-15px] bg-white border rounded-full"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="sm:max-w-[425px]">
                      <DialogHeader>
                        <DialogTitle>Ingredients</DialogTitle>
                        <DialogDescription>
                          The ingredients used in this dish.
                        </DialogDescription>
                      </DialogHeader>
                      <div className="px-4 prose prose-sm prose-gray dark:prose-invert max-w-none">
                        <ul>
                          {item.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                    </DialogContent>
                  </Dialog>
                ) : (
                  <Drawer>
                    <DrawerTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="absolute top-[-15px] right-[-15px] bg-white border rounded-full"
                      >
                        <Info className="h-4 w-4" />
                      </Button>
                    </DrawerTrigger>
                    <DrawerContent>
                      <DrawerHeader>
                        <DrawerTitle>Ingredients</DrawerTitle>
                        <DrawerDescription>
                          The ingredients used in this dish.
                        </DrawerDescription>
                      </DrawerHeader>
                      <div className="px-4 prose prose-sm prose-gray dark:prose-invert max-w-none">
                        <ul>
                          {item.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                          ))}
                        </ul>
                      </div>
                      <DrawerFooter>
                        <DrawerClose asChild>
                          <Button variant="outline">Close</Button>
                        </DrawerClose>
                      </DrawerFooter>
                    </DrawerContent>
                  </Drawer>
                )}
              </div>
              <div className="flex-1 p-2">
                <div className="flex flex-col justify-between ">
                  <h3 className="text-sm md:text-lg font-bold">{item.name}</h3>
                  <div className="flex flex-wrap gap-2 py-2">
                    <TooltipProvider>
                      {item.dietaryPreferences &&
                        item.dietaryPreferences
                          .filter((preference) => preference.trim() !== "")
                          .map((preference, index) => (
                            <Tooltip key={index}>
                              <TooltipTrigger asChild>
                                <div
                                  className="text-xs p-1 hover:bg-primary hover:text-white hover:cursor-pointer px-2 bg-green-50 rounded-full"
                                  onClick={() =>
                                    handleDietaryPreferenceClick(preference)
                                  }
                                >
                                  {preference}
                                </div>
                              </TooltipTrigger>
                              <TooltipContent>
                                <p>{dietaryRestrictions[preference]}</p>
                              </TooltipContent>
                            </Tooltip>
                          ))}
                    </TooltipProvider>
                  </div>
                </div>
                <p className="text-muted-foreground text-xs md:text-base">
                  {item.description}
                </p>

                <div className="flex items-center justify-between mt-2">
                  <div className="font-bold">${item.price.toFixed(2)}</div>

                  <div className="flex items-center gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddToBooking(item, -1)}
                    >
                      -
                    </Button>
                    <span>
                      {selectedItems.find((i) => i.id === item.id)?.quantity ??
                        0}
                    </span>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleAddToBooking(item, 1)}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
