export default function cloneObject (dirtyObject) {
  dirtyObject = dirtyObject || {}
  var object = {}

  for (var property in dirtyObject) {
    if (dirtyObject.hasOwnProperty(property)) {
      object[property] = dirtyObject[property]
    }
  }

  return object
}
