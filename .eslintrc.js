module.exports = {
  extends: ['airbnb-base', 'prettier'],
  plugins: ['prettier'],
  rules: {
    'prettier/prettier': 'error',
    // 'func-names': 0,
    // 'prefer-destructuring': 0,
    // 'consistent-return': 0,
    // 'no-shadow': 0,
    // 'global-require': 0,
    // 'import/prefer-default-export': 0,
    'import/no-extraneous-dependencies': [
      'error',
      {
        devDependencies: true,
        optionalDependencies: false,
        peerDependencies: false,
      },
    ],
  },
  globals: {
    document: true,
    Waypoint: true,
    svg4everybody: true,
    jQuery: true,
    $: true,
  },
};
