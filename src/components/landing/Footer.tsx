import React from "react";

export default function Footer() {
  return (
    <footer className="bg-[var(--background-color)] text-[var(--default-color)] text-sm mt-10">
      <div className="border-t border-[color-mix(in_srgb,var(--default-color),transparent_90%)] py-6 text-center">
        <p className="m-0">
          ©{" "}
          <strong className="font-semibold text-[var(--heading-color)]">
            Layaran
          </strong>{" "}
          All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
