#!/usr/bin/env node

/**
 * @file
 * The script removes outdated locales from the package.
 *
 * It's a part of the build process.
 */

const path = require('path')
const rimraf = require('rimraf')

const packageDir = process.argv[2]
if (!packageDir) throw new Error('Package dir should be passed as an argument')

const locales = require('../../outdatedLocales.json')
locales.forEach(locale => {
  rimraf.sync(path.resolve(packageDir, `locale/${locale}`))
  rimraf.sync(path.resolve(packageDir, `locale/esm/${locale}`))
})
