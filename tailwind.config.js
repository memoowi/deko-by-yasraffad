/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        teko: 'Teko',
        inter: 'Inter',
      },
      fontSize: {
        navi: '22px',
        title: '46px',
      },
      colors: {
        review: '#909090',
        service: '#D4D4D4',
      }
    },
  },
  plugins: [],
}

