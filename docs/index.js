import path from 'path'

export default {
  groups: [
    'General',
    'Common Helpers',
    'Range Helpers',
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
    'ISO Week-Numbering Year Helpers'
  ],

  staticDocs: [
    {
      type: 'markdown',
      urlId: 'README',
      category: 'General',
      title: 'README',
      description: 'Introduction & installation instructions',
      path: path.join(__dirname, '..', 'README.md')
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
      urlId: 'License',
      category: 'General',
      title: 'License',
      description: 'MIT © Sasha Koss',
      path: path.join(__dirname, '..', 'LICENSE.md')
    }
  ]
}
