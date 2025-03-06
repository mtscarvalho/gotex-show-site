import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconListProps = {
  children: React.ReactNode;
  className?: string;
};

type IconListItemProps = {
  icon: LucideIcon;
  classname?: string;
  children: React.ReactNode;
};

export function IconList({ children, className }: IconListProps) {
  return <ul className={cn("space-y-4", className)}>{children}</ul>;
}

export function IconListItem({ icon: Icon, classname, children }: IconListItemProps) {
  return (
    <li className="flex items-start gap-2">
      <Icon className={cn("block w-5 shrink-0", classname)} />
      <p>{children}</p>
    </li>
  );
}

IconList.Item = IconListItem;
