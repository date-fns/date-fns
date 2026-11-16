// Include Intl polyfills
import "@formatjs/intl-getcanonicallocales/polyfill.js";
import "@formatjs/intl-locale/polyfill.js";
import "@formatjs/intl-pluralrules/polyfill.js";
import "@formatjs/intl-numberformat/polyfill.js";
import "@formatjs/intl-numberformat/locale-data/en.js";
import "@formatjs/intl-datetimeformat/polyfill.js";
import "@formatjs/intl-datetimeformat/locale-data/en.js";
import "@formatjs/intl-datetimeformat/add-golden-tz.js"; // or: "@formatjs/intl-datetimeformat/add-all-tz.js"
// Tests
import "./test.ts";
