"use client";

import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

export default function Partners() {
  return (
    <section className="container space-y-4 mx-auto text-center py-2 md:py-24 px-6">
      <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
        Our Partners
      </h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        We are proud to partner with leading companies in the food industry.
      </p>
      <div className="  flex  items-center  justify-center gap-6">
        <div className="space-y-2 flex flex-col items-center ">
          <img
            src="pt3.png"
            width="270"
            height="70"
            alt="Partner Logo 1"
            className="    overflow-hidden rounded-lg object-contain object-center"
          />
          <p className="text-lg text-gray-500 ">washington sate university</p>
        </div>
        <div className="space-y-2 flex flex-col items-center ">
          <img
            src="pt2.png"
            width="240"
            height="70"
            alt="Partner Logo 1"
            className="    overflow-hidden rounded-lg object-contain object-center"
          />
          <p className="text-lg text-gray-500 ">B2BeTrade</p>
        </div>
        <div className="space-y-2 flex flex-col items-center ">
          <img
            src="pt1.png"
            width="240"
            height="70"
            alt="Partner Logo 1"
            className="  overflow-hidden rounded-lg object-contain object-center"
          />
          <p className="text-lg text-gray-500 ">
            East Delta university foundry
          </p>
        </div>
      </div>
    </section>

    // <section className="w-full py-12 md:py-24 lg:py-32">
    //   <div className="container grid  justify-center gap-4 px-4 text-center  md:px-6 lg:grid-cols-2 lg:text-left xl:max-w-7xl md:gap-24">
    //     <div className="space-y-4">
    //       <div className="space-y-3">
    //         <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
    //           Our Partners
    //         </h2>
    //         <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
    //           We are proud to partner with leading companies in the food
    //           industry.
    //         </p>
    //       </div>
    //       <div className="grid grid-cols-3 gap-6">
    //         <img
    //           src="pt3.png"
    //           width="140"
    //           height="70"
    //           alt="Partner Logo"
    //           className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    //         />
    //         <img
    //           src="pt2.png"
    //           width="140"
    //           height="70"
    //           alt="Partner Logo"
    //           className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    //         />
    //         <img
    //           src="pt1.png"
    //           width="140"
    //           height="70"
    //           alt="Partner Logo"
    //           className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
    //         />
    //       </div>
    //     </div>
    //     {/* <img
    //       src="/placeholder.svg"
    //       width="550"
    //       height="310"
    //       alt="Partners"
    //       className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    //     /> */}
    //     <Carousel
    //       opts={{
    //         align: "start",
    //         loop: true,
    //       }}
    //       plugins={[
    //         Autoplay({
    //           delay: 2000,
    //         }),
    //       ]}
    //     >
    //       <CarouselContent>
    //         <CarouselItem>
    //           {" "}
    //           <img
    //             src="pt1.png"
    //             alt="Partner Logo"
    //             className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    //           />
    //         </CarouselItem>
    //         <CarouselItem>
    //           {" "}
    //           <img
    //             src="pt1.png"
    //             alt="Partner Logo"
    //             className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    //           />
    //         </CarouselItem>
    //         <CarouselItem>
    //           {" "}
    //           <img
    //             src="pt1.png"
    //             alt="Partner Logo"
    //             className="mx-auto aspect-video overflow-hidden rounded-xl object-cover object-center sm:w-full lg:order-last"
    //           />
    //         </CarouselItem>
    //       </CarouselContent>
    //       <CarouselPrevious />
    //       <CarouselNext />
    //     </Carousel>
    //   </div>
    // </section>
  );
}
{
  /* <section className="w-full py-12 md:py-24  ">
  <div className="container grid items-center justify-center gap-4 px-4 text-center md:px-6 lg:gap-10">
    <div className="space-y-3">
      <h2 className="text-3xl font-medium tracking-tighter sm:text-4xl md:text-5xl">
        Our Partners
      </h2>
      <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
        We're proud to work with these amazing companies.
      </p>
    </div>
    <div className="grid w-full grid-cols-1 items-center justify-center gap-6 md:grid-cols-3 lg:gap-12">
      <div className="mx-auto flex w-full items-center justify-center">
        <img
          src="pt3.png"
          width="240"
          height="70"
          alt="Partner Logo 1"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
        />
      </div>
      <div className="mx-auto flex w-full items-center justify-center">
        <img
          src="pt2.png"
          width="240"
          height="70"
          alt="Partner Logo 2"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
        />
      </div>
      <div className="mx-auto flex w-full items-center justify-center">
        <img
          src="pt1.png"
          width="240"
          height="70"
          alt="Partner Logo 3"
          className="aspect-[2/1] overflow-hidden rounded-lg object-contain object-center"
        />
      </div>
    </div>
  </div>
</section>; */
}
