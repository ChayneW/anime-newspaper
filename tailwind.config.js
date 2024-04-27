const { Archivo } = require('next/font/google');

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      xs: "400px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1220px",
      "2xl": "1440px",
      "3xl": "1700px",
    },
    extend: {
      fontFamily: {
        noto: ['Noto Serif JP', 'Times'],
        roman: ['Times New Roman', 'Times', 'sans-serif'],
        archivo: ['Archivo Black'],
        anton: ['Anton'],
        bitter: ['Bitter'],
        poppins: ['Poppins']
      },
    },
  },
  plugins: [],
}
