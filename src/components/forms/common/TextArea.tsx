"use client";

interface TextAreaProps {
  label: string;
  name: string;
  placeholder?: string;
  rows?: number;
}

export default function TextArea({
  label,
  name,
  placeholder,
  rows = 4,
}: TextAreaProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <textarea
        name={name}
        rows={rows}
        placeholder={placeholder}
        className="border rounded-md px-3 py-2 resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
