// @flow
/* eslint-env mocha */

import assert from "power-assert";
import locale from ".";

import format from "../../format";
import formatDistance from "../../formatDistance";
import formatDistanceStrict from "../../formatDistanceStrict";
import formatRelative from "../../formatRelative";
import parse from "../../parse";

describe("ro locale", function() {
  context("with `format`", function() {
    var date = new Date(1986, 3 /* Apr */, 5, 10, 32, 0, 900);

    it("era", function() {
      var result = format(date, "G, GGGG, GGGGG", { locale: locale });
      assert(result === "D.C., După Cristos, D");
    });

    describe("year", function() {
      it("ordinal regular year", function() {
        var result = format(date, "'anul' yo", { locale: locale });
        assert(result === "anul 1986");
      });

      it("ordinal local week-numbering year", function() {
        var result = format(date, "'an' Yo", { locale: locale });
        assert(result === "an 1986");
      });
    });

    describe("quarter", function() {
      it("formatting quarter", function() {
        var result = format(date, "'trimestrul' Qo, QQQ, QQQQ, QQQQQ", {
          locale: locale
        });
        assert(result === "trimestrul 2, T2, al doilea trimestru, 2");
      });

      it("stand-alone quarter", function() {
        var result = format(date, "'trimestrul' qo, qqq, qqqq, qqqqq", {
          locale: locale
        });
        assert(result === "trimestrul 2, T2, al doilea trimestru, 2");
      });
    });

    describe("month", function() {
      it("formatting month", function() {
        var result = format(date, "do MMMM", { locale: locale });
        assert(result === "5 aprilie");
      });

      it("stand-alone month", function() {
        var result = format(date, "'luna' Lo, LLL, LLLL, LLLLL", {
          locale: locale
        });
        assert(result === "luna 4, apr, aprilie, A");
      });
    });

    describe("week", function() {
      it("ordinal local week of year", function() {
        var date = new Date(1986, 3 /* Apr */, 6);
        var result = format(date, "'săptămână' wo", { locale: locale });
        assert(result === "săptămână 14");
      });

      it("ordinal ISO week of year", function() {
        var date = new Date(1986, 3 /* Apr */, 6);
        var result = format(date, "'săptămână ISO' Io", { locale: locale });
        assert(result === "săptămână ISO 14");
      });
    });

    describe("day", function() {
      it("ordinal date", function() {
        var result = format(date, "'astăzi este' do", { locale: locale });
        assert(result === "astăzi este 5");
      });

      it("ordinal day of year", function() {
        var result = format(date, "'ziua' Do 'a anului'", { locale: locale });
        assert(result === "ziua 95 a anului");
      });
    });

    describe("week day", function() {
      it("day of week", function() {
        var result = format(date, "E, EEEE, EEEEE, EEEEEE", { locale: locale });
        assert(result === "sâm, sâmbătă, s, sâ");
      });

      it("ordinal day of week", function() {
        var result = format(date, "'ziua' eo 'din săptămână'", {
          locale: locale
        });
        assert(result === "ziua 6 din săptămână");
      });
    });

    describe("day period and hour", function() {
      it("ordinal hour", function() {
        var result = format(date, "'ora' ho", { locale: locale });
        assert(result === "ora 10");
      });

      it("AM, PM", function() {
        var result = format(date, "h a, h aaaa, haaaaa", { locale: locale });
        assert(result === "10 AM, 10 a.m., 10a");
      });

      it("AM, PM, noon, midnight", function() {
        var result = format(
          new Date(1986, 3 /* Apr */, 6, 0),
          "b, bbbb, bbbbb",
          { locale: locale }
        );
        assert(result === "miezul nopții, miezul nopții, mn");
      });

      it("flexible day periods", function() {
        it("works as expected", function() {
          var result = format(date, "h B", { locale: locale });
          assert(result === "10 de la mañana");
        });
      });
    });

    it("ordinal minute", function() {
      var result = format(date, "'minutul' mo", { locale: locale });
      assert(result === "minutul 32");
    });

    it("ordinal second", function() {
      var result = format(date, "'secunda' so", { locale: locale });
      assert(result === "secunda 0");
    });

    describe("long format", function() {
      it("short date", function() {
        var result = format(date, "P", { locale: locale });
        assert(result === "05/04/1986");
      });

      it("medium date", function() {
        var result = format(date, "PP", { locale: locale });
        assert(result === "5 apr 1986");
      });

      it("long date", function() {
        var result = format(date, "PPP", { locale: locale });
        assert(result === "5 aprilie 1986");
      });

      it("full date", function() {
        var result = format(date, "PPPP", { locale: locale });
        assert(result === "sâmbătă, 5 aprilie 1986");
      });

      it("short time", function() {
        var result = format(date, "p", { locale: locale });
        assert(result === "10:32");
      });

      it("medium time", function() {
        var result = format(date, "pp", { locale: locale });
        assert(result === "10:32:00");
      });

      it("short date + time", function() {
        var result = format(date, "Pp", { locale: locale });
        assert(result === "05/04/1986, 10:32");
      });

      it("medium date + time", function() {
        var result = format(date, "PPpp", { locale: locale });
        assert(result === "5 apr 1986, 10:32:00");
      });

      it("long date + time", function() {
        var result = format(date, "PPPp", { locale: locale });
        assert(result === "5 aprilie 1986 la 10:32");
      });

      it("full date + time", function() {
        var result = format(date, "PPPPp", { locale: locale });
        assert(result === "sâmbătă, 5 aprilie 1986 la 10:32");
      });
    });
  });

  context("with `formatDistance`", function() {
    it("works as expected", function() {
      var result = formatDistance(
        new Date(1986, 3, 4, 10, 32, 25),
        new Date(1986, 3, 4, 10, 32, 0),
        { locale: locale, includeSeconds: true }
      );
      assert(result === "jumătate de minut");
    });

    context("when `addSuffix` option is true", function() {
      it("adds a future suffix", function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 7),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, includeSeconds: true, addSuffix: true }
        );
        assert(result === "în mai puțin de 10 secunde");
      });

      it("adds a past suffix", function() {
        var result = formatDistance(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        );
        assert(result === "circa 1 oră în urmă");
      });
    });
  });

  context("with `formatDistanceStrict`", function() {
    it("works as expected", function() {
      var result = formatDistanceStrict(
        new Date(1986, 3, 4, 10, 32, 0),
        new Date(1986, 3, 4, 12, 32, 0),
        { locale: locale, unit: "minute" }
      );
      assert(result === "120 minute");
    });

    describe("when `addSuffix` option is true", function() {
      it("adds a future suffix", function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 25),
          new Date(1986, 3, 4, 10, 32, 0),
          { locale: locale, addSuffix: true }
        );
        assert(result === "în 25 secunde");
      });

      it("adds a past suffix", function() {
        var result = formatDistanceStrict(
          new Date(1986, 3, 4, 10, 32, 0),
          new Date(1986, 3, 4, 11, 32, 0),
          { locale: locale, addSuffix: true }
        );
        assert(result === "1 oră în urmă");
      });
    });
  });

  context("with `formatRelative`", function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);

    it("last week", function() {
      var result = formatRelative(new Date(1986, 3 /* Apr */, 1), baseDate, {
        locale: locale
      });
      assert(result === "marți trecută la 00:00");
    });

    it("yesterday", function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 3, 22, 22),
        baseDate,
        { locale: locale }
      );
      assert(result === "ieri la 22:22");
    });

    it("today", function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 4, 16, 50),
        baseDate,
        { locale: locale }
      );
      assert(result === "astăzi la 16:50");
    });

    it("tomorrow", function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 5, 7, 30),
        baseDate,
        { locale: locale }
      );
      assert(result === "mâine la 07:30");
    });

    it("next week", function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 6, 12, 0),
        baseDate,
        { locale: locale }
      );
      assert(result === "duminică viitoare la 12:00");
    });

    it("after the next week", function() {
      var result = formatRelative(
        new Date(1986, 3 /* Apr */, 11, 16, 50),
        baseDate,
        { locale: locale }
      );
      assert(result === "11/04/1986");
    });
  });

  context("with `parse`", function() {
    var baseDate = new Date(1986, 3 /* Apr */, 4, 10, 32, 0, 900);

    describe("era", function() {
      it("abbreviated", function() {
        var result = parse("10000 Î.d.C.", "yyyyy G", baseDate, {
          locale: locale
        });
        assert.deepEqual(result, new Date(-9999, 0 /* Jan */, 1));
      });

      it("wide", function() {
        var result = parse("2018 După Cristos", "yyyy GGGG", baseDate, {
          locale: locale
        });
        assert.deepEqual(result, new Date(2018, 0 /* Jan */, 1));
      });

      it("narrow", function() {
        var result = parse("44 î", "y GGGGG", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(-43, 0 /* Jan */, 1));
      });
    });

    it("ordinal year", function() {
      var result = parse("2017", "yo", baseDate, { locale: locale });
      assert.deepEqual(result, new Date(2017, 0 /* Jan */, 1));
    });

    describe("quarter", function() {
      it("ordinal", function() {
        var result = parse("1", "Qo", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1));
      });

      it("abbreviated", function() {
        var result = parse("T3", "QQQ", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 6 /* Jul */, 1));
      });

      it("wide", function() {
        var result = parse("trimestrul 4", "QQQQ", baseDate, {
          locale: locale
        });
        assert.deepEqual(result, new Date(1986, 9 /* Oct */, 1));
      });

      it("narrow", function() {
        var result = parse("1", "QQQQQ", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1));
      });
    });

    describe("month", function() {
      it("ordinal", function() {
        var result = parse("6", "Mo", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 5 /* Jun */, 1));
      });

      it("abbreviated", function() {
        var result = parse("noi", "MMM", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 10 /* Nov */, 1));
      });

      it("wide", function() {
        var result = parse("februarie", "MMMM", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 1 /* Feb */, 1));
      });

      it("narrow", function() {
        var result = parse("I", "MMMMM", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 0 /* Jan */, 1));
      });
    });

    it("ordinal week of year", function() {
      var result = parse("49", "wo", baseDate, { locale: locale });
      assert.deepEqual(result, new Date(1986, 10 /* Nov */, 31));
    });

    it("ordinal day of month", function() {
      var result = parse("28", "do", baseDate, { locale: locale });
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 28));
    });

    it("ordinal day of year", function() {
      var result = parse("200", "Do", baseDate, { locale: locale });
      assert.deepEqual(result, new Date(1986, 6 /* Jul */, 19));
    });

    describe("day of week", function() {
      it("abbreviated", function() {
        var result = parse("lun", "E", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 2 /* Mar */, 31));
      });

      it("wide", function() {
        var result = parse("marţi", "EEEE", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1));
      });

      it("narrow", function() {
        var result = parse("m", "EEEEE", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 1));
      });

      it("short", function() {
        var result = parse("j", "EEEEEE", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 3));
      });
    });

    it("ordinal local day of week", function() {
      var result = parse(
        "ziua 2 din săptămână",
        "'ziua' eo 'din săptămână'",
        baseDate,
        { locale: locale }
      );
      assert.deepEqual(result, new Date(1986, 3 /* Mar */, 1));
    });

    describe("AM, PM", function() {
      it("abbreviated", function() {
        var result = parse("5 AM", "h a", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 5));
      });

      it("wide", function() {
        var result = parse("5 p.m.", "h aaaa", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17));
      });

      it("narrow", function() {
        var result = parse("11 a", "h aaaaa", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 11));
      });
    });

    describe("AM, PM, noon, midnight", function() {
      it("abbreviated", function() {
        var result = parse("a", "b", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4));
      });

      it("wide", function() {
        var result = parse("miezul nopții", "bbbb", baseDate, {
          locale: locale
        });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
      });

      it("narrow", function() {
        var result = parse("mn", "bbbbb", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 0));
      });
    });

    describe("flexible day period", function() {
      it("abbreviated", function() {
        var result = parse("2 noaptea", "h B", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 2));
      });

      it("wide", function() {
        var result = parse("12 după-amiaza", "h BBBB", baseDate, {
          locale: locale
        });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 12));
      });

      it("narrow", function() {
        var result = parse("5 seara", "h BBBBB", baseDate, { locale: locale });
        assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 17));
      });
    });

    it("ordinal time", function() {
      var dateString = "ora 1, minutul 2, secunda 3";
      var formatString = "'ora' ho, 'minutul' mo, 'secunda' so";
      var result = parse(dateString, formatString, baseDate, {
        locale: locale
      });
      assert.deepEqual(result, new Date(1986, 3 /* Apr */, 4, 1, 2, 3));
    });
  });
});
