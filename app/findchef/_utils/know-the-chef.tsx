// components/KnowTheChef.tsx

import React, { useState } from "react";
import { CalendarIcon, TagIcon, XIcon } from "lucide-react";

interface KnowTheChefProps {
  images: string[];
  onImageClick: (image: string) => void;
  isModalOpen: boolean;
  selectedImage: string | null;
  onModalClose: () => void;
}

const KnowTheChef: React.FC<KnowTheChefProps> = ({
  images,
  onImageClick,
  isModalOpen,
  selectedImage,
  onModalClose,
}) => {
  return (
    <section className="rounded-lg grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto py-24">
      <div className="gap-4">
        <h2 className="text-3xl font-bold">Know our Chef</h2>
        <p className="text-muted-foreground">
          Immerse yourself in the captivating landscapes and vibrant colors of
          our
        </p>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">August 15, 2024</span>
          </div>
          <div className="flex items-center gap-2">
            <TagIcon className="w-5 h-5 text-muted-foreground" />
            <span className="text-muted-foreground">Nature, Photography</span>
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
          <div className="relative max-w-5xl mx-auto">
            <img
              src={selectedImage}
              alt="Gallery Image"
              width={1200}
              height={800}
              className="rounded-lg object-contain max-h-[90vh]"
              style={{ aspectRatio: "1200/800", objectFit: "cover" }}
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
