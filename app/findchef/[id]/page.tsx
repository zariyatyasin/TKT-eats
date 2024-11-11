"use client";

import { useEffect, useState } from "react";
import React from "react";
import { ChefProfile } from "../_utils/chef-profile";
import { Menu } from "../_utils/menu-list";
import { BookingSummary } from "../_utils/booking-summary";
import { BookingDetails } from "../_utils/booking-confirm";
import { useToast } from "@/components/ui/use-toast";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { usePathname } from "next/navigation";

import { Skeleton } from "@/components/ui/skeleton";
import KnowTheChef from "../_utils/know-the-chef";
import {
  createOrder,
  GetSingleChef,
  LivePromocode,
  sendemail,
} from "../_utils/action";
import { useRouter } from "next/navigation";
import Reviews from "../_utils/review";
import CustomMenuForm from "../_utils/custom-menu-submission";
import DietaryRestrictionCom from "../_utils/dietary";

interface MenuItem {
  id: string;
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
  promocode?: string;
}

interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
}

export default function Page({
  searchParams,
  params,
}: {
  searchParams: any;
  params: any;
}) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<SelectedItem[]>([]);
  const [chefData, setChefData] = useState<any>(null);
  const pathname = usePathname();
  const [menu, setMenu] = useState<MenuItem[]>([]);
  const [review, setReview] = useState<Review[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("menu");
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [discountInfo, setDiscountInfo] = useState<{
    type: string | null;
    value: number;
  }>({ type: null, value: 0 });
  const [isPromoLoading, setIsPromoLoading] = useState(false);

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

  const handleBookingSubmit = async (details: BookingDetails) => {
    if (selectedItems.length === 0) {
      toast({
        title: "Booking Error",
        description: "Please select at least one item before booking.",
      });
      return;
    }

    setIsSubmitting(true);

    const requestData = {
      name: details.name,
      address: details.address,
      phone: details.phone,
      email: details.email,
      date: details.date,
      time: details.time,
      items: selectedItems,
      notes: details.notes,
      promocode: details.promocode,
      chefName: chefData.name,
      chefId: chefData._id,
    };

    try {
      const emailData = {
        to: "tkteats@gmail.com",
        subject: "New Booking Confirmed",
        text: `You have a new booking from ${details.name}.`,
        html: `
          <h1>New Booking Confirmed</h1>
          <p>You have a new booking from <strong>${details.name}</strong>.</p>
          <p><strong>Booking Details:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${details.name}</li>
            <li><strong>Address:</strong> ${details.address}</li>
            <li><strong>Phone:</strong> ${details.phone}</li>
            <li><strong>Email:</strong> ${details.email}</li>
            <li><strong>Date:</strong> ${details.date}</li>
            <li><strong>Time:</strong> ${details.time}</li>
            <li><strong>Notes:</strong> ${details.notes || "N/A"}</li>
            <li><strong>originalTotalCost:</strong> ${
              originalTotalCost || "N/A"
            }</li>
            <li><strong>The discount price:</strong> ${
              discountedTotalCost || "N/A"
            }</li>
            <li><strong>Marvin need to pay:</strong> ${
              originalTotalCost - discountedTotalCost || "N/A"
            }</li>
          </ul>
          <p><strong>Selected Items:</strong></p>
          <ul>
            ${selectedItems
              .map(
                (item) => `
              <li>${item.name} - ${item.quantity} x $${item.price}</li>
            `
              )
              .join("")}
          </ul>
          <p><strong>Total Cost:</strong> $${totalCost}</p>
        `,
      };
      await sendemail(emailData);
      const res = await createOrder(requestData);

      if (res.success === false) {
        throw new Error(res.message);
      }

      toast({
        title: "Booking Confirmed",
        description: "The chef has been successfully booked.",
      });
      router.push("/booking-confirm/" + res?.data?._id);
    } catch (error: any) {
      console.error("Booking submission failed:", error);
      toast({
        title: "Booking Error",
        description: `Error creating order: ${
          error.message || "Something went wrong."
        }`,
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const totalCost =
    selectedItems.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    ) - discount;

  const originalTotalCost = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  const discountedTotalCost = originalTotalCost - discount;

  const handlePromoCodeChange = async (code: string) => {
    setPromoCode(code);
    setIsPromoLoading(true);

    if (code) {
      const result = await LivePromocode(code, chefData._id);

      if (result.success) {
        const { discountType, discountValue } = result.data;
        setDiscountInfo({ type: discountType, value: discountValue });

        if (discountType === "percentage") {
          setDiscount((originalTotalCost * discountValue) / 100);
        } else if (discountType === "fixed") {
          setDiscount(discountValue);
        }
        setPromoError(null);
      } else {
        setDiscount(0);
        setPromoError(result.message);
        setDiscountInfo({ type: null, value: 0 });
      }
    } else {
      setDiscount(0);
      setPromoError(null);
      setDiscountInfo({ type: null, value: 0 });
    }
    setIsPromoLoading(false);
  };

  useEffect(() => {
    if (promoCode) {
      handlePromoCodeChange(promoCode);
    }
  }, [selectedItems]);

  const fetchChef = async () => {
    try {
      if (params?.id) {
        const result = await GetSingleChef(params?.id);

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
      <div className="relative grid md:grid-cols-12 gap-12 md:gap-16 max-w-6xl mx-auto justify-between">
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
          <div className=" ">
            <Tabs
              defaultValue="menu"
              className=" mt-5   "
              onValueChange={(value) => setActiveTab(value)}
            >
              <TabsList className=" flex justify-start overflow-x-auto max-w-[440px] ">
                <TabsTrigger value="menu">Menu</TabsTrigger>
                <TabsTrigger value="reviews">Reviews</TabsTrigger>
                <TabsTrigger value="custom">Custom Menu</TabsTrigger>
              </TabsList>
              <TabsContent value="menu">
                <h2 className="text-xl py-6 font-bold">Menu</h2>
                {/* <DietaryRestrictionCom /> */}
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
                  <>
                    {" "}
                    <Menu
                      menu={menu}
                      selectedItems={selectedItems}
                      handleAddToBooking={handleAddToBooking}
                    />
                  </>
                )}
              </TabsContent>
              <TabsContent value="reviews">
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
              </TabsContent>
              <TabsContent value="custom">
                {chefData ? (
                  <CustomMenuForm
                    chefName={chefData?.name}
                    chefId={chefData?._id}
                  />
                ) : (
                  <div>Loading...</div>
                )}
              </TabsContent>
            </Tabs>

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
        {activeTab !== "custom" && (
          <div className="col-span-1 lg:sticky top-20 md:col-span-5 flex flex-col gap-6">
            <BookingSummary
              selectedItems={selectedItems}
              originalTotalCost={originalTotalCost}
              discountedTotalCost={discountedTotalCost}
              totalCost={totalCost}
              //@ts-ignore
              discountInfo={discountInfo}
              //@ts-ignore
              handleRemoveFromBooking={handleRemoveFromBooking}
            />
            <BookingDetails
              promoError={promoError || ""}
              onSubmit={handleBookingSubmit}
              isPromoLoading={isPromoLoading}
              isSubmitting={isSubmitting}
              onPromoCodeChange={handlePromoCodeChange}
              //@ts-ignore
              discountInfo={discountInfo}
            />
          </div>
        )}
      </div>
    </div>
  );
}
