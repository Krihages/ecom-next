import { cn } from "@/lib/utils";

// Section component, used to wrap sections of the website that share the same style (padding, background, maxwidth, colors, etc.)
type Props = {
  children: React.ReactNode;
  colors?: "primary" | "secondary" | "none";
};
export default function Section({ children, colors = "none" }: Props) {
  const sectionColors = {
    primary: "bg-background text-foreground",
    secondary: "bg-card text-foreground",
    none: "",
  };

  return (
    <section className={cn(sectionColors[colors], "py-16 px-4 lg:px-10")}>
      <div className="max-w-7xl mx-auto">{children}</div>
    </section>
  );
}
