import { ChefHat } from "lucide-react";
import Link from "next/link";
import React from "react";
import { delay, easeOut, motion, useScroll } from "framer-motion";
import Image from "next/image";
export default function Whyus() {
  return (
    <div id="about">
      <section className="w-full py-12 md:py-24 lg:py-32  ">
        <div className="container grid max-w-7xl items-center justify-center gap-4  text-center md:gap-8  lg:grid-cols-2 lg:text-left  xl:gap-10">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          >
            <Image
              height={1000}
              width={1000}
              src="/whatistkt.jpeg"
              alt="Who We Are"
              className="mx-auto border  w-[400px] h-full overflow-hidden rounded-xl object-cover object-center   lg:order-last"
            />
          </motion.div>

          <motion.div
            className="space-y-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.75, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                What is TKT?
              </h2>
              <p className="mx-auto max-w-[700px] text-muted-foreground  md:text-lg">
                Welcome to TheKitchenTable, a platform that makes private chef
                services accessible and affordable for everyone. We help chefs
                take control of their careers by connecting them with clients
                who desire personalized dining experiences in their own homes.
              </p>
            </div>
            {/* <div className="flex justify-center space-x-4 lg:justify-start">
              <Link
                href="#"
                className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                prefetch={false}
              >
                Learn More
              </Link>
            </div> */}
          </motion.div>
        </div>
      </section>
    </div>
  );
}
