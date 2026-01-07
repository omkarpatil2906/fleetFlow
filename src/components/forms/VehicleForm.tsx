"use client";

import { useForm } from "react-hook-form";
import InputField from "./common/InputField";

type VehicleFormValues = {
  vehicleNo: string;
  capacity: number;
  type: string;
};

export default function VehicleForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<VehicleFormValues>({
    defaultValues: {
      vehicleNo: "",
      capacity: 0,
      type: "",
    },
  });

  const onSubmit = (data: VehicleFormValues) => {
    console.log("Vehicle Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Vehicle Number"
        name="vehicleNo"
        control={control}
        error={errors.vehicleNo}
        isMandatory
      />

      <InputField
        label="Capacity (kg)"
        name="capacity"
        type="number"
        control={control}
        error={errors.capacity}
        isMandatory
      />

      <InputField
        label="Vehicle Type"
        name="type"
        control={control}
        error={errors.type}
        isMandatory
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-green-600 text-white px-4 py-2 rounded-md"
        >
          Save Vehicle
        </button>
      </div>
    </form>
  );
}
