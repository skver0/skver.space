/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/svhighlight/**/*.svelte",
  ],
  theme: {
    extend: {
      fontFamily: {
        assistant: ["Assistant", "sans-serif"],
        martel: ["Martel", "serif"],
      },
    },
  },
  plugins: [],
};
