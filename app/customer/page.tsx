import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import { ProfileSection } from "./_utils/profile";
import { BookingHistory } from "./_utils/booking-history";

// Mock data (replace with actual data fetching in a real application)
const customerData = {
  name: "John Doe",
  email: "john.doe@example.com",
  avatarUrl: "/placeholder.svg?height=80&width=80",
  bookings: [
    { id: "1", date: "2023-05-15", service: "Haircut", status: "Completed" },
    { id: "2", date: "2023-06-02", service: "Massage", status: "Upcoming" },
    { id: "3", date: "2023-04-20", service: "Manicure", status: "Cancelled" },
  ],
};

export default async function CustomerBookingDetails() {
  const session = await getServerSession();
  console.log(session?.user?.name);

  if (!session) {
    redirect("/");
  }

  return (
    <div className="max-w-7xl mx-auto py-8 mt-24">
      <h1 className="text-3xl font-bold mb-8">
        Hi,{session?.user?.name || "Guest"}
      </h1>
      <div className="grid gap-8 md:grid-cols-2">
        <ProfileSection
          name={session?.user?.name || "Guest"}
          email={session?.user?.email || "No email provided"}
          avatarUrl={
            session?.user?.image || "/placeholder.svg?height=80&width=80"
          }
        />
        <BookingHistory bookings={customerData.bookings} />
      </div>
    </div>
  );
}
