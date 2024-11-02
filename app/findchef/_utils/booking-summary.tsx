import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { TrashIcon } from "lucide-react";

interface SelectedItem {
  id: string;
  name: string;
  description: string;
  price: number;
  quantity: number;
}

interface DiscountInfo {
  type: string; // "percentage" or "fixed"
  value: number;
}

interface BookingSummaryProps {
  selectedItems: SelectedItem[];
  originalTotalCost: number;
  discountedTotalCost: number;
  handleRemoveFromBooking: (item: SelectedItem) => void;
  discountInfo?: DiscountInfo; // Add discountInfo as an optional prop
}

export function BookingSummary({
  selectedItems,
  originalTotalCost,
  discountedTotalCost,
  handleRemoveFromBooking,
  discountInfo,
}: BookingSummaryProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Booking Summary</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex items-center justify-between">
            <span>Item</span>
            <span className="font-bold">{selectedItems.length}</span>
          </div>
          <div className="grid gap-4">
            {selectedItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-[1fr_auto] items-center gap-4"
              >
                <div className="grid gap-1">
                  <p className="font-medium">{item.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {item.quantity} x ${item.price.toFixed(2)}
                  </p>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => handleRemoveFromBooking(item)}
                  className="text-muted-foreground hover:text-destructive"
                >
                  <TrashIcon className="h-4 w-4" />
                  <span className="sr-only">Delete {item.name}</span>
                </Button>
              </div>
            ))}
          </div>
        </div>
        <Separator />
        {discountInfo && discountInfo.value > 0 && (
          <div className="flex items-center justify-between">
            <span>Discount</span>
            <span className="font-bold text-green-600">
              {discountInfo.type === "percentage"
                ? `${discountInfo.value}%`
                : `$${discountInfo.value.toFixed(2)}`}
            </span>
          </div>
        )}
        <div className="flex items-center justify-between">
          <span>Total Cost</span>
          <span className="font-bold">
            {discountInfo && discountInfo.value ? (
              <>
                <span className="line-through text-sm text-gray-600">
                  ${originalTotalCost.toFixed(1)}
                </span>{" "}
                <span>${discountedTotalCost.toFixed(1)}</span>
              </>
            ) : (
              <span>${originalTotalCost.toFixed(1)}</span>
            )}
          </span>
        </div>
      </CardContent>
    </Card>
  );
}
