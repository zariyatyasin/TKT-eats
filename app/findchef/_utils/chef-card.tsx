import { Button } from "@/components/ui/button";
import { ChefHat, MapPin, Star } from "lucide-react";
import Link from "next/link";
import React from "react";

interface ChefCardProps {
  name: string;
  cuisines: string[];
  id: string;
  profileImage: string;
  reviewCount: number;
  location: string;
}

export default function ChefCard({
  name,
  cuisines,
  id,
  profileImage,
  reviewCount,
  location,
}: ChefCardProps) {
  return (
    <div className="bg-background rounded-xl overflow-hidden shadow-lg">
      <div className="relative">
        <img
          src={
            profileImage ||
            "https://res.cloudinary.com/ddrjnijut/image/upload/v1723878189/chef_wkroiu.png"
          }
          width={400}
          height={300}
          alt="Chef Profile"
          className="w-full h-48  object-center object-contain"
          style={{ aspectRatio: "400/300", objectFit: "cover" }}
        />
        {reviewCount > 0 && (
          <div className="absolute flex gap-1 items-center top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium">
            <Star className="  f h-4 w-4" />
            {reviewCount}
          </div>
        )}
      </div>
      <div className="p-4  space-y-4">
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-muted-foreground">{cuisines.join(", ")}</p>
        <div className="flex items-center justify-between">
          <Link href={"/findchef/" + id + "?name=" + name}>
            <Button size={"sm"} className=" text-xs gap-1">
              {" "}
              <ChefHat className=" h-4 w-4" />
              Book Now
            </Button>
          </Link>
          <div className="flex items-center gap-1">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-xs">{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
