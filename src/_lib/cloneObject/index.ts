import assign from '../assign/index'

export default function cloneObject(dirtyObject: any) {
  return assign({}, dirtyObject)
}
