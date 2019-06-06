# webpack

## Removing unused languages from dynamic import

If locale is required dynamically all languages in the date-fns are loaded by webpack into bundle (~160kb) or split across the chunks. This prolongs the build process and increases the amount of space taken. However, it is possible to use webpack to trim down languages using [ContextReplacementPlugin].

Let's assume that we have a single point in which supported locales are present:

`config.js`:

```js
export const supportedLocales = ['en', 'de', 'pl', 'it']
```

We could also have a function that formats the date:

```js
const getLocale = locale => require(`date-fns/locale/${locale}/index.js`)

const formatDate = (date, formatStyle, locale) => {
  return format(date, formatStyle, {
    locale: getLocale(locale)
  })
}
```

In order to exclude unused languages we can use webpacks [ContextReplacementPlugin].

`webpack.config.js`:

```js
import webpack from 'webpack'
import { supportedLocales } from './config.js'

export default const config = {
  plugins: [
    new webpack.ContextReplacementPlugin(
      /date\-fns[\/\\]/,
      new RegExp(`[/\\\\\](${supportedLocales.join('|')})[/\\\\\]`)
    )
  ]
}
```

This results in a language bundle of ~23kb .

[ContextReplacementPlugin]: https://webpack.js.org/plugins/context-replacement-plugin/