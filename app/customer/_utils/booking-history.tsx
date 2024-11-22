"use client";

import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useMediaQuery } from "./user-media";

interface Booking {
  _id: string;
  date: string;
  time: string;
  totalCost: number;
  chefName: string;
}

interface BookingHistoryProps {
  bookings: Booking[];
}

export function BookingHistory({ bookings }: BookingHistoryProps) {
  const [isMounted, setIsMounted] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Booking History</CardTitle>
      </CardHeader>
      <CardContent>
        {isDesktop ? (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Date</TableHead>
                <TableHead>Time</TableHead>
                <TableHead>Chef Name</TableHead>
                <TableHead>Total Cost</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking) => (
                <TableRow key={booking._id}>
                  <TableCell>
                    {new Date(booking.date).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{booking.time}</TableCell>
                  <TableCell>{booking.chefName}</TableCell>
                  <TableCell>${booking.totalCost.toFixed(2)}</TableCell>
                  <TableCell>
                    <Link href={`/booking-confirm/${booking._id}`}>
                      <Button size="sm">View Details</Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <div className="space-y-4">
            {bookings.map((booking) => (
              <Card key={booking._id}>
                <CardContent className="p-4">
                  <div className="grid grid-cols-2 gap-2">
                    <div className="text-sm font-medium">Date:</div>
                    <div>{new Date(booking.date).toLocaleDateString()}</div>
                    <div className="text-sm font-medium">Time:</div>
                    <div>{booking.time}</div>
                    <div className="text-sm font-medium">Chef Name:</div>
                    <div>{booking.chefName}</div>
                    <div className="text-sm font-medium">Total Cost:</div>
                    <div>${booking.totalCost.toFixed(2)}</div>
                  </div>
                  <div className="mt-4">
                    <Link href={`/booking-confirm/${booking._id}`}>
                      <Button size="sm" className="w-full">
                        View Details
                      </Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
