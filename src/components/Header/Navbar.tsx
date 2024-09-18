import Link from "next/link";
import HamburgerMenu from "./HamburgerMenu";

export default function Navbar() {
  return (
    <>
      <nav className="flex gap-4 items-center uppercase font-medium ">
        <Link href="/" className="hover:underline duration-200">
          Home
        </Link>

        <Link href="/contact" className="hover:underline duration-200">
          Contact
        </Link>
      </nav>
      <div className="lg:hidden">
        <HamburgerMenu />
      </div>
    </>
  );
}
