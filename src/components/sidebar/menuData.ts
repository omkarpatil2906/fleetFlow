import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  CreditCard,
  BarChart
} from "lucide-react";

export const menuData = [
  {
    id: "dashboard",
    label: "Dashboard",
    path: "/",
    icon: LayoutDashboard,
  },
  {
    id: "orders",
    label: "Orders",
    path: "/dashboard/orders",
    icon: Package,
  },
  {
    id: "vehicles",
    label: "Vehicles",
    path: "/dashboard/vehicles",
    icon: Truck,
  },
  {
    id: "drivers",
    label: "Drivers",
    path: "/dashboard/drivers",
    icon: Users,
  },
  {
    id: "billing",
    label: "Billing",
    path: "/dashboard/billing",
    icon: CreditCard,
  },
  {
    id: "reports",
    label: "Reports",
    path: "/dashboard/reports",
    icon: BarChart,
  },
];
