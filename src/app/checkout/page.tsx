import CheckoutProducts from "@/components/Products/CheckoutProducts";
import Section from "@/components/Section";
import SkeletonLoader from "@/components/Products/CheckoutProducts/SkeletonLoader";
import { Suspense } from "react";
export default function Checkout() {
  return (
    <Section>
      <h1 className="text-2xl font-bold uppercase pb-8">Checkout</h1>
      <Suspense fallback={<SkeletonLoader />}>
        <CheckoutProducts />
      </Suspense>
    </Section>
  );
}
