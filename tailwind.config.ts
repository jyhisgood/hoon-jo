import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
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
export default config;
