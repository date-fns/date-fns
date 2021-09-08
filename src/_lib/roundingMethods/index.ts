import type { RoundingMethod } from '../../types'

type RoundingFn = typeof Math.round

type RoundingFnsMap = { [method in RoundingMethod]: RoundingFn }

const RoundingMap: RoundingFnsMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: (value: number) => (value < 0 ? Math.ceil(value) : Math.floor(value)), // Math.trunc is not supported by IE
}

export function getRoundingMethod(method: RoundingMethod) {
  return RoundingMap[method]
}

export const defaultRoundingMethod: RoundingMethod = 'trunc'
