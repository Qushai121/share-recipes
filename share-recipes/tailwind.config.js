/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ribet pilih warnanya
        'custom-main': '#f9dc5c',
        'custom-dark': '#f4ac32',
        'custom-light': '#ffe566',
        'custom-second': '#BB8A0D',
        'custom-third': '#F6B100',
        'custom-pink': '#F6907B',
        // bukan sembarang putih ini mah 
        'ghost-white': '#FCFCFC',
        'walter-white': '#EDEDED',
        'custom-y': '#ffd400',
        'custom-butbrown': '#805b10',
        'custom-black': '#342E09',
        'custom-ijo': '#66B032'
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif'],
        dmserif: ['DM Serif Display', 'serif'],
        inter: ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [
    function ({ addVariant }) {
      addVariant('child', '& > *');
      addVariant('child-hover', '& > *:hover');
    }
  ],
}