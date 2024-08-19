import { CalendarRange, Search, SmileIcon } from "lucide-react";
import React from "react";
import { delay, easeOut, motion, useScroll } from "framer-motion";
import Image from "next/image";

export default function Howitswork() {
  return (
    <section
      className="py-12 md:py-24 lg:py-32  bg-white
     "
    >
      <div className=" max-w-7xl mx-auto px-4 md:px-6 grid gap-8 lg:grid-cols-2">
        <motion.div
          className="space-y-4"
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-bold text-center md:text-left">
            How It Works
          </h2>
          <p className="text-muted-foreground text-base text-center md:text-lg">
            Booking your dream culinary experience made simple. Ready to embark
            on a delightful culinary journey? Follow these straightforward steps
            to secure your unforgettable experience:
          </p>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-none md:bg-primary text-primary md:text-white   rounded-full w-10 h-10 flex items-center justify-center font-bold">
                <Search className=" w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Browse Chefs</h3>
                <p className="text-muted-foreground">
                  Explore our curated selection of top-rated chefs and their
                  specialties.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className=" bg-none md:bg-primary text-primary md:text-white  rounded-full w-10 h-10 flex items-center justify-center font-bold">
                <CalendarRange className=" w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Request a Booking</h3>
                <p className="text-muted-foreground">
                  Submit your event details and preferred chef, and we&apos;ll
                  handle the rest.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-none md:bg-primary text-primary md:text-white   rounded-full w-10 h-10 flex items-center justify-center font-bold">
                <SmileIcon className=" w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Enjoy Your Event</h3>
                <p className="text-muted-foreground">
                  Sit back and let your chosen chef create a memorable culinary
                  experience.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
        >
          <Image
            src="/how.webp"
            width={600}
            height={400}
            alt="How It Works"
            className="rounded-lg object-cover aspect-[3/2]"
          />
        </motion.div>
      </div>
    </section>
  );
}
