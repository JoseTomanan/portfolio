import mixins from 'postcss-mixins';
import stylelint from 'stylelint';

export default {
  plugins: [
    mixins,
    stylelint,
    {
      tailwindcss: {},
      autoprefixer: {},
    },
  ],
}
