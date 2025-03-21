"use client";

import React from "react";
import { useToast } from "@/components/ui/use-toast";
import { MenuTypeSelection } from "@/components/custom-menu-item/MenuTypeSelection";
import { DietaryRequestForm } from "@/components/custom-menu-item/DietaryRequestForm";
import { MealPrepForm } from "@/components/custom-menu-item/MealPrepForm";
import { CustomMenuForm } from "@/components/custom-menu-item/CustomMenuForm";
import { customMenu, sendemail } from "@/app/findchef/_utils/action"; // Import the customMenu function
import { Skeleton } from "@/components/ui/skeleton"; // Import the Skeleton component

type MenuType = "dietary" | "mealprep" | "custom" | "";

export default function CustomMenuPage({
  chefName,
  chefId,
}: {
  chefName: string;
  chefId: string;
}) {
  const [selectedType, setSelectedType] = React.useState<MenuType>("");
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const { toast } = useToast();

  const handleSubmit = async (data: any) => {
    console.log("this is data", data);

    setIsLoading(true);
    data.chefId = chefId;
    data.chefName = chefName;
    try {
      const emailData = {
        to: "tkteats@gmail.com",
        subject: "New custom booking ",
        text: `You have a new custom booking from ${data.name}.`,
        html: `
        <h1>New Booking Confirmed</h1>
        <p>You have a new booking from <strong>${data.name}</strong>.</p>
        <p><strong>Booking Details:</strong></p>
        <ul>
          <li><strong>Name:</strong> ${data.name}</li>
          <li><strong>Address:</strong> ${data.address}</li>
          <li><strong>Phone:</strong> ${data.phone}</li>
          <li><strong>Email:</strong> ${data.email || "N/A"}</li>
          <li><strong>Request Type:</strong> ${data.requestType || "N/A"}</li>
          <li><strong>Meal Type:</strong> ${
            Array.isArray(data.mealType) ? data.mealType.join(", ") : "N/A"
          }</li>
          <li><strong>Booking Date:</strong> ${data.bookingDate}</li>
          <li><strong>Booking Time:</strong> ${data.bookingTime}</li>
          <li><strong>Additional Notes:</strong> ${
            data.additionalNotes || "N/A"
          }</li>
          
          <li><strong>Preparation Preferences:</strong> ${
            data.preparationPreferences || "N/A"
          }</li>
          <li><strong>Food Style:</strong> ${data.foodStyle || "N/A"}</li>
          <li><strong>Allergies:</strong> ${data.allergies || "N/A"}</li>
          <li><strong>Preferred Ingredients:</strong> ${
            data.preferredIngredients || "N/A"
          }</li>
          <li><strong>Meals Per Week:</strong> ${
            data.mealsPerWeek || "N/A"
          }</li>
          <li><strong>Servings Per Meal:</strong> ${
            data.servingsPerMeal || "N/A"
          }</li>
          <li><strong>Meal Prep Frequency:</strong> ${
            data.mealPrepFrequency || "N/A"
          }</li>
          <li><strong>Cuisine Type:</strong> ${data.cuisineType || "N/A"}</li>
          <li><strong>Menu Theme:</strong> ${data.menuTheme || "N/A"}</li>
          <li><strong>Budget:</strong> $${data.budget || "N/A"}</li>
          <li><strong>Guest Count:</strong> ${data.guestCount || "N/A"}</li>
          <li><strong>Chef Name:</strong> ${data.chefName || "N/A"}</li>
          
      <li><strong>Beef Max Per Week:</strong> ${
        data.preferredProteins?.beefMaxPerWeek || "N/A"
      }</li>
      <li><strong>Other Proteins:</strong> ${
        data.preferredProteins?.other || "N/A"
      }</li>
      <li><strong>Reheating Method:</strong> ${
        data.reheatingMethod || "N/A"
      }</li>
      <li><strong>Breakfast:</strong> ${data.breakfast ? "Yes" : "No"}</li>
      <li><strong>Lunch:</strong> ${data.lunch ? "Yes" : "No"}</li>
      <li><strong>Dinner:</strong> ${data.dinner ? "Yes" : "No"}</li>
        </ul>
      `,
      };

      await sendemail(emailData);

      const result = await customMenu(data);

      if (result.success) {
        toast({
          title: "Success",
          description:
            "Your custom menu request has been submitted successfully.",
        });
        // Reset form or redirect user as needed
        setSelectedType(""); // Clear the form by resetting the selected type
      } else {
        throw new Error(result.message);
      }
    } catch (error: any) {
      console.log(error);

      toast({
        title: "Error",
        description: "Failed to submit your request. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto ">
      <h1 className="text-3xl font-bold mb-6">Custom Menu Request</h1>

      <MenuTypeSelection
        selectedType={selectedType}
        setSelectedType={setSelectedType}
      />

      {isLoading ? (
        <div className="space-y-4">
          <Skeleton className="h-8 w-1/2" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-full" />
          <Skeleton className="h-8 w-1/3" />
        </div>
      ) : (
        <>
          {selectedType === "dietary" && (
            <DietaryRequestForm onSubmit={handleSubmit} />
          )}
          {selectedType === "mealprep" && (
            <MealPrepForm onSubmit={handleSubmit} />
          )}
          {selectedType === "custom" && (
            <CustomMenuForm onSubmit={handleSubmit} />
          )}
        </>
      )}
    </div>
  );
}
