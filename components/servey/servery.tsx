import React from "react";
import { Button } from "../ui/button";
import { ChefHat, User } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";
import Image from "next/image";

export default function Servery() {
  return (
    <div
      id="joinnow"
      className=" max-w-7xl mx-auto py-12 md:py-24 px-4 md:px-0"
    >
      <section className=" grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-8">
        <motion.div
          initial={{ x: 100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          className="relative col-span-1 md:col-span-1 h-[200px] md:h-[400px] rounded-md overflow-hidden"
        >
          <Image
            src="/family.webp"
            width={600}
            height={400}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-2">
            <div className="text-center text-white space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">Join Us</h2>
              <p className="text-sm md:text-xl">
                Don&apos;t wait and be the first to experience our private chef
                services and stand a chance to win a free meal
              </p>
              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLSfpRxz6IwfEZi_cIo0aD24X4-9SOTkmjHP5Su2MHtxazujs-g/viewform?usp=sf_link "
                }
              >
                <Button className="mt-2 ">
                  <User />
                  <span className=" ml-2">Join now</span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
        <motion.div
          initial={{ x: -100 }}
          whileInView={{ x: 0 }}
          transition={{ duration: 0.5, delay: 0, ease: "easeOut" }}
          className="relative col-span-1 md:col-span-1 h-[200px] md:h-[400px] rounded-md overflow-hidden"
        >
          <Image
            src="/chef1.webp"
            width={600}
            height={400}
            alt="Image 2"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
            <div className="text-center text-white space-y-4">
              <h2 className="text-2xl md:text-4xl font-bold">Become a Chef</h2>
              <p className="text-sm md:text-xl">
                Sign up to be our pilot program prive chef
              </p>

              <Link
                href={
                  "https://docs.google.com/forms/d/e/1FAIpQLScw52mz8Jg2fmbWsbs4omjcairhpwYNJdnbxYfOdOb6FBJUmg/viewform?usp=sf_link  "
                }
              >
                <Button className="mt-2 ">
                  <ChefHat />
                  <span className=" ml-2">Join now</span>
                </Button>
              </Link>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
