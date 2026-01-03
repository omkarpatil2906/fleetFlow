"use client";

interface TextInputProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
}

export default function TextInput({
  label,
  name,
  type = "text",
  placeholder,
}: TextInputProps) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-sm font-medium">{label}</label>
      <input
        name={name}
        type={type}
        placeholder={placeholder}
        className="border rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}
