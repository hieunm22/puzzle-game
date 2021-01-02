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
  let moveDirection = null // 0 top, 1 right, 2 bottom, 3 left
  const cloneGameMatrix = JSON.parse(JSON.stringify(array))
  // bottom
  if (cloneGameMatrix[index + level] === 0) {
    cloneGameMatrix[index + level] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 2
  }
  // top
  else if (cloneGameMatrix[index - level] === 0) {
    cloneGameMatrix[index - level] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 0
  }
  // right
  else if (cloneGameMatrix[index + 1] === 0 && ((index + 1) % level !== 0)) {
    cloneGameMatrix[index + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 1
  }
  // left
  else if (cloneGameMatrix[index - 1] === 0 && (index % level !== 0)) {
    cloneGameMatrix[index - 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 3
  }
  return {
    cloneGameMatrix,
    moveDirection
  }
}
