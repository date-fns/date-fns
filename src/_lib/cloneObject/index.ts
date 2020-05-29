import assign from '../assign/index'

export default function cloneObject(dirtyObject) {
  return assign({}, dirtyObject)
}
