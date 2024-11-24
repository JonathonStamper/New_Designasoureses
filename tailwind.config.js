/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors:{
        'darkpurple':'#65558F',
        'lightpurple':'#F7F2FA',
        'clickedpurple':'#E8DEF8',
        'darkgray':'#79747E',
        'superdarkpurple':'#221B81',
        'whitegray':'#F9F9FF',
    }
    },
  },
  plugins: [],
}