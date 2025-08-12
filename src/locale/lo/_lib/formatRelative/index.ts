import type { FormatRelativeFn } from "../../../types.js";

const formatRelativeLocale = {
  lastWeek: "eeee'ທີ່ຜ່ານມາເວລາ' p",
  yesterday: "'ມື້ວານນີ້ເວລາ' p",
  today: "'ມື້ນີ້ເວລາ' p",
  tomorrow: "'ມື້ອື່ນເວລາ' p",
  nextWeek: "eeee 'ເວລາ' p",
  other: "P",
};

export const formatRelative: FormatRelativeFn = (
  token,
  _date,
  _baseDate,
  _options,
) => formatRelativeLocale[token];