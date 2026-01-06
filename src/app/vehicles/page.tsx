"use client";

import { useState } from "react";
import VehicleForm from "../../components/forms/VehicleForm";
import Modal from "../../components/modals/Modal";

export default function VehiclesPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
        <h1 className="text-2xl font-bold text-center">Vehicles</h1>
      <div className="flex justify-end mb-4">
        <button
          onClick={() => setOpen(true)}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          + Add Vehicle
        </button>
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
