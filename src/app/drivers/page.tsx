"use client";

import { useState } from "react";
import DriverForm from "../../components/forms/DriverForm";
import Modal from "../../components/modals/Modal";

export default function DriversPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      {/* Header */}
        <h1 className="text-2xl font-bold text-center">Drivers</h1>
      <div className="flex justify-end items-center mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-blue-600 text-white px-4 py-2 rounded-md"
        >
          + Add Driver
        </button>
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
