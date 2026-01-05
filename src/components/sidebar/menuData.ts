import {
  LayoutDashboard,
  Package,
  Truck,
  Users,
  CreditCard,
  BarChart,
  FileText,
  IndianRupee
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
    icon: Package,
    children: [
      {
        id: "all-orders",
        label: "All Orders",
        path: "/dashboard/orders",
        icon: FileText,
      },
      {
        id: "billing-orders",
        label: "Order Billing",
        path: "/dashboard/orders/billing",
        icon: IndianRupee,
      },
    ],
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
    icon: BarChart,
    children: [
      {
        id: "daily",
        label: "Daily Report",
        path: "/dashboard/reports/daily",
        icon: FileText,
      },
      {
        id: "revenue",
        label: "Revenue Report",
        path: "/dashboard/reports/revenue",
        icon: IndianRupee,
      },
    ],
  },
];
