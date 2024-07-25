import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Hero() {
  return (
    // <section className="  h-screen mx-auto grid grid-cols-1 md:grid-cols-2 items-center   ">
    //   <div className=" bg-[#94ce20]     h-full flex items-center">
    //     <div className="        text-white p-8">
    //       <h2 className=" text-2xl md:text-6xl font-bold mb-4">
    //         Dine Luxuriously, <br /> your way
    //       </h2>
    //       <p className="mb-6">
    //         Ready to elevate your health and well-being? Just select your
    //         preferences, and we'll deliver the freshest, locally sourced
    //         vegetables right to your doorstep.
    //       </p>
    //       <button className="bg-black text-white py-2 px-4 rounded-full">
    //         Join Now
    //       </button>
    //     </div>
    //   </div>
    //   <div className="flex-1 ">
    //     <img
    //       src="/p1.jpg"
    //       alt="FreshFarm"
    //       className="w-full h-screen  object-fill"
    //     />
    //   </div>
    // </section>
    <section className="w-full py-12 md:py-24  ">
      <div className=" max-w-7xl mx-auto px-4 md:px-6 grid gap-6 lg:grid-cols-[1fr_400px] lg:gap-12 xl:grid-cols-[1fr_600px]">
        <div className="flex flex-col justify-center space-y-4">
          <div className="space-y-2">
            <h1 className="text-3xl  font-bold tracking-tighter sm:text-5xl xl:text-6xl/none">
              DINE LUXURIOUSLY, YOUR WAY
            </h1>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Our platform connects you with top-rated chefs for unforgettable
              dining experiences in the comfort of your own home.
            </p>
          </div>
          <div className="flex flex-col gap-2 min-[400px]:flex-row">
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-8 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Join Our Community
            </Link>
            <Link
              href="#"
              className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
              prefetch={false}
            >
              Book a Chef
            </Link>
          </div>
          {/* <div className="grid grid-cols-2 gap-4">
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg group"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width={300}
                height={300}
                alt="Instagram"
                className="aspect-square object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-primary-foreground font-semibold transition-all group-hover:bg-black/30">
                <div className="flex items-center gap-2">
                  <InstagramIcon className="h-6 w-6" />
                  <span>Instagram</span>
                </div>
              </div>
            </Link>
            <Link
              href="#"
              className="relative overflow-hidden rounded-lg group"
              prefetch={false}
            >
              <img
                src="/placeholder.svg"
                width={300}
                height={300}
                alt="Facebook"
                className="aspect-square object-cover transition-all group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center text-primary-foreground font-semibold transition-all group-hover:bg-black/30">
                <div className="flex items-center gap-2">
                  <FacebookIcon className="h-6 w-6" />
                  <span>Facebook</span>
                </div>
              </div>
            </Link>
          </div> */}
        </div>
        <img
          src="/p1.jpg"
          width="550"
          height="550"
          alt="Hero"
          className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last lg:aspect-square"
        />
      </div>
    </section>
  );
}
