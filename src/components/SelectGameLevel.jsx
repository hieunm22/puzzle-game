import React, { useState } from 'react'
import { connect } from "redux-zero/react"
import { GAME_LEVELS } from "./../common/constants"
import classNames from 'classnames/bind'
import { 
  newGame
} from '../actions'

const SelectGameLevel = ({ level, newGame }) => {
  const [selectedLevel, setSelectedLevel] = useState(level)

  const setLevel = level => e => {
    if (selectedLevel !== level) {
      setSelectedLevel(level)
    }
    else {
      startGame(level)
    }
  }

  const startGame = e => {
    newGame(selectedLevel)
  }

  return (
    <>
      <div className="header__select-game-level">Select game level</div>
      <div className="header__game-levels">
        {GAME_LEVELS.map((element, index) => {
          const classLevel = classNames(
            { 'header__level': true },
            { 'selected': index === selectedLevel - 3 }
          )
          return (
            <div 
              className={classLevel}
              key={index}
              onClick={setLevel(element.Size)}
            >
              {element.Size} * {element.Size}
              {index < GAME_LEVELS.length && <br />}
            </div>
          )
        })}
      </div>
      <div className="header__submit">
        <button
          className="header__submit--button"
          onClick={startGame}
          disabled={selectedLevel === null || selectedLevel < 3}
        >
          Start game
        </button>
      </div>
    </>
  )
}

const actions = {
  newGame
}

const mapToProps = ({
  status,
  level
}) => ({
  status,
  level
})

const connected = connect(mapToProps, actions)

export default connected(SelectGameLevel)
