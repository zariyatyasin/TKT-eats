import Landing from "@/components/home/landing";
import LandingPage1 from "@/components/home/landingpage1";
import SelectSection from "@/components/home/selectSection";
import HomeDemo1 from "@/components/homedemo/homedemo1";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { GetAllChef } from "./findchef/_utils/action";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Private Chef Services | The Kitchen Table",
  description:
    "Discover top private chefs for your events and dining experiences. Enjoy luxurious dining with our curated selection of private chefs.",
  keywords: "private chef, dining, luxury, events, culinary, chef services",
  openGraph: {
    title: "Private Chef Services | The Kitchen Table",
    description:
      "Discover top private chefs for your events and dining experiences. Enjoy luxurious dining with our curated selection of private chefs.",
    images: [
      {
        url: "https://res.cloudinary.com/ddrjnijut/image/upload/v1731948968/qafhp0whircrvs1ypfo3.png",
        alt: "Private Chef Services",
      },
    ],
  },
};

export default async function Home() {
  const result = await GetAllChef({ limit: "4" });

  return (
    <div>
      <HomeDemo1 result={result.data} />
    </div>
  );
}
