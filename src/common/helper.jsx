const moveActions = [
  (index, level) => index - level,
  (index, _) => index + 1,
  (index, level) => index + level,
  (index, _) => index - 1,
]

export function shuffle(level, array) {
  const cloneArray = [...array]
  
  let zeroIndex = level * level - 1
  for (let i = 0; i < 10 * level * level; i++) {
    const visibleMove = getAvailableMoves(zeroIndex, level)
    const directionIndex = Math.floor(Math.random(visibleMove.length) * visibleMove.length)
    const directionValue = visibleMove[directionIndex]
    let oldZeroIndex = zeroIndex

    zeroIndex = moveActions[directionValue](oldZeroIndex, level)

    cloneArray[oldZeroIndex] = cloneArray[zeroIndex]
    cloneArray[zeroIndex] = 0
  }
  // move empty tile to bottom
  while (zeroIndex < level * level - level) {
    cloneArray[zeroIndex] = cloneArray[zeroIndex + level]
    cloneArray[zeroIndex + level] = 0
    zeroIndex += level
  }
  // move empty tile to right edge
  while ((zeroIndex + 1) % level !== 0) {
    cloneArray[zeroIndex] = cloneArray[zeroIndex + 1]
    cloneArray[zeroIndex + 1] = 0
    zeroIndex += 1
  }

  return cloneArray
}

function getAvailableMoves(index, level) {
  const availableMoves = [] // 0 = up, 1 = right, 2 = down, 3 = left
  if (index >= level) availableMoves.push(0)                // up
  if ((index + 1) % level !== 0) availableMoves.push(1)     // right
  if (index < level * level - level) availableMoves.push(2) // down
  if (index % level !== 0) availableMoves.push(3)           // left
  return availableMoves
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
