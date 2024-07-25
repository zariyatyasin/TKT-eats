import { ChefHatIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function Header() {
  return (
    // <header className="bg-white border-b">
    //   <div className="container mx-auto flex items-center justify-between py-4 px-6">
    //     <h1 className="text-2xl font-bold">TheKitchenTable</h1>
    //     <nav className="space-x-5">
    //       <a href="#" className="text-gray-900">
    //         Home
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         About
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         Services
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         Careers
    //       </a>
    //       <a href="#" className="text-gray-900">
    //         Blog
    //       </a>
    //     </nav>
    //   </div>
    // </header>
    <header className="  top-0 z-40 w-full  ">
      <div className="container flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          {/* <ChefHatIcon className="h-6 w-6" /> */}
          <img src="/logo.webp" className="h-16 w-16" />
          {/* <span className="font-bold">Culinary Concierge</span> */}
        </Link>
        <nav className="hidden items-center gap-4 md:flex">
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Chefs
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Pricing
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="#"
            className="text-sm font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
        </nav>
        <Link href={""}>Book a Chef</Link>
      </div>
    </header>
  );
}
