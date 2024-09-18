import { Badge } from "@/components/ui/badge";

export default function Tags({ tags }: { tags: string[] }) {
  if (!tags.length) return null;

  return (
    <div className="flex gap-2">
      {tags.map((tag, i) => (
        <Badge variant="secondary" key={i}>
          {tag}
        </Badge>
      ))}
    </div>
  );
}
