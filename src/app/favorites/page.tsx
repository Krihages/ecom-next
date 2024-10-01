"use client";

import Thumbnail from "@/components/Products/AllProducts/Thumbnail";
import { useFavorites } from "@/components/Providers/Favorites";
import Section from "@/components/Section";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function FavoritesPage() {
  const { favorites } = useFavorites();

  return (
    <Section>
      <h1 className="text-2xl font-bold">Your favorites</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 pt-10">
        {favorites.length > 0 ? (
          favorites.map((product) => (
            <Thumbnail key={product.id} product={product} />
          ))
        ) : (
          <p className="text-lg">No favorites yet..</p>
        )}
      </div>
      <Link href="/" className={`${buttonVariants()} mt-6 text-lg`}>
        Back home
      </Link>
    </Section>
  );
}
