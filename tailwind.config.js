/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        darkblue: "#0b2434",
        lightyellow: "#f5f5f5",
      },
      spacing:{
        90:"22.5rem"
      }
    },
  },
  plugins: [],
};
