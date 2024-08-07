/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        marine_blue: "var(--Marine-blue)",
        purplish_blue: "var(--Purplish-blue)",
        pastel_blue: "var(--Pastel-blue)",
        light_blue: "var(--Light-blue)",
        strawberry_red: "var(--Strawberry-red)",
        cool_gray: "var(--Cool-gray)",
        light_gray: "var(--Light-gray)",
        magnolia: "var(--Magnolia)",
        alabaster: "var(--Alabaster)",
        white: "var(--White)",
      },
      backgroundImage: {
        desktopBg: "url('../../assets/images/bg-sidebar-desktop.svg')",
        mobileBg: "url('../../assets/images/bg-sidebar-mobile.svg')",
        checkmark: "url('../../../../assets/images/icon-checkmark.svg')",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
