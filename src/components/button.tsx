import React from "react";
import { tv, VariantProps } from "tailwind-variants";
import { Slot } from "@radix-ui/react-slot";

const buttonLero = tv({
  base: "inline-flex gap-2 items-center justify-center transition-colors duration-300 cursor-pointer rounded-full text-sm",
  variants: {
    size: {
      md: "px-6 py-3",
      sm: "py-2 px-3",
    },
    variant: {
      primary: "bg-brand-primary text-on-brand hover:bg-brand-primary-hover disabled:bg-disabled disabled:border-disabled disabled:border disabled:text-on-disabled",
      outline: "bg-default border border-default text-default hover:border-brand-secondary hover:text-brand-secondary disabled:bg-disabled disabled:border-disabled disabled:border disabled:text-on-disabled",
      subtle: "text-default hover:text-brand-secondary disabled:text-on-disabled",
    },
    defaultVariants: {
      variant: "md",
      size: "primary",
    },
  },
});

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonLero> & {
    asChild?: boolean;
  };

function Button({ className, variant, size, asChild = false, ...props }: ButtonProps, ref: React.Ref<HTMLButtonElement>) {
  const classes = buttonLero({ size, variant, className });
  const Comp = asChild ? Slot : "button";

  return <Comp className={classes} ref={ref} {...props} />;
}

const ForwardedButton = React.forwardRef(Button);

export { ForwardedButton as Button };
