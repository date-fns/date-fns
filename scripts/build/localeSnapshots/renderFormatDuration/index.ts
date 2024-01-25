import { formatDuration } from "../../../../src/formatDuration/index.js";
import type { Locale } from "../../../../src/types.js";

const durations = [
  "years",
  "months",
  "weeks",
  "days",
  "hours",
  "minutes",
  "seconds",
].flatMap((unit) => [{ [unit]: 0 }, { [unit]: 1 }, { [unit]: 2 }]);

export default function renderFormatDurationStrict(locale: Locale) {
  return `## \`formatDuration\`

| Duration | Result |
|-|-|
${durations
  .map((duration) => {
    const durationString = JSON.stringify(duration);
    try {
      const result = formatDuration(duration, { locale, zero: true });
      return `| ${durationString} | ${result} |`;
    } catch {
      return `| ${durationString} | not supported |`;
    }
  })
  .join("\n")}`;
}
