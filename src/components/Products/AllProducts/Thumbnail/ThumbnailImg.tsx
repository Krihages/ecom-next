import { ImageProps } from "@/types/Product";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";

export default function ThumbnailImg({ image }: { image: ImageProps }) {
  return (
    <AspectRatio ratio={16 / 10}>
      <Image
        src={image.url}
        alt={image?.alt || "Product Image"}
        fill
        className="object-cover rounded-t-xl "
      />
    </AspectRatio>
  );
}
