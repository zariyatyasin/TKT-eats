"use client";

import Image from "next/image";
import { ArrowRight, Menu, ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function LandingPage1() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = ["/chef.png", "/whatistkt.jpeg"];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prevSlide) => (prevSlide - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className=" bg-[#e6fff0]">
      <header className="flex items-center justify-between px-4 py-4 md:px-6">
        <div className="flex items-center space-x-2">
          {/* <Image
            src="/logo.webp"
            alt="Habanero's Logo"
            width={40}
            height={40}
            className="rounded-full"
          /> */}
          <span className="text-lg md:text-xl font-bold text-[#2c7a54]">
            The Kitchen table
          </span>
        </div>
        <nav
          className={`${
            isMenuOpen ? "flex" : "hidden"
          } md:flex flex-col md:flex-row absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent z-50 md:space-x-6 p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <a
            href="#"
            className="text-[#2c7a54] hover:text-[#1a4731] py-2 md:py-0"
          >
            Home
          </a>
          <a
            href="#"
            className="text-[#2c7a54] hover:text-[#1a4731] py-2 md:py-0"
          >
            Mobile App
          </a>
          <a
            href="#"
            className="text-[#2c7a54] hover:text-[#1a4731] py-2 md:py-0"
          >
            Recipes
          </a>
          <a
            href="#"
            className="text-[#2c7a54] hover:text-[#1a4731] py-2 md:py-0"
          >
            Blogs
          </a>
          <a
            href="#"
            className="text-[#2c7a54] hover:text-[#1a4731] py-2 md:py-0"
          >
            Gallery
          </a>
        </nav>
        <div className="flex items-center space-x-4">
          <button className="bg-[#2c7a54] text-white px-4 py-2 rounded-full hover:bg-[#1a4731] transition duration-300 text-sm md:text-base">
            Download App
          </button>
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6 text-[#2c7a54]" />
          </button>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="bg-[#2c7a54] rounded-3xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            <div className="p-6  md:p-8 md:w-1/2">
              <h1 className="text-3xl py-12 md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Discover Simple, <br />
                Delicious, And <br />
                <span className="text-[#a3f7b5]">Fast Recipes!</span>
              </h1>
              <p className="text-gray-200 mb-6 text-sm md:text-base">
                A recipe is soulless. The essence of the recipe{" "}
                <br className="hidden md:inline" />
                must come from you, the cook.
              </p>
              <button className="bg-white text-[#2c7a54] px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center space-x-2 hover:bg-gray-100 transition duration-300 text-sm md:text-base">
                <span>Read More</span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="mt-6 md:mt-8 flex space-x-2 overflow-x-auto md:overflow-x-visible">
                {[1, 2, 3, 4, 5].map((_, index) => (
                  <div
                    key={index}
                    className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 bg-[#a3f7b5] rounded-full overflow-hidden"
                  >
                    <Image
                      src={`/placeholder.svg?height=48&width=48&text=Recipe+${
                        index + 1
                      }`}
                      alt={`Recipe ${index + 1}`}
                      width={48}
                      height={48}
                    />
                  </div>
                ))}
                <div className="flex items-center">
                  <span className="text-white font-bold text-sm md:text-base">
                    500+ Recipes
                  </span>
                </div>
              </div>
            </div>
            <div className="md:w-1/2 relative h-64 md:h-auto">
              <div className="absolute inset-0 flex items-center justify-between px-4 z-10">
                <button
                  onClick={prevSlide}
                  className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
                >
                  <ChevronLeft className="w-6 h-6 text-[#2c7a54]" />
                </button>
                <button
                  onClick={nextSlide}
                  className="bg-white bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition duration-300"
                >
                  <ChevronRight className="w-6 h-6 text-[#2c7a54]" />
                </button>
              </div>
              {slides.map((slide, index) => (
                <Image
                  key={index}
                  src={slide}
                  alt={`Chef ${index + 1}`}
                  layout="fill"
                  objectFit="cover"
                  className={`transition-opacity duration-500 ${
                    currentSlide === index ? "opacity-100" : "opacity-0"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 bg-white rounded-3xl p-4 md:p-6 flex flex-col md:flex-row justify-between items-start md:items-center space-y-4 md:space-y-0">
          <div>
            <div className="bg-[#2c7a54] text-white rounded-full px-3 py-1 inline-block mb-2 text-xs md:text-sm">
              Best Recipes
            </div>
            <h2 className="text-xl md:text-2xl font-bold text-[#2c7a54]">
              Top Recipes
            </h2>
            <p className="text-gray-600 text-sm md:text-base mt-2">
              A recipe is soulless. The essence of the recipe must come from{" "}
              <br className="hidden md:inline" />
              you, the cook.
            </p>
          </div>
          <button className="bg-[#2c7a54] text-white px-4 md:px-6 py-2 md:py-3 rounded-full flex items-center space-x-2 hover:bg-[#1a4731] transition duration-300 text-sm md:text-base w-full md:w-auto justify-center">
            <span>Check Our Recipe</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-8">
          <Image
            src="/placeholder.svg?height=300&width=600&text=Cooking+in+Kitchen"
            alt="Cooking in kitchen"
            width={600}
            height={300}
            className="rounded-3xl w-full object-cover"
          />
        </div>
      </main>
    </div>
  );
}
