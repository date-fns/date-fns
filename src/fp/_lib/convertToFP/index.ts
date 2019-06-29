export default function convertToFP(fn: Function, arity: number, a?: any[]) {
  a = a || []

  if (a.length >= arity) {
    return fn.apply(null, a.slice(0, arity).reverse())
  }

  return function() {
    var args = Array.prototype.slice.call(arguments)
    return convertToFP(fn, arity, (a as any[]).concat(args))
  }
}
