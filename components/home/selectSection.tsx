"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Search, Users2 } from "lucide-react";
import Image from "next/image";
import { useEffect, useState, useCallback } from "react";

const categories = [
  { name: "Pizza", icon: "🍕" },
  { name: "Dessert", icon: "🍰" },
  { name: "Salad", icon: "🥗" },
  { name: "Noodles", icon: "🍜" },
  { name: "Mocktail", icon: "🍹" },
];

const recipes = [
  { name: "Avocado Salad", servings: 2, cookTime: "1h 30 Min" },
  { name: "Russian Salad", servings: 2, cookTime: "1h 45 Min" },
];

export default function SelectSection() {
  const [selectedCategory, setSelectedCategory] = useState(categories[0].name);
  const [autoChangeEnabled, setAutoChangeEnabled] = useState(true);

  const getNextCategory = useCallback((currentCategory: string) => {
    const currentIndex = categories.findIndex(
      (cat) => cat.name === currentCategory
    );
    const nextIndex = (currentIndex + 1) % categories.length;
    return categories[nextIndex].name;
  }, []);

  useEffect(() => {
    let interval: NodeJS.Timeout | null = null;

    if (autoChangeEnabled) {
      interval = setInterval(() => {
        setSelectedCategory((prevCategory) => getNextCategory(prevCategory));
      }, 2000);
    }

    return () => {
      if (interval) clearInterval(interval);
    };
  }, [autoChangeEnabled, getNextCategory]);

  const handleCategoryClick = (categoryName: string) => {
    setSelectedCategory(categoryName);
    setAutoChangeEnabled(false);
    // Restart auto-change after 5 seconds of inactivity
    setTimeout(() => setAutoChangeEnabled(true), 5000);
  };

  return (
    <div className=" p-4 sm:p-6 ">
      <div className="max-w-6xl mx-auto space-y-6">
        <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <h1 className="text-4xl font-bold">Recipes</h1>
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 w-full sm:w-auto">
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <Input
                className="pl-10 pr-4 py-2 w-full rounded-full"
                placeholder="Search recipe and more..."
              />
            </div>
            <Select defaultValue="newest">
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="newest">Newest</SelectItem>
                <SelectItem value="popular">Popular</SelectItem>
                <SelectItem value="rating">Rating</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 border gap-6">
          <div className="space-y-2 col-span-6">
            {categories.map((category) => (
              <Button
                key={category.name}
                variant={
                  selectedCategory === category.name ? "secondary" : "outline"
                }
                className="w-full justify-start"
                onClick={() => handleCategoryClick(category.name)}
              >
                <span className="mr-2" aria-hidden="true">
                  {category.icon}
                </span>
                {category.name}
              </Button>
            ))}
          </div>
          <div className="md:col-span-2">
            <img
              src={`https://img.freepik.com/free-photo/top-view-table-full-delicious-food-composition_23-2149141352.jpg?text=${selectedCategory}`}
              alt={`${selectedCategory} dish`}
              width={600}
              height={400}
              className="rounded-lg object-cover w-full h-64 md:h-full"
            />
          </div>
          {/* <div className="space-y-4">
            {recipes.map((recipe) => (
              <div
                key={recipe.name}
                className="bg-gray-800 text-white p-4 rounded-lg flex items-center space-x-4"
              >
                <Image
                  src={`/placeholder.svg?text=${recipe.name}`}
                  alt={recipe.name}
                  width={60}
                  height={60}
                  className="rounded-full"
                />
                <div className="flex-1">
                  <h3 className="font-semibold">{recipe.name}</h3>
                  <div className="flex justify-between items-center mt-2">
                    <div className="flex items-center">
                      <Users2 className="w-4 h-4 mr-1" aria-hidden="true" />
                      <span className="text-sm">{recipe.servings}</span>
                    </div>
                    <div className="text-sm">Cook Time {recipe.cookTime}</div>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
        </div>
      </div>
    </div>
  );
}
