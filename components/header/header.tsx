"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { UserDrawer } from "./utils/user-drawer";
import { MobileMenu } from "./utils/mobile-menu";
import { usePromoModal } from "../home/use-promo-modal";
import { PromoModal } from "../home/promo-modal";

const navItems = [
  { href: "/partner", label: "Our Partners" },
  { href: "/findchef", label: "Find A Chef" },
  { href: "/about", label: "About Us" },
  { href: "/faq", label: "FAQ" },
  { href: "/#contact", label: "Contact" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isOpen, onClose } = usePromoModal();

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

  return (
    <header
      className={`fixed top-0 z-40 w-full  py-1 transition-colors duration-300 ${
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

        <div className="flex items-center gap-4">
          <UserDrawer />

          <Link
            href="https://docs.google.com/forms/d/e/1FAIpQLSc3SBIBXTxIUWoQbtm74b_7CV2GgeUw2E7OumpieY0gsaxtBA/viewform"
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
      </div>
      <PromoModal isOpen={isOpen} onClose={onClose} />

      <MobileMenu
        isOpen={isMenuOpen}
        onClose={toggleMenu}
        navItems={navItems}
      />
    </header>
  );
}
