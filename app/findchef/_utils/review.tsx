import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { StarIcon } from "lucide-react";

interface Review {
  _id: string;
  user: string;
  rating: number;
  comment: string;
}

interface ReviewsProps {
  review: Review[];
}

export default function Reviews({ review }: ReviewsProps) {
  return (
    <div className="col-span-1 lg:col-span-7">
      <h2 className="mb-8 text-2xl font-bold sm:text-3xl">Customer Reviews</h2>
      <div className="space-y-8 sm:space-y-12">
        {review.length > 0 ? (
          review.map((review) => (
            <div key={review._id} className="flex items-start gap-4 sm:gap-6">
              <Avatar className="h-12 w-12 shrink-0 sm:h-16 sm:w-16">
                <AvatarImage src="/placeholder-user.jpg" alt={review.user} />
                <AvatarFallback>{review.user.charAt(0)}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <div className="font-medium sm:text-lg">{review.user}</div>
                  <div className="flex items-center gap-1 text-primary">
                    {Array.from({ length: 5 }, (_, index) => (
                      <StarIcon
                        key={index}
                        className={`h-5 w-5 ${
                          index < review.rating
                            ? "fill-current"
                            : "fill-muted stroke-muted-foreground"
                        }`}
                      />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-muted-foreground sm:text-base">
                  {review.comment}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div> No Reviews Yet</div>
        )}
      </div>
    </div>
  );
}
