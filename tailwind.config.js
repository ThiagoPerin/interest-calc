/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'main-purple': '#2B1464',
        'purple-soft': '#6b21a899',
        'chart-green': '#00E396',
        'chart-green-soft': '#00E39699',
        'chart-blue': '#008FFB',
        'chart-blue-soft': '#008FFB99',
        'header-orange': '#F4A261',
        'header-orange-soft': '#F4A26199',
        'header-turquoise': '#2a9d8f',
        'header-turquoise-soft': '#2a9d8f99',
        'border-white': '#E0E0E0',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.appearance-textfield': {
          'appearance': 'textfield',
        },
        '.no-spin-buttons': {
          '&::-webkit-outer-spin-button': {
            'appearance': 'none',
          },
          '&::-webkit-inner-spin-button': {
            'appearance': 'none',
          },
        },
      });
    },
  ],
}

