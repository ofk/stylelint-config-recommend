# @ofk/stylelint-config-recommend

This is an my stylelint config.

It uses [Standard's](https://github.com/stylelint/stylelint-config-standard) as a base, has [Prettier](https://prettier.io/) and [SCSS](https://sass-lang.com/) baked in, and overrides some rules I've seen ourselves having to change often.

## Quick start

1. Install the following dev-dependencies:

   ```
   npm install --save-dev @ofk/stylelint-config-recommend stylelint prettier
   ```

2. Extend the `@ofk/stylelint-config-recommend` config in your `.stylelintrc` (or `stylelint` key in your `package.json`):

   ```json
   "stylelint": {
     "extends": "@ofk/stylelint-config-recommend"
   }
   ```

3. Run `eslint` on your project as part of your `lint` and `format` scripts:

   ```json
   "scripts": {
     "lint": "stylelint \"**/*.{css,scss}\"",
     "format": "npm run lint -- --fix",
     "pretest": "npm run lint",
     "test": "test command"
   }
   ```
