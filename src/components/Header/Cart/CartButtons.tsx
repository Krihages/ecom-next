import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { PopoverClose } from "@radix-ui/react-popover";

export default function CartButtons() {
  return (
    <div className="flex flex-col w-full  gap-2 pt-6">
      <Link className={buttonVariants()} href="/checkout">
        Checkout
      </Link>
      <PopoverClose className={buttonVariants({ variant: "outline" })}>
        Cancel
      </PopoverClose>
    </div>
  );
}
