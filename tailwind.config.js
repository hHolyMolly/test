/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    screens: {
      '3xl': '1439.98px',
      '2xl': '1023.98px',
      '1xl': '991.98px',
      xl: '767.98px',
      lg: '551.98px',
      md: '479.98px',
      sm: '374.98px',
    },
    fontFamily: {
      Inter: 'Inter',
    },
    colors: {
      dark: '#222222',
      white: '#FFFFFF',
      grey: {
        100: '#EAEAEA',
        300: '#C4C4C4',
        500: '#9B9B9B',
        700: '#5C5C5C',
      },
      green: {
        300: '#A5D364',
        500: '#9cc95f',
      },

      wrapper: 'rgba(0, 0, 0, 0.5)',

      page: '#E7F6FF',
      'content-color': '#FFFFFF',
      'content-border': '#F3F3F3',
    },
    extend: {
      boxShadow: {
        content: '0px 10px 20px rgba(0, 0, 0, 0.04)',
        card: '0px 14px 30px rgba(0, 0, 0, 0.05)',
        basket: '-10px 4px 24px rgba(0, 0, 0, 0.1)',
      },
    },
  },
  plugins: [],
};
