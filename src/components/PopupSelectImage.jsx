import React from "react"
import "../style"
import Popup from "reactjs-popup"
import "reactjs-popup/dist/index.css"
import { BACK_GROUND_IMAGES_PORTRAIT } from "../imgs/background"
import { connect } from "redux-zero/react"
import { setImage } from "../actions"
import { ButtonShowsPopup } from "./common/ButtonShowsPopup"

const onSelectImage = (close, setImageCallback, img) => e => {
  setImageCallback(img)
  close()
}

const ModalContent = setImageCallback => close => {
  return (
    <div className="modal">
      <div className="content">
        {BACK_GROUND_IMAGES_PORTRAIT.map((ele, idx) => {
          const image = require(`../imgs/${ele}`).default
          return (
            <img
              className="image-to-select center"
              key={idx}
              src={image}
              width={300}
              height={500}
              onClick={onSelectImage(close, setImageCallback, ele)}
              alt={ele}
              title={ele}
            />
          )
        })}
      </div>
      <div className="content__actions-game text-center center" onClick={close}>
        Close
      </div>
    </div>
  )
}

const ImageListView = props => {
  return (
    <Popup
      trigger={ButtonShowsPopup("Select image")}
      position="top right"
      modal
    >
      {ModalContent(props.setImage)}
    </Popup>
  )
}

const actions = {
  setImage
}

const mapToProps = ({ imageUrl }) => ({
  imageUrl
})

const connected = connect(mapToProps, actions)

export default connected(ImageListView)
