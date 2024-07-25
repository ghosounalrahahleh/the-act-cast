/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      primary: '#3b4031',
      secondary: '#3b4031',
      accent: '#f6993f',
      rotate: {
        '270': '270deg',
      }
    },
    screens: {
      'tablet': '850px',
      'xs': '425px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    backgroundColor: {
      'primary': '#3490dc',
      'secondary': '#ffed4a',
      'accent': '#f6993f',
      // Add more custom background colors as needed
    },
  },
  plugins: [],
}