<p align="center">
  <a href="https://date-fns.org/">
    <img alt="date-fns" title="date-fns" src="https://raw.githubusercontent.com/date-fns/date-fns/master/docs/logotype.svg" width="300" />
  </a>
</p>

<p align="center">
  <b>date-fns</b> provides the most comprehensive, yet simple and consistent toolset
  <br>
  for manipulating <b>JavaScript dates</b> in <b>a browser</b> & <b>Node.js</b>.</b>
</p>

<div align="center">

[🚀&nbsp; date-fns v2 is out](#docs)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[📖&nbsp; Documentation](https://date-fns.org/docs/)&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;[🧑‍💻&nbsp; JavaScript Jobs](#javascript-jobs-by-date-fns)

  <sub>

Powering **>500k Projects** & Generating **~7 Million Downloads/Week**
</sub>

</div>

<hr>

# It's like [Lodash](https://lodash.com) for dates

- It has [**180+ functions** for all occasions](https://date-fns.org/docs/).
- **Modular**: Pick what you need. Works with webpack, Browserify, or Rollup and also supports tree-shaking.
- **Native dates**: Uses existing native type. It doesn't extend core objects for safety's sake.
- **Immutable & Pure**: Built using pure functions and always returns a new date instance.
- **TypeScript & Flow**: Supports both Flow and TypeScript
- **I18n**: Dozens of locales. Include only what you need.
- [and many more benefits](https://date-fns.org/)

```js
import { compareAsc, format } from 'date-fns'

format(new Date(2014, 1, 11), 'yyyy-MM-dd')
//=> '2014-02-11'

const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
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

<!-- START OF README-JOB SECTION -->

We help people find their JavaScript Dream-Job. Learn more about it <b><a href="https://jobs.date-fns.org/">here</a></b>.

<a href="https://fetch.readme-jobs.com/rmj-rec1fZdbrN6qruPot/1/link" target="_blank"><img src="https://fetch.readme-jobs.com/rmj-rec1fZdbrN6qruPot/1/ad" width="270"></a>
<a href="https://fetch.readme-jobs.com/rmj-rec1fZdbrN6qruPot/2/link" target="_blank"><img src="https://fetch.readme-jobs.com/rmj-rec1fZdbrN6qruPot/2/ad" width="270"></a>
<a href="https://fetch.readme-jobs.com/rmj-rec1fZdbrN6qruPot/3/link" target="_blank"><img src="https://fetch.readme-jobs.com/rmj-rec1fZdbrN6qruPot/3/ad" width="270"></a>

👋&nbsp; Know someone who's looking for JavaScript devs? [Recommend us a job!](https://jobs.date-fns.org/#recommend)
<br>
✉️&nbsp; Get jobs worth sharing to your email! [Subscribe to the newsletter](https://jobs.date-fns.org).

<br />
<!-- END OF README-JOB SECTION -->

## License

[MIT © Sasha Koss](https://kossnocorp.mit-license.org/)
