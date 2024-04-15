import { afterEach, describe, expect, it } from "vitest";
import { setDefaultOptions } from "./index.js";
import type { DefaultOptions } from "../_lib/defaultOptions/index.js";
import { getDefaultOptions as getInternalDefaultOptions } from "../_lib/defaultOptions/index.js";
import { enUS } from "../locale/en-US/index.js";
import { eo } from "../locale/eo/index.js";
import { differenceInCalendarWeeks } from "../differenceInCalendarWeeks/index.js";
import { eachWeekOfInterval } from "../eachWeekOfInterval/index.js";
import { endOfWeek } from "../endOfWeek/index.js";
import { format } from "../format/index.js";
import { formatDistance } from "../formatDistance/index.js";
import { formatDistanceStrict } from "../formatDistanceStrict/index.js";
import { formatDuration } from "../formatDuration/index.js";
import { formatRelative } from "../formatRelative/index.js";
import { getWeek } from "../getWeek/index.js";
import { getWeekOfMonth } from "../getWeekOfMonth/index.js";
import { getWeeksInMonth } from "../getWeeksInMonth/index.js";
import { getWeekYear } from "../getWeekYear/index.js";
import { isMatch } from "../isMatch/index.js";
import { isSameWeek } from "../isSameWeek/index.js";
import { lastDayOfWeek } from "../lastDayOfWeek/index.js";
import { parse } from "../parse/index.js";
import { setDay } from "../setDay/index.js";
import { setWeek } from "../setWeek/index.js";
import { setWeekYear } from "../setWeekYear/index.js";
import { startOfWeek } from "../startOfWeek/index.js";
import { startOfWeekYear } from "../startOfWeekYear/index.js";
import { resetDefaultOptions } from "../_lib/test/index.js";

describe("setDefaultOptions", () => {
  afterEach(resetDefaultOptions);

  it("changes the internal `defaultOptions` object", () => {
    setDefaultOptions({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    });
    expect(getInternalDefaultOptions()).toEqual({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    });
  });

  it("merges with previous `defaultOptions` calls", () => {
    setDefaultOptions({ weekStartsOn: 1 });
    setDefaultOptions({ firstWeekContainsDate: 4 });
    setDefaultOptions({ locale: eo });
    expect(getInternalDefaultOptions()).toEqual({
      weekStartsOn: 1,
      firstWeekContainsDate: 4,
      locale: eo,
    });
  });

  it("setting an option to `undefined` deletes it", () => {
    setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });
    setDefaultOptions({ weekStartsOn: undefined });
    expect(getInternalDefaultOptions()).toEqual({
      firstWeekContainsDate: 4,
    });
  });

  it("does not mutate the argument", () => {
    const argument: DefaultOptions = { weekStartsOn: 1 };
    setDefaultOptions(argument);
    expect(argument).toEqual({ weekStartsOn: 1 });
  });

  describe("locale", () => {
    it("format", () => {
      // For reference: not setting any options
      expect(format(new Date(2014, 0, 1), "PPPpp")).toEqual("January 1st, 2014 at 12:00:00 AM");

      setDefaultOptions({ locale: eo });

      expect(format(new Date(2014, 0, 1), "PPPpp")).toEqual("2014-januaro-01 00:00:00");

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(format(new Date(2014, 0, 1), "PPPpp", { locale: enUS })).toEqual("January 1st, 2014 at 12:00:00 AM");
    });

    it("formatDistance", () => {
      // For reference: not setting any options
      expect(formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("about 1 year");

      setDefaultOptions({ locale: eo });

      expect(formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("proksimume 1 jaro");

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(formatDistance(new Date(2014, 0, 1), new Date(2015, 0, 1), {
        locale: enUS,
      })).toEqual("about 1 year");
    });

    it("formatDistanceStrict", () => {
      // For reference: not setting any options
      expect(formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("1 year");

      setDefaultOptions({ locale: eo });

      expect(formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1))).toEqual("1 jaro");

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(formatDistanceStrict(new Date(2014, 0, 1), new Date(2015, 0, 1), {
        locale: enUS,
      })).toEqual("1 year");
    });

    it("formatDuration", () => {
      // For reference: not setting any options
      expect(formatDuration({ years: 1 })).toEqual("1 year");

      setDefaultOptions({ locale: eo });

      expect(formatDuration({ years: 1 })).toEqual("1 jaro");

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(formatDuration({ years: 1 }, { locale: enUS })).toEqual("1 year");
    });

    it("formatRelative", () => {
      // For reference: not setting any options
      expect(formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2))).toEqual("yesterday at 12:00 AM");

      setDefaultOptions({ locale: eo });

      expect(formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2))).toEqual("hieraŭ je 00:00");

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(formatRelative(new Date(2014, 0, 1), new Date(2014, 0, 2), {
        locale: enUS,
      })).toEqual("yesterday at 12:00 AM");
    });

    it("isMatch", () => {
      // For reference: not setting any options
      expect(isMatch("January 1st, 2014 at 12:00:00 AM", "PPPpp")).toBe(true);

      setDefaultOptions({ locale: eo });

      expect(isMatch("2014-januaro-01 00:00:00", "PPPpp")).toBe(true);

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(isMatch("January 1st, 2014 at 12:00:00 AM", "PPPpp", { locale: enUS })).toBe(true);
    });

    it("parse", () => {
      // For reference: not setting any options
      expect(parse("January 1st, 2014 at 12:00:00 AM", "PPPpp", new Date())).toEqual(new Date(2014, 0, 1));

      setDefaultOptions({ locale: eo });

      expect(parse("2014-januaro-01 00:00:00", "PPPpp", new Date())).toEqual(new Date(2014, 0, 1));

      // Manually set `locale` take priority over `defaultOptions.locale`
      expect(parse("January 1st, 2014 at 12:00:00 AM", "PPPpp", new Date(), {
        locale: enUS,
      })).toEqual(new Date(2014, 0, 1));
    });
  });

  describe("weekStartsOn", () => {
    it("differenceInCalendarWeeks", () => {
      // For reference: not setting any options
      expect(differenceInCalendarWeeks(
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        new Date(2014, 5 /* Jun */, 29, 6, 0),
      )).toBe(1);

      setDefaultOptions({ weekStartsOn: 1 });

      expect(differenceInCalendarWeeks(
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        new Date(2014, 5 /* Jun */, 29, 6, 0),
      )).toBe(2);

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(differenceInCalendarWeeks(
        new Date(2014, 6 /* Jul */, 8, 18, 0),
        new Date(2014, 5 /* Jun */, 29, 6, 0),
        {
          weekStartsOn: 0,
        },
      )).toBe(1);
    });

    it("eachWeekOfInterval", () => {
      // For reference: not setting any options
      expect(eachWeekOfInterval({
        start: new Date(2014, 9 /* Oct */, 6),
        end: new Date(2014, 10 /* Nov */, 23),
      })).toEqual([
        new Date(2014, 9 /* Oct */, 5),
        new Date(2014, 9 /* Oct */, 12),
        new Date(2014, 9 /* Oct */, 19),
        new Date(2014, 9 /* Oct */, 26),
        new Date(2014, 10 /* Nov */, 2),
        new Date(2014, 10 /* Nov */, 9),
        new Date(2014, 10 /* Nov */, 16),
        new Date(2014, 10 /* Nov */, 23),
      ]);

      setDefaultOptions({ weekStartsOn: 1 });

      expect(eachWeekOfInterval({
        start: new Date(2014, 9 /* Oct */, 6, 6, 35),
        end: new Date(2014, 10 /* Nov */, 25, 22, 15),
      })).toEqual([
        new Date(2014, 9 /* Oct */, 6),
        new Date(2014, 9 /* Oct */, 13),
        new Date(2014, 9 /* Oct */, 20),
        new Date(2014, 9 /* Oct */, 27),
        new Date(2014, 10 /* Nov */, 3),
        new Date(2014, 10 /* Nov */, 10),
        new Date(2014, 10 /* Nov */, 17),
        new Date(2014, 10 /* Nov */, 24),
      ]);

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(eachWeekOfInterval(
        {
          start: new Date(2014, 9 /* Oct */, 6),
          end: new Date(2014, 10 /* Nov */, 23),
        },
        {
          weekStartsOn: 0,
        },
      )).toEqual([
        new Date(2014, 9 /* Oct */, 5),
        new Date(2014, 9 /* Oct */, 12),
        new Date(2014, 9 /* Oct */, 19),
        new Date(2014, 9 /* Oct */, 26),
        new Date(2014, 10 /* Nov */, 2),
        new Date(2014, 10 /* Nov */, 9),
        new Date(2014, 10 /* Nov */, 16),
        new Date(2014, 10 /* Nov */, 23),
      ]);
    });

    it("endOfWeek", () => {
      // For reference: not setting any options
      expect(endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));

      setDefaultOptions({ weekStartsOn: 1 });

      expect(endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 7, 23, 59, 59, 999));

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(endOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
        weekStartsOn: 0,
      })).toEqual(new Date(2014, 8 /* Sep */, 6, 23, 59, 59, 999));
    });

    it("getWeekOfMonth", () => {
      // For reference: not setting any options
      expect(getWeekOfMonth(new Date(2017, 10 /* Nov */, 15))).toBe(3);

      setDefaultOptions({ weekStartsOn: 1 });

      expect(getWeekOfMonth(new Date(2017, 9 /* Oct */, 31))).toBe(6);

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(getWeekOfMonth(new Date(2017, 10 /* Nov */, 15), {
        weekStartsOn: 0,
      })).toBe(3);
    });

    it("getWeeksInMonth", () => {
      // For reference: not setting any options
      expect(getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0))).toBe(4);

      setDefaultOptions({ weekStartsOn: 1 });

      expect(getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0))).toBe(5);

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(getWeeksInMonth(new Date(2015, 1 /* Feb */, 8, 18, 0), {
        weekStartsOn: 0,
      })).toBe(4);
    });

    it("isSameWeek", () => {
      // For reference: not setting any options
      expect(isSameWeek(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 4),
      )).toBe(true);

      setDefaultOptions({ weekStartsOn: 1 });

      expect(isSameWeek(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 4),
      )).toBe(false);

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(isSameWeek(
        new Date(2014, 7 /* Aug */, 31),
        new Date(2014, 8 /* Sep */, 4),
        {
          weekStartsOn: 0,
        },
      )).toBe(true);
    });

    it("lastDayOfWeek", () => {
      // For reference: not setting any options
      expect(lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 6));

      setDefaultOptions({ weekStartsOn: 1 });

      expect(lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 7));

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(lastDayOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
        weekStartsOn: 0,
      })).toEqual(new Date(2014, 8 /* Sep */, 6));
    });

    it("setDay", () => {
      // For reference: not setting any options
      expect(setDay(new Date(2014, 8 /* Sep */, 1), 0)).toEqual(new Date(2014, 7 /* Aug */, 31));

      setDefaultOptions({ weekStartsOn: 1 });

      expect(setDay(new Date(2014, 8 /* Sep */, 1), 0)).toEqual(new Date(2014, 8 /* Sep */, 7));

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(setDay(new Date(2014, 8 /* Sep */, 1), 0, {
        weekStartsOn: 0,
      })).toEqual(new Date(2014, 7 /* Aug */, 31));
    });

    it("startOfWeek", () => {
      // For reference: not setting any options
      expect(startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 7 /* Aug */, 31));

      setDefaultOptions({ weekStartsOn: 1 });

      expect(startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0))).toEqual(new Date(2014, 8 /* Sep */, 1));

      // Manually set `weekStartsOn` take priority over `defaultOptions.weekStartsOn`
      expect(startOfWeek(new Date(2014, 8 /* Sep */, 2, 11, 55, 0), {
        weekStartsOn: 0,
      })).toEqual(new Date(2014, 7 /* Aug */, 31));
    });
  });

  describe("firstWeekContainsDate", () => {
    it("format", () => {
      // For reference: not setting any options
      expect(format(new Date(1986, 3 /* Apr */, 6), "w wo ww")).toBe("15 15th 15");

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(format(new Date(1986, 3 /* Apr */, 6), "w wo ww")).toBe("14 14th 14");

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(format(new Date(1986, 3 /* Apr */, 6), "w wo ww", {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toBe("15 15th 15");
    });

    it("getWeek", () => {
      // For reference: not setting any options
      expect(getWeek(new Date(2005, 0 /* Jan */, 2))).toBe(2);

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(getWeek(new Date(2005, 0 /* Jan */, 2))).toBe(53);

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(getWeek(new Date(2005, 0 /* Jan */, 2), {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toBe(2);
    });

    it("getWeekYear", () => {
      // For reference: not setting any options
      expect(getWeekYear(new Date(2004, 11 /* Dec */, 26))).toBe(2005);

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(getWeekYear(new Date(2004, 11 /* Dec */, 26))).toBe(2004);

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(getWeekYear(new Date(2004, 11 /* Dec */, 26), {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toBe(2005);
    });

    it("parse", () => {
      const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);
      // For reference: not setting any options
      expect(parse("2018", "Y", referenceDate)).toEqual(new Date(2017, 11 /* Dec */, 31));

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(parse("2018", "Y", referenceDate)).toEqual(new Date(2018, 0 /* Jan */, 1));

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(parse("2018", "Y", referenceDate, {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toEqual(new Date(2017, 11 /* Dec */, 31));
    });

    it("setWeek", () => {
      // For reference: not setting any options
      expect(setWeek(new Date(2005, 0 /* Jan */, 2), 1)).toEqual(new Date(2004, 11 /* Dec */, 26));

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(setWeek(new Date(2005, 0 /* Jan */, 2), 1)).toEqual(new Date(2004, 0 /* Jan */, 4));

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(setWeek(new Date(2005, 0 /* Jan */, 2), 1, {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toEqual(new Date(2004, 11 /* Dec */, 26));
    });

    it("setWeekYear", () => {
      // For reference: not setting any options
      expect(setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004)).toEqual(new Date(2004, 0 /* Jan */, 3));

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004)).toEqual(new Date(2005, 0 /* Jan */, 1));

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(setWeekYear(new Date(2010, 0 /* Jan */, 2), 2004, {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toEqual(new Date(2004, 0 /* Jan */, 3));
    });

    it("startOfWeekYear", () => {
      // For reference: not setting any options
      expect(startOfWeekYear(new Date(2005, 6 /* Jul */, 2))).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));

      setDefaultOptions({ weekStartsOn: 1, firstWeekContainsDate: 4 });

      expect(startOfWeekYear(new Date(2005, 6 /* Jul */, 2))).toEqual(new Date(2005, 0 /* Jan */, 3, 0, 0, 0, 0));

      // Manually set `firstWeekContainsDate` take priority over `defaultOptions.firstWeekContainsDate`
      expect(startOfWeekYear(new Date(2005, 6 /* Jul */, 2), {
        weekStartsOn: 0,
        firstWeekContainsDate: 1,
      })).toEqual(new Date(2004, 11 /* Dec */, 26, 0, 0, 0, 0));
    });
  });
});
