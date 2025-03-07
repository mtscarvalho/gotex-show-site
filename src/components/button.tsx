import { tv, VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";
import { cn } from "@/lib/utils";

const buttonVariants = tv({
  base: "inline-flex gap-2 items-center justify-center transition-colors duration-300 cursor-pointer rounded-full text-sm",
  variants: {
    size: {
      md: "px-6 py-3",
      sm: "py-2 px-6",
    },
    variant: {
      primary: "bg-brand-primary text-on-brand hover:bg-brand-primary-hover disabled:bg-disabled disabled:border-disabled disabled:border disabled:text-on-disabled",
      outline: "bg-default border border-default text-default hover:border-brand-secondary hover:text-brand-secondary disabled:bg-disabled disabled:border-disabled disabled:border disabled:text-on-disabled",
      subtle: "text-default px-3 hover:text-brand-secondary disabled:text-on-disabled",
    },
    defaultVariants: {
      variant: "md",
      size: "primary",
    },
  },
});

type ButtonsProps = {
  classname?: string;
  children: React.ReactNode;
};

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const classes = buttonVariants({ size, variant, className });
  const Comp = asChild ? Slot : "button";

  return <Comp className={classes} ref={ref} {...props} />;
}

function Buttons({ classname, children }: ButtonsProps) {
  return <div className={cn("flex flex-wrap gap-4 pt-4", classname)}>{children}</div>;
}

const ForwardedButton = React.forwardRef(Button);

export { ForwardedButton as Button, Buttons };
