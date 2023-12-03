import { isSameWeek } from "../../../../isSameWeek/index.js";
import type { Day } from "../../../../types.js";
import type {
  FormatRelativeFn,
  FormatRelativeFnOptions,
  FormatRelativeToken,
} from "../../../types.js";

type Adjective = {
  masculine: string;
  feminine: string;
};

const adjectivesLastWeek = {
  masculine: "ostatni",
  feminine: "ostatnia",
};

const adjectivesThisWeek = {
  masculine: "ten",
  feminine: "ta",
};

const adjectivesNextWeek = {
  masculine: "następny",
  feminine: "następna",
};

const dayGrammaticalGender = {
  0: "feminine",
  1: "masculine",
  2: "masculine",
  3: "feminine",
  4: "masculine",
  5: "masculine",
  6: "feminine",
};

function dayAndTimeWithAdjective(
  token: FormatRelativeToken,
  date: Date,
  baseDate: Date,
  options?: FormatRelativeFnOptions,
): string {
  let adjectives;
  if (isSameWeek(date, baseDate, options)) {
    adjectives = adjectivesThisWeek;
  } else if (token === "lastWeek") {
    adjectives = adjectivesLastWeek;
  } else if (token === "nextWeek") {
    adjectives = adjectivesNextWeek;
  } else {
    throw new Error(`Cannot determine adjectives for token ${token}`);
  }

  const day = date.getDay() as Day;
  const grammaticalGender = dayGrammaticalGender[day] as keyof Adjective;

  const adjective = adjectives[grammaticalGender];

  return `'${adjective}' eeee 'o' p`;
}

const formatRelativeLocale = {
  lastWeek: dayAndTimeWithAdjective,
  yesterday: "'wczoraj o' p",
  today: "'dzisiaj o' p",
  tomorrow: "'jutro o' p",
  nextWeek: dayAndTimeWithAdjective,
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  date,
  baseDate,
  options,
) => {
  const format = formatRelativeLocale[token];

  if (typeof format === "function") {
    return format(token, date, baseDate, options);
  }

  return format;
};
