# Usage With babel, webpack and babel-plugin-date-fns

See [example.js](./example.js) for source code example.

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
#=> 6.67 kB
```
