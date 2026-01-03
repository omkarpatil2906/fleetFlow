"use client";

import TextInput from "./common/TextInput";

export default function VehicleForm() {
  return (
    <form className="space-y-4">
      <TextInput label="Vehicle Number" name="vehicleNo" />
      <TextInput label="Capacity (kg)" name="capacity" type="number" />
      <TextInput label="Vehicle Type" name="type" />

      <button className="bg-green-600 text-white px-4 py-2 rounded-md">
        Save Vehicle
      </button>
    </form>
  );
}
