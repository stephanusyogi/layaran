// Overlay.tsx
"use client";

import { useSidebar } from "./context/SidebarContext";

export default function MobileOverlay() {
  const { isOpen, toggle } = useSidebar();

  return (
    isOpen && (
      <div
        onClick={toggle}
        className="fixed z-50 h-screen w-full bg-gray-900/50 block lg:hidden"
      />
    )
  );
}
