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
    "https://res.cloudinary.com/deema2xo0/image/upload/v1724638461/joe%202:%20joe%20cooking%20in%20kitchen.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1724638464/joe%201:%20Salmon%2C%20butter%20chicken%2C%20rice%20on%20cooking%20stove.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1724566437/rj7qnra4sqza79yonroj.png",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1726174699/Timothy%20Loaya%20-%20Nashville%2C%20TN/d7nsse3tbuo1xhwwxqn2.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1727298566/chef%20Jeamesha%20Stapleton%20-%20Bethlehem%2C%20Pennsylvania/cf5qwjxpdbdtqmwl7hq3.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1727214535/Cory%20Rapp%20-%20Plant%20City%2C%20FL/oen84na2gepifdhvyqu5.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1727214535/Cory%20Rapp%20-%20Plant%20City%2C%20FL/q88wyuf7ew18gyeml4fn.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1727214534/Cory%20Rapp%20-%20Plant%20City%2C%20FL/mfuaqb1ogunmgay5ckui.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1727214535/Cory%20Rapp%20-%20Plant%20City%2C%20FL/mr78z4rua952wk0dmrgz.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1726527240/Semin%20Vasquez/Supreme%20Dim%20Sum.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1726527240/Semin%20Vasquez/vegetable%20dim%20sum.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1726527240/Semin%20Vasquez/shumai.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1726527231/Semin%20Vasquez/GF%20dim%20sum.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1726527231/Semin%20Vasquez/har%20gao.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1725853368/Chef%20Ayo/d8peuexvhut4ulenrxml.jpg",
    "https://res.cloudinary.com/deema2xo0/image/upload/v1724638460/pic%20of%20joe%20in%20kitchen.jpg",
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
              {images.map((src, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <Card className="border-none">
                    <CardContent className="p-0">
                      <div className="relative aspect-video w-full">
                        <Image
                          src={src}
                          alt={`Image ${index + 1}`}
                          layout="fill"
                          objectFit="cover "
                          className="rounded-lg"
                        />
                      </div>
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
