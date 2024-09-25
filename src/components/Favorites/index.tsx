import Link from "next/link";
import { HeartIcon } from "../icons/heartIcons";

export default function Favorites() {
  return (
    <Link
      href="/favorites"
      className="bg-background rounded-md border p-[4px] hover:bg-accent duration-200 w-9 h-9"
      title="Favorites"
      aria-label="Your favorites"
    >
      <HeartIcon />
    </Link>
  );
}
