import type {
  FormatDistanceFn,
  FormatDistanceLocale,
  FormatDistanceFnOptions,
} from "../../../types.ts";

type FormatDistanceTokenValue = (
  count: number,
  options?: FormatDistanceFnOptions,
) => string;

const formatDistanceLocale: FormatDistanceLocale<FormatDistanceTokenValue> = {
  lessThanXSeconds: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count === 1
          ? "бер секундтан азрак вакыттан"
          : count + " секундтан азрак вакыттан";
      } else {
        return count === 1
          ? "бер секундтан азрак элек"
          : count + " секундтан азрак элек";
      }
    }
    return count === 1 ? "бер секундтан азрак" : count + " секундтан азрак";
  },

  xSeconds: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " секундтан";
      } else {
        return count + " секунд элек";
      }
    }
    return count + " секунд";
  },

  halfAMinute: (_count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "ярты минуттан";
      } else {
        return "ярты минут элек";
      }
    }
    return "ярты минут";
  },

  lessThanXMinutes: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " минуттан азрак вакыттан";
      } else {
        return count + " минуттан азрак элек";
      }
    }
    return count + " минуттан азрак";
  },

  xMinutes: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " минуттан";
      } else {
        return count + " минут элек";
      }
    }
    return count + " минут";
  },

  aboutXHours: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "якынча " + count + " сәгатьтән";
      } else {
        return "якынча " + count + " сәгать элек";
      }
    }
    return "якынча " + count + " сәгать";
  },

  xHours: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " сәгатьтән";
      } else {
        return count + " сәгать элек";
      }
    }
    return count + " сәгать";
  },

  xDays: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " көннән";
      } else {
        return count + " көн элек";
      }
    }
    return count + " көн";
  },

  aboutXWeeks: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "якынча " + count + " атнадан";
      } else {
        return "якынча " + count + " атна элек";
      }
    }
    return "якынча " + count + " атна";
  },

  xWeeks: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " атнадан";
      } else {
        return count + " атна элек";
      }
    }
    return count + " атна";
  },

  aboutXMonths: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "якынча " + count + " айдан";
      } else {
        return "якынча " + count + " ай элек";
      }
    }
    return "якынча " + count + " ай";
  },

  xMonths: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " айдан";
      } else {
        return count + " ай элек";
      }
    }
    return count + " ай";
  },

  aboutXYears: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "якынча " + count + " елдан";
      } else {
        return "якынча " + count + " ел элек";
      }
    }
    return "якынча " + count + " ел";
  },

  xYears: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " елдан";
      } else {
        return count + " ел элек";
      }
    }
    return count + " ел";
  },

  overXYears: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return count + " елдан артык вакыттан";
      } else {
        return count + " елдан артык элек";
      }
    }
    return count + " елдан артык";
  },

  almostXYears: (count: number, options?: FormatDistanceFnOptions) => {
    if (options?.addSuffix) {
      if (options.comparison && options.comparison > 0) {
        return "диярлек " + count + " елдан";
      } else {
        return "диярлек " + count + " ел элек";
      }
    }
    return "диярлек " + count + " ел";
  },
};

export const formatDistance: FormatDistanceFn = (token, count, options) => {
  return formatDistanceLocale[token](count, options);
};

