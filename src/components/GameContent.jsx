import React, { useEffect } from 'react'
import { connect } from "redux-zero/react"
import { 
  moveAction,
  selectLevel
} from '../actions'
import { shuffle } from '../common/helper'
import Tile from './Tile'

const GameContent = ({ level, gameMatrix, moveCount, selectLevel, moveAction }) => {
  useEffect(() => {
    const matrixArea = level * level
    const defaultArray = Array.from({ length: matrixArea }).map((_, index) => (index + 1) % matrixArea)
    const shuffleArray = shuffle(defaultArray)
    moveAction(shuffleArray, 0)
  }, [level, moveAction])

  const restartGame = () => {
    const matrixArea = level * level
    const defaultArray = Array.from({ length: matrixArea }).map((_, index) => (index + 1) % matrixArea)
    const shuffleArray = shuffle(defaultArray)
    moveAction(shuffleArray, 0)
  }

  return (
    <>
      <div className="flex content__actions">
        <button onClick={selectLevel}>Select other level</button>
        <button onClick={restartGame}>Restart game</button>
      </div>
      <div className="content__grid-container">
        {gameMatrix.map((_, index) => <Tile index={index} key={index} />)}
      </div>
      <div className="move-count">Move count: {moveCount}</div>
    </>
  )
}

const actions = {
  moveAction,
  selectLevel
}

const mapToProps = ({
  level,
  gameMatrix,
  moveCount,
}) => ({
  level,
  gameMatrix,
  moveCount,
})

const connected = connect(mapToProps, actions)

export default connected(GameContent)
