import { getImageUrl } from "imgs/background"
import ModalPopup from "components/ModalPopup"
import { useAppSelector } from "store"
import "./PopupResult.scss"

const PopupResult = () => {
	const imageUrl = useAppSelector(state => state.game.imageUrl)
	const src = getImageUrl(imageUrl)

	return (
		<ModalPopup triggerLabel="View Result">
			{() => (
				<div className="popup-result">
					<img
						className="popup-result__image"
						src={src}
						width={300}
						height={500}
						alt="Result view"
					/>
				</div>
			)}
		</ModalPopup>
	)
}

export default PopupResult
