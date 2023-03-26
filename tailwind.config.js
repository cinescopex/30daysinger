/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      textShadow: {
        custom: "2px 2px 10px black",
      },
    },
  },
  plugins: [
    // Import the text-shadow plugin
    require("tailwindcss-textshadow"),
  ],
};
