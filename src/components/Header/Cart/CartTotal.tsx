import { CartItem } from "@/components/Providers/CartProvider";

export default function CartTotal({ products }: { products: CartItem[] }) {
  const total = products.reduce((acc, product) => {
    return acc + product.item.discountedPrice * product.quantity;
  }, 0);
  return (
    <div className="flex  flex-col items-center  pt-6 text-xl">
      <p>Total</p>
      <p className="font-bold">{total.toFixed(2)} NOK</p>
    </div>
  );
}
