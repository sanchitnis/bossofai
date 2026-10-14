/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        slate: {
          950: '#060B13',      /* Deep Dark Navy */
          900: '#0B1726',
          800: '#152538',
          700: '#233850',
        },
        sky: {
          400: '#E5A823',      /* Accent Gold */
          500: '#C69214',
        }
      },
      fontFamily: {
        serif: ['Merriweather', 'serif'],
        sans: ['Inter', 'sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class',
}
