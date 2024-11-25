import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-10">
      {" "}
      {/* Increased padding for a larger footer */}
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-8">
        {" "}
        {/* Adjusted padding for better spacing */}
        <div className="mb-4 md:mb-0">
          <p>&copy; 2024 TheKitchenTable. All rights reserved.</p>
          <p>
            Contact us: +1 720-307-2571 | thekitchentableofficial@gmail.com
          </p>{" "}
          {/* Added contact number and email */}
        </div>
        <nav className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {" "}
          {/* Responsive 2x2 grid for small screens, 4 columns for medium and up */}
          <Link
            href="/partner"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Our partners
          </Link>
          <Link
            href="/about"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            About
          </Link>
          <Link
            href="/faq"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Faq
          </Link>
          <Link
            href="/#contact"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="/terms"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Terms & Conditions
          </Link>
          <Link
            href="/guideline"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Guideline
          </Link>
          <Link
            href="/policy"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Policy
          </Link>
        </nav>
      </div>
    </footer>
  );
}
