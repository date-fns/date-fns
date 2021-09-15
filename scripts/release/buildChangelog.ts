import { fromEntries, last, sample, uniq } from 'js-fns'
import sg from 'simple-git'
import { Octokit } from '@octokit/core'
import format from '../../src/format'

const git = sg()
const gh = new Octokit({ auth: process.env.GITHUB_TOKEN })

;(async () => {
  const changelog = await buildChangelog()
  console.log(renderChangelog(changelog))
})()

function renderChangelog(changelog: ChangelogVersion) {
  let markdown = `## ${renderVersion(changelog.version)} - ${format(
    Date.now(),
    'yyyy-MM-dd'
  )}

${sample(thanksOptions)!(renderAuthors(changelog.authors))}`

  if (changelog.fixed.length)
    markdown += `

### Fixed

${changelog.fixed.map(renderItem).join('\n\n')}`

  if (changelog.changed.length)
    markdown += `

### Changed

${changelog.changed.map(renderItem).join('\n\n')}`

  if (changelog.added.length)
    markdown += `

### Added

${changelog.added.map(renderItem).join('\n\n')}`
  return markdown
}

async function buildChangelog(): Promise<ChangelogVersion> {
  const lastTag = last((await git.tags()).all)
  if (!lastTag) throw new Error("Can't find tags")

  const commits = await git.log({ from: lastTag, to: 'HEAD' })

  const authorsMap: { [hash: string]: string } = fromEntries(
    await Promise.all(
      commits.all.map((c) =>
        gh
          .request('GET /repos/{owner}/{repo}/commits/{ref}', {
            owner: 'date-fns',
            repo: 'date-fns',
            ref: c.hash,
          })
          .then(({ data }) => [c.hash, data.author?.login] as [string, string])
      )
    )
  )

  const items: ChangelogItem[] = []
  const authors: Author[] = []

  commits.all.forEach((commit) => {
    const author: Author = {
      login: authorsMap[commit.hash],
      email: commit.author_email,
      name: commit.author_name,
    }

    const prCaptures = commit.message.match(/\(#(\d+)\)/)
    const pr = prCaptures ? parseInt(prCaptures[1]) : undefined

    let issues: number[] | undefined
    commit.message.match(new RegExp(closesRegExp, 'g'))?.forEach((str) => {
      const issueCaptures = str.match(closesRegExp)
      if (issueCaptures)
        issues = (issues || []).concat(
          issueCaptures.slice(1).map((issue) => parseInt(issue))
        )
    })
    if (!issues?.length) issues = undefined

    const commitItems = extractItems(commit.body.trim(), { author, pr, issues })

    if (!authors.find((a) => a.login === author.login)) authors.push(author)
    items.push(...commitItems)
  })

  const changed = items.filter((i) => i.type === 'changed')
  const fixed = items.filter((i) => i.type === 'fixed')
  const added = items.filter((i) => i.type === 'added')

  const lastVersion = parseVersion(lastTag)
  let version: Version
  if (items.find((i) => i.breaking)) {
    version = { major: lastVersion.major + 1, minor: 0, patch: 0 }
  } else if (changed.length || added.length) {
    version = {
      major: lastVersion.major,
      minor: lastVersion.minor + 1,
      patch: 0,
    }
  } else {
    version = {
      major: lastVersion.major,
      minor: lastVersion.minor,
      patch: lastVersion.patch + 1,
    }
  }

  return { version, changed, fixed, added, authors }
}

function parseVersion(tag: string): Version {
  const captures = tag.match(/v(\d+)\.(\d+).(\d+)/)
  if (!captures) throw new Error(`Can't parse version from tag "${tag}"`)
  return {
    major: parseInt(captures[1]),
    minor: parseInt(captures[2]),
    patch: parseInt(captures[3]),
  }
}

function extractItems(
  message: string,
  {
    author,
    pr,
    issues,
  }: { author: Author; pr: number | undefined; issues: number[] | undefined }
): ChangelogItem[] {
  const item = ({
    type,
    message,
  }: {
    type: ChangelogType
    message: string
  }) => {
    const issuesCaptures = message.match(issuesRegExp)
    const messageIssues = issuesCaptures?.reduce<number[]>(
      (acc, capture) =>
        acc.concat(
          (capture.match(/#\d+/g) || []).map((str) => parseInt(str.slice(1)))
        ),
      []
    )
    const itemIssues = messageIssues?.length
      ? uniq(messageIssues.concat(issues || []))
      : issues

    const breaking = /^breaking:\s?/i.test(message)

    return {
      type,
      author,
      message: message.replace(issuesRegExp, ''),
      pr,
      issues: itemIssues,
      breaking,
    }
  }

  switch (true) {
    // Fixed
    case fixedSentenceRegExp.test(message): {
      const captures = message.match(fixedSentenceRegExp)!
      return [item({ type: 'fixed', message: captures[2] })]
    }
    case fixedOneLinerRegExp.test(message): {
      const captures = message.match(fixedOneLinerRegExp)!
      return [item({ type: 'fixed', message: captures[1] })]
    }

    // Changed
    case changedSentenceRegExp.test(message): {
      const captures = message.match(changedSentenceRegExp)!
      return [item({ type: 'changed', message: captures[2] })]
    }
    case changedOneLinerRegExp.test(message): {
      const captures = message.match(changedOneLinerRegExp)!
      return [item({ type: 'changed', message: captures[1] })]
    }

    // Added
    case addedSentenceRegExp.test(message): {
      const captures = message.match(addedSentenceRegExp)!
      return [item({ type: 'added', message: captures[2] })]
    }
    case addedOneLinerRegExp.test(message): {
      const captures = message.match(addedOneLinerRegExp)!
      return [item({ type: 'added', message: captures[1] })]
    }

    default:
      return []
  }
}

function renderVersion({ major, minor, patch }: Version) {
  return `v${major}.${minor}.${patch}`
}

function renderAuthors(authors: Author[]) {
  if (authors.length > 1) {
    return (
      authors
        .slice(0, authors.length - 1)
        .map(renderAuthor)
        .join(', ') +
      ' and ' +
      renderAuthor(last(authors)!)
    )
  } else {
    return renderAuthor(authors[0])
  }
}

function renderAuthor(author: Author) {
  return `[${author.name}](http://github.com/${author.login})`
}

function renderItem(item: ChangelogItem) {
  const message = item.pr
    ? `[${item.message}](https://github.com/date-fns/date-fns/pull/${item.pr})`
    : item.message
  const issues = item.issues
    ? ` (${item.issues
        .map((i) => `[#${i}](https://github.com/date-fns/date-fns/issues/${i})`)
        .join(', ')})`
    : ''

  return `- ${message}${issues}`
}

type ChangelogType = 'changed' | 'fixed' | 'added'

interface Version {
  major: number
  minor: number
  patch: number
}

interface ChangelogItem {
  type: ChangelogType
  author: Author
  message: string
  pr?: number
  issues?: number[]
  breaking: boolean
}

interface ChangelogVersion {
  version: Version
  changed: ChangelogItem[]
  fixed: ChangelogItem[]
  added: ChangelogItem[]
  authors: Author[]
}

interface Author {
  login: string
  name: string
  email: string
}

var closesRegExp = /(?:closes|fixes) #(\d+)/

var issuesRegExp = /\s?\(((?:#\d+(?:,\s?)?)+)\)/g

var thanksOptions = [
  (authors: string) => `Kudos to ${authors} for working on the release.`,
  (authors: string) => `Thanks to ${authors} for working on the release.`,
  (authors: string) => `This release is brought to you by ${authors}.`,
  (authors: string) => `On this release worked ${authors}.`,
]

var fixedSentenceRegExp = /^(breaking:\s?)?(fixed\s.+)/i
var fixedOneLinerRegExp = /^fixed:\s(.+)/i

var changedSentenceRegExp = /^(breaking:\s?)?(changed\s.+)/i
var changedOneLinerRegExp = /^changed:\s(.+)/i

var addedSentenceRegExp = /^(breaking:\s?)?(added\s.+)/i
var addedOneLinerRegExp = /^added:\s(.+)/i
