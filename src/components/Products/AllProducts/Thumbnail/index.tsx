import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Product } from "@/types/Product";

import ThumbnailImg from "./ThumbnailImg";
import Price from "./Price";
import Link from "next/link";
import StarRating from "@/components/StarRating";

export default function Thumbnail({ product }: { product: Product }) {
  return (
    <Card className="hover:shadow-xl  bg-card hover:bg-background duration-500">
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
    </Card>
  );
}
