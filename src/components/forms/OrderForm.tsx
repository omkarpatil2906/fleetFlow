"use client";

import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";

export default function OrderForm() {
  return (
    <form className="space-y-4">
      <TextInput
        label="Pickup Location"
        name="pickup"
        placeholder="Enter pickup location"
      />

      <TextInput
        label="Delivery Location"
        name="delivery"
        placeholder="Enter delivery location"
      />

      <SelectInput
        label="Order Status"
        name="status"
        options={[
          { label: "Pending", value: "PENDING" },
          { label: "In Transit", value: "IN_TRANSIT" },
          { label: "Delivered", value: "DELIVERED" },
        ]}
      />

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
      >
        Save Order
      </button>
    </form>
  );
}
