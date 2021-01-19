import React from 'react'
import { connect } from "redux-zero/react"
import classNames from 'classnames/bind'
import {
  setMatrixAction,
  moveAction
} from '../actions'
import { moveTile } from '../common/helper'
import styled from 'styled-components'

const rootsWidth = 420  // #root element's width

const onTileClick = (gameMatrix, index, level, moveCount, moveAction) => e => {
  const result = moveTile(gameMatrix, index, level)
  if (result.cloneGameMatrix.toString() !== gameMatrix.toString()) {
    moveAction(result.cloneGameMatrix, moveCount + 1, index, result.moveDirection)
  }
}

const setBackgroundPosition = props => {
  const { index, level } = props
  const width = window.innerWidth >= rootsWidth ? rootsWidth : window.innerWidth
  const x = (index - 1) % level
  const y = Math.floor((index - 1) / level)
  const step = width / level
  const bgx = x === 0 ? '0' : `-${step * x}px`
  const bgy = y === 0 ? '0' : `-${step * y}px`
  return `${bgx} ${bgy}`
}

const TileWithImage = styled('div')(props =>
  ({
    backgroundImage: `url(${require('../imgs/background1.jpg').default})`,
    backgroundSize: 
      window.innerWidth >= rootsWidth
        ? rootsWidth + 'px'
        : `${window.innerWidth}px`,
    backgroundPosition: setBackgroundPosition(props),
    cursor: 'pointer',
    width: `calc(100% / ${props.level} - 2px)`,
    height: 
      window.innerWidth >= rootsWidth
        ? `${rootsWidth / props.level}px`
        : `${window.innerWidth / props.level}px`,
  })
)

const TileEmpty = styled('div')(props =>
  ({
    width: `calc(100% / ${props.level} - 2px)`,
    height: 
      window.innerWidth >= rootsWidth 
        ? `${rootsWidth / props.level}px`
        : `${window.innerWidth / props.level}px`,
  })
)

const Tile = props => {
  const { 
    index,
    level,
    gameMatrix,
    clickedIndex,
    moveDirection,
    moveCount,
    moveAction
  } = props
  const element = gameMatrix[index]

  const mainClass = classNames(
    { [`inline tile__container content-${element}`]: true },
    { [`move-top-${level}`]: 
      (moveDirection === 0 && clickedIndex === index + level) 
      || (moveDirection === -1 && index === 0) },
    { [`move-right-${level}`]: moveDirection === 1 && clickedIndex === index - 1 },
    { [`move-bottom-${level}`]: 
      (moveDirection === 2 && clickedIndex === index - level)
      || (moveDirection === -2 && index === 1) },
    { [`move-left-${level}`]: moveDirection === 3 && clickedIndex === index + 1 },
  )
  return (
    element !== 0
      ? <>
          <TileWithImage
            className={mainClass}
            level={level}
            index={element}
            onClick={onTileClick(gameMatrix, index, level, moveCount, moveAction)}
          />
          {index === 0 && <br />}
        </>
      : <>
          <TileEmpty
            className={mainClass}
            level={level}
            index={element}
          />
          {index === 0 && <br />}
        </>
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
