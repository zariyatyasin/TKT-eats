"use client";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ChefHatIcon, Facebook, Instagram, Linkedin } from "lucide-react";
import Image from "next/image";
export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 10 pixels
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <header
      className={`sticky top-0 z-40 w-full text-gray-900 transition-colors duration-300 ${
        isScrolled ? "bg-white  " : "bg-transparent"
      }`}
    >
      <div className=" max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          {/* <ChefHatIcon className="h-6 w-6" /> */}
          <Image
            height={1000}
            width={1000}
            alt="tkt logo"
            src="/logo.webp"
            className="h-16 w-16"
          />
          {/* <span className="font-bold text-white text-xl">
            {" "}
            The Kitchen Table
          </span> */}
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          <Link
            href="#partners"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Our partners
          </Link>
          <Link
            href="#joinnow"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Join Now
          </Link>
          <Link
            href="#about"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            FAQ
          </Link>
        </nav>
        <div className=" flex items-center gap-2 md:gap-6 ">
          <Link href={"https://www.facebook.com/share/BTfjTAcdVZ29i6HJ/"}>
            <Facebook className=" w-6 h-6 text-blue-600" />
          </Link>
          <Link
            href={"ttps://www.instagram.com/thekitchentable_official/?hl=en"}
          >
            <Instagram className=" w-6 h-6  text-orange-500" />
          </Link>
          <Link
            href={
              "https://www.linkedin.com/company/thekitchentable/?viewAsMember=true"
            }
          ></Link>

          <Linkedin className=" w-6 h-6  text-green-500" />
        </div>
      </div>
    </header>
  );
}
