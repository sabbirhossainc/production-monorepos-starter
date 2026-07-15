import { defineConfig, globalIgnores } from "eslint/config";
import nextConfig from "eslint-config-next/core-web-vitals";
import prettierConfig from "eslint-config-prettier";
// import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextConfig,
  // ...nextTs,
  prettierConfig,
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
      "@typescript-eslint/no-explicit-any": "warn",
    },
  },
  // globalIgnores([
  //   // Default ignores of eslint-config-next:
  //   ".next/**",
  //   "out/**",
  //   "build/**",
  //   "next-env.d.ts",
  // ]),
]);

export default eslintConfig;

// export default {
//   extends: ['next/core-web-vitals', 'prettier'],
//   rules: {
//     '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
//     '@typescript-eslint/no-explicit-any': 'warn',
//   },
// }