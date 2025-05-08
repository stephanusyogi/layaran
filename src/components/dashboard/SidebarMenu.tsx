"use client";

import {
  BsGrid,
  BsCalendar,
  BsCreditCard,
  BsMegaphone,
  BsPeople,
  BsShieldLock,
} from "react-icons/bs";
import { useSidebar } from "./context/SidebarContext";

const menuItems = [
  { label: "Dashboard", href: "/dashboard", icon: BsGrid },
  { label: "Events", href: "/dashboard/events", icon: BsCalendar },
  { label: "Billings", href: "/dashboard/billings", icon: BsCreditCard },
  {
    label: "Announcements",
    href: "/dashboard/announcements",
    icon: BsMegaphone,
  },
  { label: "Members", href: "/dashboard/members", icon: BsPeople },
  { label: "Administrators", href: "/dashboard/admins", icon: BsShieldLock },
];

export default function SidebarMenu() {
  const { isOpen } = useSidebar();

  return (
    <nav className="flex-1 overflow-y-auto px-4">
      <ul className="space-y-2">
        {menuItems.map((item) => (
          <li key={item.label}>
            <a
              href={item.href}
              className={`flex items-center gap-3 px-3 py-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 text-sm font-medium text-gray-700 dark:text-gray-300
                ${isOpen ? "justify-start" : "justify-center"}
              `}
            >
              <item.icon size={18} />
              <span
                className={`transition-all duration-200 origin-left ${
                  isOpen ? "inline-block" : "hidden"
                }`}
              >
                {item.label}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
