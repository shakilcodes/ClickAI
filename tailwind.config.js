/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ], theme: {
    extend: {
      colors: {
        primary: '#ffffff',  // Background color
        text: '#333333',
      }
    },
  },
  plugins: [require("daisyui")],
}

