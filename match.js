const match = (source, matcher) => {
  for (const element of source) {
    if (matcher(element)) {
      return true
    }
  }
  return false
}

module.exports = match