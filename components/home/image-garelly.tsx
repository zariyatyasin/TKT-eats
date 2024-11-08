"use client";

import { useEffect, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export default function Component() {
  const [api, setApi] = useState<any>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const images = [
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1724638461/joe%202:%20joe%20cooking%20in%20kitchen.jpg",
      name: "Joe cooking in kitchen",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1726174699/Timothy%20Loaya%20-%20Nashville%2C%20TN/d7nsse3tbuo1xhwwxqn2.jpg",
      name: "Timothy Loaya - Nashville, TN",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1727214535/Cory%20Rapp%20-%20Plant%20City%2C%20FL/oen84na2gepifdhvyqu5.jpg",
      name: "Cory Rapp - Plant City, FL",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1727214534/Cory%20Rapp%20-%20Plant%20City%2C%20FL/mfuaqb1ogunmgay5ckui.jpg",
      name: "Cory Rapp - Plant City, FL",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1727214535/Cory%20Rapp%20-%20Plant%20City%2C%20FL/mr78z4rua952wk0dmrgz.jpg",
      name: "Cory Rapp - Plant City, FL",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1726527231/Semin%20Vasquez/har%20gao.jpg",
      name: "Har Gao",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1724638460/pic%20of%20joe%20in%20kitchen.jpg",
      name: "Joe in kitchen",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730265061/Home%20landing%20page/mxmmkwgjp6mygorojedo.jpg",
      name: "Alexia cooking, 4 pots",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730264849/Home%20landing%20page/hx6yshkipy6zmyu0xkib.jpg",
      name: "Joe salmon",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730264848/Home%20landing%20page/fxyyuuogwhi8hnwtw5z4.jpg",
      name: "Chef tim cutting avocado",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730264848/Home%20landing%20page/bczoij2lwyvhrxkmtdjr.jpg",
      name: "Semin black dim sum",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730264847/Home%20landing%20page/extca8rdke5zobckft2s.jpg",
      name: "Nashville food blog ",
    },

    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730264845/Home%20landing%20page/u0unyfangnwcbta92t87.jpg",
      name: "Sushi avocado and cucumber",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730265879/Home%20landing%20page/hsyzmm14keakek8bhgfx.jpg",
      name: "Chef tim with NFB gang",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      api?.scrollNext();
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(intervalId);
  }, [api]);

  return (
    <div className="w-full max-w-7xl mx-auto px-4 py-16 mb-16">
      <h2 className="text-2xl text-center  font-bold text-gray-900 mb-12">
        From Your Kitchen, <br />
        To Your Table With Our Chefs.
      </h2>
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <Carousel setApi={setApi} className="relative">
            <CarouselContent>
              {images.map((image, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none bg-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-video h-48 md:h-72 border w-full">
                        <Image
                          src={image.src}
                          alt={image.name}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-lg object-center h-full"
                        />
                      </div>
                      {/* <p className=" text-gray-500 text-sm py-2">
                        {image.name}
                      </p> */}
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="absolute left-2 top-1/2 -translate-y-1/2" />
            <CarouselNext className="absolute right-2 top-1/2 -translate-y-1/2" />
          </Carousel>
          <div className="mt-4 flex justify-center gap-2">
            {Array.from({ length: count }).map((_, index) => (
              <button
                key={index}
                className={`h-1.5 rounded-full transition-all ${
                  index === current ? "w-8 bg-primary" : "w-4 bg-primary/30"
                }`}
                onClick={() => api?.scrollTo(index)}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
