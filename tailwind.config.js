/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line import/no-extraneous-dependencies
import colors from 'tailwindcss/colors';

export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{html,css,scss,js,ts,jsx,tsx}'],
  theme: {
    extend: {},
    colors: {
      ...colors,
      primary: colors.violet,
    },
  },
  plugins: [],
};
