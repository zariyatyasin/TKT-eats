import { FacebookIcon, InstagramIcon } from "lucide-react";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

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
    <section className="w-full py-12 md:py-24 bg-slate-100  ">
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

    // <div className="w-full mt-16  max-w-7xl mx-auto">
    //   <section className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
    //     <video
    //       className="w-full h-[600px] object-cover rounded-md"
    //       autoPlay
    //       loop
    //       muted
    //     >
    //       <source src="/v1.mp4" type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //     {/* <img
    //       src="/booking.webp"
    //       width={400}
    //       height={400}
    //       alt="Image 1"
    //       className="w-full border h-full object-cover rounded-md"
    //     /> */}

    //     {/* <img
    //         src="/placeholder.svg"
    //         width={600}
    //         height={400}
    //         alt="Image 2"
    //         className="w-full h-full object-cover"
    //       /> */}
    //     <div className=" bg-primary rounded-md  inset-0  flex items-center  ">
    //       <div className="text-center text-white space-y-4">
    //         <h2 className="text-3xl md:text-4xl font-bold uppercase">
    //           DINE LUXURIOUSLY, YOUR WAY
    //         </h2>
    //       </div>
    //     </div>

    //     <video
    //       className="w-full h-[600px] object-cover rounded-md"
    //       autoPlay
    //       loop
    //       muted
    //     >
    //       <source src="/v2.mp4" type="video/mp4" />
    //       Your browser does not support the video tag.
    //     </video>
    //   </section>
    //   <div>
    //     <div className=" bg-gray-950 py-12 rounded-md tracking-widest text-white my-6 text-center text-xl font-bold">
    //       AFFORDABLE PRIVATE DINING EXPERIENCE IN YOUR KITCHEN
    //     </div>
    //     <div className="w-full">
    //       <section className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
    //         <div className="relative col-span-1 md:col-span-1 h-[300px] md:h-[400px] rounded-md overflow-hidden">
    //           <img
    //             src="/chef1.webp"
    //             width={600}
    //             height={400}
    //             alt="Image 2"
    //             className="w-full h-full object-cover"
    //           />
    //           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    //             <div className="text-center text-white space-y-4">
    //               <h2 className="text-3xl md:text-4xl font-bold">
    //                 Discover Our Products
    //               </h2>
    //               <p className="text-lg md:text-xl">
    //                 Explore our wide range of high-quality products.
    //               </p>
    //               <Button>For Chef</Button>
    //             </div>
    //           </div>
    //         </div>
    //         <div className="relative col-span-1 md:col-span-1 h-[300px] md:h-[400px] rounded-md overflow-hidden">
    //           <img
    //             src="/family.webp"
    //             width={600}
    //             height={400}
    //             alt="Image 2"
    //             className="w-full h-full object-cover"
    //           />
    //           <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
    //             <div className="text-center text-white space-y-4">
    //               <h2 className="text-3xl md:text-4xl font-bold">
    //                 Discover Our Products
    //               </h2>
    //               <p className="text-lg md:text-xl">
    //                 Explore our wide range of high-quality products.
    //               </p>
    //               <Button>For Chef</Button>
    //             </div>
    //           </div>
    //         </div>
    //       </section>
    //     </div>
    //   </div>
    // </div>
  );
}
