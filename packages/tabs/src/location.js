function setHashEmpty () {
  if (!window.history.pushState) {
    return
  }

  window.history.pushState('', document.title, window.location.pathname + window.location.search)
}

export function setHash (rawHash) {
  if (!rawHash) {
    return setHashEmpty()
  }

  const normalized = `#${rawHash}`

  if (normalized === window.location.hash) {
    return
  }

  window.location.hash = normalized
}
