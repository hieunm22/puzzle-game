import React from 'react'
import '../style'
import Popup from 'reactjs-popup'
import { connect } from 'redux-zero/react'
import { ButtonShowsPopup } from './common/ButtonShowsPopup'

const ModalContent = imageUrl => close => {
  const src = require(`../imgs/${imageUrl}`).default
  return <div className="modal">
    <div className="content">
      <img
        className="center"
        src={src}
        width={300}
        height={500}
        alt="Result view"
      />
    </div>
    <div className="actions">
      <div className="content__actions-game text-center center" onClick={close}>
        Close
      </div>
    </div>
  </div>
}

const PopupResult = props => {
  return (
    <Popup
      trigger={ButtonShowsPopup("View Result")}
      position="top right"
      modal
    >
      {ModalContent(props.imageUrl)}
    </Popup>
  )
}

const mapToProps = ({
  imageUrl
}) => ({
  imageUrl
})

const connected = connect(mapToProps, null)

export default connected(PopupResult)