#!/usr/bin/env node

/**
 * @file
 * The script generates the site data (docs, versions, etc.)
 * and writes it to Firebase.
 *
 * It's a part of the release process.
 */

const {getFirebaseDB} = require('../_lib/firebase')
const path = require('path')
const fs = require('fs')
const childProcess = require('child_process')
const listLocales = require('../_lib/listLocales')
const countries = require('world-countries')
const {version} = require('../../package.json')

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

  const docsJSON = fs.readFileSync(path.resolve(process.cwd(), 'tmp/docs.json'))
    .toString()
  const docs = JSON.parse(docsJSON)
  const docsCategories = Object.keys(docs)
  const docsPages = docsCategories.reduce((acc, category) => acc.concat(docs[category]), [])
  const docsKeys = docsPages
    .map(({urlId, category, title, description}, index) => ({urlId, category, title, description, key: index}))

  const locales = listLocales().map(generateLocale.bind(null, tag))

  return {
    tag,
    date,
    prerelease: Boolean(prereleaseRegExp.exec(tag)),
    commit,
    docsPages,
    docsKeys,
    docsCategories,
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
    features,
    locales
  } = data

  return {
    tag,
    date,
    commit,
    prerelease,
    features,
    locales,
    docsKey
  }
}

getFirebaseDB()
  .then(db => {
    const data = generateVersionData()

    const docsListRef = db.ref('/docs')
    const docsRef = docsListRef.push()

    const versionListRef = db.ref('/versions')
    const versionRef = versionListRef.push()

    return Promise.all([
      docsRef.set(generateDocs(data)),
      versionRef.set(generateVersion(data, docsRef.key))
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
