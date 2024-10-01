import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";

export default function ErrorFetch({ error }: { error: Error }) {
  return (
    <div>
      return (
      <div className="flex flex-col gap-4 justify-center items-center py-10">
        <p className="text-gray-500 text-xl">
          Error: {error.message || "Unknown error"}
        </p>
        <Link href="/" className={buttonVariants({ variant: "outline" })}>
          To homepage
        </Link>
      </div>
    </div>
  );
}
