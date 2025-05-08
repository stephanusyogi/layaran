"use client";

import { useState, useRef, useEffect } from "react";
import Image from "next/image";
import { BsSun, BsMoon, BsThreeDotsVertical } from "react-icons/bs";
import { HiOutlineMenuAlt2, HiX } from "react-icons/hi";
import { useSidebar } from "./context/SidebarContext";

export default function Header() {
  const { toggle } = useSidebar();
  const [menuToggle, setMenuToggle] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [userOpen, setUserOpen] = useState(false);

  const userRef = useRef<HTMLDivElement | null>(null);

  // Detect outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (userRef.current && !userRef.current.contains(event.target as Node)) {
        setUserOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="sticky top-0 z-[20] flex w-full border-gray-200 bg-white lg:border-b dark:border-gray-800 dark:bg-gray-900">
      <div className="flex grow flex-col items-center justify-between lg:flex-row lg:px-6">
        {/* Left: Logo and Toggles */}
        <div className="flex w-full items-center justify-between gap-2 border-b border-gray-200 px-3 py-2 sm:gap-4 lg:justify-normal lg:border-b-0 lg:px-0 lg:py-4 dark:border-gray-800">
          {/* Sidebar Toggle */}
          <button
            onClick={toggle}
            className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-gray-200 text-gray-500 hover:bg-gray-100 dark:border-gray-800 dark:text-gray-400 dark:hover:bg-gray-800"
          >
            <HiOutlineMenuAlt2 className="text-[16px] sm:text-[18px] lg:text-[20px]" />
          </button>

          {/* Mobile Logo */}
          <a href="/" className="lg:hidden">
            <Image
              src="/images/logo-1-dark.png"
              alt="Logo"
              width={50}
              height={50}
              priority
            />
          </a>

          {/* Menu Toggle (Mobile) */}
          <button
            onClick={() => setMenuToggle(!menuToggle)}
            className={`z-[99999] flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg text-gray-700 hover:bg-gray-100 lg:hidden dark:text-gray-400 dark:hover:bg-gray-800 ${
              menuToggle ? "bg-gray-100 dark:bg-gray-800" : ""
            }`}
          >
            <BsThreeDotsVertical className="text-[16px] sm:text-[18px]" />
          </button>
        </div>

        {/* Right: Icons and Dropdowns */}
        <div
          className={`${
            menuToggle ? "flex" : "hidden"
          } w-full items-center justify-end gap-2 px-3 py-3 sm:gap-4 sm:px-5 sm:py-4 lg:flex lg:px-0`}
        >
          <div className="flex items-center gap-2 sm:gap-3 ml-auto">
            {/* Dark Mode Toggle */}
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="relative flex h-9 w-9 sm:h-11 sm:w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-gray-500 hover:bg-gray-100 hover:text-gray-700 dark:border-gray-800 dark:bg-gray-900 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white"
            >
              {darkMode ? (
                <BsSun className="text-[16px] sm:text-[18px]" />
              ) : (
                <BsMoon className="text-[16px] sm:text-[18px]" />
              )}
            </button>

            {/* User Menu */}
            <div className="relative z-[100]" ref={userRef}>
              <button
                onClick={() => {
                  setUserOpen(!userOpen);
                }}
                className="flex items-center gap-1 sm:gap-2 rounded-lg px-2 sm:px-3 py-2 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-100 dark:text-gray-400 dark:hover:bg-gray-800"
              >
                <Image
                  src="/images/logo-user.png"
                  alt="User"
                  width={28}
                  height={28}
                  className="rounded-full"
                />
                <span className="hidden lg:block">Musharof</span>
              </button>
              {userOpen && (
                <div className="absolute right-0 mt-2 w-48 sm:w-64 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg dark:border-gray-800 dark:bg-gray-900 z-[10000]">
                  <div className="mb-3">
                    <p className="text-sm font-medium text-gray-800 dark:text-white">
                      Musharof Chowdhury
                    </p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">
                      randomuser@pimjo.com
                    </p>
                  </div>
                  <ul className="space-y-1 text-sm">
                    <li>
                      <a
                        href="/settings"
                        className="block px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800"
                      >
                        Account Settings
                      </a>
                    </li>
                    <li>
                      <button className="w-full text-left px-3 py-2 rounded hover:bg-gray-100 dark:hover:bg-gray-800">
                        Sign Out
                      </button>
                    </li>
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
