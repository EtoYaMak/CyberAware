module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [],
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parser: "@typescript-eslint/parser",
  plugins: ["react-refresh"],
  rules: {
    // Disable all rules
    "@typescript-eslint/no-unused-vars": "off",
    "@typescript-eslint/no-explicit-any": "off",
    "no-unused-vars": "off",
    // Turn off all react-refresh rules
    "react-refresh/only-export-components": "off",
  },
};
