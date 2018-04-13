# Usage With webpack 2.x

**Important**: as at webpack 2.2.0, tree-shaking is not removing all unused imports.
See [webpack issue #2867](https://github.com/webpack/webpack/issues/2867)

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
#=> 13.1 kB
```
