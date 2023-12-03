// This file is generated automatically by `scripts/build/fp.ts`. Please, don't change it.

import { getTime as fn } from "../../getTime/index.js";
import { convertToFP } from "../_lib/convertToFP/index.js";

export const getTime = convertToFP(fn, 1);
