// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { getDate as fn } from "../../getDate/index.ts";
import { convertToFP } from "../_lib/convertToFP/index.ts";

export const getDate = convertToFP(fn, 1);
