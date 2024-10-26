import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ClockIcon } from "lucide-react";

export function DietaryRequestForm({
  onSubmit,
}: {
  onSubmit: (data: any) => void;
}) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label>What type of meal are you requesting?</Label>
        <div className="flex flex-wrap gap-2">
          <Controller
            name="mealType"
            control={control}
            rules={{ required: "Please select at least one meal type" }}
            render={({ field }) => (
              <>
                {["Breakfast", "Lunch", "Dinner"].map((type) => (
                  <Button
                    key={type}
                    type="button"
                    variant={
                      field.value?.includes(type) ? "default" : "outline"
                    }
                    onClick={() => {
                      const updatedValue = field.value?.includes(type)
                        ? field.value.filter((t: string) => t !== type)
                        : [...(field.value || []), type];
                      field.onChange(updatedValue);
                    }}
                    className="flex-grow sm:flex-grow-0"
                  >
                    {type}
                  </Button>
                ))}
              </>
            )}
          />
        </div>
        {errors.mealType && (
          <p className="text-red-500 text-sm">
            {errors.mealType.message as string}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label>Do you have any specific dietary restrictions?</Label>
        <div className="grid grid-cols-2 gap-2">
          <Controller
            name="dietaryRestrictions"
            control={control}
            render={({ field }) => (
              <>
                {[
                  "Vegetarian",
                  "Vegan",
                  "Gluten-free",
                  "Dairy-free",
                  "Nut-free",
                  "Low-carb",
                ].map((type) => (
                  <Label key={type} className="flex items-center space-x-2">
                    <Checkbox
                      checked={field.value?.includes(type)}
                      onCheckedChange={(checked) => {
                        const updatedValue = checked
                          ? [...(field.value || []), type]
                          : field.value?.filter((t: string) => t !== type);
                        field.onChange(updatedValue);
                      }}
                    />
                    <span>{type}</span>
                  </Label>
                ))}
              </>
            )}
          />
        </div>
      </div>
      <div className=" ">
        <Label htmlFor="preparationPreferences">
          Do you have any specific preparation preferences?
        </Label>
        <Controller
          name="preparationPreferences"
          control={control}
          render={({ field }) => (
            <Input
              {...field}
              placeholder="e.g., organic ingredients, locally sourced"
            />
          )}
        />
      </div>
      <div className=" ">
        <Label htmlFor="foodStyle">
          What is the desired food style for this event?
        </Label>
        <Controller
          name="foodStyle"
          control={control}
          rules={{ required: "Please select a food style" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select food style" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="family-style">
                  Family-style sharing
                </SelectItem>
                <SelectItem value="fine-dining">Fine dining</SelectItem>
                <SelectItem value="catering">Catering</SelectItem>
                <SelectItem value="plated">Plated individually</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.foodStyle && (
          <p className="text-red-500 text-sm">
            {errors.foodStyle.message as string}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="allergies">
          Are there any ingredients you are allergic to or wish to avoid?
        </Label>
        <Controller
          name="allergies"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="preferredIngredients">
          Do you have any preferred ingredients you would like the chef to use?
        </Label>
        <Controller
          name="preferredIngredients"
          control={control}
          render={({ field }) => <Input {...field} />}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <Label htmlFor="budget">What is your budget for this meal?</Label>
          <Controller
            name="budget"
            control={control}
            rules={{ required: "Please enter your budget" }}
            render={({ field }) => <Input {...field} type="number" />}
          />
          {errors.budget && (
            <p className="text-red-500 text-sm">
              {errors.budget.message as string}
            </p>
          )}
        </div>
        <div className="">
          <Label htmlFor="guestCount">How many guests will be served?</Label>
          <Controller
            name="guestCount"
            control={control}
            rules={{ required: "Please enter the number of guests" }}
            render={({ field }) => <Input {...field} type="number" />}
          />
          {errors.guestCount && (
            <p className="text-red-500 text-sm">
              {errors.guestCount.message as string}
            </p>
          )}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="   ">
          <Label htmlFor="name">Name</Label>
          <Controller
            name="name"
            control={control}
            rules={{ required: "Please enter your name" }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.name && (
            <p className="text-red-500 text-sm">
              {errors.name.message as string}
            </p>
          )}
        </div>

        <div className="s">
          <Label htmlFor="email">Email</Label>
          <Controller
            name="email"
            control={control}
            rules={{
              required: "Please enter your email",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Please enter a valid email address",
              },
            }}
            render={({ field }) => <Input {...field} type="email" />}
          />
          {errors.email && (
            <p className="text-red-500 text-sm">
              {errors.email.message as string}
            </p>
          )}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="">
          <Label htmlFor="phone">Phone</Label>
          <Controller
            name="phone"
            control={control}
            rules={{
              required: "Please enter your phone number",
            }}
            render={({ field }) => <Input {...field} type="tel" />}
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">
              {errors.phone.message as string}
            </p>
          )}
        </div>

        <div className="space">
          <Label htmlFor="address">Address</Label>
          <Controller
            name="address"
            control={control}
            rules={{ required: "Please enter your address" }}
            render={({ field }) => <Input {...field} />}
          />
          {errors.address && (
            <p className="text-red-500 text-sm">
              {errors.address.message as string}
            </p>
          )}
        </div>
      </div>

      {/* New fields: Booking Date, Booking Time, and Additional Notes */}
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
                  {...field}
                  type="date"
                  id="bookingDate"
                  className="pl-10"
                />
              )}
            />
            <CalendarIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          {errors.bookingDate && (
            <p className="text-red-500 text-sm">
              {errors.bookingDate.message as string}
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
                  {...field}
                  type="time"
                  id="bookingTime"
                  className="pl-10"
                />
              )}
            />
            <ClockIcon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
          </div>
          {errors.bookingTime && (
            <p className="text-red-500 text-sm">
              {errors.bookingTime.message as string}
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
              id="additionalNotes"
              placeholder="Please provide any other relevant details or requests to help the chef create the perfect meal for you"
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
  );
}
