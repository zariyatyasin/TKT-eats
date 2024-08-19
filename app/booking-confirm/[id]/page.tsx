import { GetorderDetails } from "@/app/findchef/_utils/action";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";
import Link from "next/link";

export default async function Page({ params }: { params: any }) {
  const result = await GetorderDetails(params?.id);
  if (!result?.data) {
    return (
      <div className="text-center text-xl text-red-500 mt-10">
        No Data Found!
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen text-gray-950 flex flex-col  py-16 items-center justify-center">
      <div className="w-full max-w-3xl mx-auto rounded-xl overflow-hidden">
        <div className="p-8 flex flex-col items-start justify-center gap-4">
          <Link href="/" className="w-full  flex items-center gap-2">
            <Home className="h-4 w-4" /> <div className="text-sm">Home</div>
          </Link>
          <div className="text-gray-950 text-4xl font-bold">
            Booking Confirmed
          </div>
          <p className="text-gray-950 text-lg">
            Your booking with Chef {result?.data.chefName} has been successfully
            confirmed.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
              <div className="text-gray-950 font-bold">Chef</div>
              <div className="text-gray-950 text-2xl font-bold">
                {result?.data.chefName}
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-4 flex flex-col gap-2">
              <div className="text-gray-950 font-bold">Date &amp; Time</div>
              <div className="text-gray-950 text-2xl font-bold">
                {new Date(result?.data.date).toLocaleDateString()} -{" "}
                {result?.data.time}
              </div>
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 w-full">
            <div className="text-gray-950 font-bold">Items Booked</div>
            <div className="text-gray-950 text-lg">
              {result?.data.items.map((item: any, index: number) => (
                <div key={index}>
                  - {item.name} (Quantity: {item.quantity})
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 w-full">
            <div className="text-gray-950 font-bold">Total Price</div>
            <div className="text-gray-950 text-lg">
              ${result?.data.totalCost.toFixed(2)}
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 w-full">
            <div className="text-gray-950 font-bold">Special Requests</div>
            <div className="text-gray-950 text-lg">
              {result?.data.notes || "None"}
            </div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4 w-full">
            <div className="text-gray-950 font-bold">Need Help?</div>
            <div className="text-gray-950 text-lg">
              Call our support line at +1 (509) 992-8838
            </div>
          </div>
          <Link href="/" className="w-full">
            <Button
              variant="outline"
              className="w-full text-gray-950 hover:bg-white hover:text-[#00b894]"
            >
              Go Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
