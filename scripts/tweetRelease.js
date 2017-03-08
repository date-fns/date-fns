import fetch from 'node-fetch'
import {execSync} from 'child_process'
import formatDate from '../src/format'

const zapierHookURL =
  `https://zapier.com/hooks/catch/${process.env.ZAPIER_TWEET_RELEASE_HOOK_ID}/`
const tag = process.env.TRAVIS_TAG ||
  execSync('git describe --abbrev=0 --tags').toString().trim()
const formattedDate = formatDate(new Date(), 'YYYY-MM-DD')
const changelogUrl =
  `https://date-fns.org/docs/Change-Log#${tag.replace(/^v/, '')}-${formattedDate}`

console.log('~ Posting release tweet')

fetch(zapierHookURL, {
  method: 'POST',
  body: JSON.stringify({
    tweet: `date-fns ${tag} is published! See changelog: ${changelogUrl}.`
  }),
  headers: {'Content-Type': 'application/json'}
})
  .then(() => console.log('+ Done!'))
  .catch((err) => {
    console.error(err)
    process.exit(1)
  })
