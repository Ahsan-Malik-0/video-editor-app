/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        cinzel: ['Cinzel', 'serif'],
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        gold: '#C9A84C',
        'gold-light': '#e0bb60',
        dark: '#0A0A0A',
        card: '#111111',
      },
      transitionDuration: {
        400: '400ms',
      },
    },
  },
  plugins: [],
};
