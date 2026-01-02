"use client";

import { useSelector } from "react-redux";
import { RootState } from "../store/store";

export default function DashboardPage() {
  const user = useSelector((state: RootState) => state.auth.user);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold">
        Welcome {user?.name || "Admin"}
      </h1>
      <p className="text-gray-500 mt-2">
        Transport & Logistics Dashboard
      </p>
    </div>
  );
}
