import React from "react";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

type IconListProps = {
  children: React.ReactNode;
  className?: string;
};

type IconListItemProps = {
  icon: LucideIcon;
  color?: string;
  children: React.ReactNode;
};

export function IconList({ children, className }: IconListProps) {
  return <ul className={cn("space-y-2", className)}>{children}</ul>;
}

export function IconListItem({ icon: Icon, color = "icon-brand", children }: IconListItemProps) {
  return (
    <li className="flex items-start gap-2">
      <Icon className={cn("block w-5 shrink-0", color)} />
      <p>{children}</p>
    </li>
  );
}

IconList.Item = IconListItem;
