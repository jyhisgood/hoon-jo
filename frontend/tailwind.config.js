module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        roboto: ['var(--roboto)'],
        pacifico: ['var(--pacifico)'],
        bodoniModa: ['var(--bodoniModa)'],
        yanone: ['var(--yanone)'],
      },
    },
  },
  plugins: [],
};
