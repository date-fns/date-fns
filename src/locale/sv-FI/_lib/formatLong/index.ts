import { buildFormatLongFn } from "../../../_lib/buildFormatLongFn/index.ts";
import { formatLong as svFormatLong } from "../../../sv/_lib/formatLong/index.ts";
import type { FormatLong } from "../../../types.ts";

const dateFormats = {
	full: "EEEE d MMMM y",
	long: "d MMMM y",
	medium: "d MMM y",
	short: "d.M.y",
};

const timeFormats = {
	full: "'kl'. HH.mm.ss zzzz",
	long: "HH.mm.ss z",
	medium: "HH.mm.ss",
	short: "H.mm",
};

export const formatLong: FormatLong = {
	date: buildFormatLongFn({
		formats: dateFormats,
		defaultWidth: "full",
	}),

	time: buildFormatLongFn({
		formats: timeFormats,
		defaultWidth: "full",
	}),

	dateTime: svFormatLong.dateTime,
};
