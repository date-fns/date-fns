import { RoundingMethod } from '../../types'

export default function getRoundingFn(method: RoundingMethod) {
  return {
    ceil: Math.ceil,
    round: Math.round,
    floor: Math.floor,
  }[method]
}
