import { Button } from "@/components/ui/button";
import LoadingSpinner from "@/components/icons/LoadingSpinner";
export default function FormButton({ isPending }: { isPending: boolean }) {
  return (
    <div>
      <Button disabled={isPending} className="w-40">
        {isPending ? <LoadingSpinner text="Submitting" /> : "Submit"}
      </Button>
    </div>
  );
}
