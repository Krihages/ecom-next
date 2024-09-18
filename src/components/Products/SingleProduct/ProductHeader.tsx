import StarRating from "@/components/StarRating";
import { CardHeader, CardTitle } from "@/components/ui/card";
import { Product } from "@/types/Product";
import Tags from "../Tags";
import Link from "next/link";

export default function ProductHeader({ product }: { product: Product }) {
  return (
    <CardHeader>
      <div className="flex  justify-between flex-wrap">
        <CardTitle className="text-2xl font-bold">{product.title}</CardTitle>

        <div className="flex items-center gap-2 ">
          <StarRating rating={product.rating} />
          {product?.reviews && product?.reviews.length > 0 && (
            <Link href="#reviews">
              <span className="text-muted-foreground">
                ({product?.reviews?.length})
              </span>
            </Link>
          )}
        </div>
      </div>

      {product.tags && <Tags tags={product.tags} />}
    </CardHeader>
  );
}
