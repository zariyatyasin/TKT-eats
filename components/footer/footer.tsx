import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-6">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-6">
        <p>&copy; 2024 TheKitchenTable. All rights reserved.</p>
        <nav className="space-x-4">
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
            href="#contact"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Contact
          </Link>
          <Link
            href="#faq"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            FAQ
          </Link>
          <Link
            href="/terms"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            Terms & Conditions
          </Link>
        </nav>
      </div>
    </footer>
  );
}
