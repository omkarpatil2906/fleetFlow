"use client";

import { useForm } from "react-hook-form";
import InputField from "./common/InputField";
import SelectInput from "./common/SelectInput";

type DriverFormValues = {
  name: string;
  phone: string;
  available: string;
};

export default function DriverForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<DriverFormValues>({
    defaultValues: {
      name: "",
      phone: "",
      available: "true",
    },
  });

  const onSubmit = (data: DriverFormValues) => {
    console.log("Driver Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Driver Name"
        name="name"
        control={control}
        error={errors.name}
        isMandatory
      />

      <InputField
        label="Phone Number"
        name="phone"
        type="number"
        control={control}
        error={errors.phone}
        isMandatory
      />

      <SelectInput
        label="Availability"
        name="available"
        options={[
          { label: "Available", value: "true" },
          { label: "Unavailable", value: "false" },
        ]}
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-indigo-600 text-white px-4 py-2 rounded-md"
        >
          Save Driver
        </button>
      </div>
    </form>
  );
}
