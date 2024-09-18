import { AspectRatio } from "@/components/ui/aspect-ratio";
import Image from "next/image";
import { ImageProps } from "@/types/Product";
import { Badge } from "@/components/ui/badge";

export default function ProductImg({
  image,
  onSale,
}: {
  image: ImageProps;
  onSale?: number;
}) {
  return (
    <AspectRatio ratio={1 / 1}>
      <Image
        src={image.url}
        alt={image?.alt || "Product Image"}
        fill
        className="object-cover rounded-md"
      />
      {onSale && onSale > 0 && (
        <Badge
          variant="destructive"
          className="absolute flex flex-col top-1 right-1    px-6 py-2 rounded-full  text-center"
        >
          <span>Discount</span>
          <span>-{onSale.toFixed(2)} NOK</span>
        </Badge>
      )}
    </AspectRatio>
  );
}
