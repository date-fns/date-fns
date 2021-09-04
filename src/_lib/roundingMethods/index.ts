import type { RoundingMethod } from '../../types'

type RoundingFn = typeof Math.round

type RoundingFnsMap = { [method in RoundingMethod]: RoundingFn }

const RoundingMap: RoundingFnsMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: (value: number) => parseInt(value.toString()), // Math.trunc is not supported by IE
}

export function getRoundingMethod(method: RoundingMethod) {
  return RoundingMap[method]
}

export const defaultRoundingMethod = 'trunc'
