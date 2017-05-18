import firebase from 'firebase'
import path from 'path'
import fs from 'fs'
import childProcess from 'child_process'
import listLocales from './_lib/listLocales'
import countries from 'world-countries'

const {
  FIREBASE_EMAIL,
  FIREBASE_PASSWORD,
  FIREBASE_API_KEY,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_DATABASE_URL,
  FIREBASE_STORAGE_BUCKET,
  FIREBASE_MESSAGING_SENDER_ID
} = process.env

const prereleaseRegExp = /(test|alpha|beta|rc)/

const features = {
  docs: true,
  i18n: true,
  benchmarks: true,
  camelCase: true,
  fp: true,
  esm: true,
  utc: false
}

const importExample = [`import format from 'date-fns/format'`]
  .concat(`format(new Date(2014, 1, 11), 'MM/DD/YYYY')`)
  .concat(`//=> '02/11/2014'`)
  .join('\n')

const constExample = [`dateFns.format(new Date(2014, 1, 11), 'MM/DD/YYYY')`]
  .concat(`//=> '02/11/2014'`)
  .join('\n')

const gettingStartedTabs = ['npm', 'yarn', 'bower', 'cdn']

function generateGettingStarted (version) {
  return {
    npm: {
      title: 'npm',
      install: `npm install date-fns@${version} --save`,
      example: importExample,
      link: 'https://www.npmjs.com/package/date-fns'
    },

    yarn: {
      title: 'Yarn',
      install: `yarn add date-fns@${version}`,
      example: importExample,
      link: 'https://www.npmjs.com/package/date-fns'
    },

    bower: {
      title: 'Bower',
      install: `bower install date-fns#${version}`,
      example: constExample,
      link: 'https://libraries.io/bower/date-fns'
    },

    cdn: {
      title: 'CDN & Download',
      install: `<script src="http://cdn.date-fns.org/v${version}/date_fns.min.js"></script>`,
      example: constExample,
      link: `http://cdn.date-fns.org/v${version}/date_fns.min.js`
    }
  }
}

function generateLocale (tag, locale) {
  const {code, fullPath} = locale
  const source = fs.readFileSync(path.join(process.cwd(), fullPath)).toString()
  const languageName = source.match(/\* @language (.*)/)[1]
  const iso639dash2 = source.match(/\* @iso-639-2 (.*)/)[1]

  if (iso639dash2) {
    return {
      code,
      url: `https://github.com/date-fns/date-fns/tree/${tag}/src/locale/${code}`,
      name: languageName,
      countries: countries.reduce((acc, country) => {
        if (Object.keys(country.languages).includes(iso639dash2)) {
          return acc.concat(country.cca2)
        } else {
          return acc
        }
      }, [])
    }
  } else {
    return null
  }
}

function generateVersionData () {
  const version = fs.readFileSync(path.join(process.cwd(), 'VERSION'))
    .toString()
    .replace(/[\s\n]/g, '')

  const tag = `v${version}`

  const commit = childProcess.execSync('git rev-parse HEAD')
    .toString()
    .replace(/[\s\n]/g, '')

  const date = parseInt(
    childProcess.execSync('git show -s --format=%ct')
      .toString()
      .replace(/[\s\n]/g, ''),
    10
  ) * 1000

  const docsJSON = fs.readFileSync(path.join(process.cwd(), 'dist', 'date_fns_docs.json'))
    .toString()
  const docs = JSON.parse(docsJSON)
  const docsCategories = Object.keys(docs)
  const docsPages = docsCategories.reduce((acc, category) => acc.concat(docs[category]), [])
  const docsKeys = docsPages
    .map(({urlId, category, title, description}, index) => ({urlId, category, title, description, key: index}))

  const locales = listLocales().map(generateLocale.bind(null, tag))

  const gettingStarted = generateGettingStarted(version)

  return {
    tag,
    date,
    prerelease: Boolean(prereleaseRegExp.exec(tag)),
    commit,
    docsPages,
    docsKeys,
    docsCategories,
    gettingStarted,
    gettingStartedTabs,
    locales,
    features
  }
}

function generateDocs (data) {
  const {tag, docsPages, docsKeys, docsCategories} = data

  return {
    tag,
    pages: docsPages,
    keys: docsKeys,
    categories: docsCategories
  }
}

function generateVersion (data, docsKey) {
  const {
    tag,
    date,
    commit,
    prerelease,
    gettingStarted,
    gettingStartedTabs,
    features,
    locales
  } = data

  return {
    tag,
    date,
    commit,
    prerelease,
    gettingStarted,
    gettingStartedTabs,
    features,
    locales,
    docsKey
  }
}

firebase.initializeApp({
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  databaseURL: FIREBASE_DATABASE_URL,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_MESSAGING_SENDER_ID
})

firebase.auth()
  .signInWithEmailAndPassword(FIREBASE_EMAIL, FIREBASE_PASSWORD)
  .then(() => {
    const data = generateVersionData()

    const docsList = firebase.database().ref('/docs')
    const docs = docsList.push()

    const versionList = firebase.database().ref('/versions')
    const version = versionList.push()

    return Promise.all([
      docs.set(generateDocs(data)),
      version.set(generateVersion(data, docs.key))
    ])
  })
  .then(() => {
    console.log('Done!')
    process.exit(0)
  })
  .catch((err) => {
    console.log(err)
    process.exit(1)
  })
