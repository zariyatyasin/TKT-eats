import { ChefHat } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Whyus() {
  return (
    <div>
      {/* <section className="container max-w-7xl md:space-y-8 mx-auto py-12 md:py-24 px-6">
        <h2 className="text-3xl font-bold mb-4">Affordable Luxury Dining</h2>
        <p className="mb-6">
          Our platform connects you with top-rated chefs for unforgettable
          dining experiences in the comfort of your own home.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className=" space-y-2 ">
            <ChefHat className=" w-8 h-8" />
            <img
              src="/logo.webp"
              alt="Organic Purity"
              className="w-32 h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold">What is TKT?</h3>

            <p className=" text-sm text-gray-500 tracking-wide">
              TKT, or TheKitchenTable, is your gateway to experiencing
              restaurant-quality dining in the comfort of your own home. We
              connect talented chefs with food enthusiasts seeking personalized
              culinary experiences.
            </p>
          </div>
          <div className=" space-y-2 ">
            <img
              src="/chef1.webp"
              alt="Organic Purity"
              className="w-32 h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold">Affordable Luxury</h3>
            <p className=" text-sm text-gray-500 tracking-wide">
              Enjoy the luxury of a private chef without the hefty price tag.
              TKT makes exceptional dining accessible to everyone. We believe
              that everyone deserves to indulge in delicious, expertly prepared
              meals.
            </p>
          </div>
          <div className=" space-y-2 ">
            <img
              src="/family.webp"
              alt="Organic Purity"
              className="w-32 h-auto mb-4 rounded-lg"
            />
            <h3 className="text-xl font-bold">How it Works</h3>
            <p className=" text-sm text-gray-500 tracking-wide">
              TKT bridges the gap between chefs and clients. We empower chefs to
              build successful careers by offering them a platform to showcase
              their talents.
            </p>
          </div>
        </div>
      </section> */}

      <section className="w-full py-12 md:py-24 lg:py-32  ">
        <div className="container grid max-w-7xl items-center justify-center gap-4  text-center md:gap-8  lg:grid-cols-2 lg:text-left  xl:gap-10">
          <img
            src="/chef1.webp"
            alt="Who We Are"
            className="mx-auto border  w-[400px] h-full overflow-hidden rounded-xl object-cover object-center   lg:order-last"
          />
          <div className="space-y-4">
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What is TKT?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Welcome to TheKitchenTable, a platform that makes private chef
                services accessible and affordable for everyone. We help chefs
                take control of their careers by connecting them with clients
                who want personalized dining experiences in their own homes.
              </p>
            </div>
            <div className="flex justify-center space-x-4 lg:justify-start">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
