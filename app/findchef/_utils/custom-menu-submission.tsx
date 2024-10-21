import React from "react";
import { useForm, Controller, FieldValues } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import {
  CalendarIcon,
  ChefHatIcon,
  ClockIcon,
  LeafIcon,
  ScrollIcon,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

type MenuType = "dietary" | "mealprep" | "custom" | "";

interface FormData extends FieldValues {
  dietaryType: string[];
  allergies: string;
  preferredIngredients: string;
  mealsPerWeek: string;
  mealPreferences: string;
  cuisineType: string;
  numberOfDishes: string;
  bookingDate: string;
  bookingTime: string;
  additionalNotes: string;
}

const CustomMenuForm: React.FC = () => {
  const [selectedType, setSelectedType] = React.useState<MenuType>("");
  const { toast } = useToast();
  const {
    control,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    clearErrors,
  } = useForm<FormData>({
    defaultValues: {
      dietaryType: [],
      allergies: "",
      preferredIngredients: "",
      mealsPerWeek: "",
      mealPreferences: "",
      cuisineType: "",
      numberOfDishes: "",
      bookingDate: "",
      bookingTime: "",
      additionalNotes: "",
    },
  });

  const dietaryType = watch("dietaryType");

  const handleDietaryTypeChange = (type: string) => {
    const updatedTypes = dietaryType.includes(type)
      ? dietaryType.filter((t: string) => t !== type)
      : [...dietaryType, type];
    setValue("dietaryType", updatedTypes, { shouldValidate: true });
    clearErrors("dietaryType");
  };

  const makeApiRequest = async (data: FormData) => {
    try {
      const response = await fetch("/api/custom-menu", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ type: selectedType, ...data }),
      });

      if (!response.ok) {
        throw new Error("Failed to submit request");
      }

      return await response.json();
    } catch (error) {
      console.error("API request failed:", error);
      throw error;
    }
  };

  const onSubmit = async (data: FormData) => {
    if (selectedType) {
      try {
        await makeApiRequest(data);
        toast({
          title: "Success",
          description:
            "Your custom menu request has been submitted successfully.",
        });
        // Reset form or redirect user as needed
      } catch (error) {
        toast({
          title: "Error",
          description: "Failed to submit your request. Please try again.",
          variant: "destructive",
        });
      }
    } else {
      toast({
        title: "Validation Error",
        description: "Please select a menu type.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Custom Menu Request</h1>

      <RadioGroup
        className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6"
        value={selectedType}
        onValueChange={(value: MenuType) => setSelectedType(value)}
      >
        <Label className="cursor-pointer" htmlFor="dietary">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <LeafIcon className="h-12 w-12 mb-2 text-green-500" />
              <RadioGroupItem
                value="dietary"
                id="dietary"
                className="sr-only"
              />
              <span className="font-medium">Special Dietary Requests</span>
            </CardContent>
          </Card>
        </Label>
        <Label className="cursor-pointer" htmlFor="mealprep">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <ChefHatIcon className="h-12 w-12 mb-2 text-blue-500" />
              <RadioGroupItem
                value="mealprep"
                id="mealprep"
                className="sr-only"
              />
              <span className="font-medium">Weekly Meal Prep</span>
            </CardContent>
          </Card>
        </Label>
        <Label className="cursor-pointer" htmlFor="custom">
          <Card>
            <CardContent className="flex flex-col items-center justify-center p-6">
              <ScrollIcon className="h-12 w-12 mb-2 text-purple-500" />
              <RadioGroupItem value="custom" id="custom" className="sr-only" />
              <span className="font-medium">Custom Menu Creation</span>
            </CardContent>
          </Card>
        </Label>
      </RadioGroup>

      {selectedType && (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {selectedType === "dietary" && (
            <>
              <div className="space-y-2">
                <Label>Select Dietary Restrictions (Multiple)</Label>
                <div className="flex flex-wrap gap-2">
                  {[
                    "Vegetarian",
                    "Vegan",
                    "Gluten-Free",
                    "Dairy-Free",
                    "Nut-Free",
                    "Low-Carb",
                  ].map((type) => (
                    <Button
                      key={type}
                      type="button"
                      variant={
                        dietaryType.includes(type) ? "default" : "outline"
                      }
                      onClick={() => handleDietaryTypeChange(type)}
                      className="flex-grow sm:flex-grow-0"
                    >
                      {type}
                    </Button>
                  ))}
                </div>
                {errors.dietaryType && (
                  <p className="text-red-500 text-sm mt-1">
                    Please select at least one dietary restriction
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="allergies">
                  Allergies/Ingredients to Avoid
                </Label>
                <Controller
                  name="allergies"
                  control={control}
                  rules={{
                    required:
                      "Please enter allergies or 'None' if not applicable",
                  }}
                  render={({ field }) => (
                    <Input
                      {...field}
                      onChange={(e) => {
                        field.onChange(e);
                        clearErrors("allergies");
                      }}
                    />
                  )}
                />
                {errors.allergies && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.allergies.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="preferredIngredients">
                  Preferred Ingredients (Optional)
                </Label>
                <Controller
                  name="preferredIngredients"
                  control={control}
                  render={({ field }) => <Input {...field} />}
                />
              </div>
            </>
          )}

          {selectedType === "mealprep" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="mealsPerWeek">Number of Meals per Week</Label>
                <Controller
                  name="mealsPerWeek"
                  control={control}
                  rules={{ required: "Please select number of meals per week" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        clearErrors("mealsPerWeek");
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of meals" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="3">3 Meals</SelectItem>
                        <SelectItem value="5">5 Meals</SelectItem>
                        <SelectItem value="7">7 Meals</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.mealsPerWeek && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mealsPerWeek.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="mealPreferences">Meal Preferences</Label>
                <Controller
                  name="mealPreferences"
                  control={control}
                  rules={{ required: "Please select meal preferences" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        clearErrors("mealPreferences");
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select meal preferences" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="vegetarian">Vegetarian</SelectItem>
                        <SelectItem value="vegan">Vegan</SelectItem>
                        <SelectItem value="keto">Keto</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.mealPreferences && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.mealPreferences.message}
                  </p>
                )}
              </div>
            </>
          )}

          {selectedType === "custom" && (
            <>
              <div className="space-y-2">
                <Label htmlFor="cuisineType">Cuisine Type</Label>
                <Controller
                  name="cuisineType"
                  control={control}
                  rules={{ required: "Please select cuisine type" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        clearErrors("cuisineType");
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select cuisine type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="italian">Italian</SelectItem>
                        <SelectItem value="mexican">Mexican</SelectItem>
                        <SelectItem value="asian">Asian</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.cuisineType && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.cuisineType.message}
                  </p>
                )}
              </div>
              <div className="space-y-2">
                <Label htmlFor="numberOfDishes">Number of Dishes</Label>
                <Controller
                  name="numberOfDishes"
                  control={control}
                  rules={{ required: "Please select number of dishes" }}
                  render={({ field }) => (
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                        clearErrors("numberOfDishes");
                      }}
                      value={field.value}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select number of dishes" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Dish</SelectItem>
                        <SelectItem value="2">2 Dishes</SelectItem>
                        <SelectItem value="3">3 Dishes</SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.numberOfDishes && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.numberOfDishes.message}
                  </p>
                )}
              </div>
            </>
          )}

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="bookingDate">Booking Date</Label>
              <div className="relative">
                <Controller
                  name="bookingDate"
                  control={control}
                  rules={{ required: "Please select a booking date" }}
                  render={({ field }) => (
                    <Input
                      type="date"
                      {...field}
                      className="pl-10"
                      onChange={(e) => {
                        field.onChange(e);
                        clearErrors("bookingDate");
                      }}
                    />
                  )}
                />
                <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.bookingDate && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bookingDate.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="bookingTime">Booking Time</Label>
              <div className="relative">
                <Controller
                  name="bookingTime"
                  control={control}
                  rules={{ required: "Please select a booking time" }}
                  render={({ field }) => (
                    <Input
                      type="time"
                      {...field}
                      className="pl-10"
                      onChange={(e) => {
                        field.onChange(e);
                        clearErrors("bookingTime");
                      }}
                    />
                  )}
                />
                <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
              </div>
              {errors.bookingTime && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.bookingTime.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="additionalNotes">Additional Notes (Optional)</Label>
            <Controller
              name="additionalNotes"
              control={control}
              render={({ field }) => (
                <Textarea
                  {...field}
                  placeholder="Any additional requests or information"
                />
              )}
            />
          </div>

          <div className="flex justify-end">
            <Button type="submit" className="w-full sm:w-auto">
              Submit Request
            </Button>
          </div>
        </form>
      )}
    </div>
  );
};

export default CustomMenuForm;
