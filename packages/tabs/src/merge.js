const isObject = (obj) => obj && typeof obj === 'object'
export function deepmerge (target, source) {
  if (!isObject(source)) {
    return target
  }

  if (!isObject(target)) {
    return source
  }

  target = Object.assign({}, target)
  Object.keys(source).forEach(key => {
    const targetValue = target[key]
    const sourceValue = source[key]

    if (Array.isArray(targetValue) && Array.isArray(sourceValue)) {
      target[key] = targetValue.concat(sourceValue)
    } else if (isObject(targetValue) && isObject(sourceValue)) {
      target[key] = deepmerge(Object.assign({}, targetValue), sourceValue)
    } else {
      target[key] = sourceValue
    }
  })

  return target
}
