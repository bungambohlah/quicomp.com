import tailwindTypoGraphy from '@tailwindcss/typography';
import daisyui from 'daisyui';

export default {
  content: ['./src/**/*.tsx', './src/**/*.ts'],
  theme: {
    extend: {
      inset: {
        100: '100%',
      },
    },
  },
  variants: {},
  plugins: [tailwindTypoGraphy, daisyui],
  daisyui: {
    themes: ['winter', 'dark'],
  },
};
