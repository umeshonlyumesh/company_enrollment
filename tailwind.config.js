/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        // Truist brand colors
        'truist-purple': '#44137C', // Primary purple
        'truist-blue': '#0073AF',   // Secondary blue
        'truist-light-blue': '#009CDE',
        'truist-teal': '#00A5B5',
        'truist-green': '#008755',
        'truist-yellow': '#FFB819',
        'truist-orange': '#FF7A00',
        'truist-red': '#D93F0B',
        'truist-gray': '#F2F2F2',
        'truist-dark-gray': '#4A4A4A',
      },
      fontFamily: {
        'truist': ['Truist Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
