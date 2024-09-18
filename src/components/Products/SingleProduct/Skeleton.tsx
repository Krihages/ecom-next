import Section from "@/components/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Section>
      <div className="flex gap-4 w-full h-full min-h-[500px]">
        <Skeleton className="flex-1 w-full" />

        <div className="flex-1 flex flex-col gap-4">
          <Skeleton className="w-[60%] h-12" />
          <Skeleton className="w-[90%] h-8" />
          <Skeleton className="w-[45%] h-10" />
          <Skeleton className="w-[55%] h-28" />
        </div>
      </div>
    </Section>
  );
}
