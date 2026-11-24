import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

import typescriptRules from "@ethberry/eslint-config/presets/tsx.mjs";
import jestRules from "@ethberry/eslint-config/tests/jest.mjs";

export default [
  {
    ignores: ["**/dist"],
  },

  {
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.eslint.json"],
        tsconfigRootDir: dirname(fileURLToPath(import.meta.url)),
      },
    },
  },

  ...typescriptRules,
  ...jestRules,
];
