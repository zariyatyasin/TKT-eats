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
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ClockIcon } from "lucide-react";
import { Checkbox } from "../ui/checkbox";

export function MealPrepForm({ onSubmit }: { onSubmit: (data: any) => void }) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label>What type of meals would you like prepared?</Label>
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
        <Label htmlFor="mealsPerWeek">
          How many total meals would you like prepared for the week?
        </Label>
        <Controller
          name="mealsPerWeek"
          control={control}
          rules={{ required: "Please enter the number of meals per week" }}
          render={({ field }) => <Input {...field} type="number" />}
        />
        {errors.mealsPerWeek && (
          <p className="text-red-500 text-sm">
            {errors.mealsPerWeek.message as string}
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
        <Label htmlFor="servingsPerMeal">
          How many servings (diners) per meal would you like?
        </Label>
        <Controller
          name="servingsPerMeal"
          control={control}
          rules={{ required: "Please enter the number of servings per meal" }}
          render={({ field }) => <Input {...field} type="number" />}
        />
        {errors.servingsPerMeal && (
          <p className="text-red-500 text-sm">
            {errors.servingsPerMeal.message as string}
          </p>
        )}
      </div>
      <div className="space-y-2">
        <Label htmlFor="mealPrepFrequency">
          How often would you like to schedule meal prep services?
        </Label>
        <Controller
          name="mealPrepFrequency"
          control={control}
          rules={{ required: "Please select a frequency" }}
          render={({ field }) => (
            <Select onValueChange={field.onChange} value={field.value}>
              <SelectTrigger>
                <SelectValue placeholder="Select frequency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="weekly">Weekly</SelectItem>
                <SelectItem value="bi-weekly">Bi-weekly</SelectItem>
                <SelectItem value="other">Other</SelectItem>
              </SelectContent>
            </Select>
          )}
        />
        {errors.mealPrepFrequency && (
          <p className="text-red-500 text-sm">
            {errors.mealPrepFrequency.message as string}
          </p>
        )}
      </div>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>Preferred Proteins</Label>
          <div className="flex flex-wrap gap-4">
            {["Chicken", "Seafood", "Beef", "Other"].map((protein) => (
              <Controller
                key={protein}
                name={`preferredProteins.${protein.toLowerCase()}`}
                control={control}
                render={({ field }) => (
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id={protein.toLowerCase()}
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                    <Label htmlFor={protein.toLowerCase()}>{protein}</Label>
                  </div>
                )}
              />
            ))}
          </div>
        </div>

        <Controller
          name="preferredProteins.other"
          control={control}
          render={({ field }) => (
            <div className="space-y-2">
              {field.value && (
                <>
                  <Label htmlFor="otherProtein">Other Protein</Label>
                  <Input
                    id="otherProtein"
                    placeholder="Please specify other protein"
                    {...field}
                    value={field.value === true ? "" : field.value}
                    onChange={(e) => field.onChange(e.target.value)}
                  />
                </>
              )}
            </div>
          )}
        />

        <Controller
          name="preferredProteins.beef"
          control={control}
          render={({ field: beefField }) => (
            <Controller
              name="preferredProteins.beefMaxPerWeek"
              control={control}
              render={({ field }) => (
                <div className="space-y-2">
                  {beefField.value && (
                    <>
                      <Label htmlFor="beefMaxPerWeek">
                        Maximum Beef Meals Per Week
                      </Label>
                      <Input
                        id="beefMaxPerWeek"
                        type="number"
                        min="0"
                        max="7"
                        placeholder="Enter max beef meals per week"
                        {...field}
                        value={field.value || ""}
                        onChange={(e) =>
                          field.onChange(
                            e.target.value ? Number(e.target.value) : ""
                          )
                        }
                      />
                    </>
                  )}
                </div>
              )}
            />
          )}
        />
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

        <div className="space-y-2">
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

        <div className="space-y-2">
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

        <div className="space-y-2">
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
