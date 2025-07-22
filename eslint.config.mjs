import js from "@eslint/js";
import prettier from "eslint-plugin-prettier";
import globals from "globals";

export default [
  js.configs.recommended,

  {
    plugins: { prettier },
    rules: {
      "prettier/prettier": "error",
      "no-multiple-empty-lines": ["error", { max: 0, maxEOF: 0, maxBOF: 0 }],
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.es2021,
      },
    },
  }
];