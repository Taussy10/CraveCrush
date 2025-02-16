/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        textColor: "#f97316",
        primary: "#FB923C"
      },
  fontFamily:{
  "p-regular-400": "Poppins_400Regular",
  "p-medium-500": "Poppins_700Bold",
  "p-bold-700": "Poppins_700Bold",
  "p-extra-bold-700": "Poppins_800ExtraBold",
  },
    }
  },
  plugins: [],
};
