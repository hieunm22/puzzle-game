export function shuffle(array) {
  let currentIndex = array.length, temporaryValue, randomIndex

  // While there remain elements to shuffle...
  while (currentIndex !== 0) {
    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex)
    currentIndex -= 1

    // And swap it with the current element.
    temporaryValue = array[currentIndex]
    array[currentIndex] = array[randomIndex]
    array[randomIndex] = temporaryValue
  }

  return array
}

export function moveTile(array, index, level) {
  const cloneGameMatrix = JSON.parse(JSON.stringify(array))
  if (cloneGameMatrix[index + level] === 0) {
    cloneGameMatrix[index + level] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
  }
  else if (cloneGameMatrix[index - level] === 0) {
    cloneGameMatrix[index - level] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
  }
  else if (cloneGameMatrix[index + 1] === 0 && ((index + 1) % level !== 0)) {
    cloneGameMatrix[index + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
  }
  else if (cloneGameMatrix[index - 1] === 0 && (index % level !== 0)) {
    cloneGameMatrix[index - 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
  }
  return cloneGameMatrix
}
