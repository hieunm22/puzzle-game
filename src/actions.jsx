export const newGame = (_, level) => ({
  status: 1,
  level
})

export const setImage = (_, imageUrl) => ({
  imageUrl
})

export const selectLevel = _ => ({
  status: 0
})

export const setMatrixAction = (_, gameMatrix) => ({
  gameMatrix
})

export const setMoveCountAction = (_, moveCount) => ({
  moveCount
})

export const moveAction = (
  _,
  gameMatrix,
  moveCount,
  clickedIndex,
  moveDirection
) => ({
  gameMatrix,
  moveCount,
  clickedIndex,
  moveDirection
})
