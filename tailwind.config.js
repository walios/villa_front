/** @type {import('tailwindcss').Config} */
const withMT = require("@material-tailwind/react/utils/withMT");

module.exports = withMT({
  content: [
    "./node_modules/flowbite-react/**/*.js",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/preline/dist/*.js",
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
  ],
  plugins: [
    require("flowbite/plugin"),
    require("daisyui"),
    require('preline/plugin'),
  ],
  theme: {
    extend: {
      fontFamily:{
        'poppins': ['Poppins','sans-serif']
      },
      colors: {
        'grey': '#6B6B7F',
        'primary': '#E0B872',
        'dark-blue' : '#14274A',
        'brown': '#E0B872',
        'brown-dark' : '#e09d26',
        'white': {
          '50': '#FFFFFF',
          '100': '#F8FBFF',
          '200': '#FDFEFF',
          '300': '#f5f6fa',
          'DEFAULT': '#FFFFFF'
        },
        primary: {"50":"#fdf2f8","100":"#fce7f3","200":"#fbcfe8","300":"#EC4899","400":"#f472b6","500":"#ec4899","600":"#db2777","700":"#be185d","800":"#9d174d","900":"#831843","950":"#500724"}
      },
      boxShadow: {
          'card': `0px 0px 50px -20px rgba(0, 0, 0, 0.2)`,
      }
    },
  },
});

