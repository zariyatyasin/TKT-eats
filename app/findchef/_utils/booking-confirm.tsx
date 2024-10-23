import React from "react";
import { useForm, Controller } from "react-hook-form";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea"; // Assuming you have a Textarea component
import { Button } from "@/components/ui/button";

import { CircleDashedIcon } from "lucide-react";

interface BookingDetailsForm {
  name: string;
  address: string;
  phone: string;
  email: string;
  date: string;
  time: string;
  notes?: string;
  promocode?: string;
}

interface BookingDetailsProps {
  onSubmit: (data: BookingDetailsForm) => void;
  isSubmitting: boolean;
}

export function BookingDetails({
  onSubmit,
  isSubmitting,
}: BookingDetailsProps) {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookingDetailsForm>();

  const handleBookingSubmit = (data: BookingDetailsForm) => {
    onSubmit(data);
  };

  return (
    <Card className="   top-20">
      <CardHeader>
        <CardTitle>Booking Details</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <form
          onSubmit={handleSubmit(handleBookingSubmit)}
          className="grid gap-4"
        >
          <div className="grid gap-2">
            <Label htmlFor="name">Name</Label>
            <Controller
              name="name"
              control={control}
              rules={{ required: "name is required" }}
              render={({ field }) => <Input id="name" {...field} />}
            />
            {errors.name && (
              <span className="text-red-500 text-sm">
                {errors.name.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="address">Address</Label>
            <Controller
              name="address"
              control={control}
              render={({ field }) => <Input id="address" {...field} />}
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone</Label>
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone is required" }}
              render={({ field }) => <Input id="phone" {...field} />}
            />
            {errors.phone && (
              <span className="text-red-500 text-sm">
                {errors.phone.message}
              </span>
            )}
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Controller
              name="email"
              control={control}
              rules={{
                required: "Email is required",
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Invalid email address",
                },
              }}
              render={({ field }) => (
                <Input id="email" type="email" {...field} />
              )}
            />

            {errors.email && (
              <span className="text-red-500 text-sm">
                {errors.email.message}
              </span>
            )}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="grid gap-2">
              <Label htmlFor="date">Date</Label>
              <Controller
                name="date"
                control={control}
                rules={{ required: "Date is required" }}
                render={({ field }) => (
                  <Input id="date" type="date" {...field} />
                )}
              />
              {errors.date && (
                <span className="text-red-500 text-sm">
                  {errors.date.message}
                </span>
              )}
            </div>
            <div className="grid gap-2">
              <Label htmlFor="time">Time</Label>
              <Controller
                name="time"
                control={control}
                rules={{ required: "Time is required" }}
                render={({ field }) => (
                  <Input id="time" type="time" {...field} />
                )}
              />
              {errors.time && (
                <span className="text-red-500 text-sm">
                  {errors.time.message}
                </span>
              )}
            </div>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="notes">Notes</Label>
            <Controller
              name="notes"
              control={control}
              render={({ field }) => (
                <Textarea
                  id="notes"
                  {...field}
                  placeholder="Add any special requests or notes here..."
                />
              )}
            />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="promocode">Promo code</Label>
            <Controller
              name="promocode"
              control={control}
              render={({ field }) => <Input id="promocode" {...field} />}
            />
          </div>
          <div className=" z-50  p-2 flex items-center  md:hidden   fixed bottom-0 left-0 w-full bg-white   justify-between  l   border-y-2  border-gray-200 border-2">
            <Button
              disabled={isSubmitting}
              size={"sm"}
              className=" w-full md:hidden "
              type="submit"
            >
              {isSubmitting ? (
                <div className="flex items-center">
                  <CircleDashedIcon className="mr-2 h-4 w-4 animate-spin" />
                  <p> Please wait</p>
                </div>
              ) : (
                " Book Now"
              )}
            </Button>
          </div>

          <Button
            disabled={isSubmitting}
            className="w-full hidden md:flex mt-4"
            type="submit"
          >
            {isSubmitting ? (
              <div className="flex items-center">
                <CircleDashedIcon className="mr-2 h-4 w-4 animate-spin" />
                <p> Please wait</p>
              </div>
            ) : (
              " Book Now"
            )}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
