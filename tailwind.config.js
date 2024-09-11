/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#5f6fFF",
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
    },
  },
  plugins: [],
};
