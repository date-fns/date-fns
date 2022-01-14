import assign from '../assign/index'

export default function cloneObject<T>(object: T): T {
  return assign({}, object)
}
