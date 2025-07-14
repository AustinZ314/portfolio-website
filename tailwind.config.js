/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
      colors: {
        background: '#151515',
        text: '#f4f4f4',
        accent: '#00b8d9',
      },
    },
  },
  plugins: [],
}

