# Usage With webpack 1.x

See [example.js](./example.js), [fp.js](./fp.js) and [misc.js](./misc.js) for source code examples.

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
gzip-size dist/example.min.js | pretty-bytes
#=> 6.61 kB
```
