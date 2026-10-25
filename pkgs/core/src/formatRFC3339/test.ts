import { tz } from "@date-fns/tz";
import { describe, expect, it, vi } from "vitest";
import { generateOffset } from "../_lib/test/index.ts";
import { formatRFC3339 } from "./index.ts";

describe("formatRFC3339", () => {
	it("formats RFC-3339 date string", () => {
		const date = new Date(2019, 2 /* Mar */, 3, 19, 0, 52, 123);
		expect(formatRFC3339(date)).toBe(`2019-03-03T19:00:52${generateOffset(date)}`);

		const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");

		getTimezoneOffsetStub.mockReturnValue(0);
		expect(formatRFC3339(date)).toBe("2019-03-03T19:00:52Z");

		getTimezoneOffsetStub.mockReturnValue(480);
		expect(formatRFC3339(date)).toBe("2019-03-03T19:00:52-08:00");

		getTimezoneOffsetStub.mockRestore();
	});

	it("accepts a timestamp", () => {
		const date = new Date(2019, 9 /* Oct */, 4, 12, 30, 13, 456);
		const time = date.getTime();
		expect(formatRFC3339(time)).toBe(`2019-10-04T12:30:13${generateOffset(date)}`);
	});

	it("allows to specify digits of second fractions", () => {
		const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 789);
		expect(formatRFC3339(date, { fractionDigits: 3 })).toBe(`2019-12-11T01:00:00.789${generateOffset(date)}`);
	});

	it("works when ms < 100", () => {
		const date = new Date(2019, 11 /* Dec */, 11, 1, 0, 0, 12);
		expect(formatRFC3339(date, { fractionDigits: 2 })).toBe(`2019-12-11T01:00:00.01${generateOffset(date)}`);
	});

	it("throws RangeError if the time value is invalid", () => {
		expect(formatRFC3339.bind(null, new Date(NaN))).toThrow(RangeError);
	});

	describe("format: date-fullyear", () => {
		it("returns 4-digit year with leading zeros", () => {
			const date = new Date(999, 0 /* Jan */, 1);
			expect(formatRFC3339(date, { format: "date-fullyear" })).toBe("0999");
		});
	});

	describe("format: date-month", () => {
		it("returns month with leading zero", () => {
			const date = new Date(2019, 0 /* Jan */, 3);
			expect(formatRFC3339(date, { format: "date-month" })).toBe("01");
		});
	});

	describe("format: date-mday", () => {
		it("returns day with leading zero", () => {
			const date = new Date(2019, 2 /* Mar */, 5);
			expect(formatRFC3339(date, { format: "date-mday" })).toBe("05");
		});
	});

	describe("format: full-date", () => {
		it("returns the date in YYYY-MM-DD format", () => {
			const date = new Date(101, 2 /* Mar */, 3);
			expect(formatRFC3339(date, { format: "full-date" })).toBe("0101-03-03");
		});
	});

	describe("format: time-hour", () => {
		it("returns hour with leading zero", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 5, 0, 0);
			expect(formatRFC3339(date, { format: "time-hour" })).toBe("05");
		});
	});

	describe("format: time-minute", () => {
		it("returns minute with leading zero", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 5, 52);
			expect(formatRFC3339(date, { format: "time-minute" })).toBe("05");
		});
	});

	describe("format: time-second", () => {
		it("returns second with leading zero", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 5);
			expect(formatRFC3339(date, { format: "time-second" })).toBe("05");
		});
	});

	describe("format: time-secfrac", () => {
		const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52, 12);
		it("returns empty string when fractionDigits is 0", () => {
			expect(formatRFC3339(date, { format: "time-secfrac" })).toBe("");
		});

		it("returns .0 when fractionDigits is 1", () => {
			expect(formatRFC3339(date, { format: "time-secfrac", fractionDigits: 1 })).toBe(".0");
		});

		it("returns fraction with 2 digits", () => {
			expect(formatRFC3339(date, { format: "time-secfrac", fractionDigits: 2 })).toBe(".01");
		});

		it("returns fraction with 3 digits", () => {
			expect(formatRFC3339(date, { format: "time-secfrac", fractionDigits: 3 })).toBe(".012");
		});
	});

	describe("format: time-offset", () => {
		it("returns Z for UTC timezone", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(0);

			expect(formatRFC3339(date, { format: "time-offset" })).toBe("Z");

			getTimezoneOffsetStub.mockRestore();
		});

		it("returns offset with positive sign for negative offsets", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(-480); // UTC+08:00

			expect(formatRFC3339(date, { format: "time-offset" })).toBe("+08:00");

			getTimezoneOffsetStub.mockRestore();
		});

		it("returns offset with negative sign for positive offsets", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(480); // UTC-08:00

			expect(formatRFC3339(date, { format: "time-offset" })).toBe("-08:00");

			getTimezoneOffsetStub.mockRestore();
		});
	});

	describe("format: time-numoffset", () => {
		it("returns +00:00 for UTC timezone", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(0);

			expect(formatRFC3339(date, { format: "time-numoffset" })).toBe("+00:00");

			getTimezoneOffsetStub.mockRestore();
		});

		it("returns offset with minus sign for positive offsets", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(480); // UTC-08:00

			expect(formatRFC3339(date, { format: "time-numoffset" })).toBe("-08:00");

			getTimezoneOffsetStub.mockRestore();
		});

		it("returns offset with plus sign for negative offsets", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(-480); // UTC+08:00

			expect(formatRFC3339(date, { format: "time-numoffset" })).toBe("+08:00");

			getTimezoneOffsetStub.mockRestore();
		});
	});

	describe("format: partial-time", () => {
		const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52, 12);
		it("returns time without offset", () => {
			expect(formatRFC3339(date, { format: "partial-time" })).toBe("19:30:52");
		});

		it("returns time with 1 fraction digits", () => {
			expect(formatRFC3339(date, { format: "partial-time", fractionDigits: 1 })).toBe("19:30:52.0");
		});

		it("returns time with 2 fraction digits", () => {
			expect(formatRFC3339(date, { format: "partial-time", fractionDigits: 2 })).toBe("19:30:52.01");
		});

		it("returns time with 3 fraction digits", () => {
			expect(formatRFC3339(date, { format: "partial-time", fractionDigits: 3 })).toBe("19:30:52.012");
		});
	});

	describe("format: full-time", () => {
		it("returns time with timezone offset", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(0);

			expect(formatRFC3339(date, { format: "full-time" })).toBe("19:30:52Z");

			getTimezoneOffsetStub.mockRestore();
		});

		it("returns time with fraction digits and negative timezone offset", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52, 789);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(60);

			expect(formatRFC3339(date, { format: "full-time", fractionDigits: 3 })).toBe("19:30:52.789-01:00");

			getTimezoneOffsetStub.mockRestore();
		});

		it("returns time with positive timezone offset", () => {
			const date = new Date(2019, 2 /* Mar */, 3, 19, 30, 52);
			const getTimezoneOffsetStub = vi.spyOn(Date.prototype, "getTimezoneOffset");
			getTimezoneOffsetStub.mockReturnValue(-330); // UTC+05:30

			expect(formatRFC3339(date, { format: "full-time" })).toBe("19:30:52+05:30");

			getTimezoneOffsetStub.mockRestore();
		});
	});

	describe("context", () => {
		it("allows to specify the context", () => {
			const date = "2024-09-17T10:00:00Z";
			expect(
				formatRFC3339(date, {
					in: tz("Pacific/Midway"), // UTC-11:00
				}),
			).toBe("2024-09-16T23:00:00-11:00");
			expect(
				formatRFC3339(date, {
					in: tz("Pacific/Kiritimati"), // UTC+14:00
				}),
			).toBe("2024-09-18T00:00:00+14:00");
		});

		it("applies context with specific format", () => {
			const date = "2024-09-17T10:00:00Z";
			expect(
				formatRFC3339(date, {
					in: tz("Pacific/Midway"), // UTC-11:00
					format: "full-date",
				}),
			).toBe("2024-09-16");
		});

		it("applies context with fractionDigits", () => {
			const date = "2024-09-17T10:00:00.456Z";
			expect(
				formatRFC3339(date, {
					in: tz("Pacific/Kiritimati"), // UTC+14:00
					fractionDigits: 3,
				}),
			).toBe("2024-09-18T00:00:00.456+14:00");
		});
	});
});
