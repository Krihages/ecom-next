"use client";

import {
  createContext,
  useState,
  useContext,
  ReactNode,
  useEffect,
} from "react";
import { Product } from "@/types/Product";

type FavoritesContextType = {
  favorites: Product[];
  addFavorite: (product: Product) => void;
  removeFavorite: (product: Product) => void;
  isFavorite: (product: Product) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | undefined>(
  undefined
);

export function FavoritesProvider({ children }: { children: ReactNode }) {
  const [favorites, setFavorites] = useState<Product[]>([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  const addFavorite = (product: Product) => {
    const filteredFavorites = [...favorites, product];
    setFavorites(filteredFavorites);
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
  };

  const removeFavorite = (product: Product) => {
    const filteredFavorites = favorites.filter((fav) => fav.id !== product.id);

    setFavorites(filteredFavorites);
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
  };

  const isFavorite = (product: Product) =>
    favorites.some((fav) => fav.id === product.id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
