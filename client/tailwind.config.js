/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        main: '#000014',
        shine: '#FFF',
        fine: '#999999',
        secondary: '#33373D',
        secondaryLight: '#191E25',
        mainBlue: '#3c78b4',
      },
    },
  },
  plugins: [],
};
