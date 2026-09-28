import type { ReactNode } from "react"
import Popup from "reactjs-popup"
import ActionButton from "components/ActionButton"
import type { CloseModal, ModalPopupProps } from "./types"
import "reactjs-popup/dist/index.css"
import "./ModalPopup.scss"

const ModalPopup = ({ triggerLabel, children }: ModalPopupProps) => {
	const renderContent = (close: CloseModal) => (
		<div className="modal-popup">
			<div className="modal-popup__body">{children(close)}</div>
			<ActionButton
				label="Close"
				className="modal-popup__close"
				onClick={close}
			/>
		</div>
	)
	// reactjs-popup takes a render function at runtime but types children as ReactNode
	const content = renderContent as unknown as ReactNode
	const trigger = (
		<ActionButton label={triggerLabel} className="modal-popup__trigger" />
	)

	return (
		<Popup
			className="modal-popup__popup"
			trigger={trigger}
			position="top right"
			modal
		>
			{content}
		</Popup>
	)
}

export default ModalPopup
