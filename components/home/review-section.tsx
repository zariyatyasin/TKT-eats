"use client";

import { useEffect, useRef, useState } from "react";
import { Utensils, Users, Book, Star } from "lucide-react";
import { motion, useInView, useAnimation } from "framer-motion";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex">
      {[...Array(5)].map((_, i) => (
        <Star
          key={i}
          className={`w-4 h-4 ${
            i < rating ? "text-yellow-400 fill-current" : "text-gray-300"
          }`}
        />
      ))}
    </div>
  );
}

function ReviewCard({
  chefName,
  chefImage,
  reviewText,
  userName,
  rating,
  chefId,
}: {
  chefName: string;
  chefImage: string;
  reviewText: string;
  userName: string;
  rating: number;
  chefId: string;
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const truncatedText =
    reviewText.length > 100 ? reviewText.substring(0, 100) + "..." : reviewText;

  return (
    <>
      <Card className="max-w-md mx-auto rounded-lg overflow-hidden">
        <CardHeader className="flex flex-row items-center gap-3 p-3">
          <div>
            <h2 className="text-lg font-semibold">{userName}</h2>
            <StarRating rating={rating} />
          </div>
        </CardHeader>
        <CardContent className="p-3">
          <blockquote className="italic text-gray-600 mb-3 text-sm">
            {truncatedText}
            {reviewText.length > 100 && (
              <Button
                variant="link"
                onClick={() => setIsDialogOpen(true)}
                className="text-xs"
              >
                Read More
              </Button>
            )}
          </blockquote>
          <Link
            href={`/findchef/thekitchentable?_id=${chefId}`}
            className="flex items-center gap-3"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage src={chefImage} alt={chefName} />
              <AvatarFallback>
                {chefName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>

            <p className="text-xs text-gray-500">
              Chef: <span className="font-semibold">{chefName}</span>
            </p>
          </Link>
        </CardContent>
      </Card>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="p-5">
          <DialogHeader>
            <DialogTitle className="text-xl font-bold">Full Review</DialogTitle>
          </DialogHeader>
          <div className="mb-3">
            <p className="text-lg font-semibold">{userName}</p>
            <StarRating rating={rating} />
          </div>
          <p className="text-gray-600 ">{reviewText}</p>
          <Link
            href={`/findchef/thekitchentable?_id=${chefId}`}
            className="flex items-center gap-3 mt-3"
          >
            <Avatar className="w-12 h-12">
              <AvatarImage
                src={chefImage}
                alt={chefName}
                className=" object-cover"
              />
              <AvatarFallback>
                {chefName
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </AvatarFallback>
            </Avatar>
            <p className="text-xs text-gray-500">
              Chef: <span className="font-semibold">{chefName}</span>
            </p>
          </Link>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default function ReviewSection() {
  const controls = useAnimation();
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const reviews = [
    {
      chefName: "CHEF TIMOTHY LOAYZA",
      chefImage:
        "https://res.cloudinary.com/deema2xo0/image/upload/v1726260382/Timothy%20Loaya%20-%20Nashville%2C%20TN/jgfs4omrhfecv0hhtskp.png",
      reviewText:
        "We highly recommend chef Tim! We booked him for a sushi dinner and would do it again in a heartbeat! He arrived early, kept us entertained all night, and even cleaned the kitchen and all the dishes he used before he left! The sushi was AMAZING! Incredibly fresh and tasty. He even made some vegetarian and dairy free rolls for my friends who had dietary restrictions! Chef Tim was the upmost professional and I’d book him again any time! We are already planning our next dinner!",
      userName: "Kristen S. (@nashfood.blog)",
      rating: 5,
      chefId: "66e4b57c6c2716359e742120", // Example chef ID
    },
    {
      chefName: "CHEF TIMOTHY JORDAN",
      chefImage:
        "https://res.cloudinary.com/deema2xo0/image/upload/v1728440633/Timothy%20jordan%20-%20Denver%2C%20CO/fux59ys2nr1eixglmaob.png",
      reviewText:
        "I had my first private chef event, and it was amazing! The food was delicious, and Chef Tim’s experience truly exceeded my expectations. Though my palate is a bit stronger, and I prefer my food with more seasoning, I still can’t recommend it enough!",
      userName: "Suzie Romero",
      rating: 5,
      chefId: "6705ecab4dcca27f8125033c", // Example chef ID
    },
    {
      chefName: "ALEXIA HINRIKUS",
      chefImage:
        "https://res.cloudinary.com/deema2xo0/image/upload/v1727462692/Alexia%20Hinrikus%20-%20Denver%2C%20CO/myhncxrh6ko6gaj9eipc.jpg",
      reviewText:
        "I recently had an amazing dining experience at TheKitchenTable. The Beef Stroganoff was incredible and brought back fond memories of my favorite restaurant back home. The service was top-notch, with friendly staff and a great chat with the chef about our favorite TV series. I also loved the Creamy Mushroom & Pea Cavatappi with Lemon, the perfectly cooked Grilled Salmon with Herb Butter, and the rich, gooey Chocolate Lava Cake to finish. Overall, TheKitchenTable offers delicious food and excellent service. Highly recommend it for a memorable dining experience",
      userName: "Irene",
      rating: 5,
      chefId: "66f70af3b69f6a1aa135bd46", // Example chef ID
    },
    {
      chefName: "CHRISTOPHER BURNETTE",
      chefImage:
        "https://res.cloudinary.com/deema2xo0/image/upload/v1725859324/Chef%20Chris%20-%20Texas/hi8jbnkolgnruvncmkuc.png",
      reviewText:
        "I recently hired Chef Chris for a dinner party of 9, and he was amazing! From planning the menu to the actual event, he was professional and passionate about food. He arrived early with all the ingredients and equipment. The presentation was stunning, and each dish was delicious, from appetizers to dessert, especialyly the lasagna, chipotle chicken and Caribbean jerk chicken. Chef Chris was friendly and added to the evening’s atmosphere. It felt like having a friend cook for us, but with a professional touch. If you need a private chef, Chef Chris is the one to hire. He made our event unforgettable, and I can’t wait to book him again!",
      userName: "Bryan Tio (JJ)",
      rating: 5,
      chefId: "66f70af3b69f6a1aa135bd46", // Example chef ID
    },

    // Add more reviews as needed
  ];
  return (
    <motion.section ref={ref} className="py-12 px-3 bg-white">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-xl font-bold text-gray-800 mb-6 text-center">
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
        </Carousel>
      </div>
    </motion.section>
  );
}
