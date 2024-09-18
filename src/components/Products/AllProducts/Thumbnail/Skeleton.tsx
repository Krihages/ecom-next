import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
export default function ThumbnailSkeleton() {
  return (
    <Card>
      <Skeleton className="h-[190px] w--full rounded-t-xl rounded-b-none" />
      <CardHeader className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[200px] max-w-full " />
        <Skeleton className="h-4 w-[100px] max-w-full " />
        <Skeleton className="h-4 w-[150px] max-w-full     " />
      </CardHeader>

      <CardContent className="flex flex-col gap-2">
        <Skeleton className="h-4 w-[250px] max-w-full" />
        <Skeleton className="h-4 w-[200px] max-w-full" />
      </CardContent>
    </Card>
  );
}
{
  /* <Card>
<Link href={`/product/${product.id}`}>
  <ThumbnailImg image={product.image} />
  <CardHeader>
    <CardTitle>{product.title}</CardTitle>

    <Price
      price={product.price}
      discountedPrice={product.discountedPrice}
    />
    <StarRating rating={product.rating} size={16} />
  </CardHeader>
  <CardContent>
    <CardDescription>
      {product.description.slice(0, 40)}...
    </CardDescription>
  </CardContent>
</Link>
</Card> */
}
