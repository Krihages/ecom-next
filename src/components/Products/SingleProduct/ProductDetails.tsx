import { Card, CardContent } from "@/components/ui/card";
import { Product } from "@/types/Product";
import Price from "./Price";
import ProductHeader from "./ProductHeader";
import TotalPrice from "./TotalPrice";

export default function ProductDetails({ product }: { product: Product }) {
  return (
    <Card className="border-none rounded-l-none h-full">
      <ProductHeader product={product} />
      <CardContent>
        <p>{product.description}</p>

        <Price
          price={product.price}
          discountedPrice={product.discountedPrice}
        />
        <TotalPrice item={product} />
      </CardContent>
    </Card>
  );
}
