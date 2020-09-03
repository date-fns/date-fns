// This file is generated automatically by `scripts/build/fp.js`. Please, don't change it.

import fn from '../../addMinutes/index'
import convertToFP from '../_lib/convertToFP/index'

// @ts-expect-error ts-migrate(2554) FIXME: Expected 3 arguments, but got 2.
var addMinutes = convertToFP(fn, 2)

export default addMinutes
