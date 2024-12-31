"use client";

import { useState, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import {
  createOrder,
  GetSingleChef,
  LivePromocode,
  sendemail,
} from "../_utils/action";
import { ChefProfile } from "./chef-profile";
import Menu from "./menu-list";
import Reviews from "./review";
import KnowTheChef from "./know-the-chef";
import { BookingSummary } from "./booking-summary";
import { BookingDetails } from "./booking-confirm";
import CustomMenuForm from "./custom-menu-submission";
import DietaryPreferences from "./dietary";
import { getServerSession } from "next-auth";
import { getUser } from "@/app/customer/_utils/action";
import { useSession } from "next-auth/react";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import PaymentForm from "./payment-form";
import { Loader2 } from "lucide-react";
import { useUserDrawer } from "@/components/header/utils/userDrawerLogin";
interface ChefBookingProps {
  initialChefData: any;
  initialReviews: any[];
  initialMenu: any[];
}
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!
);

export default function ChefBooking({
  initialChefData,
  initialReviews,
  initialMenu,
}: ChefBookingProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [selectedItems, setSelectedItems] = useState<any[]>([]);
  const [chefData, setChefData] = useState<any>(initialChefData);
  const [menu, setMenu] = useState<any[]>(initialMenu);
  const [review, setReview] = useState<any[]>(initialReviews);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeTab, setActiveTab] = useState("menu");
  const [promoCode, setPromoCode] = useState<string>("");
  const [discount, setDiscount] = useState<number>(0);
  const [promoError, setPromoError] = useState<string | null>(null);
  const [dietaryFilters, setDietaryFilters] = useState<string[]>([]);
  const { data: session, status } = useSession();
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [bookingDetails, setBookingDetails] = useState<any>(null);
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [isStripeLoading, setIsStripeLoading] = useState(false);
  const { openDrawer } = useUserDrawer();

  const [userId, setUserId] = useState<string | null>(null);

  useEffect(() => {
    const fetchUserDetails = async () => {
      if (session?.user?.email) {
        try {
          const getUserInfor = await getUser(session.user.email);
          console.log("this is user info", getUserInfor);
          setUserId(getUserInfor?._id);
        } catch (error) {
          console.error("Failed to fetch user details:", error);
        }
      }
    };

    fetchUserDetails();
  }, [session]);
  const createPaymentIntent = async (amount: number, bookingDetails: any) => {
    const amountInCents = Math.max(Math.round(amount * 100), 50);

    try {
      const response = await fetch("/api/create-payment-intent", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          amount: amountInCents,
          bookingDate: bookingDetails.date,
          customerDetails: {
            name: bookingDetails.name,
            email: bookingDetails.email,
            phone: bookingDetails.phone,
            address: bookingDetails.address,
            userId: userId,
          },
          capture_method: "manual",
          schedule_capture: true, // Add this to indicate scheduled capture
        }),
      });
      const data = await response.json();
      return data.clientSecret;
    } catch (error) {
      console.error("Error creating payment intent:", error);
      throw error;
    }
  };
  const [discountInfo, setDiscountInfo] = useState<{
    type: string | null;
    value: number;
  }>({ type: null, value: 0 });
  const [isPromoLoading, setIsPromoLoading] = useState(false);

  const { toast } = useToast();
  const router = useRouter();

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleAddToBooking = (item: any, quantity: number) => {
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

  const handleRemoveFromBooking = (item: any) => {
    setSelectedItems((prevItems) => prevItems.filter((i) => i.id !== item.id));
  };

  console.log(initialMenu);
  const handleBookingSubmit = async (details: any) => {
    if (!session) {
      openDrawer();
      return;
    }
    if (selectedItems.length === 0) {
      toast({
        title: "Booking Error",
        description: "Please select at least one item before booking.",
      });
      return;
    }

    setBookingDetails(details);
    setIsStripeLoading(true);
    try {
      const secret = await createPaymentIntent(totalCost, details);
      setClientSecret(secret);
      setIsPaymentModalOpen(true);
    } catch (error) {
      toast({
        title: "Payment Error",
        description: "Unable to initiate payment. Please try again.",
      });
    } finally {
      setIsStripeLoading(false);
    }
  };
  const handlePaymentSuccess = async () => {
    setIsSubmitting(true);

    try {
      // First create the order
      const requestData = {
        name: bookingDetails.name,
        address: bookingDetails.address,
        phone: bookingDetails.phone,
        email: bookingDetails.email,
        date: bookingDetails.date,
        time: bookingDetails.time,
        items: selectedItems,
        notes: bookingDetails.notes,
        promocode: bookingDetails.promocode,
        chefName: chefData.name,
        userId: userId && userId,
        chefId: chefData._id,
        paymentStatus: "authorized", // Add this to track payment status
      };

      // Send email notification
      const emailData = {
        to: "tkteats@gmail.com",
        subject: "New Booking Confirmed",
        text: `You have a new booking from ${bookingDetails.name}.`,
        html: `
          <h1>New Booking Confirmed</h1>
          <p>You have a new booking from <strong>${
            bookingDetails.name
          }</strong>.</p>
          <p><strong>Booking bookingDetails:</strong></p>
          <ul>
            <li><strong>Name:</strong> ${bookingDetails.name}</li>
            <li><strong>Address:</strong> ${bookingDetails.address}</li>
            <li><strong>Phone:</strong> ${bookingDetails.phone}</li>
            <li><strong>Email:</strong> ${bookingDetails.email}</li>
            <li><strong>Date:</strong> ${bookingDetails.date}</li>
            <li><strong>Time:</strong> ${bookingDetails.time}</li>
            <li><strong>Notes:</strong> ${bookingDetails.notes || "N/A"}</li>
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
          <p><strong>Payment Status:</strong> Authorized (Pending Capture)</p>
        `,
      };

      await sendemail(emailData);
      const res = await createOrder(requestData);

      if (res.success === false) {
        throw new Error(res.message);
      }

      toast({
        title: "Booking Confirmed",
        description:
          "Your booking is confirmed and payment has been authorized.",
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
      setIsPaymentModalOpen(false);
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

  return (
    <div className="container py-28">
      <div className="relative grid md:grid-cols-12 gap-12 md:gap-16 max-w-6xl mx-auto justify-between">
        <div className="col-span-1 md:col-span-7 flex flex-col gap-6">
          <div className="">
            <ChefProfile chef={chefData} />
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

                <DietaryPreferences
                  activeFilters={dietaryFilters}
                  setActiveFilters={setDietaryFilters}
                />

                <Menu
                  menu={menu}
                  selectedItems={selectedItems}
                  handleAddToBooking={handleAddToBooking}
                  dietaryFilters={dietaryFilters}
                  setDietaryFilters={setDietaryFilters}
                />
              </TabsContent>
              <TabsContent value="reviews">
                <Reviews review={review} />
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
      {isStripeLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
            <p className="text-lg font-semibold">Preparing payment...</p>
          </div>
        </div>
      )}
      {isPaymentModalOpen && clientSecret && (
        <Elements stripe={stripePromise} options={{ clientSecret }}>
          <PaymentForm
            amount={totalCost}
            onSuccess={handlePaymentSuccess}
            onCancel={() => setIsPaymentModalOpen(false)}
          />
        </Elements>
      )}
    </div>
  );
}
