import React from "react";
export default function TablePricing() {
  const headers = ["Feature", "BASIC PLAN", "STANDARD PLAN", "PREMIUM PLAN"];

  const rows = [
    ["Price (/event)", "Rp. 25.000,-", "Rp. 45.000,-", "Rp. 75.000,-"],
    ["Number of Messages", "5,000", "25,000", "100,000"],
    ["Storage", "100 MB", "300 MB", "1 GB"],
    ["Custom Message Bubble Styles", "✅", "✅", "✅"],
    ["IP & Email Tracking", "✅", "✅", "✅"],
    [
      "Chat Background Customization",
      "❌ (Only Solid Colors Background)",
      "✅ (Solid Color & Image Background)",
      "✅ (Solid Color, Image, and Themes)",
    ],
    ["File Image Attachments", "❌", "Up to 10 MB", "Up to 15 MB"],
    ["Animations Effects", "❌", "❌", "✅"],
    ["Chat Themes", "❌", "❌", "✅"],
    [
      "Rehearsal Access",
      "6 Hours Before Event Date",
      "12 Hours Before Event Date",
      "24 Hours Before Event Date",
    ],
  ];

  return (
    <section id="table-pricing" className={`py-20 table-pricing`}>
      {/* Section Title */}
      <div
        className="container mx-auto px-4 text-center mb-12"
        data-aos="fade-up"
      >
        <h2 className="text-3xl sm:text-4xl font-bold mb-2">
          Comprehensive Features,{" "}
          <span className="text-[var(--accent-color)] font-bold">Layaran</span>{" "}
          Live Chat Packages
        </h2>
        <p className="text-gray-600">
          Discover the perfect live chat plan to enhance your customer service
          experience.
        </p>
      </div>

      {/* Responsive Table */}
      <div
        className="container mx-auto px-4 overflow-x-auto"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <table className="min-w-full text-left border border-[var(--table-row-border-color)]">
          <thead className="bg-[var(--accent-color)] text-white">
            <tr>
              {headers.map((header, idx) => (
                <th
                  key={idx}
                  className="px-4 py-3 border border-[var(--table-row-border-color)] font-semibold text-sm"
                >
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr
                key={i}
                className="border-t border-[var(--table-row-border-color)]"
              >
                {row.map((cell, j) => (
                  <td
                    key={j}
                    className={`px-4 py-3 text-sm ${
                      j === 0
                        ? "font-semibold text-[var(--table-text-color)]"
                        : "text-center text-[var(--table-text-color)]/90"
                    } border-l border-r border-[var(--table-row-border-color)]`}
                  >
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
