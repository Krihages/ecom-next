import Product from "@/components/Products/SingleProduct";
import ProductSkeleton from "@/components/Products/SingleProduct/Skeleton";
import { Suspense } from "react";
import fetchProducts from "@/lib/fetchProducts";

export async function generateMetadata({
  params,
}: {
  params: { productId: string };
}) {
  const [product] = await fetchProducts(params.productId);
  return {
    title: `${product?.title} | Ecom store`,
  };
}

export default function ProductPage({
  params,
}: {
  params: { productId: string };
}) {
  return (
    <Suspense fallback={<ProductSkeleton />}>
      <Product id={params.productId} />
    </Suspense>
  );
}
