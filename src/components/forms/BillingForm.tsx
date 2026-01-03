"use client";

import TextInput from "./common/TextInput";

export default function BillingForm() {
  return (
    <form className="space-y-4">
      <TextInput label="Invoice Amount" name="amount" type="number" />
      <TextInput label="Due Date" name="dueDate" type="date" />

      <button className="bg-purple-600 text-white px-4 py-2 rounded-md">
        Generate Invoice
      </button>
    </form>
  );
}
