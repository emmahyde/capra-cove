/* eslint-env node */
module.exports = {
  "root": true,
  "extends": [
  "eslint:recommended",
  "plugin:@typescript-eslint/recommended"
],
  "parser": "@typescript-eslint/parser",
  "parserOptions": { "project": ["./tsconfig.json"] },
  "plugins": [
  "@typescript-eslint"
],
  "rules": {},
  "ignorePatterns": [
    "*.js",
    "app/assets/builds/**/*.js",
    "config/**/*.js"
  ]
}