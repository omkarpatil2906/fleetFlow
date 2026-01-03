"use client";

interface Option {
  label: string;
  value: string;
}

interface SelectInputProps {
  label: string;
  name: string;
  options: Option[];
}

export default function SelectInput({
  label,
  name,
  options,
}: SelectInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <select
        name={name}
        className="border rounded-md px-3 py-2"
      >
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </div>
  );
}
