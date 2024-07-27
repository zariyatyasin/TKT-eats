import { CalendarRange, Search, SmileIcon } from "lucide-react";
import React from "react";
import { delay, easeOut, motion, useScroll } from "framer-motion";

export default function Howitswork() {
  return (
    // <section className="container md:space-y-4 mx-auto py-12 px-6">
    //   <div className="mb-0 md:mb-12">
    //     <h2 className="text-4xl   mb-4">How Does it work?</h2>
    //     <p className="mb-6">How to Easily Book Chefs's in TKT</p>
    //   </div>
    //   <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
    //     <div className=" space-y-4">
    //       <h3 className="text-lg  text-gray-500 font-light">Step 1</h3>
    //       <p className=" font-medium text-2xl">Navigating Our App</p>
    //       <p>Explore our website and find the perfect Chef's for your needs.</p>
    //     </div>
    //     <div className=" space-y-4">
    //       <h3 className="text-lg  text-gray-500 font-light">Step 2</h3>
    //       <p className=" font-medium text-2xl">Choosing Your Selection</p>
    //       <p>Select from a wide variety of Itmes and organic vegen.</p>
    //     </div>
    //     <div className=" space-y-4">
    //       <h3 className="text-lg  text-gray-500 font-light">Step 3</h3>
    //       <p className=" font-medium text-2xl">Customizing Your Order</p>
    //       <p>
    //         Tailor your order to meet your preferences and dietary requirements.
    //       </p>
    //     </div>
    //     <div className=" space-y-4">
    //       <h3 className="text-lg  text-gray-500 font-light">Step 4</h3>
    //       <p className=" font-medium text-2xl">Review & Confirm</p>
    //       <p>Double-check your order and confirm your purchase.</p>
    //     </div>
    //   </div>
    // </section>
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
          <h2 className="text-3xl font-bold">How It Works</h2>
          <p className="text-muted-foreground text-lg">
            Booking your dream culinary experience is easy with our platform.
            Follow these simple steps:
          </p>
          <div className="grid gap-6">
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
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
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
                <CalendarRange className=" w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl font-bold">Request a Booking</h3>
                <p className="text-muted-foreground">
                  Submit your event details and preferred chef, and we'll handle
                  the rest.
                </p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-primary text-primary-foreground rounded-full w-10 h-10 flex items-center justify-center font-bold">
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
          <img
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
