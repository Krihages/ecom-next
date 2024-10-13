import AllProducts from "@/components/Products/AllProducts";
import SkeletonLoader from "@/components/Products/AllProducts/SkeletonLoader";
import { Suspense } from "react";
import SearchProducts from "@/components/SearchProducts";
import Section from "@/components/Section";

export const metadata = {
  title: "Home | Ecom store",
};

export default function Home({
  searchParams,
}: {
  searchParams: { q: string };
}) {
  const searchQuery = searchParams.q;
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-6  justify-between items-center py-8 ">
        <h1 className="text-2xl font-bold uppercase">Products</h1>
        <SearchProducts />
      </div>

      <Suspense fallback={<SkeletonLoader />}>
        <AllProducts query={searchQuery} />
      </Suspense>
    </Section>
  );
}
