#!/usr/bin/env ./node_modules/.bin/ts-node

/**
 * @file
 * The script generates docs.json used as the source of truth
 * for the source code generators (FP, typings, etc.).
 *
 * It's a part of the build process.
 */

import fs from 'fs/promises'
import jsDocParser from 'jsdoc-to-markdown'
import cloneDeep from 'lodash.clonedeep'
import os from 'os'
import pLimit from 'p-limit'
import path from 'path'
import docsConfig from '../../docs/index'
import listFns from '../_lib/listFns'
import generateLocalesDocs from './_lib/generateLocalesDocs'

interface Arg {
  type: { names: string[] }
  description: string
  name: string
  optional: boolean

  isProperty?: boolean
  props?: Arg[]
}

interface UsageDetails {
  title: string
  code: string
  text?: string
}

interface Usage {
  commonjs: UsageDetails
  es2015: UsageDetails
  esm: UsageDetails
}

interface Doc {
  id: string
  longname: string
  name: string
  kind: string
  scope: string
  description: string
  params: Arg[]
  examples: string[] | string
  // thisvalue?: any // always undefined
  category: string
  exceptions?: Arg[]
  meta: {
    lineno: number
    filename: string
    path: string
  }
  summary: string
  returns: Arg[]
  order: number

  customTags?: {
    tag: string
    value: string
  }[]

  properties?: Arg[]
}

interface SharedDoc {
  type: string
  kind: string
  urlId: string
  category: string
  title: string
  description: string
  content: Doc

  pure?: boolean
  properties?: Arg[]
}

type AugmentedSharedDoc = SharedDoc & {
  isFPFn: boolean
  args?: Arg[]
  relatedDocs: {
    default: string
    fp: string
    fpWithOptions?: string
  }
  usage: Usage
  usageTabs: string[]
  syntax?: string
}

interface StaticDoc {
  content: string
  type: string
  urlId: string
  category: string
  title: string
  description: string
  path: string
}

interface OutputObj {
  [key: string]: (SharedDoc | StaticDoc)[]
}

const docsPath = path.resolve(process.cwd(), 'tmp/docs.json')
const configFile = path.resolve(process.cwd(), 'jsdoc2md.json')

generateLocalesDocs()
  .then(generateDocsFromSource)
  .then(generatedDocsObj)
  .then(injectStaticDocsToDocsObj)
  .then(injectSharedDocsToDocsObj)
  .then(writeDocsFile)
  .catch(reportErrors)

/**
 * Generates docs object from a list of functions using extended JSDoc format.
 */
async function generateDocsFromSource(): Promise<AugmentedSharedDoc[]> {
  // await jsDocParser.clear()

  const limit = pLimit(os.cpus().length)

  const fns = await listFns()

  const jobs = fns.map((fn) => {
    return limit(() =>
      jsDocParser
        .getTemplateData({
          files: fn.fullPath,
          'no-cache': false,
          configure: configFile,
        })
        .then((result) => result[0] as Doc)
    )
  })

  const docsResult = await Promise.all(jobs)

  const augDocs = docsResult.map((doc) => {
    const pureTag =
      doc.customTags && doc.customTags.find((t) => t.tag === 'pure')
    const pure = (pureTag && pureTag.value) !== 'false'

    return {
      type: 'jsdoc',
      kind: 'function',
      urlId: doc.name,
      category: doc.category,
      title: doc.name,
      description: doc.summary,
      content: doc,
      pure,
    } as SharedDoc
  })

  return augDocs.reduce((array, doc) => {
    array.push(generateFnDoc(doc))

    if (doc.pure) {
      array.push(generateFPFnDoc(doc))

      const withOptions = generateFPFnWithOptionsDoc(doc)
      if (withOptions) array.push(withOptions)
    }

    return array
  }, [] as AugmentedSharedDoc[])
}

/**
 * Generates docs object.
 */
function generatedDocsObj(docs: AugmentedSharedDoc[]): OutputObj {
  return groupDocs(docs, docsConfig.groups)
}

/**
 * Injects static docs (markdown documents specified in the config file)
 * to docs object.
 */
async function injectStaticDocsToDocsObj(
  docsFileObj: OutputObj
): Promise<OutputObj> {
  const staticDocs = await getListOfStaticDocs()

  staticDocs.forEach((staticDoc) => {
    docsFileObj[staticDoc.category].push(staticDoc)
  })
  return docsFileObj
}

/**
 * Injects shared docs to docs object.
 */
function injectSharedDocsToDocsObj(docsFileObj: OutputObj): OutputObj {
  const sharedDocs = generateSharedDocs()

  sharedDocs.forEach((sharedDoc) => {
    docsFileObj[sharedDoc.category].push(sharedDoc)
  })
  return docsFileObj
}

/**
 * Prints an error and exits the process with 1 status code.
 */
function reportErrors(err: Error): void {
  console.error(err.stack)
  process.exit(1)
}

/**
 * Writes docs file.
 */
function writeDocsFile(docsFileObj: OutputObj): Promise<void> {
  return fs.writeFile(docsPath, JSON.stringify(docsFileObj))
}

/**
 * Groups passed docs list.
 */
function groupDocs(docs: AugmentedSharedDoc[], groups: string[]): OutputObj {
  return docs.reduce((acc, doc) => {
    ;(acc[doc.category] = acc[doc.category] || []).push(doc)
    return acc
  }, buildGroupsTemplate(groups))
}

/**
 * Builds an object where the key is a group name and the value is
 * an empty array. Pre-generated docs object allows to preserve the desired
 * groups order.
 */
function buildGroupsTemplate(groups: string[]): OutputObj {
  return groups.reduce((acc, group) => {
    acc[group] = []
    return acc
  }, {} as OutputObj)
}

/**
 * Returns promise to list of static docs with its contents.
 */
function getListOfStaticDocs(): Promise<StaticDoc[]> {
  return Promise.all(
    docsConfig.staticDocs.map((staticDoc) => {
      return fs
        .readFile(staticDoc.path)
        .then((docContent) => docContent.toString())
        .then((content) => Object.assign({ content }, staticDoc))
    })
  )
}

/**
 * Returns promise to list of shared docs with its contents.
 */
function generateSharedDocs(): SharedDoc[] {
  return docsConfig.sharedDocs
    .map(
      (fn) =>
        jsDocParser.getTemplateDataSync({
          files: fn.fullPath,
          'no-cache': false,
          configure: configFile,
        })[0] as Doc
    )
    .map((doc) => {
      return {
        type: 'jsdoc',
        kind: 'typedef',
        urlId: doc.name,
        category: doc.category,
        title: doc.name,
        description: doc.summary,
        content: doc,
        properties: paramsToTree(doc.properties),
      }
    })
}

function generateFnDoc(dirtyDoc: SharedDoc): AugmentedSharedDoc {
  const doc = cloneDeep(dirtyDoc)

  const isFPFn = false
  const { urlId, title } = doc
  const args = paramsToTree(doc.content.params)

  return Object.assign(doc, {
    isFPFn,
    args,
    relatedDocs: {
      default: urlId,
      fp: `fp/${urlId}`,
      fpWithOptions: withOptions(args) ? `fp/${urlId}WithOptions` : undefined,
    },
    usage: generateUsage(title, isFPFn),
    usageTabs: generateUsageTabs(isFPFn),
    syntax: generateSyntaxString(title, args, isFPFn),
  })
}

function generateFPFnDoc(dirtyDoc: SharedDoc): AugmentedSharedDoc {
  const doc = cloneDeep(dirtyDoc)

  const isFPFn = true
  const { urlId, title } = doc
  const exceptions = doc.content.exceptions?.filter(
    (exception) => !exception.description.includes('options.')
  )
  const params = doc.content.params
    .filter((param) => !param.name.startsWith('options'))
    .reverse()

  const args = paramsToTree(params)

  return Object.assign(doc, {
    isFPFn,
    args,
    generatedFrom: title,
    urlId: `fp/${urlId}`,
    relatedDocs: Object.assign(
      { default: urlId, fp: `fp/${urlId}` },
      withOptions(args) ? { fpWithOptions: `fp/${urlId}WithOptions` } : {}
    ),
    usage: generateUsage(title, isFPFn),
    usageTabs: generateUsageTabs(isFPFn),
    syntax: generateSyntaxString(title, args, isFPFn),

    content: Object.assign(doc.content, {
      exceptions,
      params,
      // note: should be string[] but possibly a functional choice to not format this as code in FP section of docs?
      examples:
        'See [FP Guide](https://date-fns.org/docs/FP-Guide) for more information',
    }),
  })
}

function generateFPFnWithOptionsDoc(
  dirtyDoc: SharedDoc
): AugmentedSharedDoc | undefined {
  const doc = cloneDeep(dirtyDoc)

  const isFPFn = true
  const { urlId, title } = doc
  const params = doc.content.params
    .map((param) => {
      if (!param.name.includes('.')) {
        param.optional = false
      }
      return param
    })
    .reverse()

  const args = paramsToTree(params)

  if (!withOptions(args)) return

  return Object.assign(doc, {
    isFPFn,
    args,
    generatedFrom: title,
    title: `${title}WithOptions`,
    urlId: `fp/${urlId}WithOptions`,
    relatedDocs: {
      default: urlId,
      fp: `fp/${urlId}`,
      fpWithOptions: `fp/${urlId}WithOptions`,
    },
    usage: generateUsage(title, isFPFn),
    usageTabs: generateUsageTabs(isFPFn),
    syntax: generateSyntaxString(title, args, isFPFn),

    content: Object.assign(doc.content, {
      params,
      id: `${doc.content.id}WithOptions`,
      longname: `${doc.content.longname}WithOptions`,
      name: `${doc.content.name}WithOptions`,
      examples:
        'See [FP Guide](https://date-fns.org/docs/FP-Guide) for more information',
    }),
  })
}

function withOptions(args: Arg[] | undefined): boolean {
  return !!args && args[0].name === 'options'
}

function generateUsageTabs(_isFPFn: boolean): string[] {
  return ['commonjs', 'es2015', 'esm']
}

function generateUsage(name: string, isFPFn: boolean): Usage {
  const submodule = isFPFn ? '/fp' : ''

  return {
    commonjs: {
      title: 'CommonJS',
      code: `var ${name} = require('date-fns${submodule}/${name}')`,
    },

    es2015: {
      title: 'ES 2015',
      code: `import ${name} from 'date-fns${submodule}/${name}'`,
    },

    esm: {
      title: 'ESM',
      code: `import { ${name} } from 'date-fns${submodule}'`,
      text:
        'See [ECMAScript Modules guide](https://date-fns.org/docs/ECMAScript-Modules) for more information',
    },
  }
}

function paramsToTree(dirtyParams?: Arg[]): Arg[] | undefined {
  if (!dirtyParams) return

  const params = cloneDeep(dirtyParams)

  const paramIndices = params.reduce((result, { name }, index: number) => {
    result[name] = index
    return result
  }, {} as { [key: string]: number })

  return params
    .map((param) => {
      const { name, isProperty } = param

      const indexOfDot = name.indexOf('.')

      if (indexOfDot >= 0 && !isProperty) {
        const parentIndex = paramIndices[name.substring(0, indexOfDot)]
        const parent = params[parentIndex]

        param.name = name.substring(indexOfDot + 1)
        param.isProperty = true
        if (!parent.props) {
          parent.props = [param]
        } else {
          parent.props.push(param)
        }
      }

      return param
    })
    .filter((param) => !param.isProperty)
}

function generateSyntaxString(
  name: string,
  args: Arg[] | undefined,
  isFPFn: boolean
): string | undefined {
  if (!args) return

  if (isFPFn) {
    return args.reduce((acc, arg) => acc.concat(`(${arg.name})`), name)
  } else {
    const argsString = args
      .map((arg) => (arg.optional ? `[${arg.name}]` : arg.name))
      .join(', ')
    return `${name}(${argsString})`
  }
}
