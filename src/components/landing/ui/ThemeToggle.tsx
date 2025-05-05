"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { BsSun, BsMoon } from "react-icons/bs";

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <button
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="fixed bottom-6 right-6 z-50 p-3 rounded-full shadow-lg bg-[var(--accent-color)] text-white hover:bg-[color-mix(in_srgb,var(--accent-color),black_15%)] transition-all"
      aria-label="Toggle Theme"
    >
      {isDark ? <BsSun className="text-xl" /> : <BsMoon className="text-xl" />}
    </button>
  );
}
