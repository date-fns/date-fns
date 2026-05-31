#!/usr/bin/env node

import firebaseAdmin from "firebase-admin";
import { readFile } from "fs/promises";
// @ts-expect-error: [TODO] Fix js-fns
import { pick } from "js-fns";
import path from "path";
import { stringifyJSON } from "typeroo/json";
import { batch } from "typesaurus";
import { allSubmodules, packageName } from "./consts.js";
import { db } from "./db.js";
import { readRefsFromJSON } from "./json.js";
import type { DateFnsDocs } from "./types.js";
import {
  findCategory,
  findFnSummary,
  findFnTag,
  findSummary,
} from "./utils.js";

firebaseAdmin.initializeApp();

interface ConfigModule {
  config: DateFnsDocs.Config;
}

const configPath = path.resolve(process.cwd(), process.argv[2]);
const configDir = path.dirname(configPath);

import(configPath)
  .then(async ({ config }: ConfigModule) => {
    const { version, preRelease } = await getVersion(config);

    if (process.argv.find((a) => a === "--rollback")) {
      return Promise.all([
        db.packages
          .get(db.packages.id(packageName))
          .then((doc) =>
            doc?.update(($) =>
              $.field("versions").set(
                doc.data.versions.filter((v) => v.version !== version),
              ),
            ),
          ),

        db.versions
          .query(($) => [
            $.field("package").eq(packageName),
            $.field("version").eq(version),
          ])
          .then((versions) =>
            Promise.all(versions.map((version) => version.ref.remove())),
          ),

        db.pages
          .query(($) => [
            $.field("package").eq(packageName),
            $.field("version").eq(version),
          ])
          .then((pages) => Promise.all(pages.map((page) => page.ref.remove()))),
      ]);
    } else {
      const [fnPages, markdownPages] = await Promise.all([
        getFnPages(config, version),
        getMarkdownPages(config, version),
      ]);
      const pages: DateFnsDocs.Page[] = [...fnPages, ...markdownPages];

      const pagesBatch = batch(db);
      const packageRef = db.packages.ref(db.packages.id(packageName));
      const createdAt = Date.now();

      return Promise.all([
        packageRef.get().then((packageDoc) =>
          packageDoc
            ? packageRef.update(($) =>
                $.field("versions").set(
                  $.arrayUnion([
                    {
                      version,
                      preRelease,
                      submodules: allSubmodules,
                      createdAt,
                    },
                  ]),
                ),
              )
            : packageRef.set({
                name: packageName,
                versions: [
                  { version, preRelease, submodules: allSubmodules, createdAt },
                ],
              }),
        ),

        db.versions.add({
          package: packageName,
          version,
          preRelease,
          pages: pages.map((page) =>
            pick(page, [
              "type",
              "slug",
              "category",
              "title",
              "summary",
              "submodules",
            ]),
          ),
          createdAt,
          categories: config.categories,
          submodules: allSubmodules,
        }),

        Promise.all(
          pages.map((page) =>
            db.pages.id().then((pageId) => pagesBatch.pages.set(pageId, page)),
          ),
        ).then(pagesBatch),
      ]);
    }
  })
  .then(() => {
    console.log("(ﾉ◕ヮ◕)ﾉ*:・ﾟ✧ Done!");
    process.exit(0);
  })
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

const versionRegExp = /^\d+\.\d+\.\d+(-(alpha|beta|rc)(\.\d+)?)?$/;
const preReleaseRegExp = /-(alpha|beta|rc)(\.\d+)?$/;

async function getVersion(config: DateFnsDocs.Config) {
  const packagePath = path.resolve(configDir, config.package, "package.json");
  const packageStr = await readFile(packagePath, "utf8");
  const packageJSON = JSON.parse(packageStr);
  const version = packageJSON.version;

  if (!version || !versionRegExp.test(version))
    throw Error(`(•̀o•́)ง version is invalid "${version}"`);

  const preRelease = preReleaseRegExp.test(version);

  return { version: "v" + version, preRelease };
}

async function getFnPages(
  config: DateFnsDocs.Config,
  version: string,
): Promise<DateFnsDocs.TypeDocPage[]> {
  const refs = await readRefsFromJSON(config, configDir);

  return refs.map((ref) => {
    const name = ref.ref.name;

    const { category, summary, pureStr } =
      ref.kind === "function"
        ? {
            category:
              ref.category || findCategory(ref.ref, ref.fn.id) || "Misc",
            summary: findFnSummary(ref.fn) || "",
            pureStr: findFnTag(ref.fn, "@pure"),
          }
        : {
            category:
              ref.category || findCategory(ref.ref, ref.ref.id) || "Misc",
            summary: findSummary(ref.ref) || "",
            pureStr: undefined,
          };

    const pure = pureStr !== "false";
    const submodules: DateFnsDocs.Submodule[] = pure
      ? allSubmodules
      : ["default"];

    const page: DateFnsDocs.TypeDocPage = {
      type: "typedoc",
      kind: ref.kind,
      package: packageName,
      version,
      slug: name,
      category,
      title: name,
      summary,
      name,
      doc: stringifyJSON(ref.ref)!,
      submodules,
      pure,
    };
    return page;
  });
}

async function getMarkdownPages(
  config: DateFnsDocs.Config,
  version: string,
): Promise<DateFnsDocs.MarkdownPage[]> {
  return Promise.all(
    config.files.map(async (file) => {
      const markdown = await readFile(
        path.resolve(configDir, file.path),
        "utf8",
      );
      return {
        ...pick(file, ["slug", "category", "title", "summary"]),
        type: "markdown",
        version,
        markdown,
        package: packageName,
        submodules: allSubmodules,
      };
    }),
  );
}
