module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': null,
    'unit-no-unknown': [
      true,
      {
        ignoreUnits: ['dvh', 'dvw'],
      },
    ],
  },
};
