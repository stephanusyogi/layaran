"use client";

import {
  BsHouse,
  BsInfoCircle,
  BsStars,
  BsTags,
  BsQuestionCircle,
} from "react-icons/bs";
import { Link as ScrollLink } from "react-scroll";
import { useEffect, useState } from "react";

const navItems = [
  { id: "hero", label: "Home", icon: <BsHouse size={15} /> },
  { id: "about", label: "About", icon: <BsInfoCircle size={15} /> },
  { id: "features", label: "Features", icon: <BsStars size={15} /> },
  { id: "pricing", label: "Pricing", icon: <BsTags size={15} /> },
  { id: "faq", label: "FAQ", icon: <BsQuestionCircle size={15} /> },
];

export default function MobileBottomNav() {
  const [activeLink, setActiveLink] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll("section[id]");
      let current = "";

      sections.forEach((section) => {
        const el = section as HTMLElement;
        const sectionTop = el.offsetTop - 100;
        const sectionHeight = el.offsetHeight;

        if (
          window.scrollY >= sectionTop &&
          window.scrollY < sectionTop + sectionHeight
        ) {
          current = el.getAttribute("id") || "";
        }
      });

      setActiveLink(current);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // run once on load

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white dark:bg-gray-900 border-t border-gray-200 shadow-md">
      <ul className="flex justify-around items-center h-14">
        {navItems.map((item) => (
          <li key={item.id}>
            <ScrollLink
              to={item.id}
              smooth={true}
              duration={500}
              className={`flex flex-col items-center text-xs cursor-pointer transition-colors ${
                activeLink === item.id
                  ? "text-primary font-semibold"
                  : "text-gray-600 hover:text-primary"
              }`}
            >
              {item.icon}
              {item.label}
            </ScrollLink>
          </li>
        ))}
      </ul>
    </nav>
  );
}
