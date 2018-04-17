# Usage With lodash FP

See [example.js](./example.js) for source code example.

See [package.json scripts](./package.json) for CLI usage.

## Build Example

```sh
yarn
yarn run build
```

See ./dist for output.

## Minimal Build Size

You can see the build size:

```sh
gzip-size dist/example.min.js | pretty-bytes
#=> 23.4 kB
```
