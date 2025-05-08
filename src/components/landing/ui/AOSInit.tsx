// components/AOSInit.tsx
"use client";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init(); // Always initialize AOS

    if (window.innerWidth <= 768) {
      // Set all AOS delays to 0 on small screens
      const aosElements = document.querySelectorAll("[data-aos-delay]");
      aosElements.forEach((el) => {
        el.setAttribute("data-aos-delay", "0");
      });
    }
  }, []);

  return null;
}
