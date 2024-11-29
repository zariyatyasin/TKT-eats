import { Badge } from "@/components/ui/badge";
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
  console.log(cuisines);

  return (
    <Link href={`/findchef/${id}?name=${encodeURIComponent(name)}`}>
      <div className="bg-background rounded-xl overflow-hidden shadow flex flex-col h-full transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">
        <div className="relative overflow-hidden">
          <img
            src={
              profileImage ||
              "https://res.cloudinary.com/ddrjnijut/image/upload/v1723878189/chef_wkroiu.png"
            }
            width={400}
            height={300}
            alt="Chef Profile"
            className="w-full h-64 object-cover transition-transform duration-300 ease-in-out transform hover:scale-110"
          />
          {reviewCount > 0 && (
            <div className="absolute flex gap-1 items-center top-4 right-4 bg-primary text-primary-foreground px-3 py-1 rounded-full text-xs font-medium transition-all duration-300 ease-in-out hover:bg-secondary hover:text-secondary-foreground">
              <Star className="h-4 w-4" />
              {reviewCount}
            </div>
          )}
        </div>
        <div className="p-4 flex flex-col flex-grow">
          <h3 className="text-lg font-bold mb-2 transition-colors duration-300 ease-in-out hover:text-primary">
            {name}
          </h3>
          <div className="flex flex-wrap gap-2 mb-2">
            {cuisines.map((cuisine, index) => (
              <Badge key={index} variant="secondary" className="text-xs">
                {cuisine}
              </Badge>
            ))}
          </div>
          <div className="flex items-center gap-1 mb-4">
            <MapPin className="w-4 h-4 text-muted-foreground" />
            <span className="text-muted-foreground text-sm">{location}</span>
          </div>
          <div className="mt-auto">
            <Button size="lg" className="w-full text-sm gap-2  ">
              <ChefHat className="h-5 w-5" />
              View Profile
            </Button>
          </div>
        </div>
      </div>
    </Link>
  );
}
