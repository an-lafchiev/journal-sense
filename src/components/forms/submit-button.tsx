import { Button } from "./button";
import { useFormStatus } from "react-dom";
import Loading from "@/components/ui/icons/loading";

interface SubmitButtonProps {
  text: string;
  icon?: React.ReactNode;
}
export function SubmitButton({ text, icon = null }: SubmitButtonProps) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      text={pending ? "Saving" : text}
      icon={pending ? <Loading className="h-4 w-4 animate-spin" /> : icon}
      aria-disabled={pending}
    />
  );
}
