# ECMAScript Modules

**date-fns** v2.x provides support for
[ECMAScript Modules](http://www.ecma-international.org/ecma-262/6.0/#sec-modules)
via `'date-fns/esm'` subpackage.

## Table of Contents

- [Tree-shaking](#tree-shaking)

- [Usage With TypeScript](#usage-with-typescript)

## Tree-shaking

ECMAScript Modules allow usage with bundlers that support tree-shaking,
like [rollup.js](http://rollupjs.org) and [webpack](https://webpack.js.org):

```javascript
// Without tree-shaking:
import format from 'date-fns/format'
import parse from 'date-fns/parse'
import enUS from 'date-fns/locale/en-US'
import eo from 'date-fns/locale/eo'

// With tree-shaking:
import {format, parse} from 'date-fns/esm'
import {enUS, eo} from 'date-fns/esm/locale'
```

**Important**: as at webpack 2.2.0, tree-shaking is not removing all unused imports.
See [webpack issue #2867](https://github.com/webpack/webpack/issues/2867)

## Usage With TypeScript

Also, as `'date-fns/esm'` function submodules provide default export,
they can be used with TypeScript to import functions in more idiomatic way:

```typescript
// In TypeScript, instead of importing regular function submodules:
import * as format from 'date-fns/format'

// you can use 'date-fns/esm' function submodules as a shortcut:
import format from 'date-fns/esm/format'
```
