function stringy(size) {
  let string = '1'
  for (let i = 1; i < size; i++) {
    if (string[string.length - 1] === '0') {
      string += '1'
    } else if (string[string.length - 1] === '1') {
      string += '0'
    }
  }
  return string
}
