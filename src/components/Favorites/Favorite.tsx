"use client";

import { Product } from "@/types/Product";
import { HeartIcon } from "../icons/heartIcons";
import { useFavorites } from "../Providers/Favorites";
import { useEffect } from "react";

type Props = {
  color: "full" | "empty";
  setFavorite: React.Dispatch<React.SetStateAction<boolean>>;
  product: Product;
};

export default function Favorite({ color, setFavorite, product }: Props) {
  const { addFavorite, removeFavorite, isFavorite } = useFavorites();

  useEffect(() => {
    setFavorite(isFavorite(product));
  }, []);

  function handleClick(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    setFavorite((prev: boolean) => !prev);
    if (isFavorite(product)) {
      removeFavorite(product);
    } else {
      addFavorite(product);
    }
  }

  return (
    <button
      className="w-full h-full shadow-xl bg-foreground/20 bg-opacity-50 p-1.5 rounded-lg"
      onClick={handleClick}
    >
      <HeartIcon color={color} />
    </button>
  );
}
