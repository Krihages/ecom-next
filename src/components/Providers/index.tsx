import ThemeProvider from "./ThemeProvider";
import CartProvider from "./CartProvider";
import { FavoritesProvider } from "./Favorites";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>
        <FavoritesProvider>{children}</FavoritesProvider>
      </CartProvider>
    </ThemeProvider>
  );
}
