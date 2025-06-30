import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";
import { defineConfig } from "eslint/config";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

export default defineConfig([
  {
    ignores: [
      '**/node_modules/**',
      '**/build/**',
      '**/dist/**',
      '.next/**',
    ],

    extends: [
      ...compat.extends("next/core-web-vitals", "next/typescript"),
    ],

    rules: {
      // Enforce semicolons
      "semi": ["error", "always"],
      
      // TypeScript-specific rules
      "@typescript-eslint/explicit-member-accessibility": ["error", {
        accessibility: "explicit",
        overrides: {
          accessors: "off",
          constructors: "no-public",
          methods: "explicit",
          properties: "explicit",
          parameterProperties: "off",
        },
      }],

      "@typescript-eslint/array-type": ["error", {
        default: "generic",
      }],

      "@typescript-eslint/no-unused-vars": "warn",
      "max-len": ["error", {
        code: 200,
      }],
      "no-fallthrough": "error",
      "quote-props": ["error", "as-needed"],
      
      // Relaxed rules
      "@typescript-eslint/no-inferrable-types": "off",
      "@typescript-eslint/no-explicit-any": "warn",
      "@typescript-eslint/no-non-null-assertion": "off",
      "@typescript-eslint/no-empty-interface": "off",
      "@typescript-eslint/no-empty-function": "warn",
    },
  },
]);
