"use client";
import { useEffect, useState } from "react";
import Contact from "../contact/contact";
import Faq from "../faq/faq";
import Footer from "../footer/footer";
import Hero from "../hero/hero";
import Howitswork from "../how-its-work/how-its-work";
import Partners from "../partners/partners";
import Whyus from "../why-us/why-us";
import { GetAllChef } from "@/app/findchef/_utils/action";
import ChefCard from "@/app/findchef/_utils/chef-card";
import { Skeleton } from "@/components/ui/skeleton";
import ImageGerally from "../home/image-garelly";
import Link from "next/link";
import { Button } from "../ui/button";
import ImproveTkt from "../home/improve-tkt";
import ReviewSection from "../home/review-section";

interface Chef {
  _id: string;
  profileImage: string;
  name: string;
  location: string;
  cuisines: string[];
  reviewCount: number;
}

interface HomeDemo1Props {
  result: Chef[];
}

export default function HomeDemo1({ result }: HomeDemo1Props) {
  return (
    <div className="min-h-screen bg-slate-50 overflow-hidden">
      <main>
        <Hero />
        <div className="container mx-auto py-24 px-6">
          <h2 className="text-3xl text-center sm:text-4xl md:text-5xl font-bold text-gray-900 mb-12">
            Featured Chefs
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {result?.length > 0 ? (
              result?.map((chef) => (
                <ChefCard
                  reviewCount={chef.reviewCount}
                  location={chef.location}
                  profileImage={chef.profileImage}
                  key={chef._id}
                  name={chef.name}
                  id={chef._id}
                  cuisines={chef.cuisines}
                />
              ))
            ) : (
              <div>no data</div>
            )}
          </div>
          <div className="   flex   justify-center pt-8">
            <Link href={"/findchef"} className=" text-center  ">
              <Button size={"sm"}>View All</Button>
            </Link>
          </div>
        </div>

        {/* <Partners /> */}
        <ImproveTkt />
        {/* <Howitswork /> */}
        <ReviewSection />
        {/* <Whyus /> */}
        <ImageGerally />
        {/* <Faq /> */}

        <Contact />
      </main>
    </div>
  );
}
