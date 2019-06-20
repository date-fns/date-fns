# ![](https://cdn.rawgit.com/date-fns/date-fns/c5bcd92d04f14da194e6298101a6509b1c3b30f0/docs/logo.svg) date-fns

[🙏 **Please help us to make the best date library for JavaScript. We need your support!**](https://opencollective.com/date-fns)

⚠️ **Warning**: the current master represents v2 pre-release version of the library. [See v1 branch](https://github.com/date-fns/date-fns/tree/v1).

**Pinned**: see [a brief comparison with Moment.js](https://github.com/date-fns/date-fns/issues/275#issuecomment-264934189).

**date-fns** provides the most comprehensive, yet simple and consistent toolset
for manipulating **JavaScript dates** in **a browser** & **Node.js**.

**date-fns** is like [lodash](https://lodash.com) for dates. It has
[**180+ functions** for all occasions](https://date-fns.org/docs/).

```js
import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014/02/11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10)
]
dates.sort(compareAsc)
//=> [
//   Wed Feb 11 1987 00:00:00,
//   Mon Jul 10 1989 00:00:00,
//   Sun Jul 02 1995 00:00:00
// ]
```

The library is available as an [npm package](https://www.npmjs.com/package/date-fns).
To install the package run:

```bash
npm install date-fns --save
# or with yarn
yarn add date-fns
```

## Docs

[See date-fns.org](https://date-fns.org/) for more details, API,
and other docs.

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
