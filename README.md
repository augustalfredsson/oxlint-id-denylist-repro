# oxlint id-denylist bug reproduction

`eslint-js/id-denylist` incorrectly flags global property access (e.g. `Number.MAX_SAFE_INTEGER`) when `env` is set to `"browser": true` (have also reproduced with `"node": true`) in the oxlint config. ESLint's `id-denylist` does not flag these with `globals: { ...globals.browser }` set — it only flags user-defined identifiers.

## Setup

```sh
npm install
```

## Reproduce

```sh
# oxlint — incorrectly flags Number.MAX_SAFE_INTEGER and Number.isFinite()
npm run oxlint

# eslint — correctly produces no id-denylist errors
npm run eslint
```

Removing `"env": { "browser": true }` from `.oxlintrc.json` makes the false positives disappear.

## Expected behavior

`id-denylist` should only flag user-defined identifiers (variable declarations, function parameters, etc.), not references to built-in globals. This matches ESLint's behavior.
