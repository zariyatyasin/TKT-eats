import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  CalendarDays,
  ChefHat,
  Clock,
  MapPin,
  MessageCircle,
  Utensils,
} from "lucide-react";
import Image from "next/image";

export default function Component() {
  return (
    <div className="grid h-screen lg:grid-cols-[550px,1fr] pt-20">
      {/* Left Panel */}
      <div className="flex flex-col border-r bg-background p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <Badge variant="outline" className="text-sm">
            Booking #12345
          </Badge>
        </div>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>Booking Details</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <CalendarDays className="h-5 w-5 text-primary" />
                <span>Saturday, November 11, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-5 w-5 text-primary" />
                <span>7:00 PM - 10:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <span>1234 Gourmet Lane, Foodville, NY 12345</span>
              </div>
              <div className="flex items-center gap-2">
                <Utensils className="h-5 w-5 text-primary" />
                <span>4-course dinner for 6 people</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Item</TableHead>
                  <TableHead className="text-right">Qty</TableHead>
                  <TableHead className="text-right">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                <TableRow>
                  <TableCell>Mediterranean Mezze Platter</TableCell>
                  <TableCell className="text-right">6</TableCell>
                  <TableCell className="text-right">$60.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Greek Salad with Feta and Olives</TableCell>
                  <TableCell className="text-right">6</TableCell>
                  <TableCell className="text-right">$48.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Grilled Sea Bass with Lemon-Herb Sauce</TableCell>
                  <TableCell className="text-right">6</TableCell>
                  <TableCell className="text-right">$180.00</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell>Baklava with Honey and Pistachios</TableCell>
                  <TableCell className="text-right">6</TableCell>
                  <TableCell className="text-right">$42.00</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </CardContent>
        </Card>

        <Card className="mb-6">
          <CardHeader className="pb-2">
            <CardTitle>Pricing</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Chef&apos;s delivery fee(1 hours):</span>
                <span>$50.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Ingredients:</span>
                <span>$330.00</span>
              </div>
              <div className="flex justify-between text-sm">
                <span>Service Fee:</span>
                <span>$78.00</span>
              </div>
              <Separator />
              <div className="flex justify-between font-semibold">
                <span>Total:</span>
                <span>$858.00</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="mt-auto space-y-4 sticky bottom-0 bg-background pt-4">
          <div className="flex gap-4">
            <Button className="flex-1" variant="destructive">
              Decline Booking
            </Button>
            <Button className="flex-1">Accept Booking</Button>
          </div>
          <Button className="w-full" variant="secondary">
            <MessageCircle className="mr-2 h-4 w-4" />
            Message Client
          </Button>
        </div>
      </div>

      {/* Right Panel - Map */}
      <div className="relative">
        <img
          src="https://simonpan.com/wp-content/themes/sp_portfolio/assets/uber-challenge.jpg"
          alt="Map"
          className="h-full w-full object-cover"
          width={1920}
          height={1080}
        />
        <div className="absolute bottom-6 left-6 bg-background/90 p-4 rounded-lg backdrop-blur-sm">
          <div className="flex items-center gap-2 text-sm font-medium">
            <ChefHat className="h-5 w-5 text-primary" />
            <span>Your Estimated Arrival: 6:30 PM</span>
          </div>
        </div>
      </div>
    </div>
  );
}
