"use client";

import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeft, ChevronDown } from "lucide-react";
import { menuData } from "./menuData";

export default function Drawer() {
  const router = useRouter();
  const pathname = usePathname();
  const [open, setOpen] = useState(true);
  const [openMenu, setOpenMenu] = useState<string | null>(null);

  const handleMenuClick = (item: any) => {
    if (item.children) {
      setOpenMenu(openMenu === item.id ? null : item.id);
    } else {
      router.push(item.path);
    }
  };

  return (
    <aside
      className={`h-screen bg-white border-r transition-all duration-300
      ${open ? "w-64" : "w-16"}`}
    >
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b">
        {open && <span className="font-bold text-lg">FleetFlow</span>}
        <button onClick={() => setOpen(!open)}>
          <ChevronLeft
            className={`transition ${!open && "rotate-180"}`}
          />
        </button>
      </div>

      {/* Menu */}
      <nav className="mt-2">
        {menuData.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;

          return (
            <div key={item.id}>
              {/* Main Menu */}
              <div
                onClick={() => handleMenuClick(item)}
                className={`flex items-center justify-between px-4 py-3 cursor-pointer transition
                ${
                  isActive
                    ? "bg-blue-50 text-blue-600 border-r-4 border-blue-600"
                    : "hover:bg-gray-100"
                }`}
              >
                <div className="flex items-center gap-3">
                  <Icon size={20} />
                  {open && <span>{item.label}</span>}
                </div>

                {/* Collapse icon */}
                {item.children && open && (
                  <ChevronDown
                    size={16}
                    className={`transition ${
                      openMenu === item.id ? "rotate-180" : ""
                    }`}
                  />
                )}
              </div>

              {/* Sub Menu */}
              {item.children && openMenu === item.id && open && (
                <div className="ml-10">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon;
                    const activeChild = pathname === child.path;

                    return (
                      <div
                        key={child.id}
                        onClick={() => router.push(child.path)}
                        className={`flex items-center gap-2 px-3 py-2 text-sm cursor-pointer rounded transition
                        ${
                          activeChild
                            ? "text-blue-600 bg-blue-50"
                            : "hover:bg-gray-100"
                        }`}
                      >
                        <ChildIcon size={14} />
                        <span>{child.label}</span>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </aside>
  );
}
