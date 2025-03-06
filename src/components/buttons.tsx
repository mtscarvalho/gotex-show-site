import { cn } from "@/lib/utils";

type ButtonsProps = {
  classname?: string;
  children: React.ReactNode;
};

export function Buttons({ classname, children }: ButtonsProps) {
  return <div className={cn("flex flex-wrap gap-4 pt-4", classname)}>{children}</div>;
}
