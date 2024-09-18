"use client";

import CartIcon from "@/components/icons/CartIcon";
import { CartContext } from "@/components/Providers/CartProvider";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import CartItems from "./CartItems";
import { useContext } from "react";
import CartButtons from "./CartButtons";
import CartTotal from "./CartTotal";

export default function Cart() {
  const cartContext = useContext(CartContext);

  if (!cartContext) return null;
  const { cart } = cartContext;
  console.log(cart);
  return (
    <Popover>
      <PopoverTrigger className="bg-background rounded-md border p-[7px] hover:bg-accent duration-200">
        <div className="relative">
          <CartIcon />
          {cart.length !== 0 && (
            <span className="absolute top-3 left-3 bg-destructive text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
              {cart.length}
            </span>
          )}
        </div>
      </PopoverTrigger>
      {cart.length !== 0 && (
        <PopoverContent className="bg-card max-h-[60vh] overflow-y-auto">
          <p className="text-xl font-bold py-6">Your items</p>
          <CartItems />
          <CartTotal products={cart} />
          <CartButtons />
        </PopoverContent>
      )}
    </Popover>
  );
}
