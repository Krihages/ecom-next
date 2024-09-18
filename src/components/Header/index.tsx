import { ModeToggle } from "../Providers/ThemeProvider/ModeToggle";
import Cart from "./Cart";

import Logo from "./Logo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header className="fixed  lg:mb-0 md:relative z-30 top-0 flex justify-end py-4 px-4 lg:px-10 w-full bg-card border-b">
      <div className="max-w-7xl mx-auto flex flex-col gap-4 xs:flex-row justify-between xs:items-center w-full ">
        <Logo />
        <div className="flex items-center justify-between gap-4 sm:gap-6 lg:gap-10">
          <Navbar />
          <div className="flex  items-center gap-2">
            <Cart />
            <ModeToggle />
          </div>
        </div>
      </div>
    </header>
  );
}
