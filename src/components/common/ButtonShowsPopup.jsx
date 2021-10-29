import React from "react"

const ButtonShowsPopup = btnText => () => {
  return (
    <div className="content__actions-game select-image text-center center">
      <span className="icon-text" content={btnText} />
    </div>
  )
}

export { ButtonShowsPopup }
