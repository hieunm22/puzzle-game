import { WIDTH, HEIGHT } from "./constants"

const moveActions = [
  index => index - WIDTH,
  index => index + 1,
  index => index + WIDTH,
  index => index - 1
]

export function shuffle() {
  const matrixArea = WIDTH * HEIGHT
  const array = Array.from({ length: matrixArea + 1 }).map(
    (_, idx) => (idx + 1) % (matrixArea + 1)
  )
  array[WIDTH * HEIGHT] = array[WIDTH * HEIGHT - WIDTH]
  array[WIDTH * HEIGHT - WIDTH] = 0
  let zeroIndex = WIDTH * HEIGHT - WIDTH
  for (let i = 0; i < 10 * 500; i++) {
    const visibleMove = getAvailableMoves(zeroIndex, WIDTH)
    const directionIndex = Math.floor(
      Math.random(visibleMove.length) * visibleMove.length
    )
    const directionValue = visibleMove[directionIndex]
    let oldZeroIndex = zeroIndex

    zeroIndex = moveActions[directionValue](oldZeroIndex)

    array[oldZeroIndex] = array[zeroIndex]
    array[zeroIndex] = 0
  }
  // move empty tile to left edge
  while (zeroIndex % WIDTH !== 0) {
    array[zeroIndex] = array[zeroIndex - 1]
    array[zeroIndex - 1] = 0
    zeroIndex = zeroIndex - 1
  }
  // move empty tile to bottom edge
  while (zeroIndex < WIDTH * HEIGHT - WIDTH) {
    array[zeroIndex] = array[zeroIndex + WIDTH]
    array[zeroIndex + WIDTH] = 0
    zeroIndex = zeroIndex + WIDTH
  }
  array[WIDTH * HEIGHT - WIDTH] = array[WIDTH * HEIGHT]
  array[WIDTH * HEIGHT] = 0

  return array
}

function getAvailableMoves(index) {
  const availableMoves = [] // 0 = up, 1 = right, 2 = down, 3 = left
  if (index >= WIDTH) {
    availableMoves.push(0)
  } // up
  if (index % WIDTH < WIDTH - 1) {
    availableMoves.push(1)
  } // right
  if (index < WIDTH * HEIGHT - WIDTH) {
    availableMoves.push(2)
  } // down
  if (index % WIDTH !== 0) {
    availableMoves.push(3)
  } // left
  return availableMoves
}

export function moveTile(array, index) {
  let moveDirection = null // 0 top, 1 right, 2 bottom, 3 left
  // const cloneGameMatrix = JSON.parse(JSON.stringify(array))
  const cloneGameMatrix = [...array]

  // special case
  if (
    index === WIDTH * HEIGHT + 1 &&
    cloneGameMatrix[WIDTH * HEIGHT - WIDTH + 1] === 0
  ) {
    cloneGameMatrix[WIDTH * HEIGHT - WIDTH + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = -1
  }
  if (
    index === WIDTH * HEIGHT - WIDTH + 1 &&
    cloneGameMatrix[WIDTH * HEIGHT + 1] === 0
  ) {
    cloneGameMatrix[WIDTH * HEIGHT + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = -2
  }

  // bottom
  if (index >= 0 && cloneGameMatrix[index + WIDTH] === 0) {
    cloneGameMatrix[index + WIDTH] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 2
  }
  // top
  else if (cloneGameMatrix[index - WIDTH] === 0) {
    cloneGameMatrix[index - WIDTH] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 0
  }
  // right
  else if (index % WIDTH < WIDTH - 1 && cloneGameMatrix[index + 1] === 0) {
    cloneGameMatrix[index + 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 1
  }
  // left
  else if (index % WIDTH !== 0 && cloneGameMatrix[index - 1] === 0) {
    cloneGameMatrix[index - 1] = cloneGameMatrix[index]
    cloneGameMatrix[index] = 0
    moveDirection = 3
  }
  return {
    cloneGameMatrix,
    moveDirection
  }
}
