export default function getGlobalLocale() {
  var globalScope = typeof global === undefined ? window : global

  return globalScope.globalLocale
}
