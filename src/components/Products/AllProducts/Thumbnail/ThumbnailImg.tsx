"use client";

import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { useState } from "react";
import { Product } from "@/types/Product";

import Favorite from "@/components/Favorites/Favorite";

export default function ThumbnailImg({ product }: { product: Product }) {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <AspectRatio
      ratio={16 / 10}
      className="relative"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Image
        src={product.image.url}
        alt={product.image?.alt || "Product Image"}
        fill
        className="object-cover rounded-t-xl "
      />
      {isHovered && (
        <div className="absolute top-2 right-2 w-10 h-10  rounded-lg">
          <Favorite
            color={isFavorite ? "full" : "empty"}
            setFavorite={setIsFavorite}
            product={product}
          />
        </div>
      )}
    </AspectRatio>
  );
}
