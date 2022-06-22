module.exports = {
  preset: "@vue/cli-plugin-unit-jest/presets/no-babel",
  transform: {
    ".*\\.(js)$": "babel-jest",
  },
  collectCoverage: true,
  collectCoverageFrom: ["**/components/**/*.vue", "!**/node_modules/**"],
  testMatch: ["**/*.spec.(js|ts)"],
};
