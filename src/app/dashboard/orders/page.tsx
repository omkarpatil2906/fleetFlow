"use client";

import { useState } from "react";
import OrderForm from "../../../components/forms/OrderForm";
import Modal from "../../../components/modals/Modal";

export default function OrdersPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Orders</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          + Add Order
        </button>
      </div>

      <div className="border rounded p-4 text-gray-500">
        Orders table will be here
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Create Order"
      >
        <OrderForm />
      </Modal>
    </div>
  );
}
