module.exports = {
  content: ['./*.html'],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1020px',
      xl: '1440px',
    },
    extend: {
      colors: {
        primaryGreen: 'hsl(157, 74%, 62%)',
        white: 'hsl(0, 0%, 100%)',
        darkBlue: 'hsl(224, 35%, 11%)',
        darkPurple: 'hsl(225, 26%, 23%)',
        lightPurple: 'hsl(225, 21%, 45%)',
        veryLightPurple: 'hsl(225, 40%, 83%)',
      },
      fontFamily: {
        sans: ['Chivo', 'sans-serif'],
      },
    },
  },
  plugins: [require('daisyui')],
};
