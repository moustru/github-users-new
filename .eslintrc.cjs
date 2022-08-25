module.exports = {
  env: {
    browser: true,
    es2020: true,
    node: true,
  },
  extends: [
    "plugin:vue/essential",
    "prettier",
    "plugin:@typescript-eslint/recommended",
  ],
  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@typescript-eslint/parser",
    ecmaVersion: 12,
    sourceType: "module",
  },
  extends: ["plugin:@typescript-eslint/recommended"],
  plugins: ["vue", "prettier", "@typescript-eslint"],
  rules: {
    "prettier/prettier": "error",
  },
};
