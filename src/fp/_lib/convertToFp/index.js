function convertToFp (fn, arity, a) {
  a = a || []

  if (a.length >= arity) {
    return fn.apply(null, a.slice(0, arity).reverse())
  }

  return function () {
    var args = Array.prototype.slice.call(arguments)
    return convertToFp(fn, arity, a.concat(args))
  }
}

module.exports = convertToFp
