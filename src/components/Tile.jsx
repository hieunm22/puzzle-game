import React from "react"
import { connect } from "redux-zero/react"
import classNames from "classnames/bind"
import { setMatrixAction, moveAction } from "../actions"
import { moveTile } from "../common/helper"
import styled from "styled-components"
import { WIDTH, HEIGHT } from "../common/constants"

const rootsWidth = 240 // #root element's width

const onTileClick = (gameMatrix, index, moveCount, moveAction) => e => {
  const result = moveTile(gameMatrix, index)
  if (result.cloneGameMatrix.toString() !== gameMatrix.toString()) {
    moveAction(
      result.cloneGameMatrix,
      moveCount + 1,
      index,
      result.moveDirection
    )
  }
}

const setBackgroundPosition = props => {
  const { index } = props
  const width = window.innerWidth >= rootsWidth ? rootsWidth : window.innerWidth
  const x = (index - 1) % WIDTH
  const y = Math.floor((index - 1) / WIDTH)
  const step = width / WIDTH // HEIGHT???
  const bgx = x === 0 ? "0" : `-${step * x}px`
  const bgy = y === 0 ? "0" : `-${step * y}px`
  return `${bgx} ${bgy}`
}

const TileWithImage = styled("div")(props => ({
  cursor: "pointer",
  backgroundImage: `url(${require(`../imgs/${props.imageUrl}`).default})`,
  backgroundSize:
    window.innerWidth >= rootsWidth
      ? rootsWidth + "px"
      : `${window.innerWidth}px`,
  backgroundPosition: setBackgroundPosition(props),
  width: `calc(100% / ${WIDTH} - 2px)`,
  height:
    window.innerWidth >= rootsWidth
      ? `${rootsWidth / WIDTH}px`
      : `${window.innerWidth / WIDTH}px`
}))

const TileEmpty = styled("div")(_ => ({
  cursor: "default",
  width: `calc(100% / ${WIDTH} - 2px)`,
  height:
    window.innerWidth >= rootsWidth
      ? `${rootsWidth / WIDTH}px`
      : `${window.innerWidth / WIDTH}px`
}))

const Tile = props => {
  const {
    index,
    gameMatrix,
    clickedIndex,
    moveDirection,
    moveCount,
    moveAction
  } = props
  const element = gameMatrix[index]
  const matrixArea = WIDTH * HEIGHT

  const mainClass = classNames(
    { ["inline tile__container"]: true },
    // { [`inline tile__container content-${element}`]: true },
    {
      ["move-top"]:
        (moveDirection === 0 && clickedIndex === index + WIDTH) ||
        (moveDirection === -1 && index === matrixArea + 1)
    },
    { ["move-right"]: moveDirection === 1 && clickedIndex === index - 1 },
    {
      ["move-bottom"]:
        (moveDirection === 2 && clickedIndex === index - WIDTH) ||
        (moveDirection === -2 && index === WIDTH * HEIGHT - WIDTH + 1)
    },
    { ["move-left"]: moveDirection === 3 && clickedIndex === index + 1 }
  )
  return element !== 0 ? (
    <>
      <TileWithImage
        className={mainClass}
        index={element}
        imageUrl={props.imageUrl}
        onClick={onTileClick(gameMatrix, index, moveCount, moveAction)}
      />
    </>
  ) : (
    <>
      <TileEmpty className={mainClass} />
    </>
  )
}

const actions = {
  setMatrixAction,
  moveAction
}

const mapToProps = ({
  gameMatrix,
  imageUrl,
  clickedIndex,
  moveDirection,
  moveCount
}) => ({
  gameMatrix,
  imageUrl,
  clickedIndex,
  moveDirection,
  moveCount
})

const connected = connect(mapToProps, actions)

export default connected(Tile)
