import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

interface ProfileSectionProps {
  name: string;
  email: string;
  avatarUrl?: string;
}

export function ProfileSection({
  name,
  email,
  avatarUrl,
}: ProfileSectionProps) {
  return (
    <div>
      <CardContent className="flex items-center space-x-4">
        <Avatar className="h-20 w-20">
          <AvatarImage src={avatarUrl} alt={name} />
          <AvatarFallback>{name.charAt(0)}</AvatarFallback>
        </Avatar>
        <div>
          <h2 className="text-2xl font-bold">{name}</h2>
          <p className="text-gray-500">{email}</p>
        </div>
        <Link href={`/#contact`}>
          <Button size={"sm"} className=" ">
            Need Help?
          </Button>
        </Link>
      </CardContent>
    </div>
  );
}
