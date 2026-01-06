"use client";

import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

export default function DriverForm() {
  return (
    <form className="space-y-4">
      <TextInput label="Driver Name" name="name" />
      <TextInput label="Phone Number" name="phone" />

      <SelectInput
        label="Availability"
        name="available"
        options={[
          { label: "Available", value: "true" },
          { label: "Unavailable", value: "false" },
        ]}
      />
      <div className="flex justify-end">
      <button className="bg-indigo-600 text-white px-4 py-2 rounded-md">
        Save Driver
      </button>
      </div>
    </form>
  );
}
