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
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1738701039/02-01%20Valentine%20Crimson%20Living/xqocypekxlmbygsm9mel.jpg",
      name: "Valentine Crimson Living 1",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1738701048/02-01%20Valentine%20Crimson%20Living/klcwhzuqguzozxbuum4f.jpg",
      name: "Valentine Crimson Living 2",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1735354596/12:19%20Chicago%20Event/bkuxx2a9nudayh4kotrv.jpg",
      name: "Chicago Event 1",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1735354593/12:19%20Chicago%20Event/qd4pfdtm7noehmusv5w4.jpg",
      name: "Chicago Event 2",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1735354566/12.17%20Nashville/qfn5iw7ktxtbcljzc8uz.jpg",
      name: "Nashville Event",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1732075800/11:19%20weekly%20meal%20plan/oloqvdios3wim6ig0gfb.jpg",
      name: "Chef cutting vegetables",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1732075795/11:19%20weekly%20meal%20plan/zhbyj9zaphnmpyuo8cvm.jpg",
      name: "Weekly menu all item",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1732075782/11:19%20weekly%20meal%20plan/s6sbpuptfrwugzm5975e.jpg",
      name: "Weekly menu all item",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1724638461/joe%202:%20joe%20cooking%20in%20kitchen.jpg",
      name: "Joe in the kitchen cooking",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1726527240/Semin%20Vasquez/vegetable%20dim%20sum.jpg",
      name: "Dim sum",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1726174701/Timothy%20Loaya%20-%20Nashville%2C%20TN/qfmrpnpfycmqs45rlxig.jpg",
      name: "Chef tim",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1726174699/Timothy%20Loaya%20-%20Nashville%2C%20TN/d7nsse3tbuo1xhwwxqn2.jpg",
      name: "Chef tim",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1731888785/11-2%20event/11:2%20event/fa6uxnemuphsvswimije.jpg",
      name: "Event image",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730783586/Timothy%20jordan%20-%20Denver%2C%20CO/tmeephss9drv21p5aijl.jpg",
      name: "Tim jordan and guest",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1727214535/Cory%20Rapp%20-%20Plant%20City%2C%20FL/q88wyuf7ew18gyeml4fn.jpg",
      name: "Chef cory satay",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1727214534/Cory%20Rapp%20-%20Plant%20City%2C%20FL/izwlygspil1uuqwwehqz.jpg",
      name: "Cory preparing food",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1726527231/Semin%20Vasquez/har%20gao.jpg",
      name: "Dim sum",
    },
    {
      src: "https://res.cloudinary.com/deema2xo0/image/upload/v1730783005/Timothy%20jordan%20-%20Denver%2C%20CO/pdskph8z9mmmekwdw2ez.jpg",
      name: "Timothy jordan",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1731888881/NFB%20pictures/ggmqirrbrcwilcs5ugzf.jpg",
      name: "NFB picture 1",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1731888874/NFB%20pictures/qnpfocfib93y7eobj1qa.jpg",
      name: "NFB picture 2",
    },
    {
      src: "https://res.cloudinary.com/dztq1zv9l/image/upload/v1731888833/11:10%20-%20Influencers/jkumhtflyzqz1obszmvm.jpg",
      name: "Influencers",
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
