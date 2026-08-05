/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        podium: ['"FSP DEMO - PODIUM Sharp 4.11"', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },

      colors: {
        phoenix: {
          primary: '#FF6B00',   // Brand Orange
          secondary: '#111827', // Dark Gray
          accent: '#F59E0B',    // Golden
          light: '#F8FAFC',
          dark: '#0F172A',
        },
      },
    },
  },
  plugins: [],
}