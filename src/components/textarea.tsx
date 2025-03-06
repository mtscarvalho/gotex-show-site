type Textarea = {
  label: string;
  name: string;
} & React.TextareaHTMLAttributes<HTMLTextAreaElement>;

export function Textarea({ label, name, ...props }: Textarea) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-default" htmlFor={name}>
        {label}
      </label>
      <textarea className="bg-default text-default border-default placeholder:text-default-tertiary disabled:bg-disabled disabled:border-disabled disabled:text-on-disabled disabled:placeholder:text-on-disabled flex w-full items-center rounded-lg border px-4 py-2" rows={3} id={name} name={name} {...props} />
    </div>
  );
}
