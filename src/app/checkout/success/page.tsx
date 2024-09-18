"use client";

import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { CartContext } from "@/components/Providers/CartProvider";
import { useContext, useEffect } from "react";

export default function Success() {
  const { clearCart } = useContext(CartContext) || {};

  useEffect(() => {
    if (clearCart) {
      clearCart();
    }
  }, []);

  return (
    <Section>
      <div className="flex flex-col gap-4 items-center text-center text-lg">
        <h1 className="text-2xl font-bold uppercase pb-8">
          Your order is complete
        </h1>
        <div>
          <p>Thank you for your purchase!</p>
          <p>Your order number is #1234567890</p>
        </div>
        <Link href="/" className={buttonVariants()}>
          Go back to home
        </Link>
      </div>
    </Section>
  );
}
