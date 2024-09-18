"use client";

import ChangeQuantity from "@/components/ChangeQuantity";
import { useState } from "react";
import AddToCart from "../AddToCart";
import { Product } from "@/types/Product";

export default function TotalPrice({ item }: { item: Product }) {
  const [quantity, setQuantity] = useState(1);
  const { discountedPrice } = item;
  const totalPrice = Number((discountedPrice * quantity).toFixed(2));
  return (
    <div className="flex flex-col gap-2 items-center max-w-40">
      <ChangeQuantity quantity={quantity} setQuantity={setQuantity} />
      <div className="flex gap-2">
        Total: <span className="font-bold">{totalPrice} NOK</span>
      </div>
      <AddToCart item={item} quantity={quantity} setQuantity={setQuantity} />
    </div>
  );
}
