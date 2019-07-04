module.exports = {
  parser: "babel-eslint",
  rules: {
    strict: 0,
  },
  extends: ["eslint:recommended", "plugin:react/recommended"],
  rules: {
    "no-console": "warn",
    "react/prop-types": 0,
    "react/jsx-uses-react": "error",
    "react/jsx-uses-vars": "error",
  },
  parser: "babel-eslint",
  parserOptions: {
    ecmaVersion: 8, // optional, recommended 6+
    ecmaFeatures: {
      jsx: true,
    },
  },
  settings: {
    react: {
      version: "detect",
    },
  },
  env: {
    es6: true,
    browser: true,
    node: true,
  },
}
