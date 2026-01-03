"use client";

interface SubmitButtonProps {
  label: string;
  loading?: boolean;
}

export default function SubmitButton({
  label,
  loading = false,
}: SubmitButtonProps) {
  return (
    <button
      type="submit"
      disabled={loading}
      className={`px-4 py-2 rounded-md text-white font-medium
        ${loading ? "bg-gray-400" : "bg-blue-600 hover:bg-blue-700"}
      `}
    >
      {loading ? "Please wait..." : label}
    </button>
  );
}
