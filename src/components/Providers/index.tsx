import ThemeProvider from "./ThemeProvider";
import CartProvider from "./CartProvider";

export default function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="dark"
      enableSystem
      disableTransitionOnChange
    >
      <CartProvider>{children}</CartProvider>
    </ThemeProvider>
  );
}
