/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Ubuntu', 'Roboto', 'sans-serif'],
      },
      gridTemplateColumns: {
        '40/60': '38% 60%',
        '30/70': '28% 70%',
      },
      colors: {
        mint: '#1DB78E',
      },
    },
  },
  plugins: [],
}
