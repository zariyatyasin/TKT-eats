import React, { useState, useRef } from "react";

interface CustomCarouselProps {
  children: React.ReactNode;
}

export const CustomCarousel: React.FC<CustomCarouselProps> = ({ children }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    if (carouselRef.current) {
      const totalItems = React.Children.count(children);
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalItems);
    }
  };

  const handlePrev = () => {
    if (carouselRef.current) {
      const totalItems = React.Children.count(children);
      setCurrentIndex((prevIndex) => (prevIndex - 1 + totalItems) % totalItems);
    }
  };

  return (
    <div className="relative overflow-hidden">
      <div
        ref={carouselRef}
        className="flex transition-transform duration-300"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {React.Children.map(children, (child, index) => (
          <div className="flex-shrink-0 w-full">{child}</div>
        ))}
      </div>
      <button
        onClick={handlePrev}
        className="absolute left-0 top-1/2 transform -translate-y-1/2"
      >
        Prev
      </button>
      <button
        onClick={handleNext}
        className="absolute right-0 top-1/2 transform -translate-y-1/2"
      >
        Next
      </button>
    </div>
  );
};
