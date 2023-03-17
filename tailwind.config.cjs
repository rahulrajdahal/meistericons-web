/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          600: '#3E64FF',
        },
        grey: {
          50: '#F8FAFC',
          100: '#F0F5F9',
          200: '#E1E8F0',
          300: '#CAD5E0',
          600: '#445668',
          700: '#304254',
          800: '#1C2A3A',
          900: '#0D1829',
        },
      },
    },
  },
  plugins: [],
};
