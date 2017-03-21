const config = {
    extends: 'airbnb',

    rules: {
        "indent": [2, 4],
        "import/no-extraneous-dependencies": 0,
    },

    env: {
        'browser': true,
        'es6': true,
        'jest': true
    }
};

if (process.env.NODE_ENV === 'development') {
    config.rules = Object.assign({}, config.rules, {
        'no-console': 0,
    });
}

module.exports = config;
