type InputProps = {
  label: string;
  name: string;
  disabled?: boolean;
} & React.InputHTMLAttributes<HTMLInputElement>;

export function Input({ label, name, disabled, ...props }: InputProps) {
  return (
    <div className="flex flex-col gap-2">
      <label className={disabled ? "text-disabled" : "text-default"} htmlFor={name}>
        {label}
      </label>
      <input className="bg-default text-default border-default placeholder:text-default-tertiary disabled:bg-disabled disabled:border-disabled disabled:text-on-disabled disabled:placeholder:text-on-disabled flex h-10 w-full items-center rounded-lg border px-4" id={name} name={name} {...props} disabled={disabled} />
    </div>
  );
}
