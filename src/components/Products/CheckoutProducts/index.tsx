"use client";

import { useContext } from "react";
import { CartContext } from "@/components/Providers/CartProvider";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Price from "../AllProducts/Thumbnail/Price";
import StarRating from "@/components/StarRating";
import Image from "next/image";
import TotalAndPay from "./TotalAndPay";
import Link from "next/link";

export default function CheckoutProducts() {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;

  const { cart } = cartContext;
  const total = cart.reduce((acc, product) => {
    return acc + product.item.price * product.quantity;
  }, 0);
  return (
    <div className="flex flex-col gap-4 xl:flex-row justify-center items-center xl:justify-between w-full">
      <div className="flex flex-col items-center xl:items-start gap-4 flex-1 w-full">
        {cart.map((product) => (
          <Card
            key={product.item.id}
            className="flex flex-col w-full  xs:flex-row max-w-xl gap-4"
          >
            <Link
              href={`/product/${product.item.id}`}
              className="relative  w-full min-h-[200px] xs:w-1/2"
            >
              <Image
                src={product.item.image.url}
                alt={product.item.title}
                fill
                className="object-cover rounded-t-xl xs:rounded-t-none xs:rounded-l-xl"
              />
            </Link>
            <div className="flex flex-col gap-2 w-full xs:w-1/2">
              <CardHeader className="py-1">
                <CardTitle className="text-lg font-medium">
                  {product.item.title}
                </CardTitle>
                <StarRating rating={product.item.rating} />
              </CardHeader>
              <CardContent>
                <Price
                  price={product.item.price}
                  discountedPrice={product.item.discountedPrice}
                />

                <p>Quantity: {product.quantity}</p>

                <p className="flex  gap-2">
                  Total:
                  <span className="font-bold">
                    {(product.item.price * product.quantity).toFixed(2)} NOK
                  </span>
                </p>
              </CardContent>
            </div>
          </Card>
        ))}
      </div>
      <div className="flex-1 w-full xl:self-end max-w-xl ">
        <TotalAndPay total={total} />
      </div>
    </div>
  );
}
