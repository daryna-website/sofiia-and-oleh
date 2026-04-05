
/** @type {import('tailwindcss').Config} */
export default {
  content: [
  './index.html',
  './src/**/*.{js,ts,jsx,tsx}'
],
  theme: {
    extend: {
      colors: {
        background: '#F7F4EF',
        primary: '#2D4A3E',
        textDark: '#3C3C3C',
        beige: {
          100: '#EDE8DE',
          200: '#E8DDD0',
          300: '#D9CFC0',
        },
        accent: '#A03232',
      },
      fontFamily: {
        heading: ['"Great Vibes"', 'cursive'],
        body: ['Montserrat', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.02em',
      }
    },
  },
  plugins: [],
}
