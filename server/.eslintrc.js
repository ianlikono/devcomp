module.exports = {
  extends: "airbnb-base",
  plugins: ["import"],
  rules: {
    quotes: 0,
    "prefer-const": 0,
    eqeqeq: 0,
  },
  globals: {
    describe: 1,
    test: 1,
    expect: 1,
  },
};
