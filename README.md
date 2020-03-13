# ![](https://cdn.rawgit.com/date-fns/date-fns/c5bcd92d04f14da194e6298101a6509b1c3b30f0/docs/logo.svg) date-fns

🔥🔥🔥 **date-fns v2 is out!** 🔥🔥🔥

⭐️ **Upgrading from v1 to v2?**

- [See the changelog](https://github.com/date-fns/date-fns/blob/master/CHANGELOG.md)
- Check out [@date-fns/upgrade](https://github.com/date-fns/date-fns-upgrade) and [@date-fns/upgrade-codemod](https://github.com/date-fns/date-fns-upgrade-codemod), they could help you with the upgrade!

**date-fns** provides the most comprehensive, yet simple and consistent toolset
for manipulating **JavaScript dates** in **a browser** & **Node.js**.

**date-fns** is like [lodash](https://lodash.com) for dates. It has
[**180+ functions** for all occasions](https://date-fns.org/docs/).

```js
import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

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

## JavaScript jobs by date-fns

👋 Know someone who's looking for JavaScript devs? [Recommend us a job!](https://jobs.date-fns.org/#recommend)

✉️ Get jobs worth sharing to your email! [Subscribe to the newsletter](https://jobs.date-fns.org).

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
