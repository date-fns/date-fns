# Usage With Browserify

See [index.js](./index.js) for source code example.

See [package.json scripts](./package.json) for CLI usage.

## Build Example

```sh
yarn
yarn run build
```

See ./dist for output.

## Minimal Build Size

You can see minimal build size (when you use just one function):

```sh
gzip-size dist/bundle.min.js | pretty-bytes
#=> 1.48 kB
```
