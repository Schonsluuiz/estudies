function recursiveChunks(num) {
  if (num === 0) {
    return ''
  }

  if (num === 1) {
    return 'chunk'
  } else {
    return 'chunk-' + recursiveChunks(num - 1)
  }
}
