import { getImageUrl } from "imgs/background"
import { useAppDispatch } from "store"
import { setImage } from "store/slices/game"
import type { ImageOptionProps } from "./types"

export const ImageOption = ({ image, close }: ImageOptionProps) => {
	const dispatch = useAppDispatch()
	const src = getImageUrl(image)

	const onPick = () => {
		dispatch(setImage(image))
		close()
	}

	return (
		<img
			className="popup-select-image__option"
			src={src}
			width={300}
			height={500}
			onClick={onPick}
			alt={image}
			title={image}
		/>
	)
}
