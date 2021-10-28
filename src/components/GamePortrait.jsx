import React from "react"
import { connect } from "redux-zero/react"
import { newGame } from "../actions"
import ImageListView from "./PopupSelectImage"

const GameImage = ({ imageUrl, newGame }) => {
  const startGame = e => {
    newGame(imageUrl)
  }

  const imageSource = imageUrl && require(`../imgs/${imageUrl}`).default

  return (
    <>
      <div className="header__game-images">
        <ImageListView />
        {imageUrl && (
          <img
            className="center"
            src={imageSource}
            width={300}
            height={500}
            alt={imageUrl}
            title={imageUrl}
          />
        )}
      </div>
      <div className="header__submit">
        <button
          className="header__submit--button content__actions-game"
          onClick={startGame}
          disabled={!imageUrl}
        >
          <span className="icon-text" content="Start game" />
        </button>
      </div>
    </>
  )
}

const actions = {
  newGame
}

const mapToProps = ({ status, imageUrl }) => ({
  status,
  imageUrl
})

const connected = connect(mapToProps, actions)

export default connected(GameImage)
