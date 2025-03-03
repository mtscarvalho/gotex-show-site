import React from "react";

type ColoredLineProps = {
  size?: "sm" | "lg";
};

export default function ColoredLine({ size = "sm" }: ColoredLineProps) {
  return (
    <div className="flex w-full">
      <div className="bg-brand-tertiary h-2 w-full"></div>
      <div className="bg-warning h-2 w-full"></div>
      <div className="bg-brand-primary h-2 w-full"></div>
      {size === "lg" ? <div className="bg-brand-secondary h-2 w-full"></div> : null}
    </div>
  );
}
