export default function assign<T, U>(target: T, object: U): T & U {
  if (target == null) {
    throw new TypeError(
      'assign requires that input parameter not be null or undefined'
    )
  }

  for (const property in object) {
    if (Object.prototype.hasOwnProperty.call(object, property)) {
      ;(target as any)[property] = object[property]
    }
  }

  return target as T & U
}
