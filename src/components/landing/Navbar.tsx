"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen((prevState) => !prevState);
  };

  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const buttonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(target) &&
        buttonRef.current &&
        !buttonRef.current.contains(target)
      ) {
        setDropdownOpen(false);
      }
    };

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="fixed top-0 w-full z-50 bg-background transition-all duration-300 pb-4 md:py-4">
      <div
        className={`container mx-auto px-4 md:px-6 py-3 flex justify-between items-center backdrop-blur-sm ${
          isScrolled
            ? "bg-[var(--navbar-bg-color)] shadow-md"
            : "bg-transparent"
        } rounded-none md:rounded-full shadow-lg`}
      >
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo-1-dark.png"
            alt="Layaran Logo"
            width={80}
            height={80}
            className="mr-2"
            priority
          />
        </Link>

        <nav className="hidden xl:flex space-x-6 text-base font-normal">
          <a href="#hero" className="text-nav hover:text-nav-hover py-2 px-3">
            Home
          </a>
          <a
            href="#about"
            className="text-nav hover:text-nav-hover active py-2 px-3"
          >
            About
          </a>
          <a
            href="#features"
            className="text-nav hover:text-nav-hover py-2 px-3"
          >
            Features
          </a>
          <a
            href="#pricing"
            className="text-nav hover:text-nav-hover py-2 px-3"
          >
            Pricing
          </a>
          <a href="#faq" className="text-nav hover:text-nav-hover py-2 px-3">
            FAQ
          </a>
        </nav>

        {isLoggedIn ? (
          <div className="relative">
            {/* Profile Image */}
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-2"
            >
              <Image
                src="/images/logo-user.png"
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>

            {/* Dropdown Menu */}
            {dropdownOpen && (
              <div
                ref={dropdownRef}
                className="absolute right-0 mt-2 w-48 dropdown-menu shadow-lg rounded-lg p-2 backdrop-blur-sm bg-[var(--navbar-bg-color)]"
              >
                <Link
                  href="/dashboard"
                  className="block px-4 py-2 text-sm text-nav hover:text-nav-hover"
                >
                  Go to My Dashboard
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm text-nav hover:text-nav-hover"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        ) : (
          <Link
            href="/login"
            className="btn-login px-6 py-2 rounded-full text-sm font-medium"
          >
            Login
          </Link>
        )}
      </div>
    </header>
  );
}
