import globals from "globals";
import pluginJs from "@eslint/js";
import pluginReact from "eslint-plugin-react";
import stylistic from '@stylistic/eslint-plugin' 

/** @type {import('eslint').Linter.Config[]} */
export default [
  {files: ["**/*.{js,mjs,cjs,jsx}"]},
  {languageOptions: { globals: globals.browser }},
  {ignores: ["**/*.config.js", "build/"]},
  pluginJs.configs.recommended,
  pluginReact.configs.flat.recommended,
  stylistic.configs.recommended
];
