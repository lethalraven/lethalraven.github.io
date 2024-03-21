/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  darkMode: false, // media or class
  content: ['./src/**/*.{js,jsx,ts,tsx}',],
  purge: ['./src/**/*.{js,jsx,ts,tsx}',],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

