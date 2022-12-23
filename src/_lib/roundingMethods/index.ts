import type { RoundingFn, RoundingMethod } from '../../types'

type RoundingFnsMap = { [method in RoundingMethod]: RoundingFn }

const roundingMap: RoundingFnsMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: (value: number) => (value < 0 ? Math.ceil(value) : Math.floor(value)), // Math.trunc is not supported by IE
}

const defaultRoundingMethod: RoundingMethod = 'trunc'

export function getRoundingMethod(
  method: RoundingMethod | RoundingFn | undefined
) {
  if (!method) {
    return roundingMap[defaultRoundingMethod]
  }
  return typeof method === 'function' ? method : roundingMap[method]
}
