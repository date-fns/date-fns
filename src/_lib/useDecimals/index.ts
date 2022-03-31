export interface DecimalsOptions {
  decimals?: boolean
  digits?: number
}

export function useDecimals(
  num: number,
  options?: DecimalsOptions
): {
  isDecimals: boolean
  num: number
} {
  //get whether you use decimals
  const isDecimals = !!(options && options?.decimals)
  //get whether you set digits number, default be 2
  let digits = options && options?.digits ? options.digits : 2
  const str = num.toString()
  if (str.includes('.')) {
    digits = Math.min(str.split('.')[1].length, digits)
  } else {
    digits = 0
  }
  if (isDecimals) {
    num = parseFloat(num.toFixed(digits))
  }
  return {
    isDecimals: isDecimals,
    num: num,
  }
}
