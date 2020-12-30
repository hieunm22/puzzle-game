import React from 'react'
import { connect } from "redux-zero/react"
import classNames from 'classnames/bind'
import {
  setMatrixAction,
  moveAction
} from '../actions'
import { moveTile } from '../common/helper'

const onTileClick = (gameMatrix, index, level, moveCount, moveAction) => e => {
  const cloneGameMatrix = moveTile(gameMatrix, index, level)
  if (cloneGameMatrix.toString() !== gameMatrix.toString()) {
    moveAction(cloneGameMatrix, moveCount + 1)
  }
}

const Tile = ({ index, level, gameMatrix, moveCount, moveAction }) => {
  const element = gameMatrix[index]
  const childClass = classNames(
    { 'flex flex-wrap center-content tile-container': true },
    { 'no-content': element === 0 },
    { [`has-content content-${element}`]: element !== 0 },
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
  moveCount
}) => ({
  level,
  gameMatrix,
  moveCount
})

const connected = connect(mapToProps, actions)

export default connected(Tile)
