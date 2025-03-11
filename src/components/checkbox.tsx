import React from "react";

export type CheckboxProps = {
  id: string;
  checked?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
  onChange: (checked: boolean) => void;
};

export function Checkbox({ id, children, checked = false, onChange, disabled = false }: CheckboxProps) {
  return (
    <label htmlFor={id} className="text-default flex cursor-pointer items-center gap-2">
      <input className="text-brand accent-brand-green-500 h-5 w-5 rounded border-gray-300" type="checkbox" id={id} checked={checked} onChange={(e) => onChange(e.target.checked)} disabled={disabled} />
      {children}
    </label>
  );
}
