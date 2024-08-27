"use client";

import React from "react";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";

export default function Partners() {
  return (
    <section
      id="partners"
      className="  max-w-7xl mx-auto   space-y-4  -auto text-center py-24 px-6"
    >
      <motion.div
        initial={{ x: 100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        className=" space-y-4"
      >
        <h2 className="text-3xl  text-center font-bold tracking-tighter sm:text-4xl md:text-5xl">
          Our Support and Partners
        </h2>
        <p className="mx-auto max-w-[700px] text-center text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
          We are proud to partner with leading schools.
        </p>
      </motion.div>
      <motion.div
        initial={{ x: -100 }}
        whileInView={{ x: 0 }}
        transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        className="  flex flex-col  md:flex-row   items-center  justify-center gap-6"
      >
        <motion.div className="space-y-2 flex flex-col items-center ">
          <Link href={"https://entrepreneurship.wsu.edu"}>
            <Image
              height={1000}
              width={1000}
              src="/wsu.png"
              alt="Partner Logo 1"
              className="  w-64    overflow-hidden rounded-lg object-contain object-center"
            />
          </Link>

          <p className=" text-sm md:text-lg text-gray-500  ">
            Click{" "}
            <Link
              href={
                "https://catalog.wsu.edu/General/Academics/DegreeProgram/10062"
              }
              className=" text-blue-600 mr-1"
            >
              here
            </Link>
            to learn what it&apos;s like to be an entrepreneur{" "}
          </p>
        </motion.div>
        {/* <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="space-y-2 flex flex-col items-center "
        >
          <Link href={"https://www.b2betrade.com/"}>
            {" "}
            <Image
              height={1000}
              width={1000}
              src="/pt2.png"
              alt="Partner Logo 1"
              className="  w-52   overflow-hidden rounded-lg object-contain object-center"
            />
          </Link>
          <p className="text-lg text-gray-500 ">B2BeTrade</p>
        </motion.div> */}
        {/* <motion.div
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.8 }}
          className="space-y-2 flex flex-col items-center "
        >
          <Link
            href={
              "https://foundry.eastdelta.edu.bd/?fbclid=IwAR00ly7RRiTJXctX-M2LSotUHBCqxXAcx-SDsV0VZSpm9aX-DVInKa-UU2Y"
            }
          >
            <Image
              height={1000}
              width={1000}
              src="/pt1.png"
              alt="Partner Logo 1"
              className="w-52   overflow-hidden rounded-lg object-contain object-center"
            />
          </Link>

          <p className="text-lg text-gray-500 ">
            East Delta university foundry
          </p>
        </motion.div> */}
      </motion.div>
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
