const moveActions = [
  (index, level) => index - level,
  (index, _) => index + 1,
  (index, level) => index + level,
  (index, _) => index - 1,
]

export function shuffle(level) {
  const matrixArea = level * level
  const array = Array.from({ length: matrixArea + 1 }).map((_, idx) => (idx + 1) % (matrixArea + 1))
  array[level * level] = array[level * level - level]
  array[level * level - level] = 0
  let zeroIndex = level * level - level
  for (let i = 0; i < 10 * level * level; i++) {
    const visibleMove = getAvailableMoves(zeroIndex, level)
    const directionIndex = Math.floor(Math.random(visibleMove.length) * visibleMove.length)
    const directionValue = visibleMove[directionIndex]
    let oldZeroIndex = zeroIndex

    zeroIndex = moveActions[directionValue](oldZeroIndex, level)

    array[oldZeroIndex] = array[zeroIndex]
    array[zeroIndex] = 0
  }
  // move empty tile to left edge
  while (zeroIndex % level !== 0) {
    array[zeroIndex] = array[zeroIndex - 1]
    array[zeroIndex - 1] = 0
    zeroIndex -= 1
  }
  // move empty tile to bottom edge
  while (zeroIndex < level * level - level) {
    array[zeroIndex] = array[zeroIndex + level]
    array[zeroIndex + level] = 0
    zeroIndex += level
  }
  array[level * level - level] = array[level * level]
  array[level * level] = 0

  return array
}

function getAvailableMoves(index, level) {
  const availableMoves = [] // 0 = up, 1 = right, 2 = down, 3 = left
  if (index >= level) availableMoves.push(0)                // up
  if (index % level < level - 1) availableMoves.push(1)     // right
  if (index < level * level - level) availableMoves.push(2) // down
  if (index % level !== 0) availableMoves.push(3)           // left
  return availableMoves
}

export function moveTile(array, index, level) {
  let moveDirection = null // 0 top, 1 right, 2 bottom, 3 left
  // const cloneGameMatrix = JSON.parse(JSON.stringify(array))
  const cloneGameMatrix = [...array]

  // special case
  if (index === level * level + 1 && cloneGameMatrix[level * level - level + 1] === 0) {
    cloneGameMatrix[level * level - level + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = -1
  }
  if (index === level * level - level + 1 && cloneGameMatrix[level * level + 1] === 0) {
    cloneGameMatrix[level * level + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = -2
  }

  // bottom
  if (index >= 0 && cloneGameMatrix[index + level] === 0) {
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
  else if ((index % level < level - 1) && cloneGameMatrix[index + 1] === 0) {
    cloneGameMatrix[index + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 1
  }
  // left
  else if ((index % level !== 0) && cloneGameMatrix[index - 1] === 0) {
    cloneGameMatrix[index - 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 3
  }
  return {
    cloneGameMatrix,
    moveDirection
  }
}
