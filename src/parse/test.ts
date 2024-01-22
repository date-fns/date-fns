/* eslint-env mocha */

import assert from "node:assert";
import { describe, it } from "vitest";
import { parse } from "./index.js";

describe("parse", () => {
  const referenceDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);

  it("escapes characters between the single quote characters", () => {
    const result = parse(
      "2018 hello world July 2nd",
      "yyyy 'hello world' MMMM do",
      referenceDate,
    );
    assert.deepStrictEqual(result, new Date(2018, 6 /* Jul */, 2));
  });

  it('two single quote characters are transformed into a "real" single quote', () => {
    const result = parse("'5 o'clock'", "''h 'o''clock'''", referenceDate);
    assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 5));
  });

  it("accepts new line charactor", () => {
    const result = parse(
      "2014-04-04\n05:00:00",
      "yyyy-MM-dd'\n'HH:mm:ss",
      referenceDate,
    );
    assert.deepStrictEqual(result, new Date(2014, 3 /* Apr */, 4, 5));
  });

  describe("era", () => {
    it("abbreviated", () => {
      const result = parse("10000 BC", "yyyyy G", referenceDate);
      assert.deepStrictEqual(result, new Date(-9999, 0 /* Jan */, 1));
    });

    it("wide", () => {
      const result = parse("2018 Anno Domini", "yyyy GGGG", referenceDate);
      assert.deepStrictEqual(result, new Date(2018, 0 /* Jan */, 1));
    });

    it("narrow", () => {
      const result = parse("44 B", "y GGGGG", referenceDate);
      assert.deepStrictEqual(result, new Date(-43, 0 /* Jan */, 1));
    });

    it("with week-numbering year", () => {
      const result = parse("44 B", "Y GGGGG", referenceDate);
      assert.deepStrictEqual(result, new Date(-44, 11 /* Dec */, 30));
    });

    it("parses stand-alone BC", () => {
      const result = parse("BC", "G", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(0, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    it("parses stand-alone AD", () => {
      const result = parse("AD", "G", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    describe("validation", () => {
      [
        ["G", "BC"],
        ["R", "2019"],
        ["u", "2019"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when G is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 420`, `${token} G`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`G\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("calendar year", () => {
    it("numeric", () => {
      const result = parse("2017", "y", referenceDate);
      assert.deepStrictEqual(result, new Date(2017, 0 /* Jan */, 1));
    });

    it("ordinal", () => {
      const result = parse("2017th", "yo", referenceDate);
      assert.deepStrictEqual(result, new Date(2017, 0 /* Jan */, 1));
    });

    describe("two-digit numeric year", () => {
      it("works as expected", () => {
        const result = parse("02", "yy", referenceDate);
        assert.deepStrictEqual(result, new Date(2002, 0 /* Jan */, 1));
      });

      it("gets the 100 year range from `referenceDate`", () => {
        const result = parse("02", "yy", new Date(1860, 6 /* Jul */, 2));
        assert.deepStrictEqual(result, new Date(1902, 0 /* Jan */, 1));
      });
    });

    it("three-digit zero-padding", () => {
      const result = parse("123", "yyy", referenceDate);
      assert.deepStrictEqual(result, new Date(123, 0 /* Jan */, 1));
    });

    it("four-digit zero-padding", () => {
      const result = parse("0044", "yyyy", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(44, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    it("specified amount of digits", () => {
      const result = parse("000001", "yyyyyy", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    describe("validation", () => {
      [
        ["y", "2019"],
        ["Y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["w", "1"],
        ["I", "1"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when y is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 2019`, `${token} y`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`y\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("local week-numbering year", () => {
    it("numeric", () => {
      const result = parse("2002", "Y", referenceDate);
      assert.deepStrictEqual(result, new Date(2001, 11 /* Dec */, 30));
    });

    it("ordinal", () => {
      const result = parse("12345th", "Yo", referenceDate);
      assert.deepStrictEqual(result, new Date(12344, 11 /* Dec */, 31));
    });

    describe("two-digit numeric year", () => {
      it("works as expected", () => {
        const result = parse("02", "YY", referenceDate, {
          useAdditionalWeekYearTokens: true,
        });
        assert.deepStrictEqual(result, new Date(2001, 11 /* Dec */, 30));
      });

      it("gets the 100 year range from `referenceDate`", () => {
        const result = parse("02", "YY", new Date(1860, 6 /* Jul */, 2), {
          useAdditionalWeekYearTokens: true,
        });
        assert.deepStrictEqual(result, new Date(1901, 11 /* Dec */, 29));
      });
    });

    it("three-digit zero-padding", () => {
      const result = parse("123", "YYY", referenceDate);
      assert.deepStrictEqual(result, new Date(122, 11 /* Dec */, 27));
    });

    it("four-digit zero-padding", () => {
      const result = parse("2018", "YYYY", referenceDate, {
        useAdditionalWeekYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(2017, 11 /* Dec */, 31));
    });

    it("specified amount of digits", () => {
      const result = parse("000001", "YYYYYY", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(0, 11 /* Dec */, 31);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
      const result = parse("2018", "Y", referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4,
      });
      assert.deepStrictEqual(result, new Date(2018, 0 /* Jan */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["y", "2019"],
        ["Y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when Y is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 2019`, `${token} Y`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`Y\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("ISO week-numbering year", () => {
    it("numeric", () => {
      const result = parse("-1234", "R", referenceDate);
      assert.deepStrictEqual(result, new Date(-1234, 0 /* Jan */, 3));
    });

    it("two-digit zero-padding", () => {
      const result = parse("-02", "RR", referenceDate);
      assert.deepStrictEqual(result, new Date(-3, 11 /* Dec */, 29));
    });

    it("three-digit zero-padding", () => {
      const result = parse("123", "RRR", referenceDate);
      assert.deepStrictEqual(result, new Date(123, 0 /* Jan */, 4));
    });

    it("four-digit zero-padding", () => {
      const result = parse("2018", "RRRR", referenceDate);
      assert.deepStrictEqual(result, new Date(2018, 0 /* Jan */, 1));
    });

    it("specified amount of digits", () => {
      const result = parse("000001", "RRRRRR", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["G", "AD"],
        ["y", "2019"],
        ["Y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when R is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 2019`, `${token} R`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`R\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("extended year", () => {
    it("numeric", () => {
      const result = parse("-1234", "u", referenceDate);
      assert.deepStrictEqual(result, new Date(-1234, 0 /* Jan */, 1));
    });

    it("two-digit zero-padding", () => {
      const result = parse("-02", "uu", referenceDate);
      assert.deepStrictEqual(result, new Date(-2, 0 /* Jan */, 1));
    });

    it("three-digit zero-padding", () => {
      const result = parse("123", "uuu", referenceDate);
      assert.deepStrictEqual(result, new Date(123, 0 /* Jan */, 1));
    });

    it("four-digit zero-padding", () => {
      const result = parse("2018", "uuuu", referenceDate);
      assert.deepStrictEqual(result, new Date(2018, 0 /* Jan */, 1));
    });

    it("specified amount of digits", () => {
      const result = parse("000001", "uuuuuu", referenceDate);
      const expectedResult = new Date(0);
      expectedResult.setFullYear(1, 0 /* Jan */, 1);
      expectedResult.setHours(0, 0, 0, 0);
      assert.deepStrictEqual(result, expectedResult);
    });

    describe("validation", () => {
      [
        ["G", "AD"],
        ["y", "2019"],
        ["Y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["w", "1"],
        ["I", "1"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when u is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 2019`, `${token} u`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`u\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("quarter with following year", () => {
    it("first quarter", () => {
      const result = parse("Q1/2020", "QQQ/yyyy", referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 0 /* Jan */, 1));
    });

    it("second quarter", () => {
      const result = parse("Q2/2020", "QQQ/yyyy", referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 3 /* Apr */, 1));
    });

    it("third quarter", () => {
      const result = parse("Q3/2020", "QQQ/yyyy", referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 6 /* Jul */, 1));
    });

    it("fourth quarter", () => {
      const result = parse("Q4/2020", "QQQ/yyyy", referenceDate);
      assert.deepStrictEqual(result, new Date(2020, 9 /* Oct */, 1));
    });
  });

  describe("quarter (formatting)", () => {
    it("numeric", () => {
      const result = parse("1", "Q", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("ordinal", () => {
      const result = parse("1st", "Qo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("zero-padding", () => {
      const result = parse("02", "QQ", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Q3", "QQQ", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6 /* Jul */, 1));
    });

    it("wide", () => {
      const result = parse("4st quarter", "QQQQ", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 9 /* Oct */, 1));
    });

    it("narrow", () => {
      const result = parse("1", "QQQQQ", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["Y", "2019"],
        ["R", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when Q is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} Q`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`Q\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("quarter (stand-alone)", () => {
    it("numeric", () => {
      const result = parse("1", "q", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("ordinal", () => {
      const result = parse("1th", "qo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("zero-padding", () => {
      const result = parse("02", "qq", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Q3", "qqq", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6 /* Jul */, 1));
    });

    it("wide", () => {
      const result = parse("4th quarter", "qqqq", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 9 /* Oct */, 1));
    });

    it("narrow", () => {
      const result = parse("1", "qqqqq", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["Y", "2019"],
        ["R", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when q is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} q`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`q\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("month (formatting)", () => {
    it("numeric", () => {
      const result = parse("6", "M", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5 /* Jun */, 1));
    });

    it("ordinal", () => {
      const result = parse("6th", "Mo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5 /* Jun */, 1));
    });

    it("zero-padding", () => {
      const result = parse("01", "MM", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Nov", "MMM", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10 /* Nov */, 1));
    });

    it("wide", () => {
      const result = parse("February", "MMMM", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 1 /* Feb */, 1));
    });

    it("narrow", () => {
      const result = parse("J", "MMMMM", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["Y", "2019"],
        ["R", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when M is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} M`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`M\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("month (stand-alone)", () => {
    it("numeric", () => {
      const result = parse("6", "L", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5 /* Jun */, 1));
    });

    it("ordinal", () => {
      const result = parse("6th", "Lo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 5 /* Jun */, 1));
    });

    it("zero-padding", () => {
      const result = parse("01", "LL", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Nov", "LLL", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10 /* Nov */, 1));
    });

    it("wide", () => {
      const result = parse("February", "LLLL", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 1 /* Feb */, 1));
    });

    it("narrow", () => {
      const result = parse("J", "LLLLL", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["Y", "2019"],
        ["R", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when L is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} L`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`L\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("local week of year", () => {
    it("numeric", () => {
      const result = parse("49", "w", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10 /* Nov */, 30));
    });

    it("ordinal", () => {
      const result = parse("49th", "wo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 10 /* Nov */, 30));
    });

    it("zero-padding", () => {
      const result = parse("01", "ww", referenceDate);
      assert.deepStrictEqual(result, new Date(1985, 11 /* Dec */, 29));
    });

    it("allows to specify `weekStartsOn` and `firstWeekContainsDate` in options", () => {
      const result = parse("49", "w", referenceDate, {
        weekStartsOn: 1 /* Mon */,
        firstWeekContainsDate: 4,
      });
      assert.deepStrictEqual(result, new Date(1986, 11 /* Dec */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when w is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} w`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`w\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("ISO week of year", () => {
    it("numeric", () => {
      const result = parse("49", "I", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 11 /* Dec */, 1));
    });

    it("ordinal", () => {
      const result = parse("49th", "Io", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 11 /* Dec */, 1));
    });

    it("zero-padding", () => {
      const result = parse("01", "II", referenceDate);
      assert.deepStrictEqual(result, new Date(1985, 11 /* Dec */, 30));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["y", "2019"],
        ["Y", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when I is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} I`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`I\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("day of month", () => {
    it("numeric", () => {
      const result = parse("28", "d", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 28));
    });

    it("ordinal", () => {
      const result = parse("28th", "do", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 28));
    });

    it("zero-padding", () => {
      const result = parse("01", "dd", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["Y", "2019"],
        ["R", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["w", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when d is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} d`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`d\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("day of year", () => {
    it("numeric", () => {
      const result = parse("200", "D", referenceDate, {
        useAdditionalDayOfYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(1986, 6 /* Jul */, 19));
    });

    it("ordinal", () => {
      const result = parse("200th", "Do", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6 /* Jul */, 19));
    });

    it("two-digit zero-padding", () => {
      const result = parse("01", "DD", referenceDate, {
        useAdditionalDayOfYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("three-digit zero-padding", () => {
      const result = parse("001", "DDD", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 0 /* Jan */, 1));
    });

    it("specified amount of digits", () => {
      const result = parse("000200", "DDDDDD", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 6 /* Jul */, 19));
    });

    describe("validation", () => {
      [
        ["Y", "2019"],
        ["R", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1"],
        ["E", "Mon"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example, _options]) => {
        it(`throws an error when D is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} D`, referenceDate, {
              useAdditionalDayOfYearTokens: true,
            });
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`D\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("day of week (formatting)", () => {
    it("abbreviated", () => {
      const result = parse("Mon", "E", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("wide", () => {
      const result = parse("Tuesday", "EEEE", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    it("narrow", () => {
      const result = parse("W", "EEEEE", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 2));
    });

    it("short", () => {
      const result = parse("Th", "EEEEEE", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 3));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = parse("Thursday", "EEEE", referenceDate, {
        weekStartsOn: /* Fri */ 5,
      });
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 10));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["E", "Mon"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when E is used after ${token}`, () => {
          const block = () =>
            parse(`${example} Mon`, `${token} E`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`E\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("ISO day of week (formatting)", () => {
    it("numeric", () => {
      const result = parse("1", "i", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("ordinal", () => {
      const result = parse("1st", "io", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("zero-padding", () => {
      const result = parse("02", "ii", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Wed", "iii", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 2));
    });

    it("wide", () => {
      const result = parse("Thursday", "iiii", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 3));
    });

    it("narrow", () => {
      const result = parse("S", "iiiii", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 6));
    });

    it("short", () => {
      const result = parse("Fr", "iiiiii", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["y", "2019"],
        ["Y", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["w", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["E", "Mon"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when i is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} i`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`i\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("local day of week (formatting)", () => {
    it("numeric", () => {
      const result = parse("2", "e", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("ordinal", () => {
      const result = parse("2nd", "eo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("zero-padding", () => {
      const result = parse("03", "ee", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Wed", "eee", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 2));
    });

    it("wide", () => {
      const result = parse("Thursday", "eeee", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 3));
    });

    it("narrow", () => {
      const result = parse("S", "eeeee", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 30));
    });

    it("short", () => {
      const result = parse("Fr", "eeeeee", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = parse("7th", "eo", referenceDate, {
        weekStartsOn: /* Fri */ 5,
      });
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 10));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["E", "Mon"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when e is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} e`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`e\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("local day of week (stand-alone)", () => {
    it("numeric", () => {
      const result = parse("2", "c", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("ordinal", () => {
      const result = parse("2nd", "co", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 31));
    });

    it("zero-padding", () => {
      const result = parse("03", "cc", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 1));
    });

    it("abbreviated", () => {
      const result = parse("Wed", "ccc", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 2));
    });

    it("wide", () => {
      const result = parse("Thursday", "cccc", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 3));
    });

    it("narrow", () => {
      const result = parse("S", "ccccc", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 2 /* Mar */, 30));
    });

    it("short", () => {
      const result = parse("Fr", "cccccc", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4));
    });

    it("allows to specify which day is the first day of the week", () => {
      const result = parse("7th", "co", referenceDate, {
        weekStartsOn: /* Fri */ 5,
      });
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 10));
    });

    describe("validation", () => {
      const tokensToValidate: Array<
        [string, string, { useAdditionalDayOfYearTokens: boolean }?]
      > = [
        ["y", "2019"],
        ["R", "2019"],
        ["u", "2019"],
        ["Q", "1"],
        ["q", "1"],
        ["M", "1"],
        ["L", "1"],
        ["I", "1"],
        ["d", "1"],
        ["D", "1", { useAdditionalDayOfYearTokens: true }],
        ["E", "Mon"],
        ["i", "1"],
        ["e", "1"],
        ["c", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ];
      tokensToValidate.forEach(([token, example, options]) => {
        it(`throws an error when c is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} c`, referenceDate, options);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`c\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("AM, PM", () => {
    it("abbreviated", () => {
      const result = parse("5 AM", "h a", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 5));
    });

    it("12 AM", () => {
      const result = parse("12 AM", "h aa", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
    });

    it("12 PM", () => {
      const result = parse("12 PM", "h aaa", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("wide", () => {
      const result = parse("5 p.m.", "h aaaa", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 17));
    });

    it("narrow", () => {
      const result = parse("11 a", "h aaaaa", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 11));
    });

    describe("validation", () => {
      [
        ["a", "AM"],
        ["b", "AM"],
        ["B", "in the morning"],
        ["H", "1"],
        ["k", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when a is used after ${token}`, () => {
          const block = () =>
            parse(`${example} AM`, `${token} a`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`a\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("AM, PM, noon, midnight", () => {
    it("abbreviated", () => {
      const result = parse("noon", "b", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("wide", () => {
      const result = parse("midnight", "bbbb", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
    });

    it("narrow", () => {
      const result = parse("mi", "bbbbb", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
    });

    describe("validation", () => {
      [
        ["a", "AM"],
        ["b", "AM"],
        ["B", "in the morning"],
        ["H", "1"],
        ["k", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when b is used after ${token}`, () => {
          const block = () =>
            parse(`${example} AM`, `${token} b`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`b\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("flexible day period", () => {
    it("abbreviated", () => {
      const result = parse("2 at night", "h B", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 2));
    });

    it("wide", () => {
      const result = parse("12 in the afternoon", "h BBBB", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("narrow", () => {
      const result = parse("5 in the evening", "h BBBBB", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 17));
    });

    describe("validation", () => {
      [
        ["a", "AM"],
        ["b", "AM"],
        ["B", "in the morning"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when B is used after ${token}`, () => {
          const block = () =>
            parse(`${example} in the morning`, `${token} B`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`B\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("hour [1-12]", () => {
    it("numeric", () => {
      const result = parse("1", "h", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 1));
    });

    it("ordinal", () => {
      const result = parse("1st", "ho", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 1));
    });

    it("zero-padding", () => {
      const result = parse("01", "hh", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 1));
    });

    describe("validation", () => {
      [
        ["h", "1"],
        ["H", "1"],
        ["K", "1"],
        ["k", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when h is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} h`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`h\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("hour [0-23]", () => {
    it("numeric", () => {
      const result = parse("12", "H", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("ordinal", () => {
      const result = parse("12th", "Ho", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("zero-padding", () => {
      const result = parse("00", "HH", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
    });

    describe("validation", () => {
      [
        ["a", "AM"],
        ["b", "AM"],
        ["h", "1"],
        ["H", "1"],
        ["K", "1"],
        ["k", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when H is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} H`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`H\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("hour [0-11]", () => {
    it("numeric", () => {
      const result = parse("1", "K", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 1));
    });

    it("ordinal", () => {
      const result = parse("1st", "Ko", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 1));
    });

    it("zero-padding", () => {
      const result = parse("1", "KK", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 1));
    });

    describe("validation", () => {
      [
        ["h", "1"],
        ["H", "1"],
        ["K", "1"],
        ["k", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when K is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} K`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`K\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("hour [1-24]", () => {
    it("numeric", () => {
      const result = parse("12", "k", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("ordinal", () => {
      const result = parse("12th", "ko", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
    });

    it("zero-padding", () => {
      const result = parse("24", "kk", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
    });

    describe("validation", () => {
      [
        ["a", "AM"],
        ["b", "AM"],
        ["h", "1"],
        ["H", "1"],
        ["K", "1"],
        ["k", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when k is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} k`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`k\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("minute", () => {
    it("numeric", () => {
      const result = parse("25", "m", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25));
    });

    it("ordinal", () => {
      const result = parse("25th", "mo", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 25));
    });

    it("zero-padding", () => {
      const result = parse("05", "mm", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 5));
    });

    describe("validation", () => {
      [
        ["m", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when m is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} m`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`m\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("second", () => {
    it("numeric", () => {
      const result = parse("25", "s", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1986, 3 /* Apr */, 4, 10, 32, 25),
      );
    });

    it("ordinal", () => {
      const result = parse("25th", "so", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1986, 3 /* Apr */, 4, 10, 32, 25),
      );
    });

    it("zero-padding", () => {
      const result = parse("05", "ss", referenceDate);
      assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 10, 32, 5));
    });

    describe("validation", () => {
      [
        ["s", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when s is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} s`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`s\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("fraction of second", () => {
    it("1/10 of second", () => {
      const result = parse("1", "S", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 100),
      );
    });

    it("1/100 of second", () => {
      const result = parse("12", "SS", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 120),
      );
    });

    it("millisecond", () => {
      const result = parse("123", "SSS", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 123),
      );
    });

    it("specified amount of digits", () => {
      const result = parse("567890", "SSSSSS", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 567),
      );
    });

    describe("validation", () => {
      [
        ["S", "1"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when S is used after ${token}`, () => {
          const block = () =>
            parse(`${example} 1`, `${token} S`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`S\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("timezone (ISO-8601 w/ Z)", () => {
    describe("X", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-0530",
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123Z",
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });

      it("hours", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+05",
          "yyyy-MM-dd'T'HH:mm:ss.SSSX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123+05:00"),
        );
      });
    });

    describe("XX", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-0530",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123Z",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXX",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });
    });

    describe("XXX", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-05:30",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123Z",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXX",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });
    });

    describe("XXXX", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-0530",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123Z",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });

      it("hours, minutes and seconds", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+053045",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:37:53.123+05:30"),
        );
      });
    });

    describe("XXXXX", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-05:30",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123Z",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });

      it("hours, minutes and seconds", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+05:30:45",
          "yyyy-MM-dd'T'HH:mm:ss.SSSXXXXX",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:37:53.123+05:30"),
        );
      });
    });

    describe("validation", () => {
      [
        ["X", "-0530"],
        ["x", "-0530"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when X is used after ${token}`, () => {
          const block = () =>
            parse(`${example} -0530`, `${token} X`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`X\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("timezone (ISO-8601 w/o Z)", () => {
    describe("x", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-0530",
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+0000",
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });

      it("hours", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+05",
          "yyyy-MM-dd'T'HH:mm:ss.SSSx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123+05:00"),
        );
      });
    });

    describe("xx", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-0530",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+0000",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxx",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });
    });

    describe("xxx", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-05:30",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+00:00",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxx",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });
    });

    describe("xxxx", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-0530",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+0000",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });

      it("hours, minutes and seconds", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+053045",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:37:53.123+05:30"),
        );
      });
    });

    describe("xxxxx", () => {
      it("hours and minutes", () => {
        const result = parse(
          "2016-11-25T16:38:38.123-05:30",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:38:38.123-05:30"),
        );
      });

      it("GMT", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+00:00",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate,
        );
        assert.deepStrictEqual(result, new Date("2016-11-25T16:38:38.123Z"));
      });

      it("hours, minutes and seconds", () => {
        const result = parse(
          "2016-11-25T16:38:38.123+05:30:45",
          "yyyy-MM-dd'T'HH:mm:ss.SSSxxxxx",
          referenceDate,
        );
        assert.deepStrictEqual(
          result,
          new Date("2016-11-25T16:37:53.123+05:30"),
        );
      });
    });

    describe("validation", () => {
      [
        ["X", "-0530"],
        ["x", "-0530"],
        ["t", "512969520"],
        ["T", "512969520900"],
      ].forEach(([token, example]) => {
        it(`throws an error when x is used after ${token}`, () => {
          const block = () =>
            parse(`${example} -0530`, `${token} x`, referenceDate);
          assert.throws(block, RangeError);
          assert.throws(
            block,
            new RegExp(
              `The format string mustn't contain \`${token}\` and \`x\` at the same time`,
            ),
          );
        });
      });
    });
  });

  describe("seconds timestamp", () => {
    it("numeric", () => {
      const result = parse("512969520", "t", referenceDate);
      assert.deepStrictEqual(result, new Date(512969520000));
    });

    it("specified amount of digits", () => {
      const result = parse(
        "00000000000512969520",
        "tttttttttttttttttttt",
        referenceDate,
      );
      assert.deepStrictEqual(result, new Date(512969520000));
    });

    it(`throws an error when it is used after any token`, () => {
      const block = () => parse(`1 512969520`, `h t`, referenceDate);
      assert.throws(block, RangeError);
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`t\` and any other token at the same time`,
        ),
      );
    });
  });

  describe("milliseconds timestamp", () => {
    it("numeric", () => {
      const result = parse("512969520900", "T", referenceDate);
      assert.deepStrictEqual(result, new Date(512969520900));
    });

    it("specified amount of digits", () => {
      const result = parse(
        "00000000512969520900",
        "TTTTTTTTTTTTTTTTTTTT",
        referenceDate,
      );
      assert.deepStrictEqual(result, new Date(512969520900));
    });

    it(`throws an error when it is used after any token`, () => {
      const block = () => parse(`1 512969520900`, `h T`, referenceDate);
      assert.throws(block, RangeError);
      assert.throws(
        block,
        new RegExp(
          `The format string mustn't contain \`T\` and any other token at the same time`,
        ),
      );
    });
  });

  describe("common formats", () => {
    it("ISO-8601", () => {
      const result = parse(
        "20161105T040404",
        "yyyyMMdd'T'HHmmss",
        referenceDate,
      );
      assert.deepStrictEqual(
        result,
        new Date(2016, 10 /* Nov */, 5, 4, 4, 4, 0),
      );
    });

    it("ISO week-numbering date", () => {
      const result = parse(
        "2016W474T153005",
        "RRRR'W'IIi'T'HHmmss",
        referenceDate,
      );
      assert.deepStrictEqual(
        result,
        new Date(2016, 10 /* Nov */, 24, 15, 30, 5, 0),
      );
    });

    it("ISO day of year date", () => {
      const result = parse("2010123T235959", "yyyyDDD'T'HHmmss", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(2010, 4 /* May */, 3, 23, 59, 59, 0),
      );
    });

    it("Date.prototype.toString()", () => {
      const dateString = "Wed Jul 02 2014 05:30:15 GMT+0600";
      const formatString = "EEE MMM dd yyyy HH:mm:ss 'GMT'xx";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, new Date(dateString));
    });

    it("Date.prototype.toISOString()", () => {
      const dateString = "2014-07-02T05:30:15.123+06:00";
      const formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, new Date(dateString));
    });

    it("middle-endian", () => {
      const result = parse(
        "5 a.m. 07/02/2016",
        "h aaaa MM/dd/yyyy",
        referenceDate,
      );
      assert.deepStrictEqual(
        result,
        new Date(2016, 6 /* Jul */, 2, 5, 0, 0, 0),
      );
    });

    it("little-endian", () => {
      const result = parse("02.07.1995", "dd.MM.yyyy", referenceDate);
      assert.deepStrictEqual(
        result,
        new Date(1995, 6 /* Jul */, 2, 0, 0, 0, 0),
      );
    });
  });

  describe("priority", () => {
    it("units of lower priority don't overwrite values of higher priority", () => {
      const dateString = "+06:00 123 15 30 05 02 07 2014";
      const formatString = "xxx SSS ss mm HH dd MM yyyy";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, new Date("2014-07-02T05:30:15.123+06:00"));
    });
  });

  describe("with `options.strictValidation` = true", () => {
    describe("calendar year", () => {
      it("returns `Invalid Date` for year zero", () => {
        const result = parse("0", "y", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("works correctly for two-digit year zero", () => {
        const result = parse("00", "yy", referenceDate);
        assert.deepStrictEqual(result, new Date(2000, 0 /* Jan */, 1));
      });
    });

    describe("local week-numbering year", () => {
      it("returns `Invalid Date` for year zero", () => {
        const result = parse("0", "Y", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("works correctly for two-digit year zero", () => {
        const result = parse("00", "YY", referenceDate, {
          useAdditionalWeekYearTokens: true,
        });
        assert.deepStrictEqual(result, new Date(1999, 11 /* Dec */, 26));
      });
    });

    describe("quarter (formatting)", () => {
      it("returns `Invalid Date` for invalid quarter", () => {
        const result = parse("0", "Q", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("quarter (stand-alone)", () => {
      it("returns `Invalid Date` for invalid quarter", () => {
        const result = parse("5", "q", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("month (formatting)", () => {
      it("returns `Invalid Date` for invalid month", () => {
        const result = parse("00", "MM", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("month (stand-alone)", () => {
      it("returns `Invalid Date` for invalid month", () => {
        const result = parse("13", "LL", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("local week of year", () => {
      it("returns `Invalid Date` for invalid week", () => {
        const result = parse("0", "w", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("ISO week of year", () => {
      it("returns `Invalid Date` for invalid week", () => {
        const result = parse("54", "II", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("day of month", () => {
      it("returns `Invalid Date` for invalid day of the month", () => {
        const result = parse("30", "d", new Date(2012, 1 /* Feb */, 1));
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for 29th of February of non-leap year", () => {
        const result = parse("29", "d", new Date(2014, 1 /* Feb */, 1));
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("parses 29th of February of leap year", () => {
        const result = parse("29", "d", new Date(2012, 1 /* Feb */, 1));
        assert.deepStrictEqual(result, new Date(2012, 1 /* Feb */, 29));
      });
    });

    describe("day of year", () => {
      it("returns `Invalid Date` for invalid day of the year", () => {
        const result = parse("0", "D", referenceDate, {
          useAdditionalDayOfYearTokens: true,
        });
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for 366th day of non-leap year", () => {
        const result = parse("366", "D", new Date(2014, 1 /* Feb */, 1), {
          useAdditionalDayOfYearTokens: true,
        });
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("parses 366th day of leap year", () => {
        const result = parse("366", "D", new Date(2012, 1 /* Feb */, 1), {
          useAdditionalDayOfYearTokens: true,
        });
        assert.deepStrictEqual(result, new Date(2012, 11 /* Dec */, 31));
      });
    });

    describe("ISO day of week (formatting)", () => {
      it("returns `Invalid Date` for day zero", () => {
        const result = parse("0", "i", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for eight day of week", () => {
        const result = parse("8", "i", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("local day of week (formatting)", () => {
      it("returns `Invalid Date` for day zero", () => {
        const result = parse("0", "e", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for eight day of week", () => {
        const result = parse("8", "e", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("local day of week (stand-alone)", () => {
      it("returns `Invalid Date` for day zero", () => {
        const result = parse("0", "c", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for eight day of week", () => {
        const result = parse("8", "c", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("hour [1-12]", () => {
      it("returns `Invalid Date` for hour zero", () => {
        const result = parse("00", "hh", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for invalid hour", () => {
        const result = parse("13", "hh", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("hour [0-23]", () => {
      it("returns `Invalid Date` for invalid hour", () => {
        const result = parse("24", "HH", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("hour [0-11]", () => {
      it("returns `Invalid Date` for invalid hour", () => {
        const result = parse("12", "KK", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("hour [1-24]", () => {
      it("returns `Invalid Date` for hour zero", () => {
        const result = parse("00", "kk", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });

      it("returns `Invalid Date` for invalid hour", () => {
        const result = parse("25", "kk", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("minute", () => {
      it("returns `Invalid Date` for invalid minute", () => {
        const result = parse("60", "mm", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });

    describe("second", () => {
      it("returns `Invalid Date` for invalid second", () => {
        const result = parse("60", "ss", referenceDate);
        assert(result instanceof Date && isNaN(result.getTime()));
      });
    });
  });

  describe("custom locale", () => {
    it("allows to pass a custom locale", () => {
      const customLocale = {
        match: {
          era: () => {
            return {
              value: 0,
              rest: " it works!",
            };
          },
        },
      };
      const result = parse("2018 foobar", "y G 'it works!'", referenceDate, {
        // @ts-expect-error - It's oke to have incomplete locale
        locale: customLocale,
      });
      assert.deepStrictEqual(result, new Date(-2017, 0 /* Jan */, 1));
    });
  });

  it("accepts a timestamp as `referenceDate`", () => {
    const dateString = "6 p.m.";
    const formatString = "h aaaa";
    const result = parse(dateString, formatString, referenceDate.getTime());
    assert.deepStrictEqual(result, new Date(1986, 3 /* Apr */, 4, 18));
  });

  it("does not mutate `referenceDate`", () => {
    const referenceDateClone1 = new Date(referenceDate.getTime());
    const referenceDateClone2 = new Date(referenceDate.getTime());
    const dateString = "6 p.m.";
    const formatString = "h aaaa";
    parse(dateString, formatString, referenceDateClone1);
    assert.deepStrictEqual(referenceDateClone1, referenceDateClone2);
  });

  describe("failure", () => {
    it("returns `referenceDate` if `dateString` and `formatString` are empty strings", () => {
      const dateString = "";
      const formatString = "";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, referenceDate);
    });

    it("returns `referenceDate` if no tokens in `formatString` are provided", () => {
      const dateString = "not a token";
      const formatString = "'not a token'";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, referenceDate);
    });

    it("returns `Invalid Date`  if `formatString` doesn't match `dateString`", () => {
      const dateString = "2017-01-01";
      const formatString = "yyyy/MM/dd";
      const result = parse(dateString, formatString, referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });

    it("returns `Invalid Date`  if `formatString` tokens failed to parse a value", () => {
      const dateString = "2017-01-01";
      const formatString = "MMMM do yyyy";
      const result = parse(dateString, formatString, referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });

    it("returns `Invalid Date` if `formatString` is empty string but `dateString` is not", () => {
      const dateString = "2017-01-01";
      const formatString = "";
      const result = parse(dateString, formatString, referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });

    it("returns `Invalid Date` if `referenceDate` is `Invalid Date`", () => {
      const dateString = "2014-07-02T05:30:15.123+06:00";
      const formatString = "yyyy-MM-dd'T'HH:mm:ss.SSSxxx";
      const result = parse(dateString, formatString, new Date(NaN));
      assert(result instanceof Date && isNaN(result.getTime()));
    });
  });

  describe("edge cases", () => {
    it("returns Invalid Date if the string contains some remaining input after parsing", () => {
      const result = parse("2016-11-05T040404", "yyyy-MM-dd", referenceDate);
      assert(result instanceof Date && isNaN(result.getTime()));
    });

    it("parses normally if the remaining input is just whitespace", () => {
      const result = parse("2016-11-05   \n", "yyyy-MM-dd", referenceDate);
      assert.deepStrictEqual(result, new Date(2016, 10 /* Nov */, 5));
    });

    it("throws RangeError exception if the format string contains an unescaped latin alphabet character", () => {
      assert.throws(
        () => parse("2016-11-05-nnnn", "yyyy-MM-dd-nnnn", referenceDate),
        RangeError,
      );
    });
  });

  describe("useAdditionalWeekYearTokens and useAdditionalDayOfYearTokens options", () => {
    it("throws an error if D token is used", () => {
      try {
        parse("2016 5", "yyyy D", referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith("Use `d` instead of `D`"));
      }
    });

    it("allows D token if useAdditionalDayOfYearTokens is set to true", () => {
      const result = parse("2016 5", "yyyy D", referenceDate, {
        useAdditionalDayOfYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(2016, 0, 5));
    });

    it("throws an error if DD token is used", () => {
      try {
        parse("2016 05", "yyyy DD", referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith("Use `dd` instead of `DD`"));
      }
    });

    it("allows DD token if useAdditionalDayOfYearTokens is set to true", () => {
      const result = parse("2016 05", "yyyy DD", referenceDate, {
        useAdditionalDayOfYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(2016, 0, 5));
    });

    it("throws an error if YY token is used", () => {
      try {
        parse("16 1", "YY w", referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith("Use `yy` instead of `YY`"));
      }
    });

    it("allows YY token if useAdditionalWeekYearTokens is set to true", () => {
      const result = parse("16 1", "YY w", referenceDate, {
        useAdditionalWeekYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(2015, 11, 27));
    });

    it("throws an error if YYYY token is used", () => {
      try {
        parse("2016 1", "YYYY w", referenceDate);
      } catch (e) {
        assert(e instanceof RangeError);
        assert(e.message.startsWith("Use `yyyy` instead of `YYYY`"));
      }
    });

    it("allows YYYY token if useAdditionalWeekYearTokens is set to true", () => {
      const result = parse("2016 1", "YYYY w", referenceDate, {
        useAdditionalWeekYearTokens: true,
      });
      assert.deepStrictEqual(result, new Date(2015, 11, 27));
    });
  });

  describe("long format", () => {
    it("short date", () => {
      const expected = new Date(1995, 4 /* May */, 26);
      const dateString = "05/26/1995";
      const formatString = "P";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("medium date", () => {
      const expected = new Date(1995, 4 /* May */, 26);
      const dateString = "May 26, 1995";
      const formatString = "PP";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("long date", () => {
      const expected = new Date(1995, 4 /* May */, 26);
      const dateString = "May 26th, 1995";
      const formatString = "PPP";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("full date", () => {
      const expected = new Date(1995, 4 /* May */, 26);
      const dateString = "Friday, May 26th, 1995";
      const formatString = "PPPP";
      const result = parse(dateString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("short time", () => {
      const expected = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate(),
        10,
        32,
      );
      const timeString = "10:32 AM";
      const formatString = "p";
      const result = parse(timeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("medium time", () => {
      const expected = new Date(
        referenceDate.getFullYear(),
        referenceDate.getMonth(),
        referenceDate.getDate(),
        10,
        32,
        55,
      );
      const timeString = "10:32:55 AM";
      const formatString = "pp";
      const result = parse(timeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("short date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32);
      const dateTimeString = "05/26/1995, 10:32 AM";
      const formatString = "Pp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("medium date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32);
      const dateTimeString = "May 26, 1995, 10:32 AM";
      const formatString = "PPp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("long date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32);
      const dateTimeString = "May 26th, 1995 at 10:32 AM";
      const formatString = "PPPp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("full date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32);
      const dateTimeString = "Friday, May 26th, 1995 at 10:32 AM";
      const formatString = "PPPPp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("short date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
      const dateTimeString = "05/26/1995, 10:32:55 AM";
      const formatString = "Ppp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("medium date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
      const dateTimeString = "May 26, 1995, 10:32:55 AM";
      const formatString = "PPpp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("long date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
      const dateTimeString = "May 26th, 1995 at 10:32:55 AM";
      const formatString = "PPPpp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });

    it("full date + short time", () => {
      const expected = new Date(1995, 4 /* May */, 26, 10, 32, 55);
      const dateTimeString = "Friday, May 26th, 1995 at 10:32:55 AM";
      const formatString = "PPPPpp";
      const result = parse(dateTimeString, formatString, referenceDate);
      assert.deepStrictEqual(result, expected);
    });
  });
});
