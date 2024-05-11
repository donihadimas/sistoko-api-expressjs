const globals = require("globals");
const pluginJs = require("@eslint/js");


export default [
  { files: ["**/*.js"], languageOptions: { sourceType: "module" } },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
];
