"use client";

import { useState } from "react";
import BillingForm from "../../components/forms/BillingForm";
import Modal from "../../components/modals/Modal";

export default function BillingPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6 space-y-6">
        <h1 className="text-2xl font-bold text-center">Billing</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-purple-600 text-white px-4 py-2 rounded"
        >
          + Generate Invoice
        </button>
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
