import { RoundingMethod } from '../../types'

const roundingMap = {
  ceil: Math.ceil,
  round: Math.round,
  floor: Math.floor,
  trunc: Math.trunc,
}

export default function getRoundingFn(
  method: RoundingMethod
): (input: number) => number {
  return roundingMap[method]
}
