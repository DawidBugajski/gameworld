/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        hero: "url('/src/assets/images/home-background.jpg')",
        premiere: "url('/src/assets/images/home-premiere.jpg')",
        dlc: "url('/src/assets/images/page-dlc.jpg')",
        gameSeries: "url('/src/assets/images/page-series.jpg')",
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
      },
      colors: {
        'main-red': '#dc1414',
        'main-dark-red': '#781010',
        'main-gray': '#0a0a0a',
      },
      keyframes: {
        gototop: {
          '50%': { transform: 'rotate(5deg)' },
          '100%': { transform: 'rotate(-5deg)' },
        },
      },
      animation: {
        gototop: 'gototop 0.5s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
