import { Skeleton } from "@/components/ui/skeleton";

export default function SkeletonLoader() {
  return (
    <div className="flex flex-col gap-4 xl:flex-row justify-center items-center xl:justify-between w-full">
      <div className="flex flex-col items-center xl:items-start gap-4 flex-1 w-full max-w-xl">
        <Skeleton className="w-full h-40 rounded-md" />
        <Skeleton className="w-full h-40 rounded-md" />
      </div>
      <div className="flex-1 w-full xl:self-end max-w-xl ">
        <Skeleton className="w-full h-40 rounded-md" />
      </div>
    </div>
  );
}
