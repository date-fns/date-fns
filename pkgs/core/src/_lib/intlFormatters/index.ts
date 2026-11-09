/**
 * Caches `Intl` formatters, which are slow to create. Arguments that can't be
 * keyed exactly are not cached.
 */

const maxCacheSize = 100;

const dateTimeFormatCache = new Map<string, Intl.DateTimeFormat>();
const relativeTimeFormatCache = new Map<string, Intl.RelativeTimeFormat>();

// Detect system time zone changes. January and July cover DST.
const january = new Date(Date.UTC(2025, 0, 15));
const july = new Date(Date.UTC(2025, 6, 15));

// Node.js and Bun apply `process.env.TZ` changes at runtime. Deno doesn't, and
// prompts for env access.
const readEnvTZ = typeof process === "object" && !("Deno" in globalThis);

/** Cached `new Intl.DateTimeFormat(locales, options)`. */
export function getDateTimeFormat(
  locales: Intl.LocalesArgument,
  options?: Intl.DateTimeFormatOptions,
): Intl.DateTimeFormat {
  let key = formatterKey(locales, options);
  // Without `timeZone`, output depends on the system time zone.
  if (key !== undefined && options?.timeZone === undefined)
    key += systemTimeZoneKey();
  return getFormatter(
    dateTimeFormatCache,
    key,
    () => new Intl.DateTimeFormat(locales, options),
  );
}

/** Cached `new Intl.RelativeTimeFormat(locales, options)`. */
export function getRelativeTimeFormat(
  locales: Intl.LocalesArgument,
  options?: Intl.RelativeTimeFormatOptions,
): Intl.RelativeTimeFormat {
  return getFormatter(
    relativeTimeFormatCache,
    formatterKey(locales, options),
    () => new Intl.RelativeTimeFormat(locales, options),
  );
}

function getFormatter<Formatter>(
  cache: Map<string, Formatter>,
  key: string | undefined,
  create: () => Formatter,
): Formatter {
  if (key === undefined) return create();

  let formatter = cache.get(key);
  if (!formatter) {
    // Throws on invalid arguments, before caching.
    formatter = create();
    if (cache.size >= maxCacheSize) cache.delete(cache.keys().next().value!);
    cache.set(key, formatter);
  }
  return formatter;
}

/** Returns the cache key, or `undefined` if the arguments can't be keyed. */
function formatterKey(
  locales: unknown,
  options: object | undefined,
): string | undefined {
  if (
    locales !== undefined &&
    typeof locales !== "string" &&
    !(
      Array.isArray(locales) &&
      locales.every((locale) => typeof locale === "string")
    )
  )
    return;

  const parts: unknown[] = [locales];

  if (options !== undefined) {
    if (typeof options !== "object" || options === null) return;
    const proto = Object.getPrototypeOf(options);
    if (proto !== Object.prototype && proto !== null) return;

    for (const name of Object.getOwnPropertyNames(options)) {
      const value = (options as Record<string, unknown>)[name];
      if (value === undefined) continue;
      const type = typeof value;
      if (type !== "string" && type !== "number" && type !== "boolean") return;
      // The type prefix separates `hour12: false` from `"false"`.
      parts.push(name, type[0] + String(value));
    }
  }

  return JSON.stringify(parts);
}

function systemTimeZoneKey(): string {
  let tz: string | undefined;
  try {
    if (readEnvTZ) tz = process.env?.TZ;
  } catch {
    // Env access can be restricted.
  }
  return JSON.stringify([
    tz,
    january.getTimezoneOffset(),
    july.getTimezoneOffset(),
  ]);
}
