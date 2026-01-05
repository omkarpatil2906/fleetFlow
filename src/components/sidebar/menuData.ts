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
        path: "/orders",
        icon: FileText,
      },
      {
        id: "billing-orders",
        label: "Order Billing",
        path: "/orders/billing",
        icon: IndianRupee,
      },
    ],
  },
  {
    id: "vehicles",
    label: "Vehicles",
    path: "/vehicles",
    icon: Truck,
  },
  {
    id: "drivers",
    label: "Drivers",
    path: "/drivers",
    icon: Users,
  },
  {
    id: "billing",
    label: "Billing",
    path: "/billing",
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
        path: "/reports/daily",
        icon: FileText,
      },
      {
        id: "revenue",
        label: "Revenue Report",
        path: "/reports/revenue",
        icon: IndianRupee,
      },
    ],
  },
];
