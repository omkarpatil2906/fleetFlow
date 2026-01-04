"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { name: "Dashboard", path: "/dashboard" },
  { name: "Orders", path: "/dashboard/orders" },
  { name: "Vehicles", path: "/dashboard/vehicles" },
  { name: "Drivers", path: "/dashboard/drivers" },
  { name: "Billing", path: "/dashboard/billing" },
  { name: "Reports", path: "/dashboard/reports" },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 bg-gray-900 text-white min-h-screen">
      <h1 className="text-xl font-bold p-4 border-b border-gray-700">
        FleetFlow
      </h1>

      <nav className="mt-4">
        {menu.map((item) => (
          <Link
            key={item.path}
            href={item.path}
            className={`block px-4 py-3 hover:bg-gray-700 ${
              pathname === item.path ? "bg-gray-700" : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </aside>
  );
}
