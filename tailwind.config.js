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
      },
      padding: {
        section : '52px',
        resosec : '20px',
      },
      margin: {
        section: '52px',
        resosec: '20px',
      },
      animation: {
        'spin-slow': 'spin 10s linear infinite',
        'spin-slow2': 'spin 12s linear infinite',
        'spin-slow3': 'spin 8s linear infinite',
        'spin-slow4': 'spin 14s linear infinite',
      },
    },
  },
  plugins: [],
}

