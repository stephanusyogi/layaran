"use client";

import { signIn } from "next-auth/react";
import { useEffect, useRef } from "react";

export default function LoginModal({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";

    const handleClickOutside = (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div
        ref={modalRef}
        className="bg-[var(--background-color)] p-6 rounded-lg shadow-xl w-full max-w-sm mx-4"
      >
        <h2 className="text-xl text-[var(--heading-color)] font-semibold mb-4 text-center">
          Login with Google
        </h2>
        <button
          onClick={() => {
            signIn("google");
            onClose();
          }}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition"
        >
          Continue with Google
        </button>
        <button
          onClick={onClose}
          className="mt-4 text-sm text-gray-500 hover:text-gray-700 w-full text-center cursor-pointer"
        >
          Cancel
        </button>
      </div>
    </div>
  );
}
