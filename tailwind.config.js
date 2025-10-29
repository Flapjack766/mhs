/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f5f5f4',
          100: '#e7e5e4',
          200: '#d1cecc',
          300: '#b8b3b0',
          400: '#a39d98',
          500: '#8b827c',
          600: '#7a716a',
          700: '#655e58',
          800: '#544e49',
          900: '#46413d',
          950: '#2a2521',
        },
        timber: {
          50: '#faf9f7',
          100: '#f2f0eb',
          200: '#e3ddd2',
          300: '#d1c6b3',
          400: '#bdaa8f',
          500: '#a8926f',
          600: '#9a7f5e',
          700: '#816a4e',
          800: '#6b5642',
          900: '#584738',
          950: '#2f251c',
        }
      },
      fontFamily: {
        serif: ['Playfair Display', 'serif'],
        sans: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
