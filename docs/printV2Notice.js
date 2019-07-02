const env = process.env
const CI = is(env.CI)
const DISABLE_OPENCOLLECTIVE = is(env.DISABLE_OPENCOLLECTIVE)
const SILENT = ['silent', 'error', 'warn'].includes(env.npm_config_loglevel)

function is(it) {
  return !!it && it !== '0' && it !== 'false'
}

if (!CI && !DISABLE_OPENCOLLECTIVE && !SILENT) {
  console.log(`
🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥

  Thank you for testing (⩗) date-fns v2!

  In v2 we've introduced a number of breaking changes
  that make date-fns even more consistent and reliable.
  Please read the changelog carefully: https://git.io/fxCWb

  Please support us at Open Collective: https://opencollective.com/date-fns

🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥🔥
`)
}
