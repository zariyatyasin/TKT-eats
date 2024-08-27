"use client";

import { useEffect, useState } from "react";
import React from "react";
import { ChefProfile } from "../_utils/chef-profile";
import { Menu } from "../_utils/menu-list";
import { BookingSummary } from "../_utils/booking-summary";
import { BookingDetails } from "../_utils/booking-confirm";
import { useToast } from "@/components/ui/use-toast";

import { Skeleton } from "@/components/ui/skeleton";
import KnowTheChef from "../_utils/know-the-chef";
import { createOrder, GetSingleChef } from "../_utils/action";
import { useRouter } from "next/navigation";
import Reviews from "../_utils/review";
// MenuItem interface now includes ingredients
interface MenuItem {
  id: string; // Ensure 'id' is of type 'string'
  name: string;
  description: string;
  price: number;
  ingredients: string[];
  menuImage: string;
}

interface SelectedItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface BookingDetails {
  name: string;
  address: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  notes?: string;
}
interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
}

export default function Page({ searchParams }: { searchParams: any }) {
  const [isLoading, setIsLoading] = useState(true); // Loading state
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [chefData, setChefData] = useState<any>(null);

  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [review, setReview] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };
  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleAddToBooking = (item: MenuItem, quantity: number) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        const updatedQuantity = existingItem.quantity + quantity;
        if (updatedQuantity <= 0) {
          return prevItems.filter((i) => i.id !== item.id);
        } else {
          return prevItems.map((i) =>
            i.id === item.id ? { ...i, quantity: updatedQuantity } : i
          );
        }
      } else {
        return quantity > 0 ? [...prevItems, { ...item, quantity }] : prevItems;
      }
    });
  };

  const handleRemoveFromBooking = (item: MenuItem) => {
    setSelectedItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  const totalCost = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const handleBookingSubmit = async (details: BookingDetails) => {
    if (selectedItems.length === 0) {
      toast({
        title: "Booking Error",
        description: "Please select at least one item before booking.",
      });
      return;
    }

    setIsSubmitting(true); // Start loading

    const requestData = {
      name: details.name,
      address: details.address,
      phone: details.phone,
      email: details.email,
      date: details.date,
      time: details.time,
      items: selectedItems,
      notes: details.notes,
      totalCost,
      chefName: chefData.name,
      chefId: chefData._id,
    };

    try {
      const res = await createOrder(requestData);

      if (res.success === false) {
        throw new Error(res.message);
      }

      toast({
        title: "Booking Confirmed",
        description: "The chef has been successfully booked.",
      });
      router.push("/booking-confirm/" + res?.data?._id); // Redirect to success page
    } catch (error: any) {
      console.error("Booking submission failed:", error);
      toast({
        title: "Booking Error",
        description: `Error creating order: ${
          error.message || "Something went wrong."
        }`,
      });
    } finally {
      setIsSubmitting(false); // End loading
    }
  };

  const fetchChef = async () => {
    try {
      if (searchParams?._id) {
        const result = await GetSingleChef(searchParams?._id);

        setChefData(result.chef);
        setReview(result.allreviews);
        setMenu(
          result.menus.map((menu: any) => ({
            id: menu._id,
            name: menu.name,
            description: menu.description,
            price: menu.price,
            ingredients: menu.ingredients,
            menuImage: menu.menuImage,
          }))
        );
      }
    } catch (error) {
      setError("Failed to load chef data. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchChef();
  }, []);

  return (
    <div className="container py-28">
      <div className="relative   grid md:grid-cols-12 gap-12 md:gap-16 max-w-6xl mx-auto justify-between">
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
          <div className="">
            {isLoading ? (
              <div className="flex md:flex-row items-center space-x-4 flex-col space-y-4 d">
                <Skeleton className="h-[150px] w-[150px] rounded-md" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            ) : (
              <ChefProfile chef={chefData} />
            )}
          </div>
          <div className="grid gap-4">
            <h2 className="text-xl font-bold">Menu</h2>
            {isLoading ? (
              <div className=" space-y-4">
                <div className="flex md:flex-row items-center space-x-4 flex-col space-y-4  ">
                  <Skeleton className="h-[150px] w-[150px] rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <div className="flex md:flex-row items-center space-x-4 flex-col space-y-4  ">
                  <Skeleton className="h-[150px] w-[150px] rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <div className="flex md:flex-row items-center space-x-4 flex-col space-y-4  ">
                  <Skeleton className="h-[150px] w-[150px] rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
                <div className="flex md:flex-row items-center space-x-4 flex-col space-y-4  ">
                  <Skeleton className="h-[150px] w-[150px] rounded-md" />
                  <div className="space-y-2">
                    <Skeleton className="h-4 w-[250px]" />
                    <Skeleton className="h-4 w-[200px]" />
                  </div>
                </div>
              </div>
            ) : menu.length === 0 ? (
              <div>No items</div>
            ) : (
              <Menu
                menu={menu}
                selectedItems={selectedItems}
                handleAddToBooking={handleAddToBooking}
              />
            )}

            {/* Image Gallery */}
            {chefData && (
              <KnowTheChef
                experience={chefData.experience}
                location={chefData.location}
                description={chefData.description}
                images={chefData.images.map((img: any) => img.url)}
                onImageClick={handleImageClick}
                isModalOpen={isModalOpen}
                selectedImage={selectedImage}
                onModalClose={handleModalClose}
              />
            )}
          </div>
        </div>
        <div className="col-span-1  lg:sticky top-20  md:col-span-5 flex flex-col gap-6">
          <BookingSummary
            selectedItems={selectedItems}
            totalCost={totalCost}
            // @ts-ignore
            handleRemoveFromBooking={handleRemoveFromBooking}
          />
          <BookingDetails
            onSubmit={handleBookingSubmit}
            isSubmitting={isSubmitting}
          />
        </div>
        {isLoading ? (
          <div className="flex md:flex-row items-center space-x-4 flex-col space-y-4  ">
            <Skeleton className="h-[150px] w-[150px] rounded-md" />
            <div className="space-y-2">
              <Skeleton className="h-4 w-[250px]" />
              <Skeleton className="h-4 w-[200px]" />
            </div>
          </div>
        ) : (
          <Reviews review={review} />
        )}
      </div>
    </div>
  );
}
