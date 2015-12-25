var fetch = require('node-fetch')
var execSync = require('child_process').execSync

var zapierHookURL = 'https://zapier.com/hooks/catch/3petdc/'
var tag = process.env.TRAVIS_TAG
  || execSync('git describe --abbrev=0 --tags').toString().trim()

fetch(zapierHookURL, {
  method: 'POST',
  body: JSON.stringify({
    tweet: `date-fns ${tag} is published! See changelog: https://github.com/toptal/tracker-front/blob/master/CHANGELOG.md#${tag.replace(/\./g, '')}`
  }),
  headers: {'Content-Type': 'application/json'}
})
