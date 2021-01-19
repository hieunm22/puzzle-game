import React, { useEffect } from 'react'
import { connect } from "redux-zero/react"
import { 
  moveAction,
  selectLevel
} from '../actions'
import { shuffle } from '../common/helper'
import Tile from './Tile'

const GameContent = ({ level, gameMatrix, moveCount, selectLevel, moveAction }) => {
  const restartGame = () => {
    const shuffleArray = shuffle(level)
    moveAction(shuffleArray, 0)
  }

  useEffect(restartGame, [level, moveAction])
  
  return (
    <>
      <div className="flex content__actions">
        <div className="content__actions-game flex other" onClick={selectLevel}>
          <i className="fas fa-arrow-left" />
          <span className="icon-text" content="Select other level" />
        </div>
        <div className="content__actions-game flex restart" onClick={restartGame}>
          <i className="fas fa-undo" />
          <span className="icon-text" content="Restart game" />
        </div>
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
