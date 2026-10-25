/**
 * @name convertMomentFormat
 * @category Format Helpers
 * @summary Convert a moment.js date format string to a date-fns format string
 *
 * @description
 * Convert a [moment.js](https://momentjs.com/docs/#/displaying/format/) format
 * string into the equivalent date-fns {@link format} pattern, so applications
 * that exposed moment's format syntax to users can keep their stored format
 * strings when migrating to date-fns. See issue #2991.
 *
 * Supported moment tokens map to their date-fns equivalents:
 * - `YYYY`/`YY` → `yyyy`/`yy`
 * - `MMMM`/`MMM`/`MM`/`Mo`/`M` → `MMMM`/`MMM`/`MM`/`Mo`/`M`
 * - `DDDD`/`DDD`/`DD`/`Do`/`D` → `DDDD`/`DDD`/`dd`/`do`/`d`
 * - `dddd`/`ddd` → `EEEE`/`EEE`
 * - `HH`/`H`/`hh`/`h`/`mm`/`m`/`ss`/`s`/`SSS` → same
 * - `A`/`a` → `a`
 * - `Z`/`ZZ` → `xxx`/`xx`
 *
 * Bracketed literal text in moment (`[...]`) is converted to the date-fns
 * quoted form (`'...'`, with internal `'` escaped as `''`). Non-token letters
 * are quoted so they stay literal in date-fns.
 *
 * @param momentFormat - The moment.js format string to convert
 *
 * @returns The equivalent date-fns format string
 *
 * @example
 * convertMomentFormat('YYYY-MM-DD') // 'yyyy-MM-dd'
 * @example
 * convertMomentFormat('YYYY-MM-DD HH:mm:ss') // 'yyyy-MM-dd HH:mm:ss'
 * @example
 * convertMomentFormat('MMMM Do YYYY, h:mm:ss a') // 'MMMM do yyyy, h:mm:ss a'
 * @example
 * convertMomentFormat('[on] YYYY') // "'on' yyyy"
 */
export function convertMomentFormat(momentFormat: string): string {
  // Token table, longest-first so prefixes don't shadow longer tokens.
  const tokens: Array<[string, string]> = [
    ["YYYY", "yyyy"],
    ["YY", "yy"],
    ["MMMM", "MMMM"],
    ["MMM", "MMM"],
    ["Mo", "Mo"],
    ["MM", "MM"],
    ["M", "M"],
    ["dddd", "EEEE"],
    ["ddd", "EEE"],
    ["DDDD", "DDDD"],
    ["DDD", "DDD"],
    ["Do", "do"],
    ["DD", "dd"],
    ["D", "d"],
    ["HH", "HH"],
    ["H", "H"],
    ["hh", "hh"],
    ["h", "h"],
    ["mm", "mm"],
    ["m", "m"],
    ["ss", "ss"],
    ["s", "s"],
    ["SSS", "SSS"],
    ["A", "a"],
    ["a", "a"],
    ["ZZ", "xx"],
    ["Z", "xxx"],
  ];

  let out = "";
  let i = 0;

  while (i < momentFormat.length) {
    const ch = momentFormat[i];

    // Bracketed literal text: [text] -> 'text' (escape internal quotes).
    if (ch === "[") {
      const end = momentFormat.indexOf("]", i + 1);
      const content =
        end === -1 ? momentFormat.slice(i + 1) : momentFormat.slice(i + 1, end);
      out += "'" + content.replace(/'/g, "''") + "'";
      i = end === -1 ? momentFormat.length : end + 1;
      continue;
    }

    // Try the longest token match at this position.
    let matched = false;
    for (const [momentToken, dateFnsToken] of tokens) {
      if (momentFormat.startsWith(momentToken, i)) {
        out += dateFnsToken;
        i += momentToken.length;
        matched = true;
        break;
      }
    }
    if (matched) continue;

    // Separators pass through unchanged (date-fns treats them as literals).
    if (/[-:/. ,]/.test(ch)) {
      out += ch;
      i++;
      continue;
    }

    // Other letters (not a moment token) are quoted so they stay literal in
    // date-fns. Run them together until a separator, bracket or token begins.
    if (/[A-Za-z]/.test(ch)) {
      let j = i + 1;
      while (j < momentFormat.length && /[A-Za-z]/.test(momentFormat[j])) {
        // stop the literal run if a known token starts here
        const startsToken = tokens.some(([t]) =>
          momentFormat.startsWith(t, j),
        );
        if (startsToken) break;
        j++;
      }
      const literal = momentFormat.slice(i, j);
      out += "'" + literal.replace(/'/g, "''") + "'";
      i = j;
      continue;
    }

    // Any other character passes through.
    out += ch;
    i++;
  }

  return out;
}