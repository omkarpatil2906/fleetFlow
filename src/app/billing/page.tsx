"use client";

import { useState } from "react";
import BillingForm from "../../components/forms/BillingForm";
import Modal from "../../components/modals/Modal";

export default function BillingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Billing</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          + Generate Invoice
        </button>
      </div>

      <div className="border rounded p-4 text-gray-500">
        Invoice list will be here
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Generate Invoice"
      >
        <BillingForm />
      </Modal>
    </div>
  );
}
