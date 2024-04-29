/** @type {import('stylelint').Config} */
export default {
  // Since stop to update stylelint-config-standard-scss,
  // get the expected behaivor by loading as follows:
  extends: ['stylelint-config-standard', 'stylelint-config-recommended-scss'],
  rules: {
    'color-function-notation': 'legacy',
  },
};
