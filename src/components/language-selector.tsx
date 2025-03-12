import { ChevronDown, Languages } from "lucide-react";
import React from "react";

export function LanguageSelector() {
  return (
    <div className="text-default flex items-center gap-1.5 text-sm">
      <Languages className="size-4" />
      <span>PT - BR</span>
      <ChevronDown className="size-4" />
    </div>
  );
}
