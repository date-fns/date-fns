const path = require('path')

module.exports = {
  groups: [
    'General',
    'Types',
    'Common Helpers',
    'Interval Helpers',
    'Timestamp Helpers',
    'Millisecond Helpers',
    'Second Helpers',
    'Minute Helpers',
    'Hour Helpers',
    'Day Helpers',
    'Weekday Helpers',
    'Week Helpers',
    'ISO Week Helpers',
    'Month Helpers',
    'Quarter Helpers',
    'Year Helpers',
    'ISO Week-Numbering Year Helpers',
    'Decade Helpers'
  ],

  staticDocs: [
    {
      type: 'markdown',
      urlId: 'Getting-Started',
      category: 'General',
      title: 'Getting Started',
      description: 'Introduction & installation instructions',
      path: path.join(__dirname, 'gettingStarted.md')
    },
    {
      type: 'markdown',
      urlId: 'Change-Log',
      category: 'General',
      title: 'Change Log',
      description: 'Changes for each version of the library',
      path: path.join(__dirname, '..', 'CHANGELOG.md')
    },
    {
      type: 'markdown',
      urlId: 'Contributing',
      category: 'General',
      title: 'Contributing',
      description: 'Contribution manual',
      path: path.join(__dirname, '..', 'CONTRIBUTING.md')
    },
    {
      type: 'markdown',
      urlId: 'I18n',
      category: 'General',
      title: 'I18n',
      description: 'Internationalization',
      path: path.join(__dirname, 'i18n.md')
    },
    {
      type: 'markdown',
      urlId: 'I18n-Contribution-Guide',
      category: 'General',
      title: 'I18n Contribution Guide',
      description: 'Locales manual',
      path: path.join(__dirname, 'i18nContributionGuide.md')
    },
    {
      type: 'markdown',
      urlId: 'Time-Zones',
      category: 'General',
      title: 'Time Zones',
      description: 'Time zone functions',
      path: path.join(__dirname, 'timeZones.md')
    },
    {
      type: 'markdown',
      urlId: 'ECMAScript-Modules',
      category: 'General',
      title: 'ECMAScript Modules',
      description: 'Tree-shaking guide',
      path: path.join(__dirname, 'esm.md')
    },
    {
      type: 'markdown',
      urlId: 'webpack',
      category: 'General',
      title: 'webpack',
      description: 'Using date-fns with webpack',
      path: path.join(__dirname, 'webpack.md')
    },
    {
      type: 'markdown',
      urlId: 'FP-Guide',
      category: 'General',
      title: 'FP Guide',
      description: 'Curried functions',
      path: path.join(__dirname, 'fp.md')
    },
    {
      type: 'markdown',
      urlId: 'Unicode-Tokens',
      category: 'General',
      title: 'Unicode Tokens',
      description: 'Usage of the Unicode tokens in parse and format',
      path: path.join(__dirname, 'unicodeTokens.md')
    },
    {
      type: 'markdown',
      urlId: 'Upgrade-Guide',
      category: 'General',
      title: 'Upgrade guide',
      description: 'Changes from v1 to v2',
      path: path.join(__dirname, 'upgradeGuide.md')
    },
    {
      type: 'markdown',
      urlId: 'License',
      category: 'General',
      title: 'License',
      description: 'MIT © Sasha Koss',
      path: path.join(__dirname, '..', 'LICENSE.md')
    }
  ],

  sharedDocs: [
    {
      fullPath: path.join(__dirname, 'Interval.js')
    },
    {
      fullPath: path.join(__dirname, 'Options.js')
    },
    {
      fullPath: path.join(__dirname, 'Locale.js')
    }
  ]
}
