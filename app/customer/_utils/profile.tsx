import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
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
    <div className="w-full max-w-4xl mx-auto  rounded-lg p-4">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-12 w-12 sm:h-16 sm:w-16">
            <AvatarImage src={avatarUrl} alt={name} />
            <AvatarFallback>{name.charAt(0)}</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h2 className="text-lg sm:text-xl font-semibold">{name}</h2>
            <p className="text-sm text-gray-500">{email}</p>
          </div>
        </div>
        <Link href={`/#contact`} className="ml-auto">
          <div className=" text-sm text-primary ">Need Help?</div>
        </Link>
      </div>
    </div>
  );
}
