module.exports = {
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        background: "var(--background-color)",
        surface: "var(--surface-color)",
        heading: "var(--heading-color)",
        text: "var(--default-color)",
        accent: "var(--accent-color)",
        contrast: "var(--contrast-color)",
        nav: "var(--nav-color)",
        "nav-hover": "var(--nav-hover-color)",
      },
      fontFamily: {
        sans: "var(--default-font)",
        heading: "var(--heading-font)",
        nav: "var(--nav-font)",
      },
    },
  },
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
};
