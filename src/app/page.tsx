import AllProducts from "@/components/Products/AllProducts";
import SkeletonLoader from "@/components/Products/AllProducts/SkeletonLoader";
import { Suspense } from "react";
import SearchProducts from "@/components/SearchProducts";
import Section from "@/components/Section";

export default function Home({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const searchQuery = searchParams.q;
  return (
    <Section>
      <div className="flex justify-between items-center py-8 ">
        <h1 className="text-2xl font-bold uppercase">Products</h1>
        <SearchProducts />
      </div>

      <Suspense fallback={<SkeletonLoader />}>
        <AllProducts query={searchQuery} />
      </Suspense>
    </Section>
  );
}
