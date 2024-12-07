import { useEffect, useState } from "react";
import { X, ChefHat } from "lucide-react";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface PromoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function PromoModal({ isOpen, onClose }: PromoModalProps) {
  const promoCode = "tkt15";
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (isOpen) {
      console.log("Promo modal shown");
    }
  }, [isOpen]);

  const copyPromoCode = () => {
    navigator.clipboard.writeText(promoCode);
    setCopied(true);

    // You could add a toast notification here to confirm the copy action
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[400px] bg-white border-2 border-[#9DCA30] p-4">
        <DialogHeader className="space-y-2">
          {/* <Image
            src="/logo.webp"
            alt="Company Logo"
            width={100}
            height={40}
            className="mx-auto"
          /> */}
        </DialogHeader>
        <div className="flex flex-col items-center gap-3 py-2">
          <DialogTitle className="text-2xl font-bold text-center text-[#9DCA30]">
            10% OFF Your First Booking
          </DialogTitle>
          <p className="text-sm text-center text-gray-600">
            Experience culinary excellence at home
          </p>
          <div className="flex items-center justify-center w-full mt-2">
            <p className="text-lg font-mono bg-gray-100 px-3 py-1 rounded-l border-2 border-r-0 border-[#9DCA30]">
              {promoCode}
            </p>
            <Button
              onClick={copyPromoCode}
              className="font-semibold rounded-l-none outline-none border-none focus:ring-0 focus:ring-offset-0 focus-visible:ring-0 focus-visible:ring-offset-0"
            >
              {copied ? "Copied" : "Copy"}
            </Button>
          </div>
        </div>
        <p className="text-xs text-center text-gray-500 mt-2">
          Use this code when booking your first chef experience
        </p>
        {/* <Button
          onClick={onClose}
          className="absolute right-2 top-2 text-gray-400 hover:text-gray-600"
          variant="ghost"
          size="icon"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </Button> */}
      </DialogContent>
    </Dialog>
  );
}
