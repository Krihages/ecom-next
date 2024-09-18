import ThumbnailSkeleton from "./Thumbnail/Skeleton";
import Section from "@/components/Section";

export default function SkeletonLoader() {
  return (
    <Section>
      <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-6">
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
        <ThumbnailSkeleton />
      </div>
    </Section>
  );
}
