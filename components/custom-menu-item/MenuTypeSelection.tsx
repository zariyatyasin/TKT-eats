import React from "react";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Card, CardContent } from "@/components/ui/card";
import { ChefHatIcon, LeafIcon, ScrollIcon } from "lucide-react";

type MenuType = "dietary" | "mealprep" | "custom" | "";

interface MenuTypeSelectionProps {
  selectedType: MenuType;
  setSelectedType: (type: MenuType) => void;
}

export function MenuTypeSelection({
  selectedType,
  setSelectedType,
}: MenuTypeSelectionProps) {
  return (
    <RadioGroup
      className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-6"
      value={selectedType}
      onValueChange={(value: MenuType) => setSelectedType(value)}
    >
      <Label className="cursor-pointer" htmlFor="dietary">
        <Card className="flex flex-col h-full">
          <CardContent className="flex flex-col items-center justify-center flex-grow">
            <LeafIcon className=" h-6 w-6 md:h-12 md:w-12 mb-2 text-green-500" />
            <RadioGroupItem value="dietary" id="dietary" className="sr-only" />
            <span className="font-medium text-xs md:text-base">
              Special Dietary Requests
            </span>
          </CardContent>
        </Card>
      </Label>
      <Label className="cursor-pointer" htmlFor="mealprep">
        <Card className="flex flex-col h-full">
          <CardContent className="flex flex-col items-center justify-center   flex-grow">
            <ChefHatIcon className="h-6 w-6 md:h-12 md:w-12 mb-2 text-blue-500" />
            <RadioGroupItem
              value="mealprep"
              id="mealprep"
              className="sr-only"
            />
            <span className="font-medium text-xs md:text-base">
              Weekly Meal Prep
            </span>
          </CardContent>
        </Card>
      </Label>
      <Label className="cursor-pointer" htmlFor="custom">
        <Card className="flex flex-col h-full">
          <CardContent className="flex flex-col items-center justify-center p-6 flex-grow">
            <ScrollIcon className="h-6 w-6 md:h-12 md:w-12 mb-2 text-purple-500" />
            <RadioGroupItem value="custom" id="custom" className="sr-only" />
            <span className="font-medium text-xs md:text-base">
              Custom Menu Creation
            </span>
          </CardContent>
        </Card>
      </Label>
    </RadioGroup>
  );
}
