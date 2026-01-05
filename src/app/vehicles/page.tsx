"use client";

import { useState } from "react";
import VehicleForm from "../../components/forms/VehicleForm";
import Modal from "../../components/modals/Modal";

export default function VehiclesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">Vehicles</h1>
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Vehicle
        </button>
      </div>

      <div className="border rounded p-4 text-gray-500">
        Vehicle list will be here
      </div>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Add Vehicle"
      >
        <VehicleForm />
      </Modal>
    </div>
  );
}
