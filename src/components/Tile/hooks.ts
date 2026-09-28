import { getImageUrl } from "imgs/background"
import { useAppDispatch, useAppSelector } from "store"
import { move } from "store/slices/game"
import type { CssVariables } from "common/types"
import { getMovePayload, getSlideDirection, getTileOffset } from "./common"

export const useTile = (index: number) => {
	const gameMatrix = useAppSelector(state => state.game.gameMatrix)
	const imageUrl = useAppSelector(state => state.game.imageUrl)
	const clickedIndex = useAppSelector(state => state.game.clickedIndex)
	const moveDirection = useAppSelector(state => state.game.moveDirection)
	const moveCount = useAppSelector(state => state.game.moveCount)
	const dispatch = useAppDispatch()

	const element = gameMatrix[index]
	const isEmpty = element === 0
	const slide = getSlideDirection(moveDirection, clickedIndex, index)
	const offset = getTileOffset(element)
	const imageSrc = getImageUrl(imageUrl)
	const style: CssVariables = {
		"--tile-image": `url(${imageSrc})`,
		"--tile-x": offset.x,
		"--tile-y": offset.y
	}

	const onClick = () => {
		const payload = getMovePayload(gameMatrix, index, moveCount)
		if (payload) {
			dispatch(move(payload))
		}
	}

	return { isEmpty, slide, style, onClick }
}
