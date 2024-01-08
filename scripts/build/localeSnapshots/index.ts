#!/usr/bin/env npx tsx

/**
 * @file
 * The script generates the locale snapshots.
 *
 * It's a part of the build process.
 */

import { readFile, writeFile } from "fs/promises";
import path from "path";
import type { Locale } from "../../../src/locale/types.js";
import { listLocales } from "../../_lib/listLocales.js";
import { formatCode } from "../_lib/prettier.js";
import { convertLocaleToConst } from "./_lib/locale.js";
import renderFormatDistance from "./renderFormatDistance/index.js";
import renderFormatDistanceStrict from "./renderFormatDistanceStrict/index.js";
import renderFormatDuration from "./renderFormatDuration/index.js";
import renderFormatParse from "./renderFormatParse/index.js";
import renderFormatRelative from "./renderFormatRelative/index.js";

const mode = process.argv[2] || "generate";

if (process.env.TZ?.toLowerCase() !== "utc")
  throw new Error("The locale snapshots generation must be run with TZ=utc");

listLocales()
  .then((locales) =>
    Promise.all(
      locales.map(async (localeObj) => {
        const { code, fullPath } = localeObj;
        const locale: Locale = (await import(`../../../src/locale/${code}`))[
          convertLocaleToConst(code)
        ];
        const source = (
          await readFile(path.join(process.cwd(), fullPath))
        ).toString();
        const languageName = source.match(/\* @language (.*)/)?.[1];

        const snapshot = `# ${languageName} (${code}) locale

${renderFormatParse(locale)}

${renderFormatDistance(locale)}

${renderFormatDistanceStrict(locale)}

${renderFormatRelative(locale)}

${renderFormatDuration(locale)}

`;

        const snapshotPath = path.join(
          path.resolve(process.cwd(), path.dirname(fullPath)),
          "snapshot.md"
        );
        const formattedSnapshot = await formatCode(snapshot, "markdown");

        if (mode === "test") {
          return readFile(snapshotPath, "utf8").then((snapshotFileContent) => {
            if (snapshotFileContent !== formattedSnapshot)
              throw new Error(
                `The snapshot on the disk doesn't match the generated snapshot: ${snapshotPath}. Please run npm run locale-snapshots and commit the results.`
              );
          });
        } else {
          return writeFile(snapshotPath, formattedSnapshot);
        }
      })
    )
  )
  .catch((err) => {
    console.error(err.stack);
    process.exit(1);
  });
