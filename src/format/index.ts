import { defaultLocale } from "../_lib/defaultLocale/index.ts";
import { getDefaultOptions } from "../_lib/defaultOptions/index.ts";
import { formatters } from "../_lib/format/formatters/index.ts";
import { longFormatters } from "../_lib/format/longFormatters/index.ts";
import {
  isProtectedDayOfYearToken,
  isProtectedWeekYearToken,
  warnOrThrowProtectedError,
} from "../_lib/protectedTokens/index.ts";
import { isValid } from "../isValid/index.ts";
import { toDate } from "../toDate/index.ts";
import type {
  AdditionalTokensOptions,
  ContextOptions,
  DateArg,
  FirstWeekContainsDateOptions,
  FormatPart,
  LocalizedOptions,
  WeekOptions,
} from "../types.ts";

// Rexports of internal for libraries to use.

export { formatters, longFormatters };


const formattingTokensRegExp =
  /[yYQqMLwIdDecihHKkms]o|(\w)\1*|''|'(''|[^'])+('|$)|./g;


const longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;

const escapedStringRegExp = /^'([^]*?)'?$/;
const doubleQuoteRegExp = /''/g;
const unescapedLatinCharacterRegExp = /[a-zA-Z]/;

export { format as formatDate };
export type { FormatOptions as FormatDateOptions };

/**
 * The {@link format} function options.
 */
export interface FormatOptions
  extends LocalizedOptions<"options" | "localize" | "formatLong">,
    WeekOptions,
    FirstWeekContainsDateOptions,
    AdditionalTokensOptions,
    ContextOptions<Date> {}

/**
 * @overload
 * @param {string} date
 * @param {string} formatStr
 * @param {FormatOptions} [options]
 * @throws {TypeError} Strings are not valid date arguments. Use parse() or toDate() first.
 *
 * NOTE: This is a **JSDoc-only overload**. No TypeScript signature is declared here
 * because implementation files cannot contain overload signatures.
 */

/**
 * @name format
 * @alias formatDate
 * @category Common Helpers
 * @summary Format the date.
 *
 * @description
 * Return the formatted date string in the given format.
 */
export function format(
  date: DateArg<Date> & {},
  formatStr: string,
  options?: FormatOptions,
): string {
  const defaultOptions = getDefaultOptions();
  const locale = options?.locale ?? defaultOptions.locale ?? defaultLocale;

  const firstWeekContainsDate =
    options?.firstWeekContainsDate ??
    options?.locale?.options?.firstWeekContainsDate ??
    defaultOptions.firstWeekContainsDate ??
    defaultOptions.locale?.options?.firstWeekContainsDate ??
    1;

  const weekStartsOn =
    options?.weekStartsOn ??
    options?.locale?.options?.weekStartsOn ??
    defaultOptions.weekStartsOn ??
    defaultOptions.locale?.options?.weekStartsOn ??
    0;

  const originalDate = toDate(date, options?.in);

  if (!isValid(originalDate)) {
    throw new RangeError("Invalid time value");
  }

  let parts: FormatPart[] = formatStr
    .match(longFormattingTokensRegExp)!
    .map((substring) => {
      const firstCharacter = substring[0];
      if (firstCharacter === "p" || firstCharacter === "P") {
        const longFormatter = longFormatters[firstCharacter];
        return longFormatter(substring, locale.formatLong);
      }
      return substring;
    })
    .join("")
    .match(formattingTokensRegExp)!
    .map((substring) => {
      
      if (substring === "''") {
        return { isToken: false, value: "'" };
      }

      const firstCharacter = substring[0];
      if (firstCharacter === "'") {
        return { isToken: false, value: cleanEscapedString(substring) };
      }

      if (formatters[firstCharacter]) {
        return { isToken: true, value: substring };
      }

      if (firstCharacter.match(unescapedLatinCharacterRegExp)) {
        throw new RangeError(
          "Format string contains an unescaped latin alphabet character `" +
            firstCharacter +
            "`",
        );
      }

      return { isToken: false, value: substring };
    });


  if (locale.localize.preprocessor) {
    parts = locale.localize.preprocessor(originalDate, parts);
  }

  const formatterOptions = {
    firstWeekContainsDate,
    weekStartsOn,
    locale,
  };

  return parts
    .map((part) => {
      if (!part.isToken) return part.value;

      const token = part.value;

      if (
        (!options?.useAdditionalWeekYearTokens &&
          isProtectedWeekYearToken(token)) ||
        (!options?.useAdditionalDayOfYearTokens &&
          isProtectedDayOfYearToken(token))
      ) {
        warnOrThrowProtectedError(token, formatStr, String(date));
      }

      const formatter = formatters[token[0]];
      return formatter(originalDate, token, locale.localize, formatterOptions);
    })
    .join("");
}

function cleanEscapedString(input: string): string {
  const matched = input.match(escapedStringRegExp);
  if (!matched) return input;
  return matched[1].replace(doubleQuoteRegExp, "'");
}
