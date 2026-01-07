"use client";

import { useForm } from "react-hook-form";
import InputField from "./common/InputFiled";

type BillingFormValues = {
  amount: number;
  dueDate: string;
};

export default function BillingForm() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BillingFormValues>({
    defaultValues: {
      amount: 0,
      dueDate: "",
    },
  });

  const onSubmit = (data: BillingFormValues) => {
    console.log("Billing Data:", data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <InputField
        label="Invoice Amount"
        name="amount"
        type="number"
        control={control}
        error={errors.amount}
        isMandatory
      />

      <InputField
        label="Due Date"
        name="dueDate"
        type="date"
        control={control}
        error={errors.dueDate}
        isMandatory
      />

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-purple-600 text-white px-4 py-2 rounded-md"
        >
          Generate Invoice
        </button>
      </div>
    </form>
  );
}
