"use client";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";
import { ChevronLeft, ChevronRight, ChevronDown } from "lucide-react";
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
    <div
      className={`${
        open ? "w-72" : "w-20"
      } h-screen bg-white border-r border-gray-200 transition-all duration-300 flex flex-col shadow-sm relative`}
    >
      {/* Header */}
      <div className="p-5 flex items-center justify-between border-b border-gray-200">
        {open && (
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-xl flex items-center justify-center shadow-md">
              <svg
                className="w-6 h-6 text-white"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">FleetFlow</h1>
              <p className="text-xs text-gray-500">Logistics Platform</p>
            </div>
          </div>
        )}
        <button
          onClick={() => setOpen(!open)}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors duration-200 ml-auto text-gray-600 hover:text-gray-900"
        >
          {open ? (
            <ChevronLeft className="w-5 h-5" />
          ) : (
            <ChevronRight className="w-5 h-5" />
          )}
        </button>
      </div>

      {/* Menu */}
      <div className="flex-1 overflow-y-auto overflow-x-hidden py-4 px-3 custom-scrollbar">
        <nav className="space-y-1">
          {menuData.map((item) => {
            const Icon = item.icon;
            const isActive = pathname === item.path;
            const hasChildren = item.children && item.children.length > 0;
            const isMenuOpen = openMenu === item.id;

            return (
              <div key={item.id} className="relative">
                {/* Main Menu Item */}
                <div
                  onClick={() => handleMenuClick(item)}
                  className={`flex items-center justify-between px-3 py-3 cursor-pointer transition-all duration-200 rounded-xl group relative
                    ${
                      isActive
                        ? "bg-indigo-50 text-indigo-700 shadow-sm"
                        : "text-gray-700 hover:bg-gray-50"
                    }
                  `}
                >
                  <div className="flex items-center gap-3 relative z-10">
                    <div
                      className={`p-2 rounded-lg transition-all duration-200 ${
                        isActive
                          ? "bg-indigo-100 text-indigo-700"
                          : "bg-gray-100 text-gray-600 group-hover:bg-gray-200"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    {open && (
                      <span className="font-medium text-sm whitespace-nowrap">
                        {item.label}
                      </span>
                    )}
                  </div>

                  {/* Dropdown Icon */}
                  {hasChildren && open && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-300 ${
                        isMenuOpen ? "rotate-180" : ""
                      } ${isActive ? "text-indigo-700" : "text-gray-500"}`}
                    />
                  )}

                  {/* Active Indicator */}
                  {isActive && (
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-indigo-600 rounded-r-full"></div>
                  )}

                  {/* Tooltip for closed drawer */}
                  {!open && (
                    <div className="absolute left-full ml-6 px-3 py-2 bg-gray-900 text-white text-sm rounded-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap shadow-xl z-50">
                      {item.label}
                      <div className="absolute left-0 top-1/2 -translate-x-1 -translate-y-1/2 w-2 h-2 bg-gray-900 rotate-45"></div>
                    </div>
                  )}
                </div>

                {/* Sub Menu */}
                {hasChildren && isMenuOpen && open && (
                  <div className="mt-1 ml-6 space-y-1 border-l-2 border-gray-200 pl-4 animate-slideDown">
                    {item.children.map((child) => {
                      const ChildIcon = child.icon;
                      const activeChild = pathname === child.path;

                      return (
                        <div
                          key={child.id}
                          onClick={() => router.push(child.path)}
                          className={`flex items-center gap-3 px-3 py-2.5 text-sm cursor-pointer rounded-lg transition-all duration-200 group relative
                            ${
                              activeChild
                                ? "bg-indigo-50 text-indigo-700 font-medium"
                                : "text-gray-600 hover:bg-gray-50 hover:text-gray-900"
                            }
                          `}
                        >
                          <ChildIcon className="w-4 h-4" />
                          <span>{child.label}</span>
                          {activeChild && (
                            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-6 bg-indigo-600 rounded-r-full -ml-4"></div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>
      </div>

      {/* Footer */}
      {open && (
        <div className="p-4 border-t border-gray-200 bg-gray-50">
          <div className="flex items-center gap-3 px-3 py-2 rounded-xl hover:bg-white transition-colors cursor-pointer">
            <div className="w-9 h-9 bg-linear-to-br from-indigo-600 to-indigo-700 rounded-full flex items-center justify-center ring-2 ring-indigo-100">
              <span className="text-white font-semibold text-sm">AD</span>
            </div>
            <div className="flex-1 overflow-hidden">
              <p className="text-sm font-medium text-gray-900 truncate">Admin User</p>
              <p className="text-xs text-gray-500 truncate">admin@fleetflow.com</p>
            </div>
          </div>
        </div>
      )}

      <style jsx global>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: rgba(243, 244, 246, 0.5);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: rgba(209, 213, 219, 0.8);
          border-radius: 10px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb:hover {
          background: rgba(156, 163, 175, 0.9);
        }
        @keyframes slideDown {
          from {
            opacity: 0;
            max-height: 0;
          }
          to {
            opacity: 1;
            max-height: 500px;
          }
        }
        .animate-slideDown {
          animation: slideDown 0.3s ease-out;
        }
      `}</style>
    </div>
  );
}