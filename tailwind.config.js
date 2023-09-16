/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Raleway", ...defaultTheme.fontFamily.sans],
      },
      keyframes: {
        fadeInUp: {
          '0%': { transform: 'translateY(-20%)', opacity: 0 },
          '100%': { transform: 'translateY(0%)', opacity: 1 },
        },
      },
      animation: {
        'fade-in-up': 'fadeInUp 1.5s',
      },
    },
  },
  plugins: [],
};
