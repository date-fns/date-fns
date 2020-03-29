# Wrapper func of date-fns and minifies to run on Browsers with Browserify

See [package.json scripts](./package.json) for CLI usage.

## Build Example

```sh
yarn # at project root
yarn # at here
yarn run build
```

## Test Example

```sh
yarn test
```

See ./dist for output.

## Minimal Build Size

You can see minimal build size (when you use just one function):

```sh
gzip-size dist/date-fns-wrapper.min.js | pretty-bytes
#=> 7.15 kB
```
