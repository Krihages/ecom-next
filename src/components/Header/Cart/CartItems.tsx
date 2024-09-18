"use client";

import { CartContext, CartItem } from "@/components/Providers/CartProvider";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useContext } from "react";
export default function CartItems() {
  const cartContext = useContext(CartContext);
  if (!cartContext) return null;
  const { cart, addToCart, removeFromCart } = cartContext;

  function handleIncrement(id: string) {
    const product = cart.find((product) => product.item.id === id);
    if (product) {
      console.log("product", product);
      const updatedProduct = {
        item: product.item,
        quantity: 1,
      };
      addToCart(updatedProduct);
    }
  }

  function handleDecrement(id: string) {
    const product = cart.find((product) => product.item.id === id);
    if (product) {
      if (product.quantity <= 1) {
        removeFromCart(id);
        return;
      } else if (product.quantity > 1) {
        const updatedProduct = {
          item: product.item,
          quantity: -1,
        };
        addToCart(updatedProduct);
      }
    }
  }

  return (
    <div className="flex flex-col gap-4">
      {cart.map((product: CartItem) => (
        <div key={product.item.id} className="flex gap-2">
          <Link
            href={`/product/${product.item.id}`}
            className="aspect-square relative w-24"
          >
            <Image
              src={product.item.image.url}
              alt={product.item.image?.alt || ""}
              fill
              className="rounded-md object-cover"
            />
          </Link>
          <div className="flex flex-col">
            <p>{product.item.title}</p>
            <p className="text-sm text-muted-foreground">
              {product.item.price} NOK
            </p>
            <p className="font-medium">
              {(product.item.discountedPrice * product.quantity).toFixed(2)} NOK
            </p>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                className="h-6 w-6 px-0 rounded-full border shadow-2xl "
                onClick={() => handleDecrement(product.item.id)}
              >
                -
              </Button>
              <p>{product.quantity}</p>
              <Button
                variant="secondary"
                className="h-6 w-6 px-0 rounded-full border shadow-2xl "
                onClick={() => handleIncrement(product.item.id)}
              >
                +
              </Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
