import { format } from "date-fns";
import { enUS } from "date-fns/locale";

// A tiny consumer reaches hundreds of unused modules through these barrels.
// Based on the build reproduction in date-fns/date-fns#3806.
console.log(format(new Date(2021, 1, 3, 12, 34, 56), "P", { locale: enUS }));
