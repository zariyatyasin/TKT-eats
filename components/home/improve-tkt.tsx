"use client";

import { useEffect, useRef, useState } from "react";
import { Utensils, Users, Book, Star } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const CountUp = ({ end, duration = 1 }: { end: number; duration?: number }) => {
  const [count, setCount] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref);

  useEffect(() => {
    if (inView) {
      controls.start({
        transition: { duration },
      });

      let start = 0;
      const increment = end / (duration * 60); // assuming 60 frames per second
      const animate = () => {
        start += increment;
        if (start < end) {
          setCount(Math.round(start));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      animate();
    }
  }, [controls, end, inView, duration]);

  useEffect(() => {
    if (!inView) {
      setCount(0);
    }
  }, [inView]);

  return <motion.div ref={ref}>{count}</motion.div>;
};

function StatCard({
  icon: Icon,
  end,
  label,
}: {
  icon: any;
  end: number;
  label: string;
}) {
  return (
    <motion.div
      className="flex flex-col items-center p-6 transition-all duration-300 hover:shadow-lg rounded-lg"
      whileHover={{ scale: 1.05 }}
    >
      <Icon className="w-10 h-10 text-[#9DCA30] mb-4" />
      <div className="flex items-baseline text-5xl font-bold mb-2 text-gray-800">
        <CountUp end={end} />
        <span className="text-3xl">+</span>
      </div>
      <div className="text-sm text-gray-500 uppercase tracking-wide">
        {label}
      </div>
    </motion.div>
  );
}

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  name,
  rating,
  comment,
}: {
  name: string;
  rating: number;
  comment: string;
}) {
  return (
    <Card>
      <CardContent className="p-6">
        <StarRating rating={rating} />
        <p className="mt-4 text-gray-600">{comment}</p>
        <p className="mt-4 font-semibold text-gray-800">{name}</p>
      </CardContent>
    </Card>
  );
}

function RecentOrderCard({
  image,
  name,
  rating,
  dish,
}: {
  image: string;
  name: string;
  rating: number;
  dish: string;
}) {
  return (
    <Card>
      <CardContent className="flex items-center p-6">
        <img
          src={image}
          alt={name}
          className="w-16 h-16 rounded-full mr-4 object-cover"
        />
        <div>
          <h4 className="font-semibold text-lg">{name}</h4>
          <StarRating rating={rating} />
          <p className="text-sm text-gray-600 mt-1">Ordered: {dish}</p>
        </div>
      </CardContent>
    </Card>
  );
}

export default function ImproveTkt() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  const reviews = [
    {
      name: "John D.",
      rating: 5,
      comment:
        "Absolutely fantastic dining experience! The flavors were exquisite and the service was impeccable.",
    },
    {
      name: "Sarah M.",
      rating: 4,
      comment:
        "Great atmosphere and delicious food. The menu variety is impressive. Will definitely return!",
    },
    {
      name: "Michael R.",
      rating: 5,
      comment:
        "A culinary delight! Each dish was a work of art. The chef's creativity shines through.",
    },
    {
      name: "Emily L.",
      rating: 4,
      comment:
        "Wonderful evening out. The ambiance was perfect and the wine pairing suggestions were spot on.",
    },
    {
      name: "David K.",
      rating: 5,
      comment:
        "Exceptional quality and presentation. Every bite was a journey of flavors. Highly recommended!",
    },
  ];

  const recentOrders = [
    {
      image: "/placeholder.svg?height=64&width=64",
      name: "Alice W.",
      rating: 5,
      dish: "Grilled Salmon",
    },
    {
      image: "/placeholder.svg?height=64&width=64",
      name: "Bob M.",
      rating: 4,
      dish: "Vegetarian Pasta",
    },
    {
      image: "/placeholder.svg?height=64&width=64",
      name: "Carol S.",
      rating: 5,
      dish: "Beef Tenderloin",
    },
    {
      image: "/placeholder.svg?height=64&width=64",
      name: "David L.",
      rating: 4,
      dish: "Chicken Curry",
    },
    {
      image: "/placeholder.svg?height=64&width=64",
      name: "Eva G.",
      rating: 5,
      dish: "Seafood Paella",
    },
  ];

  return (
    <motion.section
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
      }}
      className="py-16 px-4 bg-white"
    >
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-12 text-center">
          Culinary Excellence
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <StatCard icon={Users} end={42} label="Guests Served" />
          <StatCard icon={Utensils} end={72} label="Dishes Served" />
          <StatCard icon={Book} end={140} label="Menu Items" />
        </div>
        <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          Recent Orders
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
          className="w-full mb-16"
        >
          <CarouselContent>
            {recentOrders.map((order, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <RecentOrderCard {...order} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
        {/* <h3 className="text-2xl font-bold text-gray-800 mb-8 text-center">
          What Our Guests Say
        </h3>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 3000,
            }),
          ]}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <ReviewCard {...review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel> */}
      </div>
    </motion.section>
  );
}
