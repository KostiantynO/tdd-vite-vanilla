# Vite vanilla TDD

```bash
yarn create vite . --template vanilla
yarn create @eslint/config
```

```bash
yarn add react-loader-spinner
(yarn add -D \
  jest \
  @types/jest \
  @jest/globals \
  eslint \
  prettier \
  eslint-config-prettier \
  eslint-config-airbnb-base \
  eslint-plugin-import)
```

### add `test` script to `package.json`

`package.json`

```json
{ "test": "jest --watchAll --verbose" }
```
