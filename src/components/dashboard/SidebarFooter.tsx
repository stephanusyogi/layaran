"use client";

import { BsCreditCard } from "react-icons/bs";
import { useSidebar } from "./context/SidebarContext";
import clsx from "clsx";

export default function SidebarFooter() {
  const { isOpen } = useSidebar();

  return (
    <div className="mt-auto p-4 border-t border-gray-200 dark:border-gray-800">
      <a
        href="/dashboard/subscribe"
        className={clsx(
          "flex items-center gap-3 px-3 py-2 text-white text-sm font-semibold bg-brand-500 hover:bg-brand-600 rounded-lg",
          isOpen
            ? "justify-center"
            : "justify-center group-hover:justify-start w-full"
        )}
      >
        <BsCreditCard size={18} />
        <span
          className={clsx(
            "transition-all duration-200 origin-left",
            isOpen ? "inline-block" : "hidden group-hover:inline-block"
          )}
        >
          Manage Subscription
        </span>
      </a>
    </div>
  );
}
