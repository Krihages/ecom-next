"use client";

import { storage } from "@/lib/utils";
import { Product } from "@/types/Product";
import { createContext, useState, useEffect } from "react";

export interface CartItem {
  item: Product;
  quantity: number;
}

interface CartContextType {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (id: string) => void;
  clearCart: () => void;
}

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

export default function CartProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const cart = storage.get("cart");
    if (cart) {
      setCart(JSON.parse(cart));
    }
  }, []);

  useEffect(() => {
    if (cart.length > 0) {
      storage.set("cart", JSON.stringify(cart));
    }
  }, [cart]);

  console.log(cart);

  const addToCart = (item: CartItem) => {
    const existingItem = cart.find(
      (product) => product.item.id === item.item.id
    );
    if (existingItem) {
      const updatedCart = cart.map((product) =>
        product.item.id === item.item.id
          ? { ...product, quantity: product.quantity + item.quantity }
          : product
      );
      setCart(updatedCart);
    } else {
      setCart((prevCart) => [...prevCart, item]);
    }
  };

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((product) => product.item.id !== id);
    setCart(updatedCart);
    storage.set("cart", JSON.stringify(updatedCart));
  };

  const clearCart = () => {
    setCart([]);
    storage.remove("cart");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
