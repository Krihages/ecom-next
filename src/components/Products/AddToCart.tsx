import { Button } from "@/components/ui/button";
import { useContext } from "react";
import { CartContext } from "@/components/Providers/CartProvider";
import { Product } from "@/types/Product";
import { useToast } from "@/hooks/use-toast";

type AddToCartProps = {
  item: Product;
  quantity: number;
  setQuantity: React.Dispatch<React.SetStateAction<number>>;
};
export default function AddToCart({
  item,
  quantity,
  setQuantity,
}: AddToCartProps) {
  const cartContext = useContext(CartContext);
  const { toast } = useToast();
  if (!cartContext || !cartContext.addToCart) return null;

  const { addToCart } = cartContext;

  return (
    <Button
      className="w-full"
      onClick={() => {
        addToCart({ item, quantity });

        toast({
          variant: "success",
          title: "Item(s) successfully added to cart",
          description: `${quantity}x ${item.title}`,
        });

        setQuantity(1);
      }}
    >
      Add to cart
    </Button>
  );
}
