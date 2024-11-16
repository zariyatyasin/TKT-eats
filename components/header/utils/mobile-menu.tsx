import Link from "next/link";
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: Array<{ href: string; label: string }>;
}

export function MobileMenu({ isOpen, onClose, navItems }: MobileMenuProps) {
  return (
    <div
      className={`fixed inset-y-0 right-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex flex-col h-full p-4">
        <button
          className="self-end text-gray-600 hover:text-gray-900 mb-8"
          onClick={onClose}
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
              onClick={onClose}
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
  );
}
