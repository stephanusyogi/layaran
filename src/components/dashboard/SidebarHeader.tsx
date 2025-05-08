"use client";

import Image from "next/image";

export default function SidebarHeader() {
  return (
    <div className="flex items-center justify-center py-3 px-4">
      <a href="/" className="flex items-center justify-center">
        <Image
          src="/images/logo-1-dark.png"
          alt="Logo"
          width={75}
          height={75}
          className="transition-all duration-300"
        />
      </a>
    </div>
  );
}
