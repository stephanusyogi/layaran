"use client";

import SidebarHeader from "./SidebarHeader";
import SidebarMenu from "./SidebarMenu";
import SidebarFooter from "./SidebarFooter";
import { useSidebar } from "./context/SidebarContext";
import clsx from "clsx";

export default function Sidebar() {
  const { isOpen } = useSidebar();

  return (
    <aside
      className={clsx(
        "group sidebar top-0 left-0 z-50 h-screen flex flex-col bg-white dark:bg-black border-r border-gray-200 dark:border-gray-800",
        isOpen ? "w-[200px] lg:w-[290px]" : "w-[90px] lg:hover:w-[290px]"
      )}
    >
      <SidebarHeader />
      <SidebarMenu />
      <SidebarFooter />
    </aside>
  );
}
