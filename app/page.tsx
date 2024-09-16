import Landing from "@/components/home/landing";
import LandingPage1 from "@/components/home/landingpage1";
import SelectSection from "@/components/home/selectSection";
import HomeDemo1 from "@/components/homedemo/homedemo1";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";
import { GetAllChef } from "./findchef/_utils/action";

export default async function Home() {
  const result = await GetAllChef(4);
  return (
    <div>
      <HomeDemo1 result={result.data} />
      {/* <LandingPage1 />
      <SelectSection /> */}
    </div>
  );
}
