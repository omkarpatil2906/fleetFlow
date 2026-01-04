"use client";

import { useState } from "react";
import DriverForm from "../../../components/forms/DriverForm";
import Modal from "../../../components/modals/Modal";

export default function DriversPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Drivers</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + Add Driver
        </button>
      </div>

      {/* Driver List Placeholder */}
      <div className="border rounded-md p-4 text-gray-500">
        Driver list will come here...
      </div>

      {/* Modal */}
      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Add Driver"
      >
        <DriverForm />
      </Modal>
    </div>
  );
}
