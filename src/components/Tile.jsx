import React from 'react'
import { connect } from "redux-zero/react"
import classNames from 'classnames/bind'
import {
  setMatrixAction,
  moveAction
} from '../actions'
import { MOVE_DIRECTION } from '../common/constants'
import { moveTile } from '../common/helper'

const onTileClick = (gameMatrix, index, level, moveCount, moveAction) => e => {
  const result = moveTile(gameMatrix, index, level)
  if (result.cloneGameMatrix.toString() !== gameMatrix.toString()) {
    moveAction(result.cloneGameMatrix, moveCount + 1, index, result.moveDirection)
  }
}

const Tile = ({ index, level, gameMatrix, clickedIndex, moveDirection, moveCount, moveAction }) => {
  const element = gameMatrix[index]
  const animationCondition = 
        moveDirection === 0 ? clickedIndex === index + level  // top
      : moveDirection === 1 ? clickedIndex === index - 1      // right
      : moveDirection === 2 ? clickedIndex === index - level  // bottom
      : moveDirection === 3 ? clickedIndex === index + 1      // left
      : false

  const childClass = classNames(
    { 'center-content tile-container': true },
    { 'no-content': element === 0 },
    { [`has-content content-${element}`]: element !== 0 },
    moveDirection >= 0 && { [`move-${MOVE_DIRECTION[moveDirection]}-${level}`]: animationCondition }
    // moveDirection >= 0 && { [`move-${MOVE_DIRECTION[moveDirection]}-${level}`]: clickedIndex === index - 1 }
    // { 'yellow': element === 0 },
  )
  return (
    <div
      className={`inline content__tile content__tile_${level}`}
      onClick={onTileClick(gameMatrix, index, level, moveCount, moveAction)}
    >
      <div className={childClass} />
    </div>
  )
}

const actions = {
  setMatrixAction,
  moveAction
}

const mapToProps = ({
  level,
  gameMatrix,
  clickedIndex,
  moveDirection,
  moveCount
}) => ({
  level,
  gameMatrix,
  clickedIndex,
  moveDirection,
  moveCount
})

const connected = connect(mapToProps, actions)

export default connected(Tile)
