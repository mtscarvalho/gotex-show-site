import { cn } from "@/lib/utils";
import React, { ReactNode } from "react";

type TableProps = {
  children: ReactNode;
  className?: string;
};

export function Table({ children, className }: TableProps) {
  return (
    <div className="bg-default border-default overflow-hidden overflow-x-auto rounded-lg border">
      <table className={cn("w-full border-collapse rounded-lg", className)}>{children}</table>
    </div>
  );
}

type TableHeadProps = {
  children: ReactNode;
  className?: string;
};

export function TableHead({ children, className }: TableHeadProps) {
  return <thead className={cn("bg-tertiary text-default", className)}>{children}</thead>;
}

type TableRowProps = {
  children: ReactNode;
  className?: string;
};

export function TableRow({ children, className }: TableRowProps) {
  return <tr className={cn("border-default border-b", className)}>{children}</tr>;
}

type TableCellProps = {
  children: ReactNode;
  className?: string;
};

export function TableCell({ children, className }: TableCellProps) {
  return <td className={cn("border-default text-default border-b px-4 py-2", className)}>{children}</td>;
}

export function TableHeader({ children, className }: TableCellProps) {
  return <th className={cn("border-default border-b px-4 py-2 text-left font-semibold", className)}>{children}</th>;
}

Table.Head = TableHead;
Table.Row = TableRow;
Table.Cell = TableCell;
Table.Header = TableHeader;
