# Usage With webpack 2.x

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
#=> 5.54 kB
```

Note: as at webpack 2.2.0, tree-shaking is not removing all unused imports. See [webpack issue #2867](https://github.com/webpack/webpack/issues/2867)
