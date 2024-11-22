import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { ProfileSection } from "./_utils/profile";
import { BookingHistory } from "./_utils/booking-history";
import { getUser, getUserOrder } from "./_utils/action";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function CustomerBookingDetails() {
  const session = await getServerSession();
  if (!session) {
    redirect("/");
    return null;
  }

  let error = null;
  let bookings = [];

  try {
    const getUserInfor = await getUser(session?.user?.email);
    if (!getUserInfor || !getUserInfor._id) {
      throw new Error("Failed to fetch user information.");
    }

    const customerOrder = await getUserOrder(getUserInfor._id);

    if (
      !customerOrder ||
      customerOrder.message === "No orders found for this user ID"
    ) {
      error = "No bookings found.";
    } else if (customerOrder.data) {
      bookings = customerOrder.data;
    } else {
      throw new Error("Failed to fetch customer orders.");
    }
  } catch (err: any) {
    error = err.message || "An unexpected error occurred.";
  }

  return (
    <div className="max-w-7xl h-screen mx-auto py-8 mt-24">
      <h1 className="text-3xl font-bold mb-8">
        Hi, {session?.user?.name || "Guest"}
      </h1>
      <div className="grid gap-8 md:grid-cols-1">
        <ProfileSection
          name={session?.user?.name || "Guest"}
          email={session?.user?.email || "No email provided"}
          avatarUrl={
            session?.user?.image || "/placeholder.svg?height=80&width=80"
          }
        />
        {error ? (
          <div className="text-center py-8">
            <h2 className="text-2xl font-semibold mb-4">{error}</h2>
            <Button asChild>
              <Link href="/findchef">Book Chef Now</Link>
            </Button>
          </div>
        ) : bookings.length > 0 ? (
          <BookingHistory bookings={bookings} />
        ) : (
          <div>No bookings found.</div>
        )}
      </div>
    </div>
  );
}
