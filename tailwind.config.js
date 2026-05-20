/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        amber: {
          50: '#f4f8ff',
          100: '#e9f0ff',
          200: '#d3e2ff',
          300: '#adc8ff',
          400: '#7fa2ff',
          500: '#3b69ff',  // Vibrant Sapphire Blue
          600: '#2349e5',  // Royal Blue Accent
          700: '#1c35cc',  // Deep Cobalt
          800: '#182ba8',
          900: '#16258c',
          950: '#0f1647',
        }
      }
    },
  },
  plugins: [],
}