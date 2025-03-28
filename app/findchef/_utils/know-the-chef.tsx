// components/KnowTheChef.tsx

import React, { useState, useRef, useEffect } from "react";
import { CalendarIcon, LocateIcon, MapPin, TagIcon, XIcon } from "lucide-react";

interface KnowTheChefProps {
  images: string[];
  onImageClick: (image: string) => void;
  isModalOpen: boolean;
  selectedImage: string | null;
  experience?: string | null;
  location?: string | null;
  description?: string | null;
  onModalClose: () => void;
}

const KnowTheChef: React.FC<KnowTheChefProps> = ({
  images,
  onImageClick,
  isModalOpen,
  selectedImage,
  experience,
  location,
  description,
  onModalClose,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onModalClose();
      }
    };

    if (isModalOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isModalOpen, onModalClose]);

  return (
    <section className="rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-6 md:py-14">
      <div className="gap-4">
        <h2 className="text-3xl font-bold mb-2">Know our Chef</h2>
        <p className="text-muted-foreground ">{description && description}</p>
        <div className="grid mt-2 md:mt-5 gap-2">
          <div className="flex items-center gap-2">
            <span className="text-muted-foreground">{experience}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">{location}</span>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images?.slice(0, 6).map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`Gallery Image ${index + 1}`}
              width="300"
              height="300"
              className="rounded-lg object-cover aspect-square cursor-pointer hover:opacity-80 transition-opacity"
              onClick={() => onImageClick(src)}
            />
          ))}
        </div>
      </div>
      {isModalOpen && selectedImage && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div ref={modalRef} className="relative max-w-5xl mx-auto">
            <img
              src={selectedImage}
              alt="Gallery Image"
              className="rounded-lg max-h-[90vh] max-w-full"
            />
            <button
              className="absolute top-4 right-4 text-white bg-gray-800 hover:bg-gray-700 rounded-full p-2 focus:outline-none"
              onClick={onModalClose}
            >
              <XIcon className="h-6 w-6" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default KnowTheChef;
