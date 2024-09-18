import { ReviewProps } from "@/types/Product";
import StarRating from "@/components/StarRating";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ProductReviews({
  reviews,
}: {
  reviews: ReviewProps[];
}) {
  return (
    <div id="reviews">
      <h2 className="text-2xl font-bold">Customer reviews</h2>
      <div className="flex  gap-4 flex-wrap py-10">
        {reviews.map((review) => (
          <Card key={review.id} className="w-72">
            <CardHeader>
              <CardTitle>
                <StarRating rating={review.rating} />{" "}
              </CardTitle>
              <CardDescription>by {review.username}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{review.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
