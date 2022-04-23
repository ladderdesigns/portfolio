module.exports = {
  mode: 'jit',
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}', './public/**/*.html',
  './src/**/*.{js,jsx,ts,tsx}', ],
  media: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        'xs': '350px',
      },
      spacing: {
        108: '27rem',
        120: '30rem',
        132: '33rem',
       },
      transitionProperty: {
        'width': 'width',
        'spacing': 'margin, padding'

      },
      fontFamily: {
        'base': ['Roboto']
       },
       colors: {
         champagne: "#FEE7D1",
         orange: {
           100: "#FFE8E0",
           200: "#FFD1C1",
           300: "#FFBAA3",
           400: "#FFA384",
           500: "#FF8C65",
           600: "#CC7051",
           700: "#99543D",
           800: "#663828",
           900: "#331C14"
         },
       },
    }
  },
  variants: {
    extend: {
      height: ['responsive', 'hover', 'focus']
    },
  },
  plugins: [
  ],
}
