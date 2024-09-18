"use client";

import { Button } from "@/components/ui/button";

export default function ChangeQuantity({
  quantity,
  setQuantity,
}: {
  quantity: number;
  setQuantity: (quantity: number) => void;
}) {
  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="flex justify-between items-center w-full ">
      <Button
        disabled={quantity <= 1}
        variant="secondary"
        className="rounded-full h-8 w-8 font-bold border   border-muted-foreground shadow-lg"
        onClick={handleDecrement}
      >
        -
      </Button>

      <span>{quantity}</span>
      <Button
        disabled={quantity >= 9}
        variant="secondary"
        className="rounded-full h-8 w-8 font-bold border border-muted-foreground shadow-lg"
        onClick={handleIncrement}
      >
        +
      </Button>
    </div>
  );
}
