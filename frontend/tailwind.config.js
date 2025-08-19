/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      colors: {
        'instagram-blue': '#0095f6',
        'instagram-gray': '#8e8e8e',
      }
    },
  },
  plugins: [],
}