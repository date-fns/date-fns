import { format } from "@wrkspc/src/format/index.ts";
import { isValid } from "@wrkspc/src/isValid/index.ts";
import { parse } from "@wrkspc/src/parse/index.ts";
import { toDate } from "@wrkspc/src/toDate/index.ts";
import type { Locale } from "@wrkspc/src/types.ts";
import formatParseTokens from "./formatParseTokens.ts";

export default function renderFormatParse(locale: Locale) {
  return `## \`format\` and \`parse\`

| Title | Token string | Date | \`format\` result | \`parse\` result |
|-|-|-|-|-|
${formatParseTokens
  .map(({ title, tokens, dates, options = {} }) => {
    return tokens
      .map((token, tokenIndex) => {
        return dates
          .map((date, dateIndex) => {
            const dateString = toDate(date).toISOString();
            const formatResult = format(
              date,
              token,
              Object.assign({ locale }, options),
            );
            let parsedDate: Date | "Errored";
            try {
              parsedDate = parse(
                formatResult,
                token,
                date,
                Object.assign({ locale }, options),
              );
            } catch (_err) {
              parsedDate = "Errored";
            }

            const parseResult =
              parsedDate === "Errored"
                ? parsedDate
                : isValid(parsedDate)
                  ? parsedDate.toISOString()
                  : "Invalid Date";

            if (dateIndex === 0 && tokenIndex === 0) {
              return `| ${title} | ${token} | ${dateString} | ${formatResult} | ${parseResult} |`;
            } else if (dateIndex === 0) {
              return `| | ${token} | ${dateString} | ${formatResult} | ${parseResult} |`;
            } else {
              return `| | | ${dateString} | ${formatResult} | ${parseResult} |`;
            }
          })
          .join("\n");
      })
      .join("\n");
  })
  .join("\n")}`;
}
