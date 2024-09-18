import Product from "@/components/Products/SingleProduct";
import ProductSkeleton from "@/components/Products/SingleProduct/Skeleton";
import { Suspense } from "react";
import { Toaster } from "@/components/ui/toaster";
export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <Product id={params.productId} />
      {/* Toaster is used to display success messages on add to cart  */}
      <Toaster />
    </Suspense>
  );
}
