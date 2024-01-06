/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    backgroundColor: (theme) => ({
      ...theme("colors"),
      primary: "#3490dc",
      cream: "#fffaf0",
      secondary: "#ffed4a",
      danger: "#e3342f",
      "dark-0": "#23283e",
      "dark-1": "#bdbddd",
    }),
    container: {
      center: true,
    },
    extend: {},
  },
  plugins: [],
};
