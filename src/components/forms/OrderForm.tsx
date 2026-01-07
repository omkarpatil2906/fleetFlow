"use client";

import { useForm } from "react-hook-form";
import InputField from "./common/InputField";
import DropdownField from "./common/DropdownField";

type OrderFormValues = {
  pickup: string;
  delivery: string;
  status: "PENDING" | "IN_TRANSIT" | "DELIVERED";
};

export default function OrderForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OrderFormValues>({
    defaultValues: {
      pickup: "",
      delivery: "",
      status: "PENDING",
    },
  });

  const onSubmit = (data: OrderFormValues) => {
    console.log("Order Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Pickup Location"
        name="pickup"
        placeholder="Enter pickup location"
        control={control}
        error={errors.pickup}
        isMandatory
      />

      <InputField
        label="Delivery Location"
        name="delivery"
        placeholder="Enter delivery location"
        control={control}
        error={errors.delivery}
        isMandatory
      />

      <DropdownField
        placeholder="Order Status"
        name="status"
        control={control}
        error={errors.status}
        isMandatory
        dataArray={[
          { label: "Pending", value: "PENDING" },
          { label: "In Transit", value: "IN_TRANSIT" },
          { label: "Delivered", value: "DELIVERED" },
        ]}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          Save Order
        </button>
      </div>
    </form>
  );
}
