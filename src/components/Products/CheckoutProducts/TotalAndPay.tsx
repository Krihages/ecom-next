import { buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Link from "next/link";

export default function TotalAndPay({ total }: { total: number }) {
  return (
    <Card className="w-full flex flex-col gap-4 items-center">
      <CardHeader>
        <CardTitle className="text-xl font-medium">
          Total: <span className="font-bold">{total} NOK</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <Link
          href="/checkout/success"
          className={`w-full min-w-48 text-lg ${buttonVariants({
            variant: "default",
          })}`}
        >
          Pay now
        </Link>
      </CardContent>
    </Card>
  );
}
