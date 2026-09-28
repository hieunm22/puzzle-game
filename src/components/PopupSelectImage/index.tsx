import { BACK_GROUND_IMAGES_PORTRAIT } from "imgs/background"
import ModalPopup from "components/ModalPopup"
import { ImageOption } from "./components"
import "./PopupSelectImage.scss"

const PopupSelectImage = () => (
	<ModalPopup triggerLabel="Select image">
		{close => (
			<div className="popup-select-image">
				{BACK_GROUND_IMAGES_PORTRAIT.map(image => (
					<ImageOption key={image} image={image} close={close} />
				))}
			</div>
		)}
	</ModalPopup>
)

export default PopupSelectImage
