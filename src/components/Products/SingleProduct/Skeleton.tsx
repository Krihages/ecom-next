import Section from "@/components/Section";
import { Skeleton } from "@/components/ui/skeleton";

export default function ProductSkeleton() {
  return (
    <Section>
      <div className="flex flex-col lg:flex-row gap-4 w-full h-full min-h-[500px] ">
        <Skeleton className="flex-1 w-full aspect-square  lg:max-w-full mx-auto max-w-[500px]" />

        <div className="flex-1 flex flex-col gap-4 max-w-[500px] lg:max-w-full mx-auto w-full">
          <Skeleton className="w-[60%] h-12" />
          <Skeleton className="w-[90%] h-8" />
          <Skeleton className="w-[45%] h-10" />
          <Skeleton className="w-[55%] h-28" />
        </div>
      </div>
    </Section>
  );
}
