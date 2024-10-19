// "use client";
// import Link from "next/link";
// import React, { useEffect, useState } from "react";
// import { ChefHatIcon, Facebook, Instagram, Linkedin } from "lucide-react";
// import Image from "next/image";
// import { Button } from "../ui/button";
// export default function Header() {
//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       // Check if the page is scrolled more than 10 pixels
//       setIsScrolled(window.scrollY > 10);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);
//   return (
//     <header
//       className={`fixed top-0 z-40 w-full md:p-2 text-gray-900 transition-colors duration-300 ${
//         isScrolled ? "bg-white  " : "bg-transparent"
//       }`}
//     >
//       <div className=" max-w-7xl mx-auto flex h-16 items-center justify-between px-4  md:px-6">
//         <Link href="/" className="flex items-center gap-2" prefetch={false}>
//           {/* <ChefHatIcon className="h-6 w-6" /> */}
//           <Image
//             height={1000}
//             width={1000}
//             alt="tkt logo"
//             src="/logo.webp"
//             className=" h-14 w-14 md:h-16 md:w-16"
//           />
//           {/* <span className="font-bold text-white text-xl">
//             {" "}
//             The Kitchen Table
//           </span> */}
//         </Link>
//         <nav className="hidden items-center gap-8 md:flex">
//           <Link
//             href="/#partners"
//             className="text-base font-medium hover:underline"
//             prefetch={false}
//           >
//             Our Partners
//           </Link>
//           <Link
//             href="/findchef"
//             prefetch={false}
//             className="text-base font-medium hover:underline"
//           >
//             Find A Chef
//           </Link>
//           <Link
//             href="/#about"
//             className="text-base font-medium hover:underline"
//             prefetch={false}
//           >
//             About
//           </Link>
//           <Link
//             href="/#contact"
//             className="text-base font-medium hover:underline"
//             prefetch={false}
//           >
//             Contact
//           </Link>
//           <Link
//             href="/#faq"
//             className="text-base font-medium hover:underline"
//             prefetch={false}
//           >
//             FAQ
//           </Link>
//         </nav>
//         <div className=" flex items-center gap-2 md:gap-6 ">
//           <Link
//             href="https://docs.google.com/forms/d/e/1FAIpQLSd7Vxv1DLXIVBHjbUMyj_rVuaM1fuCYqUtJRpzqYX_efEWRRA/viewform?pli=1"
//             prefetch={false}
//           >
//             <Button size={"lg"} className=" hidden lg:flex rounded-full">
//               Become A Chef
//             </Button>
//             <Button size={"sm"} className=" flex lg:hidden rounded-full">
//               Become A Chef
//             </Button>
//           </Link>
//           {/* <Link href={" https://www.facebook.com/share/1oty7mFZcgvYkeQE/"}>
//             <Facebook className=" w-6 h-6 text-blue-600" />
//           </Link>
//           <Link
//             href={"https://www.instagram.com/thekitchentable_official/?hl=en"}
//           >
//             <Instagram className=" w-6 h-6  text-orange-500" />
//           </Link>
//           <Link
//             href={
//               "https://www.linkedin.com/company/thekitchentable/?viewAsMember=true"
//             }
//           >
//             <Linkedin className=" w-6 h-6  text-green-500" />
//           </Link> */}
//         </div>
//       </div>
//     </header>
//   );
// }

"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { href: "/#partners", label: "Our Partners" },
    { href: "/findchef", label: "Find A Chef" },
    { href: "/#about", label: "About" },
    { href: "/#contact", label: "Contact" },
    { href: "/#faq", label: "FAQ" },
  ];

  return (
    <header
      className={`fixed top-0 z-40 w-full transition-colors duration-300 ${
        isScrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2" aria-label="Home">
          <Image
            height={64}
            width={64}
            alt="The Kitchen Table logo"
            src="/logo.webp"
            className="h-14 w-14 md:h-16 md:w-16"
          />
        </Link>
        <nav className="hidden md:flex items-center gap-8">
          {navItems.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className="text-base font-medium hover:underline"
            >
              {label}
            </Link>
          ))}
        </nav>

        <Link
          href="https://docs.google.com/forms/d/e/1FAIpQLSd7Vxv1DLXIVBHjbUMyj_rVuaM1fuCYqUtJRpzqYX_efEWRRA/viewform?pli=1"
          className="hidden md:block"
        >
          <Button size="lg" className="rounded-full">
            Become A Chef
          </Button>
        </Link>
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {/* Mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-4">
          <button
            className="self-end text-gray-600 hover:text-gray-900 mb-8"
            onClick={toggleMenu}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
          <nav className="flex flex-col gap-4">
            {navItems.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className="text-base font-medium hover:underline"
                onClick={toggleMenu}
              >
                {label}
              </Link>
            ))}
          </nav>
          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSd7Vxv1DLXIVBHjbUMyj_rVuaM1fuCYqUtJRpzqYX_efEWRRA/viewform?pli=1"
            className="mt-auto"
          >
            <Button size="lg" className="w-full rounded-full">
              Become A Chef
            </Button>
          </Link>
        </div>
      </div>
    </header>
  );
}
