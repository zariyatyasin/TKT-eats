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
            href="/about"
            className="text-base font-medium hover:underline"
            prefetch={false}
          >
            About & FAQ
          </Link>
          <Link
            href="#contact"
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
