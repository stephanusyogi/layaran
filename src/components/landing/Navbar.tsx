"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Link as ScrollLink, animateScroll as scroll } from "react-scroll";
import LoginModal from "@/components/landing/ui/LoginModal";
import { useSession, signIn, signOut } from "next-auth/react";
import Portal from "./ui/Portal";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [activeLink, setActiveLink] = useState<string>("");
  const [isScrolled, setIsScrolled] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);

  const { data: session, status } = useSession();

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

      const sections = document.querySelectorAll("section[id]");
      let currentSectionId = "";

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 100;
        const sectionHeight = el.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          currentSectionId = el.getAttribute("id") || "";
        }
      });

      setActiveLink(currentSectionId);
    };

    document.addEventListener("mousedown", handleClickOutside);
    window.addEventListener("scroll", handleScroll);

    handleScroll(); // Run once on mount in case user refreshes mid-page

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
          {/* Using react-scroll's Link for smooth scroll */}
          <ScrollLink
            to="hero"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-nav hover:text-nav-hover py-2 px-3 ${
              activeLink === "hero" ? "active" : ""
            }`}
          >
            Home
          </ScrollLink>
          <ScrollLink
            to="about"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-nav hover:text-nav-hover py-2 px-3 ${
              activeLink === "about" ? "active" : ""
            }`}
          >
            About
          </ScrollLink>
          <ScrollLink
            to="features"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-nav hover:text-nav-hover py-2 px-3 ${
              activeLink === "features" ? "active" : ""
            }`}
          >
            Features
          </ScrollLink>
          <ScrollLink
            to="pricing"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-nav hover:text-nav-hover py-2 px-3 ${
              activeLink === "pricing" ? "active" : ""
            }`}
          >
            Pricing
          </ScrollLink>
          <ScrollLink
            to="faq"
            smooth={true}
            duration={500}
            className={`cursor-pointer text-nav hover:text-nav-hover py-2 px-3 ${
              activeLink === "faq" ? "active" : ""
            }`}
          >
            FAQ
          </ScrollLink>
        </nav>

        {status === "loading" ? null : session ? (
          <div className="relative">
            <button
              ref={buttonRef}
              onClick={() => setDropdownOpen((prev) => !prev)}
              className="flex items-center space-x-2"
            >
              <Image
                src={session.user?.image || "/images/logo-user.png"}
                alt="User Profile"
                width={40}
                height={40}
                className="rounded-full"
              />
            </button>

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
                <button
                  onClick={() => {
                    signOut();
                    setDropdownOpen(false);
                  }}
                  className="block w-full text-left px-4 py-2 text-sm text-nav hover:text-nav-hover cursor-pointer"
                >
                  Logout
                </button>
              </div>
            )}
          </div>
        ) : (
          <>
            <button
              onClick={() => setShowLoginModal(true)}
              className="btn-login px-6 py-2 rounded-full text-sm font-medium cursor-pointer"
            >
              Login
            </button>
            {showLoginModal && (
              <Portal>
                <LoginModal
                  isOpen={showLoginModal}
                  onClose={() => setShowLoginModal(false)}
                />
              </Portal>
            )}
          </>
        )}
      </div>
    </header>
  );
}
