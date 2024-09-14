import { nextui } from "@nextui-org/react";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gray: {
          DEFAULT: "#333237",
          light: "#F5F5F5",
          ligher: "#B4B4B4",
        },
        dark: {
          DEFAULT: "#121214",
          light: "#29292C",
          ligher: "#1E1E1F",
        },
        disabledText: "#C8C8C8",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
