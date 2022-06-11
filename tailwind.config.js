/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layout/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      main: "#7acb53",
    },
    extend: {},
  },
  plugins: [require("daisyui")],

  daisyui: {
    themes: ["light", "dark", "cupcake", "emerald", "dracula", "night"],
    darkTheme: "night",
  },
};
